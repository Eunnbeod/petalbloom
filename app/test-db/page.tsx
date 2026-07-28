"use client";

import { supabase } from "@/lib/supabase";

export default function TestDB() {

  async function testConnection() {

    const { data, error } = await supabase
      .from("gifts")
      .select("*");

    console.log(data);
    console.log(error);

  }

  return (

    <main
      style={{
        padding: 50,
      }}
    >

      <button onClick={testConnection}>

        Test Database

      </button>

    </main>

  );

}