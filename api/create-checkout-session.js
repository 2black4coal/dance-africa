import Stripe from "stripe"; 

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { amount, currency = "usd" } = req.body;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",

      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: "Support Dance Africa 🌍 Light Up Africa Initiative 💡 ",
            },
            unit_amount: amount * 100, // convert dollars → cents
          },
          quantity: 1,
        },
      ],

      success_url: `${req.headers.origin}/donation-success`,
      cancel_url: `${req.headers.origin}/donation-cancel`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return res.status(500).json({ error: err.message });
  }
}
