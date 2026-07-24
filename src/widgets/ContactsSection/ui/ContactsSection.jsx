import styles from './ContactsSection.module.scss'

const ContactsSection = () => {
  return (
    <section className={styles.contactsSection}>
      <header className={styles.header}>
        <p className={styles.subtitle}>
          That's all for now.
        </p>
        <h2 className={styles.title}>
          Got a project in mind?
        </h2>
        <h2 className={styles.title}>
          Let's talk
        </h2>
      </header>

      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <div className={styles.ctaWrapper}>
          <div className={styles.ctaCircle}>
            <span className={styles.ctaText}>
              Get in touch
            </span>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.contact}>
          <span className={styles.contactLabel}>
            Email:
          </span>
          <a href="mailto:mirovshch@gmail.com" className={styles.contactValue}>
            mirovshch@gmail.com
          </a>
        </div>
        <div className={styles.contact}>
          <span className={styles.contactLabel}>
            Phone:
          </span>
          <a href="tel:+79533207126" className={styles.contactValue}>
            +7 (953) 320-71-26
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;