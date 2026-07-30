"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import FlowerLayer from "@/components/FlowerLayer";
import SparkleLayer from "@/components/SparkleLayer";
import OpenGift from "./OpenGift";
import EffectLayer from "@/components/effects/EffectLayer";

export default function GiftViewPage() {

  const { id } = useParams();

  const [gift, setGift] = useState<any>(null);

  const [opened, setOpened] = useState(false);

  useEffect(() => {

    async function loadGift() {

        console.log("Gift ID:",id)

      const { data,error } = await supabase
        .from("gifts")
        .select("*")
        .eq("id", id)
        .single();

        console.log("Data:", data);
        console.log("Error:", error);

      setGift(data);

    }

    loadGift();

  }, [id]);

  if (!gift) {

    return (
    
        <main className="giftOpening">

        <div className="openingCard">

            <h2>Preparing your bouquet...</h2>

        </div>

    </main>);
  }

    if (!opened) {

    return (

        <OpenGift
        receiver={gift.receiver}
        onOpen={() => setOpened(true)}
        />

    );

    }

    return (

        <main className="freeGiftPage">

            <div className="giftGlow"></div>

            <FlowerLayer />

            <EffectLayer effect={gift.gift_data.effect}/>


            <SparkleLayer />

            <div className="freeGiftCard">

                <img
                    src={`/bouquets/bouquet${gift.gift_data.bouquet}.png`}
                    className="freeBouquet"
                />

                <div className="giftDivider"></div>

                <p className="giftFor">
                    For
                </p>

                <h1>

                    {gift.receiver}

                </h1>

                <p className="giftFrom">

                    From {gift.sender || "Someone"}

                </p>

                <div className="messageCard">

                    <div className="messageFlower">
                        ✿
                    </div>

                    <h2>

                        {gift.gift_data.messageTitle || "A Special Message"}

                    </h2>

                    <p>

                        {gift.gift_data.message}

                    </p>

                    <div className="messageFlowerBottom">
                        ✿
                    </div>

                </div>

                <div className="giftFooter">

                    Crafted with ♡

                    <br />

                    PetalBloom

                </div>

            </div>

        </main>

    );
}