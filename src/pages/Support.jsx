import { motion } from "framer-motion";


import DonateButton from "../components/DonateButton";
import AdBanner from "../components/AdBanner";
import "../styles/main.css";
import "../styles/support.css";
import "../styles/donate.css";

export default function Support() {
  return (
    <>
     
      <section className="support-page">
        <motion.div
          className="support-container"
          initial={{ opacity: 0, scale: 0.98, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "center bottom", willChange: "transform, opacity" }}
        >
          {/* PAGE HEADER — matches Events */}
          <h1 className="page-title">Support Dance Africa</h1>

          <p className="page-subtitle">
            Dance Africa is more than movement — it is memory, identity, and
            survival. Through rhythm, storytelling, and tradition, African
            cultures have preserved history for generations.
          </p>

          <p className="page-subtitle">
            Your support helps us document, celebrate, and protect these cultural
            expressions while empowering communities through education, events,
            and creative platforms.
          </p>

          {/* PROJECT LIGHT SECTION */}
          <div className="project-light">
            <div className="project-light-header">
              <h2 className="page-title">Project: Light Up Africa</h2>

              {/* Realistic Olympic Flame 🔥 */}
            <motion.svg
              className="candle-flame"
              viewBox="0 0 48 80"
              initial={{ opacity: 1, scale: 1 }}
              animate={{
                y: [2, -2, 0],
                scale: [1, 1.02, 1],
                rotate: [0, 0.6, -0.6, 0]
              }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              role="img"
              aria-label="Burning flame"
            >
              <defs>
                <radialGradient id="g1" cx="50%" cy="35%" r="60%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="40%" stopColor="#fff5c8" />
                  <stop offset="65%" stopColor="#ff9b2e" />
                  <stop offset="100%" stopColor="#ff2a00" />
                </radialGradient>

                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <motion.path
                d="M24 2 C12 18 8 28 11 40 C13 50 19 58 24 66 C29 58 35 50 37 40 C40 28 36 18 24 2 Z"
                fill="url(#g1)"
                filter="url(#glow)"
                style={{ transformOrigin: '50% 85%' }}
                animate={{ scaleY: [1, 1.05, 0.98, 1], rotate: [0, 0.8, -0.8, 0], y: [0, -1.4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.path
                d="M24 14 C21 22 20 28 21 34 C22 38 24 42 24 46 C24 42 26 38 27 34 C28 28 27 22 24 14 Z"
                className="flame-core"
                fill="#fff9d6"
                opacity="1"
                style={{ transformOrigin: '50% 85%' }}
                animate={{ scale: [1, 1.05, 0.98, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.svg>


            </div>

            <p className="page-subtitle">
              <strong>Project Light Up Africa</strong> is a future-facing vision
              aimed at supporting the complete electrification of African
              communities — starting with cultural centers, schools, and creative
              spaces.
            </p>

            <p className="page-subtitle">
              Electricity means access: to education, technology, preservation of
              art, safe performances, and sustainable cultural growth. When Africa
              is powered, its culture shines brighter.
            </p>
          </div>

          {/* DONATION SECTION */}
          <motion.div
            className="donation-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="page-title" style={{ color: "#facc15" }}>
              Make a Contribution
            </h3>

            <p className="page-subtitle">
              Every contribution — large or small — directly supports cultural
              preservation and future development initiatives.
            </p>

            <div className="donation-options">
              <DonateButton amount={500} label="$5" />
              <DonateButton amount={1000} label="$10" />
              <DonateButton amount={2500} label="$25" />
              <DonateButton amount={5000} label="Custom" />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
