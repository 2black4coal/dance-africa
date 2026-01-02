import { motion } from "framer-motion";

import "../styles/main.css";
import "../styles/instruments.css";

import "../styles/navbar.css";
/* ---------------- DATA ---------------- */
const data = [
  {
    id: 1,
    name: "Djembe",
    created: "12th Century",
    description:
      "The Djembe is a West African hand drum used in ceremonies, celebrations, and storytelling.",
    instrumentImage: "/images/instruments/djembe.jpg",
    rootName: "Baobab root",
    rootDescription:
      "A symbol of life and resilience, used for healing and spiritual grounding.",
    rootImage: "/images/roots/baobab-root.png",
  },
  {
    id: 2,
    name: "Kora",
    created: "13th Century",
    description:
      "The Kora is a 21-string harp-lute played by griots to preserve oral history.",
    instrumentImage: "/images/instruments/kora.jpg",
    rootName: "Kola root",
    rootDescription:
      "Kola root symbolizes unity, hospitality, and sacred gatherings.",
    rootImage: "/images/roots/kola-root.png",
  },
  {
    id: 3,
    name: "Balafon",
    created: "Ancient Era",
    description:
      "A wooden xylophone with gourd resonators used in royal courts and ceremonies.",
    instrumentImage: "/images/instruments/balafon.jpg",
    rootName: "Neem root",
    rootDescription:
      "Neem root purifies and protects through traditional healing rituals.",
    rootImage: "/images/roots/neem-root.png",
  },

{
  id: 6,
  name: "Ngoma Drum",
  created: "Ancient Era",
  description:
    "A large ceremonial drum used in healing, initiation, and spiritual gatherings across Central and Southern Africa.",
  instrumentImage: "/images/instruments/Ngoma.jpg",
  rootName: "Devil’s Claw Root",
  rootDescription:
    "Devil’s claw root is used in pain relief and spiritual purification ceremonies.",
  rootImage: "/images/roots/devils-claw-root.png",
},
{
  id: 7,
  name: "Algaita",
  created: "Medieval Era",
  description:
    "A double-reed wind instrument used in royal courts and ceremonial music in the Sahel region.",
  instrumentImage: "/images/instruments/Algaita.jpg",
  rootName: "Myrrh Root",
  rootDescription:
    "Myrrh root is burned or prepared for protection, spiritual elevation, and ancestral reverence.",
  rootImage: "/images/roots/myrrh-root.avif",
},
{
  id: 8,
  name: "Adungu",
  created: "Pre-Colonial Era",
  description:
    "A bow harp traditionally played in storytelling and ceremonial events in East Africa.",
  instrumentImage: "/images/instruments/adungu.jpg",
  rootName: "Moringa Root",
  rootDescription:
    "Moringa root symbolizes vitality and is used for cleansing and strengthening the body.",
  rootImage: "/images/roots/moringa-root.png",
},
{
  id: 9,
  name: "Riti (One-String Fiddle)",
  created: "Ancient Era",
  description:
    "A bowed string instrument used by pastoral communities for oral history and cultural expression.",
  instrumentImage: "/images/instruments/riti.jpg",
  rootName: "Senna Root",
  rootDescription:
    "Senna root is used for detoxification and spiritual cleansing practices.",
  rootImage: "/images/roots/senna-root.png",
},
{
  id: 10,
  name: "Udu",
  created: "Ancient Era",
  description:
    "A clay pot drum used in ritual music and spiritual ceremonies, particularly among Igbo communities.",
  instrumentImage: "/images/instruments/udu.jpg",
  rootName: "Yohimbe Root",
  rootDescription:
    "Yohimbe root is associated with vitality, strength, and ceremonial empowerment.",
  rootImage: "/images/roots/yohimbe.jpg",
}






];

/* ---------------- COMPONENT ---------------- */
export default function Instruments() {
  return (
    <section className="instruments-page page-section">


      <h1 className="page-title">African Musical Instruments</h1>
      <p className="page-subtitle">
        Instruments paired with sacred African roots and plant symbolism.
      </p>

      <div className="rows">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className={`row ${index % 2 === 1 ? "reverse" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* MAIN INSTRUMENT CARD */}
            <div className="africa-card">
              <div className="image-container">
                <img
                  src={item.instrumentImage}
                  alt={item.name}
                  loading="lazy"
                />
              </div>
              <div className="card-body">
                <h2>{item.name}</h2>
                <span className="date">Created: {item.created}</span>
                <p>{item.description}</p>
              </div>
            </div>

            {/* ROOT SYMBOLISM CARD */}
            <div className="africa-subcard">
              <div className="image-container">
                <img
                  src={item.rootImage}
                  alt={item.rootName}
                  loading="lazy"
                />
              </div>
              <div className="card-body">
                <h3>{item.rootName}</h3>
                <p>{item.rootDescription}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
