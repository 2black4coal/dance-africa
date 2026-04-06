import "../styles/about.css";
import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="about-container">

      <motion.section className="about-hero" {...fadeUp}>
        <h1>Dance Africa</h1>
        <p>
          A living expression of culture, rhythm, and a call to power the future of Africa.
        </p>
      </motion.section>

      <motion.section className="about-section" {...fadeUp}>
        <h2>The Spirit of African Dance</h2>
        <p>
          African dance is more than movement — it is language, identity, and history.
          Every step carries meaning, every rhythm tells a story...
        </p>
      </motion.section>

      <motion.section className="about-section" {...fadeUp}>
        <h2>Instruments & Rhythm</h2>
        <p>
          The heartbeat of African dance lives in its instruments...
        </p>
      </motion.section>

      <motion.section className="about-section" {...fadeUp}>
        <h2>African Food & Natural Herbs</h2>
        <p>
          African culture is deeply rooted in nourishment and healing...
        </p>
      </motion.section>

      <motion.section className="about-section highlight" {...fadeUp}>
        <h2>Light Up Africa — Our Mission</h2>
        <p>Dance Africa is more than culture — it is a movement for change.</p>
        <p>Across Africa, millions still live without reliable electricity...</p>
        <p>Our mission — Light Up Africa — is a call to action...</p>
        <p>This platform uses culture as a bridge to the world...</p>
        <p>When Africa is fully powered, creativity expands...</p>
      </motion.section>

      <motion.section className="about-section" {...fadeUp}>
        <h2>Explore the Experience</h2>
        <p>
          Discover African dance styles, explore instruments, view cultural galleries...
        </p>

        <a href="/dance-styles" className="about-link">
          Visit Our Dance-Styles →
        </a>
      </motion.section>

    </div>
  );
}