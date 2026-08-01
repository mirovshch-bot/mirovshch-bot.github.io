import styles from './ContactsSection.module.scss'
import { useLanguage } from '../../../app/providers/LanguageContext';

const translations= {
  en: {
    subtitle: "That's all for now.",
    title1: 'Got a project in mind?',
    title2: "Let's talk",
    ctaText: 'Get in touch',
    contactLabelEmail: 'Email:',
    contactLabelPhone: 'Phone:'
  },
  ru: {
    subtitle: 'На этом пока все.',
    title1: 'Есть проект на примете?',
    title2: 'Давайте обсудим',
    ctaText: 'Связаться',
    contactLabelEmail: 'Email:',
    contactLabelPhone: 'Телефон:'
  }
}

const ContactsSection = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className={styles.contactsSection}>
      <header className={styles.header}>
        <p className={styles.subtitle}>
          {t.subtitle}
        </p>
        <h2 className={styles.title}>
          {t.title1}
        </h2>
        <h2 className={styles.title}>
          {t.title2}
        </h2>
      </header>

      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <div className={styles.ctaWrapper}>
          <div className={styles.ctaCircle}>
            <span className={styles.ctaText}>
              {t.ctaText}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.contact}>
          <span className={styles.contactLabel}>
            {t.contactLabelEmail}
          </span>
          <a href="mailto:mirovshch@gmail.com" className={styles.contactValue}>
            mirovshch@gmail.com
          </a>
        </div>
        <div className={styles.contact}>
          <span className={styles.contactLabel}>
            {t.contactLabelPhone}
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