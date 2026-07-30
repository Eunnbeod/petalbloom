"use client";

const particles = Array.from({ length: 35 }).map(() => ({

    left: `${Math.random() * 100}vw`,
    top: `${Math.random() * 100}vh`,

    size: `${4 + Math.random() * 6}px`,

    delay: `${Math.random() * 6}s`,

    duration: `${4 + Math.random() * 3}s`,

}));

export default function Flowers() {

    return (

        <>
            {particles.map((p, i) => (

                <div
                    key={i}
                    className="pinkParticle"
                    style={{
                        left: p.left,
                        top: p.top,
                        width: p.size,
                        height: p.size,
                        animationDelay: p.delay,
                        animationDuration: p.duration,
                    }}
                />

            ))}
        </>

    );

}