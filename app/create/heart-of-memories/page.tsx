import AboutCard from "@/components/heart/AboutCard";
import IntroCard from "@/components/heart/IntroCard";
import MessageCard from "@/components/heart/MessageCard";
import UniverseCard from "@/components/heart/UniverseCard";
import PasscodeCard from "@/components/heart/PasscodeCard";
import SpotifyCard from "@/components/heart/SpotifyCard";
import BouquetCard from "@/components/heart/BouquetCard";
import PreviewPanel from "@/components/heart/PreviewPanel";
import BottomNavigation from "@/components/heart/BottomNavigation";
import { GiftProvider } from "@/context/GiftContext";

export default function HeartOfMemories() {
  return (
    

      <main className="heartPage">

        <section className="heartForm">

          <AboutCard />

          <IntroCard />

          <MessageCard />

          <UniverseCard />

          <PasscodeCard />

          <SpotifyCard />

          <BouquetCard />

          <BottomNavigation />

        </section>

        <section className="heartPreview">

          <PreviewPanel />

        </section>

      </main>

    
  );
}