"use client";

import { useParams, useRouter } from "next/navigation";

export default function OpenGift() {

  const router = useRouter();

  const { id } = useParams();

  return (

    <main className="giftOpening">

      <div className="openingCard">

        <div className="openingFlower">

          🌸

        </div>

        <h1>

          A Special Gift
          Awaits You

        </h1>

        <p>

          Someone created a beautiful digital bouquet
          just for you.

        </p>

        <button
          className="openGiftButton"
          onClick={() => router.push(`/gift/${id}/view`)}
        >

          Open Gift

        </button>

      </div>

    </main>

  );

}