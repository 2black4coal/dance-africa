import "../styles/advertise.css";

const brandLogos = [
  
  { name: "Brand A", src: "/assets/logos/logo1.png" },
  { name: "Brand B", src: "/assets/logos/logo2.png" },
  { name: "Brand C", src: "/assets/logos/logo3.png" },
  { name: "Brand D", src: "/assets/logos/logo4.png" },
  { name: "Toyota", src: "/assets/logos/toyota.jpg" },
  { name: "Electric", src: "/assets/logos/electric.webp" },
  { name: "Medical", src: "/assets/logos/medical-logo.jpg" },

  { name: "Culture", src: "/assets/logos/culture.webp" },


  { name: "Africa Now", src: "/assets/logos/light-up-africa-banner.png" },
];

export default function BrandCarousel() {
  return ( //make logo bigger and more centered
    <div className="brand-carousel">
      <h2>Trusted By</h2>
      <div className="carousel-track">
        {brandLogos.map((logo, index) => (
          <div className="logo-slide" key={index}>
            <img src={logo.src} alt={logo.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
