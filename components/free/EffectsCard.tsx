"use client";

import { useGift } from "@/context/GiftContext";

const effects = [

  {
    id:"sparkles",
    icon:"✨",
    title:"Sparkles",
  },

  {
    id:"hearts",
    icon:"💖",
    title:"Hearts",
  },

  {
    id:"flowers",
    icon:"🌸",
    title:"Flowers",
  },

  {
    id:"stars",
    icon:"⭐",
    title:"Stars",
  },

];

export default function EffectsCard(){

  const { gift, setGift } = useGift();

  return(

    <div className="customCard">

      <h2>Animations</h2>

      <p className="cardDescription">

        Choose the atmosphere of your bouquet.

      </p>

      <div className="effectsGrid">

        {effects.map((effect)=>(

          <button

            key={effect.id}

            className={`effectButton ${
              gift.effect===effect.id ? "activeEffect" : ""
            }`}

            onClick={()=>

              setGift({

                ...gift,

                effect:effect.id,

              })

            }

          >

            <div>

              {effect.icon}

            </div>

            <span>

              {effect.title}

            </span>

          </button>

        ))}

      </div>

    </div>

  );

}