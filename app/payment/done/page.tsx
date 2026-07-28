"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "../payment.module.css";

export default function DonePage() {

  const searchParams = useSearchParams();

const id = searchParams.get("id");

const giftLink = `https://petalbloom.vercel.app/gift/${id}/open`;

  return (

    <main className={styles.successPage}>

      <div className={styles.successCard}>

        <div className={styles.successIcon}>
          🌸
        </div>

        <h1>Gift Created!</h1>

        <p>
          Your digital bouquet is ready to share.
        </p>

        <div className={styles.giftLinkBox}>

          <p>Your Gift Link</p>

          <span>
            {giftLink}
          </span>

        </div>

        <div className={styles.successButtons}>

          <button
          onClick={() => {
            navigator.clipboard.writeText(giftLink);
            alert("Gift Link Copied!");
          }}
          >
            Copy Link
          </button>

          <Link href={giftLink.replace("https://petalbloom.vercel.app", "")}>

            <button>
              Preview Gift
            </button>

          </Link>

          <Link href="/create">

            <button className={styles.secondaryButton}>
              Create Another
            </button>

          </Link>

        </div>

      </div>

    </main>

  );

}