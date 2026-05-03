import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/home.css";

export default function Home() {

const slides = [
  "Celebrating Togo’s Independence with pride, unity, and strength 🇹🇬",

  "A nation rich in culture, rhythm, ancestral wisdom, and resilience",

  "From Lomé to the diaspora — one people, one identity, one heartbeat",

  "Honoring the sacrifices of our ancestors who fought for freedom and dignity",

  "Togolese heritage expressed through music, dance, language, and tradition",

  "A powerful reminder that freedom was earned, not given",

  "Unity across generations — from elders to youth, bound by culture",

  "The spirit of independence lives in every Togolese home around the world",

  "Diaspora communities keeping the flame of Togo alive abroad",

  "A celebration of identity, pride, and national consciousness",

  "Togo stands tall in West Africa — small in size, vast in spirit",

  "Freedom is not just history — it is a living responsibility",

  "Our flag carries the story of courage, hope, and survival",

  "Together we rise, together we remember, together we celebrate 🇹🇬"
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