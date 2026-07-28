export default function UniverseCard() {
  return (
    <div className="customCard">

      <h2>Experience</h2>

      <p className="cardDescription">
        Personalize the beginning of your gift.
      </p>

      <label>Intro Title</label>

      <input
        type="text"
        placeholder="Our Little Universe"
      />

      <label>Opening Quote</label>

      <input
        type="text"
        placeholder="Every memory begins with love..."
      />

    </div>
  );
}