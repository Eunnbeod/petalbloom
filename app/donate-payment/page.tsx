"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGift } from "@/context/GiftContext";
import { createGift } from "@/lib/giftService";

export default function DonatePaymentPage() {

    const searchParams = useSearchParams();

    const router = useRouter();

    const { gift } = useGift();

    const amount = searchParams.get("amount");

    const [method, setMethod] = useState("");

    async function handleFinishDonation() {

        try {

            const savedGift = await createGift({

                template: "Simple Bouquet",

                receiver: gift.receiver,

                sender: gift.sender,

                duration: "30 Days",

                payment_method: "Donation",

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

        <main className="donatePaymentPage">

            <div className="donatePaymentCard">

                <h1>

                    Support PetalBloom 🌸

                </h1>

                <p>

                    Thank you for supporting PetalBloom.
                    

                </p>

                <div className="verificationNotice">

                    <h3>🌙 Verification Notice</h3>

                    <p>

                        Payments made between <b>9:00 PM – 6:00 AM (WITA)</b>
                        may take longer to verify because we're offline.

                        <br /><br />

                        Most payments are verified in less than 30 minutes during working hours.

                    </p>

                </div>

                <p className="supportSubtitle">

                    Thank you for considering supporting PetalBloom.

                    Any amount means a lot and helps keep free templates available for everyone.

                </p>

                <div className="paymentMethodsGrid">

                    <div
                        className={`paymentMethodCard ${method==="gopay" ? "active" : ""}`}
                        onClick={() => setMethod("gopay")}
                    >
                        <img src="/payment/gopay.png"/>
                        <h3>GoPay</h3>
                    </div>

                

                    <div
                        className={`paymentMethodCard ${method==="paypal" ? "active" : ""}`}
                        onClick={() => setMethod("paypal")}
                    >
                        <img src="/payment/paypal.png"/>
                        <h3>PayPal</h3>
                    </div>

                    {method && (

                        <div className="paymentInstruction">

                            {method === "paypal" ? (

                                <>

                                    <h3>Pay via PayPal</h3>

                                    <a
                                        href="https://paypal.me/eunbeod"
                                        target="_blank"
                                    >
                                        Open PayPal
                                    </a>

                                </>

                            ) : (

                                <>

                                    <h3>

                                        Scan the QR below

                                    </h3>

                                    <img
                                        src={`/payment/${method}-qr.png`}
                                        className="paymentQR"
                                    />

                                </>

                            )}

                        </div>

                    )}

                    

                </div>

                <button
                    className="finishDonationButton"
                    onClick={handleFinishDonation}
                >

                    Continue to My Gift 🌸

                </button>

            </div>

        </main>

    );

}