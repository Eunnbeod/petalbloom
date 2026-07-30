import AboutCard from "@/components/heart/AboutCard";
import MessageCard from "@/components/heart/MessageCard";
import BouquetCard from "@/components/heart/BouquetCard";
import BottomNavigation from "@/components/heart/BottomNavigation";
import EffectsCard from "@/components/free/EffectsCard";

export default function FreeEditorPage() {

  return (

    <main className="freeEditorPage">

      <div className="freeEditorContainer">

        <AboutCard />

        <MessageCard />

        <BouquetCard />

        <EffectsCard />

        <BottomNavigation />

      </div>

    </main>

  );

}