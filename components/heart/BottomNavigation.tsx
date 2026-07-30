"use client";

import { useRouter } from "next/navigation";

export default function BottomNavigation() {

    const router = useRouter();

    return (

        <div className="bottomNavigation">

            <button
                className="previewGiftButton"
                onClick={() => router.push("/gift/preview")}
            >
                ✨ Preview Experience
            </button>

            <div className="bottomDivider"></div>

            <div className="bottomPrice">

                <span>FREE</span>

            </div>

            <button
                className="continueButton"
                onClick={() => router.push("/donate")}
            >
                Continue →
            </button> 

        </div>

    );

}