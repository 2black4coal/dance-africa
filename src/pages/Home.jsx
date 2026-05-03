import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/home.css";

export default function Home() {

  const slides = [
    "Celebrating Togo’s Independence with pride, unity, and strength 🇹🇬",
    "A nation rich in culture, rhythm, and resilience",
    "From Lomé to the diaspora — one people, one identity",
    "Honoring heritage through music, dance, and tradition",
    "A powerful reminder of freedom, unity, and progress",
    "Togolese spirit shining across the world"
  ];

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);

      setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
        setShow(true);
      }, 1200);

    }, 5200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-page">

      <div className="home-center">
        <div className="home-content">

          {/* AFRICA MAP */}
          <motion.img
            src="/images/b.png"
            alt="Africa Map"
            className="home-map"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1.15, opacity: 1 }}
            transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* TITLE */}
          <motion.p
            className="home-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            Togolese Independence Day Celebration — Love, Unity & National Pride in the USA
          </motion.p>

          {/* SUBTITLE SLIDER */}
          <div className="home-subtitle-wrapper">
            <AnimatePresence mode="wait">
              {show && (
                <motion.p
                  key={index}
                  className="home-subtitle"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{ duration: 1.2 }}
                >
                  {slides[index]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}