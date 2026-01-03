import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/custom-modal.css";

export default function CustomAmountModal({ isOpen, onClose, onSubmit }) {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const triggerHaptic = () => {
    if (navigator.vibrate) navigator.vibrate(40);
  };

  const validateAmount = () => {
    const num = Number(amount);

    if (!amount) {
      setError("Amount is required.");
      triggerHaptic();
      return false;
    }

    if (num <= 0) {
      setError("Amount must be greater than zero.");
      triggerHaptic();
      return false;
    }

    if (num < 1) {
      setError("Minimum donation is $1.");
      triggerHaptic();
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = () => {
    if (!validateAmount()) return;
    onSubmit(Number(amount));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <motion.div
        className="modal-container gold-glow"
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <button className="modal-close" onClick={onClose}>×</button>

        <h2 className="modal-title">Enter Custom Amount</h2>

        <input
          type="number"
          inputMode="decimal"
          min="1"
          className="modal-input"
          placeholder="USD"
          value={amount}
          onChange={(e) => {
            const value = e.target.value;

            // Prevent negative values visually
            if (value < 0) return;

            setAmount(value);
            setError("");
          }}
        />

        {error && <p className="modal-error">{error}</p>}

        <button className="modal-submit" onClick={handleSubmit}>
          Continue
        </button>
      </motion.div>
    </div>
  );
}
