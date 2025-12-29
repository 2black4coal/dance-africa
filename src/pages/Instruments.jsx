import { motion } from "framer-motion";
import "../styles/main.css";
import "../styles/instruments.css";
import Navbar from "../components/Navbar";

export default function Instruments() {
  return (
    <section className="instruments-page">
      <Navbar />
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
<div className="africa-card card-hover">
  <div className="image-container">
    <img src={item.instrumentImage} alt={item.name} />
  </div>
  <div className="card-body">
    <h2>{item.name}</h2>
    <span className="date">Created: {item.created}</span>
    <p>{item.description}</p>
  </div>
</div>

{/* ROOT SYMBOLISM CARD */}
<div className="africa-subcard card-hover">
  <div className="image-container">
    <img src={item.rootImage} alt={item.rootName} />
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

/* ---------------- DATA ---------------- */

const data = [
  {
    id: 1,
    name: "Djembe",
    created: "12th Century",
    description:
      "The Djembe is a West African hand drum used in ceremonies, celebrations, and storytelling, known for its powerful, expressive rhythms.",
    instrumentImage: "/images/instruments/djembe.jpg",
    rootName: "Baobab root",
    rootDescription:
"A symbol of life and resilience, used for healing and spiritual grounding, supporting vitality and communal well‑being." ,
  
    rootImage: "/images/roots/baobab-root.png",
  },
  {
    id: 2,
    name: "Kora",
    created: "13th Century",
    description:
      "The Kora is a 21‑string West African harp‑lute played by griots to preserve oral history, blending music, storytelling, and cultural memory.",
    instrumentImage: "/images/instruments/kora.jpg",
    rootName: "Kola root",
    rootDescription:
      "Kola root symbolizes unity, hospitality, and sacred gatherings, honored in rituals and communal traditions.",
    rootImage: "/images/roots/kola-root.png",
  },
  {
    id: 3,
    name: "Balafon",
    created: "Ancient Era",
    description:
      "A wooden xylophone with gourd resonators refers to the Balafon, a traditional West African instrument made of tuned wooden keys placed over hollow gourds that amplify its sound. Its warm, earthy tone and craftsmanship made it important in royal courts, where it was played for ceremonies, storytelling, and formal gatherings. ",
    instrumentImage: "/images/instruments/balafon.jpg",
    rootName: "Neem root",
    rootDescription:
      "Neem root purifies, protects, and supports traditional healing through cleansing rituals and medicinal use.",
    rootImage: "/images/roots/neem-root.png",
  },

{
    id: 4,
    name: "Agogo",
    created: "13th Century",
    description:
      "The agogô is a traditional West African percussion instrument made of two or more metal bells, known for its bright, high-pitched tones and rhythmic versatility.",
    instrumentImage: "/images/instruments/agogo.jpg",
    rootName: "Licorice root",
    rootDescription:"Licorice root supports holistic balance, soothes digestion, reduces inflammation, boosts adrenal health, and is used in East African remedies to maintain internal wellness.",
    rootImage: "/images/roots/licorice.jpg",
  },



 
{
    id: 5,
    name: "Shekere",
    created: "14th Century",
    description:
      "A West African percussion instrument made from a dried gourd covered with a net of beads, producing a distinctive rattling sound when shaken or struck.",
    instrumentImage: "/images/instruments/shekere-2-.jpg",
    rootName: "Ginger root",
    rootDescription: "Ginger root warms the body, supports circulation and digestion, eases nausea, reduces inflammation, boosts immunity, and is widely used in African herbal teas and remedies to promote overall vitality.",
    rootImage: "/images/roots/ginger1.png",
  },
     
{
    id: 6,
    name: "Udu",
    created: "1000 AD",
    description:
"The Udu is a Nigerian Igbo clay jug instrument, originally a water vessel, producing deep bass and airy tones through its side hole and hollow body, traditionally played by women in ceremonies and now used worldwide for its unique, resonant sound.",
    instrumentImage: "/images/instruments/udu.webp",
    rootName: "Ashwagandha root",
    rootDescription:
      "Ashwagandha grounds the body, reduces stress, sharpens clarity, restores vitality, and—like many African healing plants—offers natural remedies for both everyday and long‑term wellness.",
    rootImage: "/images/roots/ashwagandha.png",
  },





  {
    id: 7,
    name: "Ekwe",
    created: "Ancient Era",
    description:
      "The Ekwe is an Igbo wooden slit drum, carved from a hollow log, used for music, ceremonies, and long‑distance communication through distinct rhythms.",
    instrumentImage: "/images/instruments/ekwe_nigeria-1.jpeg",
    rootName: "Gotu Kola root",
    rootDescription:
     "Gotu Kola boosts memory, supports circulation, calms the mind, and is used in African and Ayurvedic healing for clarity and longevity.",
    rootImage: "/images/roots/gotu-kola.jpg",
  },
  {
  id: 41,
  name: "Guembri",
  created: "Ancient Era",
  description:
    "The Guembri is a three-string bass lute from Morocco, made of wood and camel skin, central to Gnawa spiritual music and trance ceremonies.",
  instrumentImage: "/images/instruments/guembri.webp",
  rootName: "Iboga root",
  rootDescription:
    "Iboga root is traditionally used in Central Africa for spiritual rituals, endurance, and mental clarity.",
  rootImage: "/images/roots/Iboga.jpg",
},

{
  id: 42,
  name: "Imzad",
  created: "Ancient Era",
  description:
    "The Imzad is a one-string bowed instrument of the Tuareg people, traditionally played by women to accompany poetry and storytelling.",
  instrumentImage: "/images/instruments/Imzad.jpg",
  rootName: "Artemisia afra root",
  rootDescription:
    "Artemisia afra is widely used in African traditional medicine to support respiratory health and reduce fever.",
  rootImage: "/images/roots/Artemisialeaf1.jpeg",
},

{
  id: 43,
  name: "Mizwad",
  created: "11th Century",
  description:
    "The Mizwad is a North African bagpipe from Tunisia and Libya, used in folk celebrations and communal dances.",
  instrumentImage: "/images/instruments/Mizwadss.jpg",
  rootName: "Senna root",
  rootDescription:
    "Senna root has long been used in African herbal medicine to support digestion and cleansing.",
  rootImage: "/images/roots/Senna root.jpg",
},

{
  id: 44,
  name: "Washint",
  created: "Ancient Era",
  description:
    "The Washint is an Ethiopian bamboo flute, played by shepherds and folk musicians for melodies and storytelling.",
  instrumentImage: "/images/instruments/Washint.jpg",
  rootName: "Aloe ferox root",
  rootDescription:
    "Aloe ferox root is used in Southern African traditional medicine for detoxification and digestive balance.",
  rootImage: "/images/roots/Aloe ferox root.webp",
},

{
  id: 45,
  name: "Adungu",
  created: "Ancient Era",
  description:
    "The Adungu is a Ugandan arched harp with multiple strings, used in ceremonial music and oral traditions.",
  instrumentImage: "/images/instruments/Adungu.webp",
  rootName: "Cryptolepis root",
  rootDescription:
    "Cryptolepis sanguinolenta root is traditionally used in West and Central Africa to manage fever and infections.",
  rootImage: "/images/roots/Cryptolepis root.png",
},

{
  id: 46,
  name: "Inanga",
  created: "Ancient Era",
  description:
    "The Inanga is a flat harp-zither from Rwanda and Burundi, used for royal poetry, history, and meditation.",
  instrumentImage: "/images/instruments/Inanga.jpg",
  rootName: "African Wild Yam root",
  rootDescription:
    "African Wild Yam root is traditionally used to support hormonal balance and physical strength.",
  rootImage: "/images/roots/African Wild Yam root.jpg",
},

{
  id: 47,
  name: "Krar",
  created: "Ancient Era",
  description:
    "The Krar is a six-string lyre from Ethiopia and Eritrea, used in secular songs and cultural storytelling.",
  instrumentImage: "/images/instruments/Krar.jpg",
  rootName: "Pelargonium root",
  rootDescription:
    "Pelargonium sidoides root is used in Southern Africa to support respiratory and immune health.",
  rootImage: "/images/roots/Pelargonium root.webp",
},

{
  id: 48,
  name: "Umakhweyana",
  created: "Ancient Era",
  description:
    "The Umakhweyana is a Zulu gourd-resonated musical bow from South Africa, traditionally played by women for song accompaniment.",
  instrumentImage: "/images/instruments/Umakhweyana.webp",
  rootName: "Sodom Apple root",
  rootDescription:
    "Sodom Apple root is used in African traditional medicine for pain relief and external healing preparations.",
  rootImage: "/images/roots/Sodom Apple root.jpg",
},

{
  id: 49,
  name: "Xalam",
  created: "13th Century",
  description:
    "The Xalam is a West African plucked lute from Senegal and Gambia, used by griots for praise singing and oral history.",
  instrumentImage: "/images/instruments/Xalam.webp",
  rootName: "Blue Lily root",
  rootDescription:
    "Blue Lily root was used in ancient Nile cultures for relaxation and ceremonial purposes.",
  rootImage: "/images/roots/Blue Lily Root.webp",
},

{
  id: 50,
  name: "Bendir",
  created: "Ancient Era",
  description:
    "The Bendir is a North African frame drum with gut snares, used in Sufi rituals, folk music, and healing ceremonies.",
  instrumentImage: "/images/instruments/Bendir.jpg",
  rootName: "African Basil root",
  rootDescription:
    "African Basil root is traditionally used to support digestion, immunity, and respiratory health.",
  rootImage: "/images/roots/African Basil root.webp",
},

];





