import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/home.css";

const DISPLAY_TIME = 13000; // ⏱ adjustable (milliseconds)

const tributes = [
  {
    text: "Mr. Phillips Iluonokhalumhe, a proud son of Irekpai Community, Uzairue, Etsako West, Edo State, stands as a beacon of generosity and service.",
    author: "Charles Omonokhua",
  },
  {
    text: "His life has been a quiet blessing to many, a steady light that never demanded attention yet illuminated every path it touched.",
    author: "Gilbert Egwakhide",
  },
  {
    text: "Through his unwavering commitment, he provided the first borehole water to the community — a gift that transformed daily life and brought dignity to many households.",
    author: "Peter Sanni",
  },
  {
    text: "His efforts in sponsoring community projects have laid the foundation for sustainable growth and unity.",
    author: "Etsako Youths",
  },
  {
    text: "Mr. Iluonokhalumhe’s support for education through scholarships has opened doors for countless young minds, giving hope where there was once limitation.",
    author: "Etsako Chiefs & Elders",
  },
  {
    text: "His contributions of food items and essentials have reached families in need, reminding us that compassion is the highest form of leadership.",
    author: "Alfred Imomoh",
  },
  {
  text: "As his nephew, I have watched with pride as his generosity and kindness reached families in need. Through his gifts of food and essential supplies, he showed me that true leadership is rooted in compassion and selfless service.",
  author: "Felix Iluonokhalumhe",
},

  {
    text: "You are the best father to every Irekpai son and daughter — a mentor whose example shapes the values of our youth.",
    author: "Meg,Lenny,Clerance & Bond Iluonokhalumhe ",
  },
  {
    text: "Words cannot fully express our gratitude for your love and care. Your presence in our community is a gift, and your dedication is a lesson in humility and strength.",
    author: "PJ & Monique Iluonokhalumhe",
  },
  {
    text: "As you mark another year of life, we pray that God in heaven blesses all you do for the Irekpai people.",
    author: "Julius Iluonokhalumhe",
  },
  {
    text: "You have shown us that true greatness lies in service. Your legacy is not written in stone but in the hearts of those you’ve uplifted.",
    author: "Ojieta",
  },
  {
    text: "From every corner of Irekpai, voices rise in celebration of your life. You are cherished, respected, and deeply loved.",
    author: "Anthony Eshiemomoh",
  },
  {
    text: "Enjoy your birthday celebration to the fullest, Sir. Your legacy will last forever.",
    author: "Friends and Well-wishers",
  },
   {
    text: "Mr. Phillips, your life of quiet service, generosity, and faith reflects true Christian love. May God bless you richly as you celebrate your birthday, and may your good works continue to inspire our community.",
    author: "Rev. Fr. Corlinus Omonokhua",
  },
];

const paragraphVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.97,
  },
};

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % tributes.length);
    }, DISPLAY_TIME);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="home-page page-section">
      <div className="home-center">
        <div className="home-content">

          {/* Africa Map */}
          <motion.img
            src="/images/uzairue.png"
            alt="Uzairue Map"
            className="home-map"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1.15, opacity: 1 }}
            transition={{
              duration: 4,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.22,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
          />

          {/* TITLE */}
          <motion.p
            className="home-title"
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 2.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.5, ease: "easeOut" },
            }}
          >
            Philip Iluonakhalumhe
          </motion.p>

          {/* SUBTITLE */}
          <motion.p
            className="home-subtitle"
            initial={{ opacity: 0, y: 28, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.8,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.45, ease: "easeOut" },
            }}
          >
            Tributes on Your Birthday.
          </motion.p>

          {/* ✨ TRIBUTE PARAGRAPH */}
          <div className="tribute-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="tribute-box"
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 1.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <p className="tribute-text">
                  {tributes[index].text}
                </p>

                <span className="tribute-author">
                  — {tributes[index].author}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
