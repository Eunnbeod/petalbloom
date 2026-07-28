export default function PasscodeCard() {
  return (
    <div className="customCard">

      <h2>Secret Passcode</h2>

      <p className="cardDescription">
        Optional. Protect your memories with a passcode.
      </p>

      <input
        type="password"
        placeholder="Create passcode..."
      />

    </div>
  );
}