import { motion } from "framer-motion";
import "../styles/home.css";

export default function Home() {
  return (
    <section className="home-page page-section">

      <div className="home-center">
        <div className="home-content">

          {/* Africa Map – smooth zoom-in */}
          <motion.img
            src="/images/b.png"
            alt="Africa Map"
            className="home-map"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1.15, opacity: 1 }}
            transition={{
              duration: 4,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.22,
              transition: { duration: 0.6, ease: "easeOut" }
            }}
          />

          {/* TITLE */}
          <motion.p
  className="home-title"
  initial={{ opacity: 0, y: 40, scale: 0.94 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 2.2,          // slower
    ease: [0.16, 1, 0.3, 1]
  }}
  whileHover={{
    scale: 1.04,
    transition: { duration: 0.5, ease: "easeOut" }
  }}
>
  Togolese Independence Day Celebration — Love, Unity & National Pride in the USA
</motion.p>

<motion.p
  className="home-subtitle"
  initial={{ opacity: 0, y: 28, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 1.8,          // slower
    delay: 0.35,
    ease: [0.16, 1, 0.3, 1]
  }}
  whileHover={{
    scale: 1.03,
    transition: { duration: 0.45, ease: "easeOut" }
  }}
>
  The Togolese in the USA came together in a vibrant celebration of our National Day — a moment filled with love, cultural pride, awareness, and pure joy. The energy was great, the atmosphere was marvelous, and the unity was unforgettable. A powerful reminder of who we are and how far we’ve come.
</motion.p>


        </div>
      </div>
    </section>
  );
}
