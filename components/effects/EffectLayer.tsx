"use client";

import Sparkles from "./Sparkles";
import Hearts from "./Hearts";
import Flowers from "./Flowers";
import Stars from "./Stars";

type Props = {
  effect?: string;
};

export default function EffectLayer({ effect }: Props) {

  switch (effect) {

    case "hearts":
      return <Hearts />;

    case "flowers":
      return <Flowers />;

    case "stars":
      return <Stars />;

    default:
      return <Sparkles />;

  }

}