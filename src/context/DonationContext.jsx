import { createContext, useContext, useState } from "react";

const DonationContext = createContext();

export function DonationProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <DonationContext.Provider value={{ open, setOpen }}>
      {children}
    </DonationContext.Provider>
  );
}

export function useDonation() {
  return useContext(DonationContext);
}
