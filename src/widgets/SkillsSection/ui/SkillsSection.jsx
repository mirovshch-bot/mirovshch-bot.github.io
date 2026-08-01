import { SkillIcon } from '../../../entities/skill'
import { SkillCard } from '../../../shared/ui';
import styles from './SkillsSection.module.scss'
import { useLanguage } from '../../../app/providers/LanguageContext';

const translations= {
  en: {
    title: 'Skills that fuel my passion',
    footerBrand: '@ Code by Mirovshch',
    footerDescription: 'Detail-Oriented Front-End Developer, passionate about translating complex designs into clean, performant code. Focused on delivering accessible, cross-browser solutions that prioritize user interaction and visual excellence.'
  },
  ru: {
    title: 'Мои навыки',
    footerBrand: '@ Разработано Mirovshch',
    footerDescription: 'Внимательный к деталям фронтенд-разработчик, увлечённо превращающий сложные макеты в чистый, производительный код. Сосредоточен на создании доступных, кросс-браузерных решений с приоритетом на качество взаимодействия и визуальное совершенство.'
  }
}

const SkillsSection = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className={styles.skillsSection}>
      {/* Шапка с заголовком */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          {t.title}
        </h1>
      </div>

      {/* Основная сетка */}
      <div className={styles.grid}>
        {/* --- Блок: Front-End Development --- */}
        <div className={styles.column}>
          {/* Карточка 1.1: Frontend */}
          <SkillCard
            title={ language == 'en' ?
              "Front-End Development" :
              "Фронтенд Разработка"
            }
            description={ language == 'en' ?
              "Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise." :
              "Разрабатываю удобные и вовлекающие веб-интерфейсы с использованием современных фреймворков и технологий на основе накопленного опыта."
            }
            icons={['html', 'js', 'ts']}
            iconsSecondRow={['next', 'redux', 'react']}
          />

          {/* Карточка 1.2: Backend */}
          <SkillCard
            title={ language == 'en' ?
              "Back-End Development" :
              "Бэкенд Разработка"
            }
            description={ language == 'en' ?
              "Developing robust server-side logic and APIs to power dynamic and scalable web applications." :
              "Разрабатываю надёжную серверную логику и API для обеспечения динамичных и масштабируемых веб-приложений."
            }
            icons={['node', 'express', 'django', 'rails']}
          />

          {/* Карточка 1.3: Core CS */}
          <SkillCard {...(language == 'en' ? {
                title: "Core Computer Science Concepts",
                description: "Demonstrating a strong foundation in core computer science principles, including problem-solving, system design, and efficient computing techniques.",
                tags: ['Operating Systems', 'Computer Networks', 'Object-Oriented Programming', 'DSA', 'System Design']
              } : {
                title: "Базовые концепции",
                description: "Демонстрирую глубокое знание базовых концепций, включая решение задач, проектирование систем и эффективные вычислительные методы.",
                tags: ['Операционные системы', 'Компьютерные сети', 'ООП', 'Структуры данных и алгоритмы', 'Проектирование систем']
              })}
          />

          {/* Карточка 1.4: Personal Development */}
          <SkillCard {...(language == 'en' ? {
                title: "Personal Development",
                description: "Committed to continuous learning and personal growth to excel in both professional and collaborative environments.",
                tags: ['Time Management', 'Problem Solving', 'Communication', 'Leadership']
              } : {
                title: "Личностное развитие",
                description: "Стремлюсь к постоянному обучению и личностному росту, чтобы добиваться успеха в профессиональной среде и в командной работе.",
                tags: ['Тайм менеджмент', 'Решение проблем', 'Коммуникация', 'Лидерство']
              })}
          />
        </div>

        {/* --- Блок: Styling & Design --- */}
        <div className={`${styles.column} ${styles.columnCenter}`} >
          {/* Карточка 2.1: Styling & Design */}
          <SkillCard
            variant="design"
            {...(language == 'en' ? {
                title: "Styling & Design",
                description: "Crafting visually appealing and responsive designs with advanced styling tools and frameworks.",
              } : {
                title: "Стили и Дизайн",
                description: "Создаю визуально привлекательные и адаптивные дизайны с использованием продвинутых инструментов и фреймворков для стилизации.",
              })}
            icons={['css', 'tailwind', 'bootstrap']}
            iconsSecondRow={['sass', 'mui']}
          />

          {/* Карточка 2.2: Web Animations */}
          <SkillCard
            variant="animations"
            {...(language == 'en' ? {
                title: "Web Animations",
                description: "Creating seamless animations and transitions to enhance user engagement and interactivity.",
              } : {
                title: "Вэб Анимации",
                description: "Создаю плавные анимации и переходы для повышения вовлечённости и интерактивности.",
              })}
            icons={['framerMotion', 'gsap', 'lottieFiles']}
          />

          {/* Карточка 2.3: Cloud & Deployment */}
          <SkillCard
            variant="cloud"
            {...(language == 'en' ? {
                title: "Cloud & Deployment",
                description: "Experienced in deploying and managing applications using modern cloud platforms and tools.",
              } : {
                title: "Облачные технологии",
                description: "Имею опыт развёртывания и управления приложениями с использованием современных облачных платформ и инструментов.",
              })}
            icons={['docker', 'azure', 'aws']}
            iconsSecondRow={['googleCloud', 'vercel']}
          />

          {/* Карточка 2.4: Testing & Debugging */}
          <SkillCard
            variant="testing"
            {...(language == 'en' ? {
                title: "Testing & Debugging",
                description: "Ensuring code quality and reliability through rigorous testing and debugging processes.",
              } : {
                title: "Тестирование и отладка",
                description: "Обеспечиваю качество и надёжность кода через строгие процессы тестирования и отладки.",
              })}
            icons={['postman', 'jest', 'selenium']}
          />
        </div>

        {/* --- Блок: Programming Languages, Mobile, Git --- */}
        <div className={styles.column}>
          {/* Карточка 3.1: Programming Languages */}
          <SkillCard
            variant="languages"
            {...(language == 'en' ? {
                title: "Programming Languages",
                description: "Proficient in problem-solving and applying programming languages to implement efficient data structures and algorithms.",
              } : {
                title: "Языки программирования",
                description: "Владею навыками решения задач и применяю языки программирования для реализации эффективных структур данных и алгоритмов.",
              })}
            icons={['python', 'c', 'cplusplus', 'ruby']}
          />

          {/* Карточка 3.2: Database Management */}
          <SkillCard
            variant="mobile"
            {...(language == 'en' ? {
                title: "Database Management",
                description: "Designing and managing databases to ensure secure and efficient data storage and retrieval.",
              } : {
                title: "Базы данных",
                description: "Проектирую базы данных и управляю ими для обеспечения безопасного и эффективного хранения и извлечения данных.",
              })}
            icons={['mysql', 'postgresql', 'mongodb', 'firebase']}
          />

          {/* Карточка 3.3: Mobile App Development */}
          <SkillCard
            variant="mobile"
            {...(language == 'en' ? {
                title: "Mobile App Development",
                description: "Creating cross-platform mobile apps with sleek designs and robust functionality.",
              } : {
                title: "Мобильная разработка",
                description: "Создаю кроссплатформенные мобильные приложения с элегантным дизайном и надёжной функциональностью.",
              })}
            icons={['reactNative']}
          />

          {/* Карточка 3.4: Version Control */}
          <SkillCard
            variant="git"
            {...(language == 'en' ? {
                title: "Version Control & Collaboration",
                description: "Effectively managing code and collaborating on projects to ensure seamless teamwork.",
              } : {
                title: "Контроль Версий и Коллаборация",
                description: "Эффективно работаю с кодом в совместных проектах для обеспечения слаженной работы.",
              })}
            icons={['gitHub', 'git']}
          />

          {/* --- Карточка 3.5: UI/UX Design --- */}
          <SkillCard
            variant="design-block"
            showDesignHeader={true}
            {...(language == 'en' ? {
                title: "UI/UX Design",
                description: "Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate.",
                tags: ['Prototyping', 'Wireframing']
              } : {
                title: "UI/UX Дизайн",
                description: "Проектирую пользовательские интерфейсы, которые интуитивно понятны, визуально привлекательны и удобны для навигации.",
                tags: ['Прототипы', 'Вайрфрейм']
              })}
            
          />
        </div>
      </div>

      {/* Футер */}
      <div className={styles.footer}>
        <span className={styles.footerBrand}>
          {t.footerBrand}
        </span>
        <p className={styles.footerDescription}>
          {t.footerDescription}
        </p>
      </div>
    </div>
  );
};

export default SkillsSection;
