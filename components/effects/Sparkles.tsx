"use client";

const icons = ["✦", "✧", "✨", "⋆", "❇"];

export default function Sparkles() {

  return (

    <>
      {Array.from({ length: 45 }).map((_, i) => {

        const icon = icons[Math.floor(Math.random() * icons.length)];

        return (

          <span
            key={i}
            className="magicParticle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              fontSize: `${10 + Math.random() * 14}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            {icon}
          </span>

        );

      })}
    </>

  );

}