import { supabase } from "@/lib/supabase";

export default async function OpenGift({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const { data: gift } = await supabase
    .from("gifts")
    .select("*")
    .eq("id", id)
    .single();

  if (!gift) {
    return (
      <main className="giftOpening">
        <h1>Gift Not Found</h1>
      </main>
    );
  }

  return (
    <main className="giftOpening">

      <h1>{gift.template}</h1>

      <p>
        For <strong>{gift.receiver}</strong>
      </p>

      <p>
        From <strong>{gift.sender}</strong>
      </p>

      <button>
        Open Heart of Memories
      </button>

    </main>
  );
}