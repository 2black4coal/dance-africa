export default function DonateButton({ amount, label, className = "donate-btn" }) {
  // Determine which amount to use
  const donationAmount =
    amount ?? Number(localStorage.getItem("lastDonation")) ?? 10;

  const handleDonate = async () => {
    try {
      // Save the last donation for fast Navbar use
      localStorage.setItem("lastDonation", donationAmount);

      // Call backend API
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: donationAmount }), // dollars
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error("Stripe redirect failed:", err);
    }
  };

  return (
    <button onClick={handleDonate} className={className}>
      {label} {amount ? `($${donationAmount})` : ""}
    </button>
  );
}
