"use client";

import { useGift } from "@/context/GiftContext";

export default function BouquetLayer() {

    const { gift } = useGift();

    return (

        <img
            src={`/bouquets/bouquet${gift.bouquet}.png`}
            className="bouquetLayer"
            alt="Bouquet"
        />

    );

}