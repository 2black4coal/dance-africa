import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import "../styles/main.css";
import "../styles/donation-status.css";

export default function DonationSuccess() {
  return (
    <>
      <Navbar />
      <section className="page-section status-page">
        <motion.div
          className="status-card success"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="page-title status-title">Thank You for Lighting Up Africa</h1>

          <p className="page-subtitle status-subtitle">
            Your donation has been received with gratitude.  
            You are helping keep African culture, stories, and futures illuminated.
          </p>

          <div className="status-highlight success-glow">
            <p>Payment confirmed.</p>
            <p>Dance Africa honors your generosity.</p>
          </div>

          <a href="/support" className="status-link">
            Return to Support
          </a>
        </motion.div>
      </section>
    </>
  );
}
