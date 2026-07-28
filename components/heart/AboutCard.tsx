"use client";
import { useGift } from "@/context/GiftContext";


export default function AboutCard() {
  const { gift, setGift } = useGift();
  
  return (
    <div className="customCard">

      <h2>From Who</h2>

      <p className="cardDescription">
        Choose who sends this gift.
      </p>

      <label>Receiver</label>

      <input
        type="text"
        placeholder="Type receiver name..."
        value={gift.receiver}
        onChange={(e) =>
          setGift({
            ...gift,
            receiver: e.target.value,
          })
        }
      />

      <label>Sender (Optional)</label>

      <input
        type="text"
        placeholder="Type sender name..."
      />

    </div>
  );
}