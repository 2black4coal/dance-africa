export default function DonateButton({ amount, label, className = "donate-btn" }) {
  const handleDonate = async () => {
    try {
      const res = await fetch("/https://dance-africa.vercel.app/api/create-checkout-session", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
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
      {label}
    </button>
  );
}
