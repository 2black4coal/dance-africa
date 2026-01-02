export default function DonateButton({ amount, custom, label, className = "donate-btn" }) {
  const lastDonation = Number(localStorage.getItem("lastDonation"));
  const donationAmount = amount ?? lastDonation;

  const handleDonate = async () => {
    let finalAmount = donationAmount;

    // ⭐ Custom button logic — does NOT affect fixed buttons
    if (custom) {
      const input = prompt("Enter donation amount (USD):");

      if (!input || isNaN(input) || Number(input) <= 0) {
        alert("Please enter a valid amount.");
        return;
      }

      finalAmount = Number(input);
    }

    // ⭐ Navbar Donate button fallback stays intact
    if (!finalAmount) {
      window.location.href = "/support";
      return;
    }

    // ⭐ Save last donation for navbar fast-donate
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

  return (
    <button onClick={handleDonate} className={className}>
      {label}
    </button>
  );
}
