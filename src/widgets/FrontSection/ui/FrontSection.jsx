import styles from './FrontSection.module.scss'
import LanguageSwitcher from "../../../features/language/ui/LanguageSwitcher.jsx"
import { useLanguage } from '../../../app/providers/LanguageContext.jsx';

const translations= {
  en: {
    brand: '@ Code by Mirovshch',
    description: 'Detail-Oriented Front-End Developer, passionate about translating complex designs into clean, performant code. Focused on delivering accessible, cross-browser solutions that prioritize user interaction and visual excellence.',
    title: 'Frontend Developer'
  },
  ru: {
    brand: '@ Разработано Mirovshch',
    description: 'Внимательный к деталям фронтенд-разработчик, увлечённо превращающий сложные макеты в чистый, производительный код. Сосредоточен на создании доступных, кросс-браузерных решений с приоритетом на качество взаимодействия и визуальное совершенство.',
    title: 'Фронтенд Разработчик'
  }
}

const FrontSection = () => {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <section className={styles.frontSection}>
      <header className={styles.header}>
        <span className={styles.brand}>
          {t.brand}
        </span>
        <LanguageSwitcher />
        <p className={styles.description}>
          {t.description}
        </p>
      </header>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          {t.title}
        </h1>
      </div>
    </section>
  );
};

export default FrontSection