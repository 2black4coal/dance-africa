import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { amount } = req.body;
  if (!amount || amount < 1) return res.status(400).json({ error: "Invalid amount" });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Support Dance Africa" },
            unit_amount: amount * 100, // in cents
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:5173/donation-success",
      cancel_url: "http://localhost:5173/donation-cancel",
    });
    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe session creation failed:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT || 4242, () =>
  console.log(`Stripe server running on http://localhost:${process.env.PORT || 4242}`)
);
