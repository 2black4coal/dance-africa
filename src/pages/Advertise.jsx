import { useState } from "react";
import { motion } from "framer-motion";
import BrandCarousel from "../components/BrandCarousel";

import "../styles/main.css";
import "../styles/advertise.css";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 24 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Advertise() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const formData = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      company: e.target.company.value.trim(),
      message: e.target.message.value.trim(),
    };

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    const res = await fetch("/api/send-advertise-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="advertise-page page-section">

      <h1 className="page-title">Partner With the Pulse of Africa</h1>
      <p className="page-subtitle">
        Showcase your brand to a global audience passionate about African culture, dance, music, and heritage.
      </p>

      <motion.div
        className="ad-section"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Opportunities */}
        <div className="ad-card">
          <h2>Why Advertise With Us</h2>
          <p>
            Dance Africa connects a culturally engaged global audience across Africa
            and the diaspora. Our platform blends movement, storytelling, and identity
            — making your brand part of something meaningful.
          </p>
        </div>

        <div className="ad-card">
          <h2>Opportunities</h2>
          <ul>
            <li>Homepage placements</li>
            <li>Sponsored features</li>
            <li>Video integrations</li>
            <li>Event partnerships</li>
            <li>Brand collaborations</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="ad-card highlight-card">
          <h2>Contact & Inquiries</h2>
          <p>For partnerships, advertising, or collaborations:</p>
          <div className="contact-block">
            <p><strong>Email:</strong> inquiries@dance-africa.org</p>
            <p><strong>Phone:</strong> +1 (816) 490-2542</p>
          </div>
          <a
            href="/media/media-kit.pdf"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Media Kit
          </a>
        </div>
      </motion.div>

      <BrandCarousel />

      {/* Inquiry Form */}
      <div className="inquiry-form">
        <h2>Start Your Campaign</h2>
        <form onSubmit={handleSubmit} className="advertise-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="company" placeholder="Company (optional)" />
          <textarea name="message" placeholder="Tell us about your campaign..." required />
          <button type="submit" className="cta-button">
            {status === "sending" ? "Sending..." : "Send Inquiry"}
          </button>

          {status === "success" && (
            <motion.p className="success-message">
              Message sent successfully.
            </motion.p>
          )}

          {status === "error" && (
            <motion.p className="error-message">
              Something went wrong.
            </motion.p>
          )}
        </form>
      </div>

    
    </section>
  );
}