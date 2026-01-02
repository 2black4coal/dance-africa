import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Vercel body safety
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const { amount, currency = "usd" } = body;
console.log("AMOUNT FROM FRONTEND:", amount);

    // Amount MUST be dollars (e.g. 25 for $25)
    const dollars = Number(amount);

    if (!Number.isFinite(dollars) || dollars <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    // Convert dollars → cents (ONLY HERE)
    const unitAmount = Math.round(dollars * 100);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",

      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: "Support Dance-Africa · Light-Up-Africa Initiative 💡",
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],

      success_url: `${req.headers.origin}/donation-success`,
      cancel_url: `${req.headers.origin}/donation-cancel`,
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return res.status(500).json({ error: error.message });
  }
}
