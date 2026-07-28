"use client";

import { useGift } from "@/context/GiftContext";

export default function BouquetLayer() {

    const { gift } = useGift();

    return (

        <img
            src={`/templates/heart_of_memories/bouquet${gift.bouquet}.png`}
            className="bouquetLayer"
            alt="Bouquet"
        />

    );

}