import styles from "./Home.module.scss";
import { FrontSection } from '../../../widgets/FrontSection'
import { PortfolioSection } from '../../../widgets/PortfolioSection'
import { SkillsSection } from '../../../widgets/SkillsSection'
import { ContactsSection } from '../../../widgets/ContactsSection'
import { Footer } from '../../../widgets/Footer'

export const Home = () => {
  return (
    <div className={styles.home}>
      <FrontSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactsSection />
      <Footer />
    </div>
  )
}

export default Home