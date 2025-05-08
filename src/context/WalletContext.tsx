import { fetchWallet } from "@src/api/wallet-api";
import type { Entry } from "@src/types/types";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface EntriesContext {
  wallet: Entry[];
  setWallet: (val: Entry[]) => void;
}

interface EntriesProvider {
  children: ReactNode;
}

export const WalletContext = createContext<EntriesContext>({
  wallet: [],
  setWallet: () => {},
});

export const EntriesProvider = ({ children }: EntriesProvider) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  useEffect(() => {
    setEntries(fetchWallet());
  }, []);
  return (
    <WalletContext.Provider value={{ wallet: entries, setWallet: setEntries }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletContext;
