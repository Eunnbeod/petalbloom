"use client";

import { supabase } from "@/lib/supabase";

export default function TestSave() {

  async function saveGift() {

    const { data, error } = await supabase
      .from("gifts")
      .insert([
        {
          template: "Heart of Memories",
          receiver: "Bryan",
          sender: "PetalBloom",
          duration: "30 Days",
          payment_method: "QRIS",
          status: "pending",
          gift_data: {
            bouquet: 3,
            message: "Hello ❤️"
          }
        }
      ])
      .select();

    console.log(data);
    console.log(error);

  }

  return (

    <main style={{ padding: 50 }}>

      <button onClick={saveGift}>

        Save Gift

      </button>

    </main>

  );

}