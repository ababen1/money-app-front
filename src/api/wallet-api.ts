import type { Entry } from "@src/types/types";

const url = "http://127.0.0.1:5000/";
const headers = {
  "Content-Type": "application/json",
};

export const fetchWallet = async (): Promise<Entry[]> => {
  let wallet: Entry[] = [];
  try {
    const res = await fetch(url + "entries");
    if (res.ok) {
      const json = await res.json();
      wallet = json.entries;
    } else {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
  } catch (e) {
    console.error(e);
  } finally {
    return wallet;
  }
};

export const addEntry = async (data: Omit<Entry, "id">) => {
  try {
    const res = await fetch(url + "entries", {
      method: "POST",
      body: JSON.stringify(data),
      headers: headers,
    });
    if (res.ok) {
      return "success!";
    } else {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
  } catch (e) {
    console.error(e);
  }
};
