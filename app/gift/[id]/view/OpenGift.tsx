"use client";

type Props = {
  receiver: string;
  onOpen: () => void;
};

export default function OpenGift({ receiver, onOpen }: Props) {

  return (

    <div className="openGiftScreen">

      <div className="openGiftCard">

        <p className="giftArrived">

          A digital bouquet has arrived

        </p>

        <h1>

          For {receiver || "Someone"}

        </h1>

        <button
          className="openGiftButton"
          onClick={onOpen}
        >
          🌸 Open Me
        </button>

        <p className="giftMade">

          Crafted with ♡ by PetalBloom

        </p>

      </div>

    </div>

  );

}