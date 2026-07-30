"use client";

import { useRouter } from "next/navigation";

export default function TemplateSection() {
  const router = useRouter();
  return (
    <section className="templateSection">

      <h2>Popular Templates</h2>

      <p className="sectionSubtitle">
        Choose a beautiful experience for someone special.
      </p>

      <div className="templateGrid">

        <div
          className="templateCard"
          onClick={() => router.push("/create/free")}
        >

          <img src="/templates/free.jpg" alt="Heart of Memories" />

          <span className="premiumBadge">FREE</span>

          <h3>Simple Bouquet</h3>

          <p>
            A beautiful digital bouquet with a heartfelt message, completely free. 🌸
          </p>

          <button className="useTemplateBtn">
            Use Template →
          </button>

        </div>

        <div className="templateCard">

          <img src="/templates/mystery.jpg" alt="Mystery Gift Box" />

          <span className="comingSoonBadge">
            Coming Soon
          </span>

          <h3>Mystery Gift Box</h3>

          <p>
            Unlock surprises one by one until the final bouquet appears.
          </p>

        </div>

        <div className="templateCard">

          <img src="/templates/orbit.jpg" alt="Orbit of Memories" />

          <span className="comingSoonBadge">
            Coming Soon
          </span>

          <h3>Orbit of Memories</h3>

          <p>
            Memories revolve beautifully before blooming into flowers.
          </p>

        </div>

      </div>

    </section>
  );
}