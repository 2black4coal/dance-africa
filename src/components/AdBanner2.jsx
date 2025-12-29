import { motion } from "framer-motion";
import "../styles/adBanner.css";

export default function AdBanner({ variant = "home" }) {
  return (
    <motion.section
      className={`ad-banner ${variant}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h1 className="ad-title">
        Africa’s Culture Deserves Light
      </h1>

      <p className="ad-subtitle">
        Preserving heritage, empowering communities, and advancing a future of
        constant electricity across Africa’s cultural and creative spaces.
      </p>

      <div className="ad-actions">
        <a href="/support" className="ad-primary">
          Explore the Vision
        </a>

        <a href="/events" className="ad-secondary">
          Discover Culture
        </a>
      </div>
    </motion.section>
  );
}
