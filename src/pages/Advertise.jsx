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

    // Basic validation
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
        Showcase your brand to a vibrant, global audience passionate about African culture, music, dance, and heritage.
      </p>

      <motion.div
        className="ad-section"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{ transformOrigin: "center bottom", willChange: "transform, opacity" }}
      >
        <div className="ad-card">
          <h2>Why Advertise With Us?</h2>
          <p>
            Dance Africa reaches thousands of engaged users every month across
            the diaspora. Our audience is culturally connected, trend-savvy, and
            passionate about African identity, music, dance, and fashion.
          </p>
        </div>

        <div className="ad-card">
          <h2>Ad Opportunities</h2>
          <ul>
            <li>🎯 Homepage banners & featured placements</li>
            <li>📢 Sponsored content & product showcases</li>
            <li>🎥 Video ads during cultural event coverage</li>
            <li>📩 Newsletter & email promotions</li>
            <li>🤝 Brand collaborations & influencer campaigns</li>
          </ul>
        </div>

        <div className="ad-card">
          <h2>Audience Insights</h2>
          <p>
            Our community connects people across Africa and the global diaspora — 
            from the U.S. to Europe and the Caribbean. Visitors come from every 
            generation, united by a shared love for African dance, music, food, 
            fashion, and cultural heritage.
          </p>
        </div>

        <div className="ad-card highlight-card">
          <h2>Let’s Work Together</h2>
          <p>
            Ready to amplify your brand? Partner with us to reach a vibrant global 
            community and create meaningful, culturally powerful campaigns that 
            inspire and leave a lasting impact.
          </p>

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

      {/* INQUIRY FORM */}
      <div className="inquiry-form">
        <h2>Start Your Campaign</h2>

        <form onSubmit={handleSubmit} className="advertise-form">

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="company" placeholder="Company Name" />
          <textarea name="message" placeholder="Tell us about your campaign..." required />

          <button type="submit" className="cta-button">
            {status === "sending" ? "Sending..." : "Send Inquiry"}
          </button>

          {/* SUCCESS MESSAGE */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="success-message"
            >
              Your inquiry has been sent!
            </motion.p>
          )}

          {/* ERROR MESSAGE */}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="error-message"
            >
              Something went wrong. Please try again.
            </motion.p>
          )}
        </form>
      </div>
    </section>
  );
}
