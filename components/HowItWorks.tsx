export default function HowItWorks() {
  return (
    <section 
    id = "how-it-works"
    className="howSection">

      <h2>How It Works</h2>

      <p className="sectionSubtitle">
        Create a beautiful digital gift in just three simple steps.
      </p>

      <div className="stepsContainer">

        <div className="stepBox">

          <div className="stepCircle">
            1
          </div>

          <h3>Choose Template</h3>

          <p>
            Browse beautiful templates by event,
            preview them and choose your favorite.
          </p>

        </div>

        <div className="stepArrow">
          →
        </div>

        <div className="stepBox">

          <div className="stepCircle">
            2
          </div>

          <h3>Customize Gift</h3>

          <p>
            Add flowers, photos, messages,
            music and personalize your gift.
          </p>

        </div>

        <div className="stepArrow">
          →
        </div>

        <div className="stepBox">

          <div className="stepCircle">
            3
          </div>

          <h3>Share the Love</h3>

          <p>
            Complete payment and instantly
            share your bouquet with one link.
          </p>

        </div>

      </div>

    </section>
  );
}