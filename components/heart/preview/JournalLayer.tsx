"use client";

import { useGift } from "@/context/GiftContext";

export default function JournalLayer() {

    const { gift } = useGift();

    return (

        <img
            src={`/templates/heart_of_memories/journal_${gift.journal}.png`}
            className="journalLayer"
            alt="Journal"
        />

    );

}