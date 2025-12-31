export const runtime = "nodejs18.x";

// Disable Vercel body parsing so Stripe can verify the signature
export const config = {
  api: {
    bodyParser: false,
  },
};

import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

// Helper to read raw body from Vercel request
async function buffer(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  const session = event.data.object;
  const email = session.customer_details?.email;
  const amount = session.amount_total / 100;

  if (event.type === "checkout.session.completed") {
    await resend.emails.send({
      from: "Dance Africa <supports@dance-africa.org>",
      to: email,
      subject: "Thank You for Supporting Dance Africa",
      html: `<p>Your donation of $${amount} was successful. Thank you!</p>`,
    });
  }

  if (event.type === "payment_intent.payment_failed") {
    await resend.emails.send({
      from: "Dance Africa <supports@danceafrica.org>",
      to: email,
      subject: "Your Donation Failed",
      html: `<p>Your donation attempt failed. Please try again.</p>`,
    });
  }

  return res.json({ received: true });
}
