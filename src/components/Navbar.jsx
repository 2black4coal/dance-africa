import { NavLink } from "react-router-dom";
import DonateButton from "../components/DonateButton";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="site-nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/dance-styles" className="nav-link">Dance Styles</NavLink>
        <NavLink to="/instruments" className="nav-link">Instruments</NavLink>
        <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
        <NavLink to="/events" className="nav-link">Events</NavLink>
        <NavLink to="/support" className="nav-link">Support</NavLink>
        <NavLink to="/advertise" className="nav-link">Advertise</NavLink>

        {/* ❤️ DONATE BUTTON (Stripe-enabled) */}
        <DonateButton label="❤️ Donate" />

      </div>
    </nav>
  );
}
