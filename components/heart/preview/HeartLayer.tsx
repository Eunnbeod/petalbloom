"use client";

import { useGift } from "@/context/GiftContext";

export default function HeartLayer() {

    const { gift } = useGift();

    return (

        <img
            src={`/templates/heart_of_memories/${gift.heart}.png`}
            className="heartLayer"
            alt="Heart"
        />

    );

}