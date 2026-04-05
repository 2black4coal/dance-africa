import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import BackgroundMusic from "./components/BackgroundMusic";


import DonationSuccess from "./pages/DonationSuccess";
import DonationCancel from "./pages/DonationCancel";
import About from "./pages/About";
import Home from "./pages/Home";
import DanceStyles from "./pages/DanceStyles";
import Gallery from "./pages/Gallery";
import Instruments from "./pages/Instruments";
import Events from "./pages/Events";
import Support from "./pages/Support";
import Advertise from "./pages/Advertise";
import Donate from "./pages/Donate";
import Footer from "./components/footer"; // correct if Footer.jsx is inside components
function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Hide global navbar ONLY on gallery */}
      {location.pathname !== "/gallery" && <Navbar />}

      {/* Lower-left corner music UI */}
      <BackgroundMusic />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dance-styles" element={<DanceStyles />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/instruments" element={<Instruments />} />
        <Route path="/events" element={<Events />} />
        <Route path="/support" element={<Support />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donation-success" element={<DonationSuccess />} />
        <Route path="/donation-cancel" element={<DonationCancel />} />

      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );

}
