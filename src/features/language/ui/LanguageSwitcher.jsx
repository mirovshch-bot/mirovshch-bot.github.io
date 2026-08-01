import React from 'react';
import { useLanguage } from '../../../app/providers/LanguageContext';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className={styles.switcher} 
      onClick={toggleLanguage}
      aria-label="Switch language"
    >
      <span className={`${styles.lang} ${language === 'en' ? styles.active : ''}`}>
        EN
      </span>
      <span className={styles.divider}>|</span>
      <span className={`${styles.lang} ${language === 'ru' ? styles.active : ''}`}>
        RU
      </span>
    </button>
  );
};

export default LanguageSwitcher;