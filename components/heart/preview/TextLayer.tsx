"use client";

import { useGift } from "@/context/GiftContext";

export default function TextLayer() {
  const { gift } = useGift();

  return (
    <div className="receiverName">
      For {gift.receiver || "Someone"} ❤️
    </div>
  );
}