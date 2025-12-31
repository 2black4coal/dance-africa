import { motion } from "framer-motion";

import AdBanner from "../components/AdBanner";

import "../styles/main.css";
import "../styles/home.css";

export default function Home() {
  return (
   
    <section className="home-page">
   



<div className="home-center">
  <div className="home-content">

    {/* Africa Map – slow, emphasized outward zoom */}
    <motion.img
      src="/images/e.png"
      alt="Africa Map"
      className="home-map"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1.35, opacity: 1 }}
      transition={{
        duration: 7,
        ease: "easeOut",
      }}
    />

    {/* Text animation – mature & subtle (now grows as it appears) */}
    {/* TITLE – ceremonial rise + soft drop */}
<motion.h1
  className="home-content "
  initial={{ opacity: 0, y: 28, scale: 0.96 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 1.35,
    ease: [0.16, 1, 0.3, 1], // smooth, premium, cinematic
  }}
  style={{
    willChange: "transform, opacity",
    transformOrigin: "center center",
    backfaceVisibility: "hidden",
    transformStyle: "preserve-3d",
  }}
>
  Welcome to Dance Africa
</motion.h1>

{/* SUBTITLE – delayed, softer rise */}
<motion.p
  className="home-content "
  initial={{ opacity: 0, y: 18, scale: 0.97 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 1.2,
    delay: 0.25,
    ease: [0.16, 1, 0.3, 1],
  }}
  style={{
    willChange: "transform, opacity",
    transformOrigin: "center center",
    backfaceVisibility: "hidden",
  }}
>
  Discover the rhythm, spirit, and heritage of African dance styles.
</motion.p>


  </div>
</div>

      
    </section>
  );
}
