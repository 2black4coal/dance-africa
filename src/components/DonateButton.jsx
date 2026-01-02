import { useState } from "react";
import CustomAmountModal from "./CustomAmountModal";

export default function DonateButton({ amount, custom, label, className = "donate-btn" }) {
  const [showModal, setShowModal] = useState(false);

  const lastDonation = Number(localStorage.getItem("lastDonation"));
  const donationAmount = amount ?? lastDonation;

  const startCheckout = async (finalAmount) => {
    localStorage.setItem("lastDonation", finalAmount);

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: finalAmount }),
      });

      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error("Stripe redirect failed:", err);
    }
  };

  const handleDonate = () => {
    if (custom) {
      setShowModal(true);
      return;
    }

    if (!donationAmount) {
      window.location.href = "/support";
      return;
    }

    startCheckout(donationAmount);
  };

  return (
    <>
      <button onClick={handleDonate} className={className}>
        {label}
      </button>

      <CustomAmountModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={(amt) => {
          setShowModal(false);
          startCheckout(amt);
        }}
      />
    </>
  );
}
