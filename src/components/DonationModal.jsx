import { useEffect } from "react";
import "../styles/donation.css";

export default function DonationModal({ open, onClose }) {
  if (!open) return null;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="donation-backdrop" onClick={onClose}>
      <div className="donation-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Support Dance Africa</h2>

        <p className="donation-text">
          Your donation helps preserve African dance heritage and support
          cultural education worldwide.
        </p>

        <div className="donation-amounts">
          <button>$5</button>
          <button>$10</button>
          <button>$25</button>
          <button>Custom</button>
        </div>

        <div className="donation-methods">
          <button className="primary">Donate with Stripe</button>
          <button>PayPal</button>
          <button>Apple / Google Pay</button>
        </div>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
