import { motion } from "framer-motion";
import "../styles/custom-modal.css";

export default function CustomAmountModal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;

  let amountValue = "";

  const handleSubmit = () => {
    const num = Number(amountValue);

    if (!num || num <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    onSubmit(num);
  };

  return (
    <div className="modal-overlay">
      <motion.div
        className="modal-container"
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>×</button>

        <h2 className="modal-title">Enter Custom Amount</h2>

        <input
          type="number"
          className="modal-input"
          placeholder="USD"
          onChange={(e) => (amountValue = e.target.value)}
        />

        <button className="modal-submit" onClick={handleSubmit}>
          Continue
        </button>
      </motion.div>
    </div>
  );
}
