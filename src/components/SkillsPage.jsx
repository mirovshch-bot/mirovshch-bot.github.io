import SkillIcon from "./SkillIcon";

const SkillsPage = () => {
  return (
    <div className="skills-section">
      {/* Шапка с заголовком */}
      <div className="skills-section__header">
        <h1 className="skills-section__title">Skills that fuel my passion</h1>
      </div>

      {/* Основная сетка */}
      <div className="skills-section__grid">
        {/* --- Блок: Front-End Development --- */}
        <div className="skills-section__column">
          {/* Карточка 1.1: Frontend */}
          <div className="skill-card">
            <div className="skill-card__icons-grid">
              <div className="skill-card__icons-row">
                <div className="skill-card__icon-wrapper">
                  <SkillIcon name="html" />
                </div>
                <div className="skill-card__icon-wrapper">
                  <SkillIcon name="js" />
                </div>
                <div className="skill-card__icon-wrapper">
                  <SkillIcon name="ts" />
                </div>
              </div>
              <div className="skill-card__icons-row skill-card__icons-row--right">
                <div className="skill-card__icon-wrapper">
                  <SkillIcon name="next" />
                </div>
                <div className="skill-card__icon-wrapper">
                  <SkillIcon name="redux" />
                </div>
                <div className="skill-card__icon-wrapper">
                  <SkillIcon name="react" />
                </div>
              </div>
            </div>
            <div className="skill-card__content">
              <h3 className="skill-card__title">Front-End Development</h3>
              <p className="skill-card__description">
                Building engaging and user-friendly web interfaces using modern
                frameworks and technologies with expertise.
              </p>
            </div>
          </div>

          {/* Карточка 1.2: Backend */}
          <div className="skill-card">
            <div className="skill-card__icons-row skill-card__icons-row--centered">
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="node" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="express" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="django" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="rails" />  
              </div>
            </div>
            <div className="skill-card__content">
              <h3 className="skill-card__title">Back-End Development</h3>
              <p className="skill-card__description">
                Developing robust server-side logic and APIs to power dynamic
                and scalable web applications.
              </p>
            </div>
          </div>

          {/* Карточка 1.3: Core CS */}
          <div className="skill-card">
            <div className="skill-card__tags">
              <div className="skill-card__tag">Operating Systems</div>
              <div className="skill-card__tag">Computer Networks</div>
              <div className="skill-card__tag">Object-Oriented Programming</div>
              <div className="skill-card__tag">DSA</div>
              <div className="skill-card__tag">System Design</div>
            </div>
            <div className="skill-card__content">
              <h3 className="skill-card__title">
                Core Computer Science Concepts
              </h3>
              <p className="skill-card__description">
                Demonstrating a strong foundation in core computer science
                principles, including problem-solving, system design, and
                efficient computing techniques.
              </p>
            </div>
          </div>

          {/* Карточка 1.4: Personal Development */}
          <div className="skill-card">
            <div className="skill-card__tags">
              <div className="skill-card__tag">Time Management</div>
              <div className="skill-card__tag">Problem Solving</div>
              <div className="skill-card__tag">Communication</div>
              <div className="skill-card__tag">Leadership</div>
            </div>
            <div className="skill-card__content">
              <h3 className="skill-card__title">Personal Development</h3>
              <p className="skill-card__description">
                Committed to continuous learning and personal growth to excel in
                both professional and collaborative environments.
              </p>
            </div>
          </div>
        </div>

        {/* --- Блок: Styling & Design --- */}
        <div className="skills-section__column skills-section__column--center">
          {/* Карточка 2.1: Styling & Design */}
          <div className="skill-card skill-card--design">
            <div className="skill-card__icons-grid">
              <div className="skill-card__icons-row skill-card__icons-row--centered">
                <div className="skill-card__icon-wrapper">
                  <SkillIcon name="css" />
                </div>
                <div className="skill-card__icon-wrapper">
                  <SkillIcon name="tailwind" />
                </div>
                <div className="skill-card__icon-wrapper">
                  <SkillIcon name="bootstrap" />
                </div>
              </div>
              <div className="skill-card__icons-row skill-card__icons-row--centered">
                <div className="skill-card__icon-wrapper">
                  <SkillIcon name="sass" />
                </div>
                <div className="skill-card__icon-wrapper">
                  <SkillIcon name="mui" />
                </div>
              </div>
            </div>
            <div className="skill-card__content">
              <h3 className="skill-card__title">Styling &amp; Design</h3>
              <p className="skill-card__description">
                Crafting visually appealing and responsive designs with advanced
                styling tools and frameworks.
              </p>
            </div>
          </div>

          {/* Карточка 2.2: Web Animations */}
          <div className="skill-card skill-card--animations">
            <div className="skill-card__icons-row skill-card__icons-row--centered">
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="framerMotion" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="gsap" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="lottieFiles" />
              </div>
            </div>
            <div className="skill-card__content">
              <h3 className="skill-card__title">Web Animations</h3>
              <p className="skill-card__description">
                Creating seamless animations and transitions to enhance user
                engagement and interactivity.
              </p>
            </div>
          </div>

          {/* Карточка 2.3: Cloud & Deployment */}
          <div className="skill-card skill-card--cloud">
            <div className="skill-card__icons-row skill-card__icons-row--centered">
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="docker" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="azure" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="aws" />
              </div>
            </div>
            <div className="skill-card__icons-row skill-card__icons-row--centered">
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="googleCloud" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="vercel" />
              </div>
            </div>
            <div className="skill-card__content">
              <h3 className="skill-card__title">Cloud &amp; Deployment</h3>
              <p className="skill-card__description">
                Experienced in deploying and managing applications using modern
                cloud platforms and tools.
              </p>
            </div>
          </div>

          {/* Карточка 2.4: Testing & Debugging */}
          <div className="skill-card skill-card--testing">
            <div className="skill-card__icons-row skill-card__icons-row--centered">
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="postman" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="jest" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="selenium" />
              </div>
            </div>
            <div className="skill-card__content">
              <h3 className="skill-card__title">Testing &amp; Debugging</h3>
              <p className="skill-card__description">
                Ensuring code quality and reliability through rigorous testing
                and debugging processes.
              </p>
            </div>
          </div>
        </div>

        {/* --- Блок: Programming Languages, Mobile, Git --- */}
        <div className="skills-section__column">
          {/* Карточка 3.1: Programming Languages */}
          <div className="skill-card skill-card--languages">
            <div className="skill-card__icons-row skill-card__icons-row--centered">
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="python" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="c" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="cplusplus" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="ruby" />
              </div>
            </div>
            <div className="skill-card__content">
              <h3 className="skill-card__title">Programming Languages</h3>
              <p className="skill-card__description">
                Proficient in problem-solving and applying programming languages
                to implement efficient data structures and algorithms.
              </p>
            </div>
          </div>

          {/* Карточка 3.2: Database Management */}
          <div className="skill-card skill-card--mobile">
            <div className="skill-card__icons-row skill-card__icons-row--centered">              
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="mysql" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="postgresql" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="mongodb" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="firebase" />
              </div>
            </div>
            <div className="skill-card__content">
              <h3 className="skill-card__title">Database Management</h3>
              <p className="skill-card__description">
                Designing and managing databases to ensure secure and efficient data storage and retrieval.
              </p>
            </div>
          </div>

          {/* Карточка 3.3: Mobile App Development */}
          <div className="skill-card skill-card--mobile">
            <div className="skill-card__icon-wrapper">
              <SkillIcon name="reactNative" />
            </div>
            <div className="skill-card__content">
              <h3 className="skill-card__title">Mobile App Development</h3>
              <p className="skill-card__description">
                Creating cross-platform mobile apps with sleek designs and
                robust functionality.
              </p>
            </div>
          </div>

          {/* Карточка 3.4: Version Control */}
          <div className="skill-card skill-card--git">
            <div className="skill-card__icons-row skill-card__icons-row--centered">
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="gitHub" />
              </div>
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="git" />
              </div>
            </div>
            <div className="skill-card__content">
              <h3 className="skill-card__title">
                Version Control &amp; Collaboration
              </h3>
              <p className="skill-card__description">
                Effectively managing code and collaborating on projects to
                ensure seamless teamwork.
              </p>
            </div>
          </div>

          {/* --- Карточка 3.5: UI/UX Design --- */}
          <div className="skill-card skill-card--design-block">
            <div className="skill-card__design-header">
              <div className="skill-card__icon-wrapper">
                <SkillIcon name="figma" />
              </div>
              <div className="skill-card__design-tags">
                <span className="skill-card__tag skill-card__tag--design">
                  Prototyping
                </span>
                <span className="skill-card__tag skill-card__tag--design">
                  Wireframing
                </span>
              </div>
            </div>
            <div className="skill-card__content">
              <h3 className="skill-card__title">UI/UX Design</h3>
              <p className="skill-card__description">
                Designing user-centric interfaces that are intuitive, visually
                appealing, and easy to navigate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Футер */}
      <div className="skills-section__footer">
        <span className="skills-section__footer-brand">@ Code by Mirovshch</span>
        <p className="skills-section__footer-description">
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

export default SkillsPage;
