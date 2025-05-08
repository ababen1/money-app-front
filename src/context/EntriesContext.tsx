import type { Entry } from "@src/types/types";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface EntriesContext {
  data: Entry[];
  setData: (val: Entry[]) => void;
}

interface EntriesProvider {
  children: ReactNode;
}

export const EntriesContext = createContext<EntriesContext>({
  data: [],
  setData: () => {},
});

export const EntriesProvider = ({ children }: EntriesProvider) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  useEffect(() => {}, []);

  return (
    <EntriesContext.Provider value={{ data: entries, setData: setEntries }}>
      {children}
    </EntriesContext.Provider>
  );
};
