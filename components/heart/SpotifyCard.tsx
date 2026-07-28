export default function SpotifyCard() {
  return (
    <div className="customCard">

      <h2>Music</h2>

      <p className="cardDescription">
        Add a Spotify song or music link.
      </p>

      <label>Spotify URL</label>

      <input
        type="text"
        placeholder="https://open.spotify.com/..."
      />

    </div>
  );
}