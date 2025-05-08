import type { Entry } from "@src/types/types";

export const fetchWallet = (): Entry[] => {
  const saved: string | null = localStorage.getItem("wallet");
  if (saved) {
    return JSON.parse(saved);
  } else {
    return [];
  }
};

export const saveWallet = (data: Entry[]) => {
  localStorage.setItem("wallet", JSON.stringify(data));
};
