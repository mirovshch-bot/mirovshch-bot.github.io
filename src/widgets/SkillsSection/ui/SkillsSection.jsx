import { SkillIcon } from '../../../entities/skill'
import { SkillCard } from '../../../shared/ui';
import styles from './SkillsSection.module.scss'

const SkillsSection = () => {
  return (
    <div className={styles.skillsSection}>
      {/* Шапка с заголовком */}
      <div className={styles.header}>
        <h1 className={styles.title}>Skills that fuel my passion</h1>
      </div>

      {/* Основная сетка */}
      <div className={styles.grid}>
        {/* --- Блок: Front-End Development --- */}
        <div className={styles.column}>
          {/* Карточка 1.1: Frontend */}
          <SkillCard
            title="Front-End Development"
            description="Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise."
            icons={['html', 'js', 'ts']}
            iconsSecondRow={['next', 'redux', 'react']}
          />

          {/* Карточка 1.2: Backend */}
          <SkillCard
            title="Back-End Development"
            description="Developing robust server-side logic and APIs to power dynamic and scalable web applications."
            icons={['node', 'express', 'django', 'rails']}
          />

          {/* Карточка 1.3: Core CS */}
          <SkillCard
            title="Core Computer Science Concepts"
            description="Demonstrating a strong foundation in core computer science principles, including problem-solving, system design, and efficient computing techniques."
            tags={['Operating Systems', 'Computer Networks', 'Object-Oriented Programming', 'DSA', 'System Design']}
          />

          {/* Карточка 1.4: Personal Development */}
          <SkillCard
            title="Personal Development"
            description="Committed to continuous learning and personal growth to excel in both professional and collaborative environments."
            tags={['Time Management', 'Problem Solving', 'Communication', 'Leadership']}
          />
        </div>

        {/* --- Блок: Styling & Design --- */}
        <div className={`${styles.column} ${styles.columnCenter}`} >
          {/* Карточка 2.1: Styling & Design */}
          <SkillCard
            variant="design"
            title="Styling & Design"
            description="Crafting visually appealing and responsive designs with advanced styling tools and frameworks."
            icons={['css', 'tailwind', 'bootstrap']}
            iconsSecondRow={['sass', 'mui']}
          />

          {/* Карточка 2.2: Web Animations */}
          <SkillCard
            variant="animations"
            title="Web Animations"
            description="Creating seamless animations and transitions to enhance user engagement and interactivity."
            icons={['framerMotion', 'gsap', 'lottieFiles']}
          />

          {/* Карточка 2.3: Cloud & Deployment */}
          <SkillCard
            variant="cloud"
            title="Cloud & Deployment"
            description="Experienced in deploying and managing applications using modern cloud platforms and tools."
            icons={['docker', 'azure', 'aws']}
            iconsSecondRow={['googleCloud', 'vercel']}
          />

          {/* Карточка 2.4: Testing & Debugging */}
          <SkillCard
            variant="testing"
            title="Testing & Debugging"
            description="Ensuring code quality and reliability through rigorous testing and debugging processes."
            icons={['postman', 'jest', 'selenium']}
          />
        </div>

        {/* --- Блок: Programming Languages, Mobile, Git --- */}
        <div className={styles.column}>
          {/* Карточка 3.1: Programming Languages */}
          <SkillCard
            variant="languages"
            title="Programming Languages"
            description="Proficient in problem-solving and applying programming languages to implement efficient data structures and algorithms."
            icons={['python', 'c', 'cplusplus', 'ruby']}
          />

          {/* Карточка 3.2: Database Management */}
          <SkillCard
            variant="mobile"
            title="Database Management"
            description="Designing and managing databases to ensure secure and efficient data storage and retrieval."
            icons={['mysql', 'postgresql', 'mongodb', 'firebase']}
          />

          {/* Карточка 3.3: Mobile App Development */}
          <SkillCard
            variant="mobile"
            title="Mobile App Development"
            description="Creating cross-platform mobile apps with sleek designs and robust functionality."
            icons={['reactNative']}
          />

          {/* Карточка 3.4: Version Control */}
          <SkillCard
            variant="git"
            title="Version Control & Collaboration"
            description="Effectively managing code and collaborating on projects to ensure seamless teamwork."
            icons={['gitHub', 'git']}
          />

          {/* --- Карточка 3.5: UI/UX Design --- */}
          <SkillCard
            variant="design-block"
            showDesignHeader={true}
            title="UI/UX Design"
            description="Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate."
            tags={['Prototyping', 'Wireframing']}
          />
        </div>
      </div>

      {/* Футер */}
      <div className={styles.footer}>
        <span className={styles.footerBrand}>@ Code by Mirovshch</span>
        <p className={styles.footerDescription}>
          Detail-Oriented Front-End Developer,
          passionate about translating complex designs into clean,
          performant code. Focused on delivering accessible,
          cross-browser solutions that prioritize user interaction
          and visual excellence.
        </p>
      </div>
    </div>
  );
};

export default SkillsSection;
