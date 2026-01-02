import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, company, message } = req.body;

  try {
    // ADMIN EMAIL
    await resend.emails.send({
      from: "Dance Africa <inquiries@dance-africa.org>",
      to: "inquiries@dance-africa.org",   // ✅ FIXED
      subject: "New Advertising Inquiry",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img 
              src="https://www.dance-africa.org/light-up-africa-banner.png"
              alt="Light Up Africa Banner"
              style="max-width: 100%; border-radius: 8px;"
            />
          </div>

          <h2>New Advertising Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `
    });

    // USER CONFIRMATION EMAIL
    await resend.emails.send({
      from: "Dance Africa <inquiries@dance-africa.org>",
      to: email,
      subject: "Thank you for contacting Dance Africa 💡",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img 
              src="https://www.dance-africa.org/light-up-africa-banner.png"
              alt="Light Up Africa Banner"
              style="max-width: 100%; border-radius: 8px;"
            />
          </div>

          <h2>Thank you for reaching out!</h2>
          <p>Dear ${name},</p>
          <p>
            We’ve received your advertising inquiry and our team will get back to you shortly.
            We’re excited about the possibility of partnering with you to amplify African culture globally.
          </p>

          <p><strong>Your Message:</strong></p>
          <p>${message}</p>

          <p>Warm regards,<br/>The Dance Africa Team</p>
        </div>
      `
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Email failed:", error);
    return res.status(500).json({ error: "Email failed" });
  }
}
