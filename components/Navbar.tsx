"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter();

  return (

    <nav className="navbar">

      <img
        src="/logo/logo.png"
        alt="PetalBloom Logo"
        className="logo"
        onClick={() => router.push("/")}
      />

      <div className="navLinks">

        <button
          className="navButton"
          onClick={() => {
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Home
        </button>

        <button
          className="navButton"
          onClick={() => router.push("/templates")}
        >
          Templates
        </button>

        <button
          className="navButton"
          onClick={() => {
            document
              .getElementById("how-it-works")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          How it Works
        </button>

        <button
          className="navButton"
          onClick={() => {
            document
              .getElementById("faq")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          FAQ
        </button>

        <button
          className="navButton"
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact
        </button>

      </div>

      <button
        className="makeGiftBtn"
        onClick={() => router.push("/templates")}
      >
        Create Gift
      </button>

    </nav>

  );
}