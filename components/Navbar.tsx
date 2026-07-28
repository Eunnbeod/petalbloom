"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (

    <nav className="navbar">

      <img
        src="/logo/logo.png"
        alt="PetalBloom Logo"
        className="logo"
        onClick={() => router.push("/")}
      />

      <div className={`navLinks ${menuOpen ? "active" : ""}`}>

        <button
          className="navButton"
          onClick={() => {
            setMenuOpen(false);
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Home
        </button>

        <button
          className="navButton"
          onClick={() => {
            setMenuOpen(false);
            router.push("/templates");
          }}
        >
          Templates
        </button>

        <button
          className="navButton"
          onClick={() => {
            setMenuOpen(false);
            document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          How it Works
        </button>

        <button
          className="navButton"
          onClick={() => {
            setMenuOpen(false);
            document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          FAQ
        </button>

        <button
          className="navButton"
          onClick={() => {
            setMenuOpen(false);
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact
        </button>

        <button
          className="makeGiftMobile"
          onClick={() => {
            setMenuOpen(false);
            router.push("/templates");
          }}
        >
          Create Gift
        </button>

      </div>
      <button
        className="menuButton"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <button
        className="makeGiftBtn"
        onClick={() => router.push("/templates")}
      >
        Create Gift
      </button>

    </nav>

  );
}