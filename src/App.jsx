import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackgroundMusic from "./components/BackgroundMusic";

// pages
import Home from "./pages/Home";
import DanceStyles from "./pages/DanceStyles";
import Gallery from "./pages/Gallery";
import Instruments from "./pages/Instruments";

import Events from "./pages/Events";
import Support from "./pages/Support";
import Advertise from "./pages/Advertise";
import Donate from "./pages/Donate";



export default function App() {
  return (
    <BrowserRouter>
      {/* 🔥 GLOBAL MUSIC — MOUNTS ONCE */}
      <BackgroundMusic />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dance-styles" element={<DanceStyles />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/instruments" element={<Instruments />} />
        <Route path="/events" element={<Events />} />
        <Route path="/support" element={<Support />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>

    </BrowserRouter>
  );
}
