import Project1 from '../assets/images/Project1.png'
import Project2 from '../assets/images/Project2.png'
import Project3 from '../assets/images/Project3.png'
import Project4 from '../assets/images/Project4.png'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Learnlogicify Landing Page",
      image: Project1
    },
    {
      id: 2,
      title: "Winzee Web Chat application",
      image: Project2
    },
    {
      id: 3,
      title: "ChatGPT clone",
      image: Project3
    },
    {
      id: 4,
      title: "Gemini Clone",
      image: Project4
    }
  ];

  return (
    <section className="portfolio-section">
      <header className="portfolio-section__header">
        <p className="portfolio-section__description">
          Driven by curiosity and a passion for clean code,
          I build fast, responsive, and human-centered digital interfaces.
          As a developer, I'm constantly experimenting with new tools and pushing my skills further.
        </p>
        
        <div className="portfolio-section__more">
          <p className="portfolio-section__more-text">
            The convergence of my drive for elegant solutions, appreciation for thoughtful design,
            and curiosity about user behavior places me at the sweet spot
            where functionality meets beauty in the digital space.
          </p>
          
          <div className="portfolio-section__more-link-wrapper">
            <span className="portfolio-section__more-link">
              More about me
            </span>
            <span className="portfolio-section__more-arrow">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.403 16.4415C18.853 16.3915 18.3666 16.7968 18.3166 17.3468C18.2666 17.8969 18.6719 18.3833 19.2219 18.4333L19.3125 17.4374L19.403 16.4415ZM29.625 18.3749L30.6209 18.2843C30.5772 17.8036 30.1963 17.4227 29.7156 17.379L29.625 18.3749ZM29.5667 28.778C29.6167 29.328 30.1031 29.7333 30.6531 29.6833C31.2031 29.6333 31.6084 29.1469 31.5584 28.5969L30.5625 28.6875L29.5667 28.778ZM17.6679 28.9179C17.2773 29.3084 17.2773 29.9415 17.6679 30.3321C18.0584 30.7226 18.6915 30.7226 19.0821 30.3321L18.375 29.625L17.6679 28.9179ZM19.3125 17.4374L19.2219 18.4333L29.5345 19.3708L29.625 18.3749L29.7156 17.379L19.403 16.4415L19.3125 17.4374ZM29.625 18.3749L28.6291 18.4654L29.5667 28.778L30.5625 28.6875L31.5584 28.5969L30.6209 18.2843L29.625 18.3749ZM29.625 18.3749L28.9179 17.6678L17.6679 28.9179L18.375 29.625L19.0821 30.3321L30.3321 19.082L29.625 18.3749ZM42 24H41C41 33.3888 33.3888 41 24 41V42V43C34.4934 43 43 34.4934 43 24H42ZM24 42V41C14.6112 41 7 33.3888 7 24H6H5C5 34.4934 13.5066 43 24 43V42ZM6 24H7C7 14.6112 14.6112 7 24 7V6V5C13.5066 5 5 13.5066 5 24H6ZM24 6V7C33.3888 7 41 14.6112 41 24H42H43C43 13.5066 34.4934 5 24 5V6Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>
      </header>

      <div className="portfolio-section__content">
        <div className="portfolio-section__grid-header">
          <h2 className="portfolio-section__grid-title">
            Impressive Works
          </h2>
          <p className="portfolio-section__grid-subtitle">
            HERE'S A COLLECTION OF PROJECTS THAT DEMONSTRATE MY COMMITMENT TO CLEAN CODE AND
            THOUGHTFUL DESIGN, BLENDING FUNCTIONALITY WITH AESTHETIC APPEAL.
          </p>
        </div>

        <div className="portfolio-section__grid">
          {projects.map((project, index) => (
            <article key={project.id} className="portfolio-section__project">
              <div className="portfolio-section__project-image-wrapper">
                <img
                  className="portfolio-section__project-image"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>
              <div className="portfolio-section__project-title-wrapper">
                <span className="portfolio-section__project-arrow">
                  <svg
                    width="68"
                    height="68"
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.8798 25.3055C35.5189 24.8874 34.8875 24.8411 34.4694 25.2021C34.0514 25.563 34.0051 26.1944 34.366 26.6125L35.1229 25.959L35.8798 25.3055ZM41.8899 33.7971L42.6692 34.4238C42.9717 34.0476 42.9623 33.509 42.6468 33.1436L41.8899 33.7971ZM34.6213 41.2399C34.2752 41.6703 34.3435 42.2997 34.7739 42.6458C35.2043 42.992 35.8337 42.9236 36.1799 42.4933L35.4006 41.8666L34.6213 41.2399ZM25.9649 33.0749C25.4127 33.0845 24.9728 33.54 24.9825 34.0922C24.9921 34.6444 25.4476 35.0842 25.9998 35.0746L25.9823 34.0748L25.9649 33.0749ZM35.1229 25.959L34.366 26.6125L41.133 34.4506L41.8899 33.7971L42.6468 33.1436L35.8798 25.3055L35.1229 25.959ZM41.8899 33.7971L41.1106 33.1704L34.6213 41.2399L35.4006 41.8666L36.1799 42.4933L42.6692 34.4238L41.8899 33.7971ZM41.8899 33.7971L41.8725 32.7972L25.9649 33.0749L25.9823 34.0748L25.9998 35.0746L41.9074 34.7969L41.8899 33.7971ZM46.8842 46.4398L46.1648 45.7452C39.6428 52.4989 28.8806 52.6868 22.1269 46.1647L21.4322 46.8841L20.7375 47.6034C28.2859 54.8928 40.3142 54.6828 47.6035 47.1345L46.8842 46.4398ZM21.4322 46.8841L22.1269 46.1647C15.3731 39.6427 15.1852 28.8805 21.7073 22.1268L20.9879 21.4321L20.2686 20.7375C12.9793 28.2858 13.1892 40.3141 20.7375 47.6034L21.4322 46.8841ZM20.9879 21.4321L21.7073 22.1268C28.2293 15.373 38.9915 15.1852 45.7452 21.7072L46.4399 20.9879L47.1346 20.2685C39.5862 12.9792 27.5579 13.1891 20.2686 20.7375L20.9879 21.4321ZM46.4399 20.9879L45.7452 21.7072C52.499 28.2292 52.6869 38.9914 46.1648 45.7452L46.8842 46.4398L47.6035 47.1345C54.8928 39.5862 54.6829 27.5579 47.1346 20.2685L46.4399 20.9879Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <h3 className="portfolio-section__project-title">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio-section__explore-wrapper">
          <button className="portfolio-section__explore-button" type="button">
            <span className="portfolio-section__explore-dot">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="10" height="10" rx="5" fill="black" />
              </svg>
            </span>
            <span className="portfolio-section__explore-text">
              Explore more
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;