import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { amount } = req.body;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Support Dance Africa",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin}/donation-success`,
      cancel_url: `${req.headers.origin}/donation-cancel`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({ error: "Stripe session failed" });
  }
}
