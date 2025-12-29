import { NavLink } from "react-router-dom";
import DonateButton from "./DonateButton.jsx"; // <-- updated import
import "../styles/navbar.css";

export default function Navbar({ overlay = false }) {
  return (
    <nav className={`navbar ${overlay ? "navbar-overlay" : ""}`}>
      <div
        className="site-nav glass"
        style={{
          display: "flex",
          gap: "0.2rem",           // spacing between tabs
          alignItems: "center",
          flexWrap: "wrap",         // wrap on smaller screens
          justifyContent: "center", // center tabs on mobile
          padding: "12px 20px",
        }}
      >
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>

        <NavLink to="/dance-styles" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          DanceStyles
        </NavLink>

        <NavLink to="/instruments" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Instruments
        </NavLink>

        <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Gallery
        </NavLink>

        <NavLink to="/events" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Events
        </NavLink>

        <NavLink to="/support" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Support
        </NavLink>

        <NavLink to="/advertise" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Advertise
        </NavLink>


 <DonateButton amount={1000} label="❤️ Donate" />
      </div>
    </nav>
  );
}
