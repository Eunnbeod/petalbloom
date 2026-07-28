"use client";

import { useGift } from "@/context/GiftContext";

export default function MusicLayer() {

    const { gift } = useGift();

    return (

        <img
            src={`/templates/heart_of_memories/music_box_${gift.musicBox}.png`}
            className="musicLayer"
            alt="Music Box"
        />

    );

}