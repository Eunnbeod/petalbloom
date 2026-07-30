"use client";

import { useGift } from "@/context/GiftContext";

export default function BouquetCard() {

  const { gift, setGift } = useGift();
  return (

    <div className="customCard">

      <h2>Choose Bouquet</h2>

      <p className="cardDescription">
        Select the bouquet that will appear at the end of the experience.
      </p>

      <div className="bouquetGrid">

        {Array.from({ length: 12 }).map((_, index) => (

          <div
            key={index}
            className={`bouquetItem ${
              gift.bouquet === index + 1 ? "selectedBouquet" : ""
          }`}
          onClick={() =>
            setGift({
              ...gift,
              bouquet: index + 1,
            })
          }
      >

            <img
              src={`/bouquets/bouquet${index + 1}.png`}
              alt=""
            />

          </div>

        ))}

      </div>

    </div>
  );
}