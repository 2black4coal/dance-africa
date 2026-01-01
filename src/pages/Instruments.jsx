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
