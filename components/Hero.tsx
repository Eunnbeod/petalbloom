"use client";

import { useRouter } from "next/navigation";

export default function Hero() {

  const router = useRouter();

  return (
    
    <section 
    id ="home"
    className="hero">

      {/* Left Side */}
      <div className="heroText">

        <p className="tagline">
          🌸 Send Love Digitally
        </p>

        <h1>
          Every Moment
          <br />
          Deserves to Bloom
        </h1>

        <p className="description">
          Create heartfelt digital bouquets filled with flowers,
          memories, and beautiful messages that your loved ones
          can treasure forever.
        </p>

        <div className="heroButtons">

          <button className="primaryBtn"
          onClick={() => router.push("/templates")}
          >
            Make Gift
          </button>

          <button className="secondaryBtn"
          onClick={() => router.push("/templates")}
          >
            Explore Templates
          </button>

        </div>

      </div>

      {/* Right Side */}
      <div className="heroImage">

        {/* Background Glow */}
        <div className="heroGlow"></div>

        {/* Floating Decorations */}
        <img
          src="/flowers/rose_pink.png"
          className="flower flower1"
          alt=""
        />

        <img
          src="/flowers/tulip_pink.png"
          className="flower flower2"
          alt=""
        />

        <img
          src="/flowers/peony_white.png"
          className="flower flower3"
          alt=""
        />

        {/* Main Bouquet */}
        <img
          src="/images/hero-placeholder.png"
          alt="Bouquet"
          width={650}
          height={650}
          className="mainBouquet"
        />

      </div>

    </section>
  );
}