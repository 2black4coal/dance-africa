export default function DonateButton({ amount, label, className = "donate-btn" }) {
  // Read last saved donation
  const lastDonation = Number(localStorage.getItem("lastDonation"));

  // Determine which amount to use
  const donationAmount = amount ?? lastDonation;

  const handleDonate = async () => {
    // ⭐ If no amount is available, send user to Support page
    if (!donationAmount) {
      window.location.href = "/support";
      return;
    }

    // Save last donation for navbar fast-donate
    localStorage.setItem("lastDonation", donationAmount);

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: donationAmount }),
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
