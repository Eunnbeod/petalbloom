"use client";

import BackgroundLayer from "./preview/BackgroundLayer";
import BouquetLayer from "./preview/BouquetLayer";
import HeartLayer from "./preview/HeartLayer";
import JournalLayer from "./preview/JournalLayer";
import MusicLayer from "./preview/MusicLayer";
import EffectsLayer from "./preview/EffectsLayer";
import TextLayer from "./preview/TextLayer";

export default function PreviewPanel() {
  return (
    <div className="previewPanel">

      <div className="previewHeader">
        <h2>Live Preview</h2>
        <p>Your gift updates instantly.</p>
      </div>

      <div className="previewCanvas">

        <BackgroundLayer />

        <HeartLayer />

        <JournalLayer />

        <MusicLayer />

        <BouquetLayer />

        <EffectsLayer />

        <TextLayer />

      </div>

    </div>
  );
}