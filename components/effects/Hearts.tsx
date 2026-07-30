"use client";

const hearts = ["❤", "💖", "💕", "💗"];

export default function Hearts() {

  return (

    <>
      {Array.from({ length: 24 }).map((_, i) => {

        const heart = hearts[Math.floor(Math.random() * hearts.length)];

        return (

          <span
            key={i}
            className="floatingHeart"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${15 + Math.random() * 70}%`,
              fontSize: `${14 + Math.random() * 12}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            {heart}
          </span>

        );

      })}
    </>

  );

}