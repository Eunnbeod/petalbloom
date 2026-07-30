"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  saveGiftToStorage,
  loadGiftFromStorage,
} from "@/lib/storage";

const GiftContext = createContext<any>(null);

const defaultGift = {
  receiver: "",
  sender: "",
  bouquet: 1,
  messageTitle: "",
  message: "",
  journal: "closed",
  heart: "heart",
  musicBox: "closed",
};

export function GiftProvider({ children }: any) {

  const [gift, setGift] = useState(defaultGift);

  useEffect(() => {

    const savedGift = loadGiftFromStorage();


    if (savedGift) {

      setGift(savedGift);

    }

  }, []);

  useEffect(() => {

    saveGiftToStorage(gift);

  }, [gift]);

  return (
    <GiftContext.Provider value={{ gift, setGift }}>
      {children}
    </GiftContext.Provider>
  );
}

export function useGift() {
  return useContext(GiftContext);
}