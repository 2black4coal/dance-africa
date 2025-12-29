import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/* =========================================================
   STRIPE WEBHOOK — MUST COME BEFORE express.json()
   ========================================================= */
app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error("❌ Webhook verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("✅ PAYMENT CONFIRMED:", session.id);
    }

    res.json({ received: true });
  }
);

/* =========================================================
   NORMAL MIDDLEWARE
   ========================================================= */
app.use(cors());
app.use(express.json());

/* =========================================================
   STRIPE CHECKOUT SESSION
   ========================================================= */
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount < 50) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      billing_address_collection: "auto",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Dance Africa Donation",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:5173/support?success=true",
      cancel_url: "http://localhost:5173/support?canceled=true",
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("❌ Stripe session error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

/* =========================================================
   START SERVER
   ========================================================= */
app.listen(4242, () => {
  console.log("🚀 Stripe server running on http://localhost:4242");
});
