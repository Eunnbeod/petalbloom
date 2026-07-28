"use client";

import { useGift } from "@/context/GiftContext";

export default function JournalCard(){

const { gift,setGift } = useGift();

return(

<div className="customCard">

<h2>Memory Journal</h2>

<p className="cardDescription">

Choose how the memory journal appears.

</p>

<div className="optionGroup">

<button

className={gift.journal==="closed"?"activeOption":""}

onClick={()=>setGift({...gift,journal:"closed"})}

>

Closed

</button>

<button

className={gift.journal==="open"?"activeOption":""}

onClick={()=>setGift({...gift,journal:"open"})}

>

Opened

</button>

</div>

</div>

);

}