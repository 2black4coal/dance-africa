import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import "../styles/gallery.css";

const images = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/zulu-women2.jpg",
  "/images/gallery/mask-cameroon.jpg",
  "/images/gallery/gallery11.jpg",
  "/images/gallery/gallery12.webp",
  "/images/gallery/gallery13.jpg",
  "/images/gallery/dancers-Sotho.webp",
  "/images/gallery/african-tribal-.avif",
  "/images/gallery/Dwa.jpg",
  "/images/gallery/drum-m.jpg",
  "/images/gallery/gallery5.jpg"
];

export default function Gallery() {
  const [current, setCurrent] = useState(images[0]);
  const [showNav, setShowNav] = useState(false);

  const lastImageRef = useRef(current);
  const navTimerRef = useRef(null);
  const movementRef = useRef(false);

  const getRandomImage = () => {
    let next;
    do {
      next = images[Math.floor(Math.random() * images.length)];
    } while (next === lastImageRef.current);

    lastImageRef.current = next;
    setCurrent(next);
  };

  useEffect(() => {
    const interval = setInterval(getRandomImage, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = () => {
    if (!movementRef.current) {
      movementRef.current = true;
      setShowNav(true);
    }

    clearTimeout(navTimerRef.current);
    navTimerRef.current = setTimeout(() => {
      setShowNav(false);
      movementRef.current = false;
    }, 3000);
  };

  return (
    <div className="gallery-page" onMouseMove={handleMouseMove}>
      <AnimatePresence>
        {showNav && (
          <motion.div
            className="gallery-nav"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="gallery-slider">
        <div className="gallery-image-wrap">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={current}
              className="gallery-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>

          <div className="gallery-overlay" />
        </div>
      </div>
    </div>
  );
}
