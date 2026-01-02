export const runtime = "nodejs18.x";

import Stripe from "stripe";
import { Resend } from "resend";

export const config = {
  api: {
    bodyParser: false, // REQUIRED for Stripe
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    const rawBody = await getRawBody(req);
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature failed:", err.message);
    return res.status(400).send(`Webhook Error`);
  }

  // ✅ PAYMENT SUCCESS
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const email = session.customer_details?.email;

    if (email) {
    try {
      await resend.emails.send({
        from: "Dance Africa <support@dance-africa.org>",
        to: session.customer_details.email,
        subject: "Thank you for Supporting Dance Africa • Light Up Africa 💡",
        html: `
  <div style="font-family: Arial, sans-serif; padding: 20px;">

    <!-- Light Up Africa Banner -->
    <div style="text-align: center; margin-bottom: 20px;">
      <img 
        src="https://www.dance-africa.org/light-up-africa-banner.png" 
        alt="Light Up Africa" 
        style="max-width: 100%; border-radius: 8px;"
      />
    </div>

    <h2 style="color: #333;">Thank you for supporting Dance Africa</h2>

    <!-- Donor Name (if collected) -->
    ${
      session.customer_details.name
        ? `<p><strong>Dear ${session.customer_details.name},</strong></p>`
        : `<p><strong>Dear Supporter,</strong></p>`
    }

    <p>Your contribution helps us preserve, celebrate, and elevate African culture across the world.</p>

    <p><strong>Project:</strong> Light Up Africa 💡</p>

    <p><strong>Donation Details:</strong></p>
    <ul>
      <li><strong>Amount:</strong> ${session.amount_total / 100} ${session.currency.toUpperCase()}</li>
      <li><strong>Email:</strong> ${session.customer_details.email}</li>
      <li><strong>Receipt #:</strong> ${session.id}</li>
      <li><strong>Timestamp:</strong> ${new Date().toLocaleString()}</li>
    </ul>

    <p>We are deeply grateful for your support.</p>

    <p>Warm regards,<br/>The Dance Africa Team</p>
  </div>
`
      });
    } catch (emailError) {
      console.error("Email failed:", emailError);
    }
    }
  }

  res.status(200).json({ received: true });
}

// Helper to read raw body
function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", chunk => (data += chunk));
    req.on("end", () => resolve(Buffer.from(data)));
    req.on("error", err => reject(err));
  });
}
