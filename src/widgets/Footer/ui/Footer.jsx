import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.top}>
        <p className={styles.text}>
          your friendly interface creator
        </p>
        <a href="#" className={styles.arrow} aria-label="Scroll to top">
          <div className={styles.circle}>
              <svg
                width="73"
                height="73"
                viewBox="0 0 73 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.8864 45.102L62.0498 28.9385L45.8864 12.7751M62.0498 28.9385L14.9498 28.9385C12.7407 28.9385 10.9498 30.7294 10.9498 32.9385L10.9498 60.2251"
                  stroke="#1D1D1D"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
          </div>
        </a>
      </div>
      <div className={styles.brand}>
        Mirovshhhhh
      </div>
    </footer>
  );
};

export default Footer;