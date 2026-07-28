"use client";

import { useRouter } from "next/navigation";
import { createGift } from "@/lib/giftService";
import { useGift } from "@/context/GiftContext";

export default function PaymentFooter() {

  const router = useRouter();

  const { gift } = useGift();

  async function handlePayment() {

    try {

      const savedGift = await createGift({

        template: "Heart of Memories",

        receiver: gift.receiver,

        sender: gift.sender,

        duration: "30 Days",

        payment_method: "QRIS",

        status: "pending",

        gift_data: gift,

      });

      router.push(`/payment/done?id=${savedGift.id}`);

    } catch (err) {

      console.error(err);

      alert("Failed to save gift.");

    }

  }

  return (

    <div className="paymentFooter">

      <div>

        <p>Total</p>

        <h2>Rp25.000</h2>

      </div>

      <button onClick={handlePayment}>

        Continue Payment →

      </button>

    </div>

  );

}