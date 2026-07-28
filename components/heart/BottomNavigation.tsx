"use client";

import { useRouter } from "next/navigation";

export default function BottomNavigation() {

    const router = useRouter();

    return (

        <div className="bottomNavigation">

            <div>

                <p>Total</p>

                <h2>Rp25.000</h2>

            </div>

            <button
                onClick={() => router.push("/payment")}
            >
                Continue →
            </button>

        </div>

    );

}