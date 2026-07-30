"use client";

const flowerImages = [
  "/flowers/rose_red.png",
  "/flowers/tulip_pink.png",
  "/flowers/rose_pink.png",
  "/flowers/tulip_pink.png",
  "/flowers/peony_pink.png",
  "/flowers/peony_white.png",
];

export default function FlowerLayer() {

  const flowers = Array.from({ length: 20 }).map((_, i) => {

    const image = flowerImages[i % flowerImages.length];

    let left = Math.random() * 100;
    let top = Math.random() * 100;

    // Avoid the center area
    while (
      left > 28 &&
      left < 72 &&
      top > 18 &&
      top < 82
    ) {
      left = Math.random() * 100;
      top = Math.random() * 100;
    }

    return (

      <img
        key={i}
        src={image}
        className="randomFlower"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: `${40 + Math.random() * 70}px`,
          opacity: 0.35 + Math.random() * 0.6,
          transform: `rotate(${Math.random()*360}deg)`,
          animationDelay: `${Math.random()*5}s`,
          animationDuration: `${7 + Math.random()*5}s`,
        }}
      />

    );

  });

  return <>{flowers}</>;

}



