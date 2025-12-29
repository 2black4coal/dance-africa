import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.css";
import MusicProvider from "./context/MusicProvider";
import { DonationProvider } from "./context/DonationContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <MusicProvider>
    <App />
  </MusicProvider>
);


<DonationProvider>
  <App />
</DonationProvider>
