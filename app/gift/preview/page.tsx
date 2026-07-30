"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loadGiftFromStorage } from "@/lib/storage";
import FlowerLayer from "@/components/FlowerLayer";
import EffectLayer from "@/components/effects/EffectLayer";

export default function PreviewPage() {

    const router = useRouter();

    const [gift, setGift] = useState<any>(null);

    useEffect(() => {

        const saved = loadGiftFromStorage();

        setGift(saved);

    }, []);

    if (!gift) {

        return <main className="giftOpening">

            <div className="openingCard">

                <h2>Loading Preview...</h2>

            </div>

        </main>;

    }

    return (

        <main className="freeGiftPage">

            <button
                className="backEditorButton"
                onClick={() => router.back()}
            >
                ← Back to Editor
            </button>

            <div className="giftGlow"></div>
            <FlowerLayer />
            <EffectLayer effect={gift.effect} />
            <div className="freeGiftCard">

                <div className="bouquetContainer">

                    

                    <img
                        src={`/bouquets/bouquet${gift?.bouquet}.png`}
                        className="freeBouquet"
                    />

                </div>

                <div className="giftDivider"></div>

                <p className="giftFor">

                    For

                </p>

                <h1>

                    {gift.receiver || "Someone Special"}

                </h1>

                <p className="giftFrom">

                    From {gift.sender || "Someone"}

                </p>

                <div className="messageCard">

                    <div className="messageFlower">

                        ✿

                    </div>

                    <h2>

                        {gift.messageTitle || "A Special Message"}

                    </h2>

                    <p>

                        {gift.message || "Your message will appear here."}

                    </p>

                    <div className="messageFlowerBottom">

                        ✿

                    </div>

                </div>

            </div>

        </main>

    );

}