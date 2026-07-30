"use client";

const stars = ["✦", "✧", "⭐", "✶", "✷"];

export default function Stars() {

  return (

    <>
      {Array.from({ length: 30 }).map((_, i) => {

        const star = stars[Math.floor(Math.random() * stars.length)];

        return (

          <span
            key={i}
            className="floatingStar"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${10 + Math.random() * 75}%`,
              fontSize: `${10 + Math.random() * 12}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            {star}
          </span>

        );

      })}
    </>

  );

}