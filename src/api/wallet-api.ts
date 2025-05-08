import type { Entry } from "@src/types/types";

export const fetchWallet = (): Entry[] => {
  const saved: string | null = localStorage.getItem("wallet");
  if (saved) {
    const fetchedWallet: Entry[] = JSON.parse(saved);
    const wallet: Entry[] = [];
    fetchedWallet.map((item) => {
      wallet.push({ ...item, date: new Date(item.date) });
    });
    return wallet;
  } else {
    return [];
  }
};

export const saveWallet = (data: Entry[]) => {
  localStorage.setItem("wallet", JSON.stringify(data));
};
