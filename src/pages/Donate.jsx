import { useState } from "react";


export default function Donate() {
  const [amount, setAmount] = useState(10);

  const handleDonate = async () => {
    const res = await fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount * 100 }),
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <>
   
      <section className="donate-page">
        <h1>Support Dance Africa</h1>

        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <button className="cta-button" onClick={handleDonate}>
          Donate Now
        </button>
      </section>
    </>
  );
}
