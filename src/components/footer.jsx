import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h2>Dance Africa</h2>
      </div>

      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms of Use</a>
      </div>

      <div className="footer-copy">
        <p>© {new Date().getFullYear()} Dance Africa. All rights reserved.</p>
      </div>
    </footer>
  );
  
}