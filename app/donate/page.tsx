"use client";

import { useRouter } from "next/navigation";
import { useGift } from "@/context/GiftContext";
import { createGift } from "@/lib/giftService";



export default function DonatePage() {

    const router = useRouter();

    const { gift } = useGift();


    async function handleSkip() {

    try {

        const savedGift = await createGift({

            template: "Simple Bouquet",

            receiver: gift.receiver,

            sender: gift.sender,

            duration: "30 Days",

            payment_method: "Free",

            status: "active",

            gift_data: gift,

        });

        router.push(`/payment/done?id=${savedGift.id}`);

    } catch (err) {

        console.error(err);

        alert("Failed to create gift.");

    }

}

    return (
        

        <main className="donatePage">

            <div className="donateCard">

                <span className="donateBadge">

                    🌸 Optional Support

                </span>

                <h1>

                    Support PetalBloom

                </h1>

                <p>

                    PetalBloom will always have free templates.
                    If you enjoyed creating this gift, you can support future development.

                </p>

                <div className="supportMethods">

                    <div
                        className="supportMethod"
                        onClick={()=>router.push("/donate-payment")}
                    >

                        <div>

                            <h3>❤️ Support via GoPay</h3>

                            <p>

                                Donate any amount using GoPay.

                            </p>

                        </div>

                        <span className="supportArrow">

                            →

                        </span>

                    </div>

                    <div
                        className="supportMethod"
                        onClick={() =>
                            window.open("https://paypal.me/eunbeod")
                        }
                    >

                        <div>

                            <h3>🌍 Support via PayPal</h3>

                            <p>

                                International supporters.

                            </p>

                        </div>

                        <span className="supportArrow">

                            →

                        </span>

                    </div>

                </div>
                

                <button
                    className  = "continueDonation"
                    onClick={handleSkip}
                >

                    Skip & Generate Gift →

                </button>

                

            </div>

        </main>

    );

}