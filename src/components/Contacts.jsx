const Contacts = () => {
  return (
    <section className="contacts-section">
      <header className="contacts-section__header">
        <p className="contacts-section__subtitle">
          That's all for now.
        </p>
        <h2 className="contacts-section__title">
          Got a project in mind?
        </h2>
        <h2 className="contacts-section__title">
          Let's talk
        </h2>
      </header>

      <div className="contacts-section__divider">
        <div className="contacts-section__divider-line" />
        <div className="contacts-section__cta-wrapper">
          <div className="contacts-section__cta-circle">
            <span className="contacts-section__cta-text">
              Get in touch
            </span>
          </div>
        </div>
      </div>

      <div className="contacts-section__info">
        <div className="contacts-section__contact">
          <span className="contacts-section__contact-label">
            Email:
          </span>
          <a href="mailto:mirovshch@gmail.com" className="contacts-section__contact-value">
            mirovshch@gmail.com
          </a>
        </div>
        <div className="contacts-section__contact">
          <span className="contacts-section__contact-label">
            Phone:
          </span>
          <a href="tel:+79533207126" className="contacts-section__contact-value">
            +7 (953) 320-71-26
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;