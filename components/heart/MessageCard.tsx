"use client";

import { useGift } from "@/context/GiftContext";

export default function MessageCard() {

  const { gift, setGift } = useGift();

  return (

    <div className="customCard">

      <h2>Message</h2>

      <p className="cardDescription">
        Write a heartfelt message.
      </p>

      <label>Message Title</label>

      <input
        type="text"
        placeholder="Forever With You..."
        value={gift.messageTitle || ""}
        onChange={(e)=>

          setGift({

            ...gift,

            messageTitle:e.target.value,

          })

        }
      />

      <label>Your Message</label>

      <textarea

        rows={8}

        placeholder="Write something beautiful..."

        value={gift.message || ""}

        onChange={(e)=>

          setGift({

            ...gift,

            message:e.target.value,

          })

        }

      />

    </div>

  );

}