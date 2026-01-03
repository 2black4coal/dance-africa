import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import "../styles/main.css";
import "../styles/donation-status.css";

export default function DonationCancel() {
  return (
    <>
      <Navbar />
      <section className="page-section status-page">
        <motion.div
          className="status-card cancel"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="page-title status-title">Donation Not Completed</h1>

          <p className="page-subtitle status-subtitle">
            This time, the donation was not finalized.  
            Whenever you are ready, the door to support Dance Africa remains open.
          </p>

          <div className="status-highlight cancel-soft">
            <p>No charges were made.</p>
            <p>You can safely try again at any time.</p>
          </div>

          <a href="/support" className="status-link">
            Return to Support
          </a>
        </motion.div>
      </section>
    </>
  );
}
