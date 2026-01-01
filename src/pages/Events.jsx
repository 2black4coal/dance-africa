import { motion } from "framer-motion";
import "../styles/main.css";
import "../styles/events.css";

export default function Events() {
  return (
    <section className="events-page page-section">

      <h1 className="page-title">African Cultural Events</h1>
      <p className="page-subtitle">
        Celebrating African dance, music, festivals and the foods that define
        our heritage.
      </p>

      <div className="rows">
        {events.map((item, index) => (
          <motion.div
            key={item.id}
            className={`row ${index % 2 !== 0 ? "reverse" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* MAIN EVENT CARD */}
            <div className="africa-card card-hover">
              <div className="image-container">
                <img src={item.eventImage} alt={item.eventName} />
              </div>
              <div className="card-body">
                <h2>{item.eventName}</h2>
                <span className="date">
                  {item.date} — {item.location}
                </span>
                <p>{item.eventDescription}</p>
              </div>
            </div>

            {/* FOOD CARD */}
            <div className="africa-subcard card-hover">
              <div className="image-container">
                <img src={item.foodImage} alt={item.foodName} />
              </div>
              <div className="card-body">
                <h3>{item.foodName}</h3>
                <span className="region">{item.foodRegion}</span>
                <p>{item.foodDescription}</p>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}



/* ---------------- DATA ---------------- */

const events = [
  {
    id: 1,
    eventName: "West African Drum Festival",
    date: "March 15, 2026",
    location: "Accra, Ghana",
    eventDescription:
      "A vibrant gathering of master drummers and dancers celebrating West African rhythm, storytelling, and communal heritage.",
    eventImage: "/images/event/drum-festival.jpg",

    foodName: "Jollof Rice",
    foodRegion: "West Africa",
    foodDescription:
      "A beloved rice dish cooked with tomatoes, peppers, and spices, often served during celebrations and festivals.",
    foodImage: "/images/food/jollof.jpg",
  },
  {
    id: 2,
    eventName: "Yam Festival",
    date: "April 5, 2026",
    location: "Ogidi Community, Nigeria",
    eventDescription:
      "The New Yam Festival, in the Ogidi community, is an important way of marking the beginning and end of the farming season. It is a celebration of life, accomplishments in the community, culture and well-being.",
    eventImage: "/images/event/yam-festival.jpg",

    foodName: "Egusi Soup",
    foodRegion: "Nigeria",
    foodDescription:
      "A rich soup made from melon seeds, leafy greens, and spices, deeply rooted in West African cuisine.",
    foodImage: "/images/food/egusi.jpg",
  },
{
   id: 1,
    eventName: "Durbar Festival",
    date: "December 2026",
    location: "Kano, Nigeria",
    eventDescription:
      "A historic celebration showcasing Hausa horsemanship, drumming, and royal processions honoring traditional leadership and unity.",
    eventImage: "/images/event/Durbar Festival.jpg",

    foodName: "Tuwo Shinkafa",
    foodRegion: "Northern Nigeria",
    foodDescription:
      "A soft rice-based staple served with rich soups, commonly shared during festivals and communal gatherings.",
    foodImage: "/images/food/Tuwo Shinkafa.jpg",
  },
  {
    id: 2,
    eventName: "Aboakyer Festival",
    date: "May 2026",
    location: "Winneba, Ghana",
    eventDescription:
      "A traditional hunting festival honoring ancestral spirits through ritual, drumming, dancing, and community competition.",
    eventImage: "/images/event/Aboakyer Festival.jpg",

    foodName: "Kenkey with Fish",
    foodRegion: "Ghana",
    foodDescription:
      "Fermented corn dough served with grilled fish and pepper sauce, deeply tied to coastal celebrations.",
    foodImage: "/images/food/Kenkey with Fish.jpg",
  },

  /* ================= EAST AFRICA ================= */
  {
    id: 3,
    eventName: "Lamu Cultural Festival",
    date: "November 2026",
    location: "Lamu, Kenya",
    eventDescription:
      "A celebration of Swahili heritage featuring dhow sailing, poetry, traditional dances, and community feasts.",
    eventImage: "/images/event/Lamu Cultural Festival.jpg",

    foodName: "Pilau",
    foodRegion: "Swahili Coast",
    foodDescription:
      "A spiced rice dish cooked with meat and aromatic spices, central to East African celebrations.",
    foodImage: "/images/food/Pilau.jpg",
  },
  {
    id: 4,
    eventName: "Imbalu Circumcision Ceremony",
    date: "August 2026",
    location: "Mbale, Uganda",
    eventDescription:
      "A sacred Bagisu rite of passage marked by dance, drumming, and public celebration of bravery and adulthood.",
    eventImage: "/images/event/Imbalu Circumcision Ceremony.png",

    foodName: "Malewa",
    foodRegion: "Eastern Uganda",
    foodDescription:
      "Smoked bamboo shoots cooked with groundnuts, served during important cultural ceremonies.",
    foodImage: "/images/food/Malewa.jpg",
  },

  /* ================= NORTH AFRICA ================= */
  {
    id: 5,
    eventName: "Imilchil Marriage Festival",
    date: "September 2026",
    location: "Atlas Mountains, Morocco",
    eventDescription:
      "A Berber gathering where young men and women meet for courtship, music, and communal celebration.",
    eventImage: "/images/event/Imilchil Marriage Festival.webp",

    foodName: "Tagine",
    foodRegion: "Morocco",
    foodDescription:
      "Slow-cooked stew of meat and vegetables prepared in clay pots, central to Berber hospitality.",
    foodImage: "/images/food/Beef-Tagine.webp",
  },
  {
    id: 6,
    eventName: "Siwa Date Harvest Festival",
    date: "October 2026",
    location: "Siwa Oasis, Egypt",
    eventDescription:
      "A community harvest celebration honoring date farming traditions through music, storytelling, and feasting.",
    eventImage: "/images/event/Siwa Date Harvest Festival.jpg",

    foodName: "Date Bread",
    foodRegion: "Egypt",
    foodDescription:
      "Traditional bread sweetened with dates, baked and shared during harvest festivities.",
    foodImage: "/images/food/Date-Bread.jpg",
  },

  /* ================= SOUTHERN AFRICA ================= */
  {
    id: 7,
    eventName: "Umkhosi woMhlanga (Reed Dance)",
    date: "September 2026",
    location: "Eswatini",
    eventDescription:
      "A cultural ceremony celebrating purity, unity, and womanhood through song, dance, and tradition.",
    eventImage: "/images/event/woMhlanga.jpg",

    foodName: "Sishwala",
    foodRegion: "Eswatini",
    foodDescription:
      "A thick maize porridge served during national ceremonies and communal meals.",
    foodImage: "/images/food/Sishwala.webp",
  },
  {
    id: 8,
    eventName: "Kuru Dance Festival",
    date: "July 2026",
    location: "Ghanzi, Botswana",
    eventDescription:
      "A San cultural festival preserving ancient dance, music, and storytelling traditions of the Kalahari.",
    eventImage: "/images/event/Kuru Dance Festival.jpg",

    foodName: "Seswaa",
    foodRegion: "Botswana",
    foodDescription:
      "Slow-cooked beef pounded and seasoned, commonly served at traditional gatherings.",
    foodImage: "/images/food/Seswaa.jpg",
  },

  /* ================= CENTRAL AFRICA ================= */
  {
    id: 9,
    eventName: "Ngondo Festival",
    date: "December 2026",
    location: "Douala, Cameroon",
    eventDescription:
      "A spiritual water-based festival honoring ancestral spirits through rituals, music, and dance.",
    eventImage: "/images/event/Ngondo Festival.jpg",

    foodName: "Mbanga Soup",
    foodRegion: "Cameroon",
    foodDescription:
      "Palm nut soup cooked with spices and fish, traditionally prepared for festivals.",
    foodImage: "/images/food/Mbanga Soup.webp",
  },
  {
    id: 10,
    eventName: "Bwiti Initiation Ceremony",
    date: "June 2026",
    location: "Libreville, Gabon",
    eventDescription:
      "A sacred initiation ceremony involving music, dance, and spiritual reflection rooted in ancestral beliefs.",
    eventImage: "/images/event/Bwiti Initiation Ceremony.jpg",

    foodName: "Poulet Nyembwe",
    foodRegion: "Gabon",
    foodDescription:
      "Chicken cooked in rich palm nut sauce, commonly served during ceremonial gatherings.",
    foodImage: "/images/food/Poulet Nyembwe.jpg",
  },
];
