export default function FAQ() {
  return (
    <section 
    id = "faq"
    className="faqSection">

      <h2>Frequently Asked Questions</h2>

      <p className="sectionSubtitle">
        Everything you need to know before creating your digital bouquet.
      </p>

      <div className="faqContainer">

        <div className="faqItem">
          <h3>Can I edit my bouquet after payment?</h3>
          <p>
            Yes. As long as the sharing link hasn't expired,
            you can update your bouquet anytime.
          </p>
        </div>

        <div className="faqItem">
          <h3>Can I upload my own photos?</h3>
          <p>
            Absolutely! Every template supports uploading
            your own memories and pictures.
          </p>
        </div>

        <div className="faqItem">
          <h3>Can I add music?</h3>
          <p>
            Yes. You can choose from our music collection
            or upload your own audio.
          </p>
        </div>

        <div className="faqItem">
          <h3>How does link expiration work?</h3>
          <p>
            You choose how long your bouquet stays online.
            Shorter durations cost less than permanent links.
          </p>
        </div>

      </div>

    </section>
  );
}