"use client";

import { useRouter } from "next/navigation";

export default function Footer() {

  const router = useRouter();

  return (

    <footer
      id="contact"
      className="footer"
    >

      <div className="footerTop">

        <div className="footerBrand">

          <img
            src="/logo/logo.png"
            alt="PetalBloom"
            className="footerLogo"
          />

          <p>
            Creating digital bouquets filled with flowers,
            memories, and heartfelt messages that bloom
            into unforgettable moments.
          </p>

        </div>

        <div className="footerLinks">

          <div>

            <h4>Navigation</h4>

            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Home
            </button>

            <button onClick={() => router.push("/templates")}>
              Templates
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              How It Works
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("faq")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              FAQ
            </button>

          </div>

          <div>

            <h4>Support</h4>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=petalbloomdaily@gmail.com"
              target="_blank"
               rel="noopener noreferrer"
            >
              Contact Us
            </a>

            <a href="/privacy">
              Privacy Policy
            </a>

            <a href="">
              Terms of Service
            </a>

          </div>

          <div>

            <h4>Contact</h4>

            <p>📧 petalbloomdaily@gmail.com</p>

            <p>
              Replies within 24–48 hours.
            </p>

          </div>

        </div>

      </div>

      <hr />

      <div className="footerBottom">

        <p>
          © 2026 PetalBloom. Every Moment Deserves to Bloom 🌸
        </p>

      </div>

    </footer>

  );
}