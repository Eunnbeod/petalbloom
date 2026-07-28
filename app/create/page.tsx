export default function CreatePage() {
  return (
    <main className="createPage">

      <div className="createHeader">

        <h1>Choose Your Template</h1>

        <p>
          Pick a beautiful experience and start creating your digital bouquet.
        </p>

      </div>

      <input
        className="searchBar"
        placeholder="Search templates..."
      />

      <div className="filterButtons">

        <button>All</button>

        <button>Birthday</button>

        <button>Graduation</button>

        <button>Anniversary</button>

        <button>Confession</button>

      </div>

      <div className="templateGrid">

        <div className="templateCard">

          <img
            src="/templates/heart.jpg"
            alt=""
          />

          <h3>Heart of Memories</h3>

          <p>
            Open beautiful letters before discovering
            your bouquet.
          </p>

          <div className="cardButtons">

            <button className="previewBtn">
              Preview
            </button>

            <button className="chooseBtn">
              Choose
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}