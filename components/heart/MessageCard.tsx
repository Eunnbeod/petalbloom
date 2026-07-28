export default function MessageCard() {
  return (
    <div className="customCard">

      <h2>Message</h2>

      <p className="cardDescription">
        Write a heartfelt message for someone special.
      </p>

      <label>Message Title</label>

      <input
        type="text"
        placeholder="Forever With You..."
      />

      <label>Your Message</label>

      <textarea
        placeholder="Write your memories here..."
        rows={8}
      />

    </div>
  );
}