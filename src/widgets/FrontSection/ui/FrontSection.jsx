import styles from './FrontSection.module.scss'

const FrontSection = () => {
  return (
    <section className={styles.frontSection}>
      <header className={styles.header}>
        <span className={styles.brand}>@ Code by Mirovshch</span>
        <p className={styles.description}>
          Detail-Oriented Front-End Developer,
          passionate about translating complex designs into clean,
          performant code. Focused on delivering accessible,
          cross-browser solutions that prioritize user interaction
          and visual excellence.
        </p>
      </header>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          Frontend Developer
        </h1>
      </div>
    </section>
  );
};

export default FrontSection