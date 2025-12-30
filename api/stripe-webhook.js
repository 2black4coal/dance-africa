export const runtime = "nodejs18.x";

import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
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
      from: "Dance Africa <donations@danceafrica.org>",
      to: email,
      subject: "Thank You for Supporting Dance Africa",
      html: `<p>Your donation of $${amount} was successful. Thank you!</p>`,
    });
  }

  if (event.type === "payment_intent.payment_failed") {
    await resend.emails.send({
      from: "Dance Africa <donations@danceafrica.org>",
      to: email,
      subject: "Your Donation Failed",
      html: `<p>Your donation attempt failed. Please try again.</p>`,
    });
  }

  res.json({ received: true });
}
