import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import React from "react";
import AdBanner from "../components/AdBanner";
import "../styles/main.css";
import "../styles/danceStyles.css";

/* ===============================
   DANCE STYLES DATA
================================ */
const danceStyles = [
  {
    name: "Mbira Dance",
    origin: "Zimbabwe",
    description:
      "The Mbira dance is a sacred tradition used to invite ancestral spirits through spirit mediums. Performed mainly by elders, it plays a powerful role in spiritual communication.",
    image:
      "/images/dancestyles/Mbira Dance.jpg",
  },
  {
    name: "Swange Dance",
    origin: "Tiv, Nigeria",
    description:
      "A vibrant Tiv dance style known for expressive movements, rhythmic footwork, and storytelling during festivals and celebrations.",
    image:        "/images/dancestyles/Swange-Dance.jpeg",
  },
  {
    name: "Zulu Dance",
    origin: "South Africa",
    description:
      "A powerful warrior dance featuring high kicks, stomping, and intense drum rhythms. Traditionally performed to showcase strength, unity, and discipline.",
    image:
      "/images/dancestyles/Zulu Dance.webp",
  },
  {
    name: "Gwara Gwara",
    origin: "South Africa",
    description:
      "A contemporary street dance characterized by fluid arm rotations and rhythmic footwork, popularized globally through music videos and social media.",
    image:
      "/images/dancestyles/Gwara Gwara.jpg",},
  {
    name: "Adumu (Maasai Jumping Dance)",
    origin: "Kenya / Tanzania",
    description:
      "Performed by Maasai warriors, Adumu features vertical high jumps performed in rhythm with chants. It symbolizes strength, endurance, and coming of age.",
    image:      "/images/dancestyles/Adumu.webp",
  },
  {
    name: "Sabar Dance",
    origin: "Senegal",
    description:
      "A fast-paced traditional dance performed to the sabar drum. Known for sharp movements, athletic footwork, and expressive gestures.",
    image:
      "/images/dancestyles/sabarDance.jpg",},
  {
    name: "Shikhat",
    origin: "Morocco",
    description:
      "A traditional Moroccan women’s dance commonly performed at weddings. It features singing, hip movements, and expressive gestures celebrating femininity and heritage.",
    image:
      "/images/dancestyles/Shikhat.jpg",},
  {
    name: "Gnawa",
    origin: "Morocco",
    description:
      "A spiritual music and dance tradition rooted in healing rituals. It combines hypnotic rhythms, chanting, and trance movements performed during night-long ceremonies.",
    image:
      "/images/dancestyles/Gnawa.jpg",},
  {
    name: "Indlamu",
    origin: "Zulu, South Africa",
    description:
      "A traditional warrior dance involving high kicks, synchronized stomping, and powerful drum accompaniment, performed at ceremonies and festivals.",
    image:
      "/images/dancestyles/Indlamu.png",},
  {
    name: "Umteyo (Ukuxhentsa)",
    origin: "Xhosa, South Africa",
    description:
      "Known as the ‘shake dance,’ Umteyo features rapid shoulder movements while maintaining a firm posture, often performed during celebrations.",
    image:
      "/images/dancestyles/Umteyo.jpg",
  },
  {
    name: "Isukuti",
    origin: "Luhya, Kenya",
    description:
      "A lively drum-centered dance involving coordinated group movements. It plays a vital role in weddings, funerals, and community gatherings.",
    image:
      "/images/dancestyles/Isukuti.jpg",},
  {
    name: "Agbekor",
    origin: "Ghana / Togo",
    description:
      "A historic war dance originally performed by warriors. Today it is showcased at cultural events, featuring symbolic battle movements and complex drumming.",
    image:
      "/images/dancestyles/Agbekor.png",},
  {
    name: "Intore (Dance of the Heroes)",
    origin: "Rwanda",
    description:
      "A warrior dance marked by high jumps, spears, and dramatic movements. It represents bravery, honor, and national pride.",
    image:
      "/images/dancestyles/Intore.jpg",},
  {
    name: "Zaouli",
    origin: "Ivory Coast",
    description:
      "A masked dance performed at festivals and funerals. Known for rapid footwork and artistic masks, it symbolizes unity and prosperity.",
    image:
      "/images/dancestyles/zauli.avif",},
  {
    name: "Mukuji (Okuyi Mask Dance)",
    origin: "Gabon / Congo",
    description:
      "A stilt masquerade dance representing ancestral spirits. Performers wear white masks and move rhythmically to bless and protect the community.",
    image:
      "/images/dancestyles/Mukuji.jpg",},
  {
  name: "Ekonda Dance",
  origin: "Mongo, Democratic Republic of Congo",
  description:
    "A ceremonial dance performed during community gatherings and rites of passage. Ekonda emphasizes grounded footwork, polyrhythmic drumming, and collective storytelling.",
  image: "/images/dancestyles/Ekonda Dance.webp",
},
{
  name: "Likembe Dance",
  origin: "Bantu, Central Africa",
  description: 
    "A traditional dance accompanied by the likembe (thumb piano). It features subtle hip movements and rhythmic steps used to convey folklore and ancestral wisdom.",
  image: "/images/dancestyles/Likembe Dance.webp",
},
{
  name: "Bwiti Ritual Dance",
  origin: "Fang, Gabon",
  description:
    "A sacred spiritual dance performed during Bwiti ceremonies. It involves trance movements, chanting, and drumming meant to connect dancers with ancestral spirits.",
  image: "/images/dancestyles/Bwiti Ritual Dance.jpeg",
},
{
  name: "Ngbandi War Dance",
  origin: "Ngbandi, Central African Republic",
  description:
    "A traditional warrior dance characterized by sharp stomping and coordinated formations, symbolizing bravery, protection, and communal strength.",
  image: "/images/dancestyles/Ngbandi War Dance.jpg",
},
{
  name: "Ahidous",
  origin: "Amazigh (Berber), Morocco",
  description:
    "A collective circle dance performed by men and women together. Ahidous combines chanting, synchronized steps, and hand clapping during seasonal festivals.",
  image: "/images/dancestyles/Ahidous Dance.jpg",
},
{
  name: "Guedra",
  origin: "Tuareg, Morocco / Mauritania",
  description:
    "A spiritual Tuareg dance led by women, using symbolic hand gestures and flowing movements to express blessings, protection, and community harmony.",
  image: "/images/dancestyles/Guedra.webp",
},
{
  name: "Tannoura",
  origin: "Egypt",
  description:
    "A ceremonial whirling dance inspired by spiritual devotion. Dancers wear colorful layered skirts and spin rhythmically to traditional Sufi music.",
  image: "/images/dancestyles/Tannoura.jpg",
},
{
  name: "Raqs al-Assaya",
  origin: "Upper Egypt",
  description:
    "A folkloric stick dance derived from martial traditions. It features rhythmic steps, cane twirling, and playful competitive movements.",
  image: "/images/dancestyles/Raqs al-Assaya.webp",
},
{
  name: "Muchongoyo",
  origin: "Xitsonga / Ndau, Zimbabwe",
  description:
    "A fast-paced warrior dance performed by men, involving sharp foot stomps, whistles, and military-style formations.",
  image: "/images/dancestyles/Muchongoyo.webp",
},
{
  name: "Setapa",
  origin: "Tswana, Botswana",
  description:
    "A traditional women’s dance marked by rhythmic stamping, torso control, and melodic singing during community celebrations.",
  image:
    "/images/dancestyles/Setapa.webp",},
{
  name: "Makishi Dance",
  origin: "Chokwe, Zambia / Angola",
  description:
    "A masked initiation dance performed during boys’ rites of passage. The movements represent ancestral spirits guiding youth into adulthood.",
  image: "/images/dancestyles/Makishi Dance.webp",     
},
{
  name: "Vimbuza",
  origin: "Tumbuka, Malawi",
  description:
    "A healing dance involving trance-like movements and drumming, traditionally used to treat spiritual and psychological ailments.",
  image:
    "/images/dancestyles/Vimbuza.webp",},
{
  name: "Amagunju",
  origin: "Acholi, Uganda",
  description:
    "A royal drum dance performed to honor chiefs and elders. It features powerful drum rhythms and disciplined group movements.",
  image:    "/images/dancestyles/Amagunju.jpg",
},
{ 
  name: "Mchiriku",
  origin: "Swahili Coast, Tanzania",
  description:
    "A coastal celebratory dance performed with rapid hip movements and playful footwork, often during weddings and festivals.",
  image:
    "/images/dancestyles/Mchiriku.webp",},
{
  name: "Kiswahili Lelemama",
  origin: "Swahili, Kenya",
  description:
    "A joyful women-led dance accompanied by singing and clapping, symbolizing unity, femininity, and community bonding.",
  image:
    "/images/dancestyles/Kiswahili Lelemama.webp",},
{
  name: "Wolaita Dance",
  origin: "Wolaita, Ethiopia",
  description:
    "A high-energy dance marked by shoulder shaking and rhythmic jumps, performed during harvest festivals and celebrations.",
  image:
    "/images/dancestyles/Wolaita Dance.webp",},
{
  name: "Bata Dance",
  origin: "Yoruba, Nigeria",
  description:
    "A sacred drum-centered dance dedicated to deities. Bata is known for complex rhythms and energetic footwork.",
  image:
    "/images/dancestyles/Bata Dance.jpg",},
{
  name: "Dundunba",
  origin: "Malinké, Guinea",
  description:
    "A competitive dance traditionally performed by strong men, featuring explosive jumps and powerful drum accompaniment.",
  image:
    "/images/dancestyles/Dundunba.jpg",},
{
  name: "Kpanlogo",
  origin: "Ga, Ghana",
  description:
    "A rhythmic community dance combining traditional movements with modern influence, performed during celebrations and social events.",
  image:
    "/images/dancestyles/Kpanlogo.webp",},
{
  name: "Soli Dance",
  origin: "Mandinka, Gambia",
  description:
    "A ceremonial dance marking rites of passage, featuring steady rhythms, deep symbolism, and communal participation.",
  image:
    "/images/dancestyles/soli.webp",},

{
  name: "Zogbenya, Gbetu, and Nafai masked dances",
  origin: "Liberia and Sierra Leone",
  description: " These masked dances are not only a form of entertainment but also a means of expressing the tribe's values and beliefs, making them a vital aspect of the Gola cultural identity.",
  image:    "/images/dancestyles/Zogbenya.jpg"

},



];

/* ===============================
   COMPONENT
================================ */
export default function DanceStyles() {
  return (
    <section className="danceStyles-page">
      <Navbar />

      <h1 className="page-title">Explore African Dance Styles</h1>
      <p className="page-subtitle">
        Discover the rhythm, roots, and movement of Africa’s most iconic dance
        traditions.
      </p>

      <motion.div
        className="dance-grid"
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{ transformOrigin: "center center" }}
      >
        {danceStyles.map((style) => (
          <div className="dance-style-card" key={style.name}>
            <div className="image-container">
              <img src={style.image} alt={style.name} loading="lazy" />
            </div>

            <div className="card-body">
              <h2>{style.name}</h2>
              <span className="origin">{style.origin}</span>
              <p>{style.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
