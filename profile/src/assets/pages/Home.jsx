import { Link } from "react-router-dom";
import secondImage from "../bk.png";
import thirdImage from "../chancen1.png";
import fourImage from "../kepler.png";
import passportImage from "../passport.png";
function Home() {
  return (
    <>
      <section className="page-section hero-section">
        <div className="hero-card">
          <div className="hero-content">
            <div className="hero-copy">
              <h1 className="hero-title">Welcome to my Portfolio</h1>

              <p className="hero-description">
                Hello, I'm <strong>Immaculee Uwiduhaye</strong>, 
                 Motivated Project Management student with strong analytical, communication, and leadership skills. Experienced in retail banking, agency banking, and card production through an internship at Bank of Kigali. Skilled in customer service, problem-solving, and organizational communication, with proven leadership as Communication Coordinator at Chancen International and President of Kepler Adventist Community. Proficient in using technology for project planning and implementation. Passionate about leveraging project management expertise to address local challenges and contribute to sustainable development. 
              </p>
            </div>

            <div className="hero-visual">
              <img
                src={passportImage}
                alt="Immaculee Uwiduhaye portrait"
                className="hero-portrait"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-showcase">
        <div className="portfolio-showcase__top-line" />

        <div className="page-section portfolio-showcase__inner">
          <div className="portfolio-showcase__intro">
            <p className="portfolio-showcase__eyebrow">Work Experience</p>
            <h1 className="portfolio-showcase__title">
              My Work Experience in different Organizations
            </h1>
            <p className="portfolio-showcase__summary">
              I have gained valuable experience through various roles that have
              helped me develop strong skills in project coordination,
              communication, and technology. Each opportunity has contributed to
              my growth, allowing me to apply my knowledge in real-world
              settings while continuously learning and improving.
            </p>
          </div>

          <div className="timeline-layout">
            <div className="timeline-layout__row">
              <img
                src={secondImage}
                alt="Bank of Kigali internship"
                className="image-placeholder image-placeholder--tall timeline-image"
              />

              <div className="timeline-step">
                <div className="timeline-step__marker">01</div>
                <div className="timeline-step__line" />
                <div className="timeline-step__content">
                  <h2 className="timeline-step__title">
                    Retail Banking & Payments Intern, Bank of Kigali – Kigali, Rwanda 
                  </h2>
                  <p className="timeline-step__text">
                   During my internship at Bank of Kigali, I supported retail banking operations by assisting customers with account services, processing requests, issuing cards, and ensuring KYC compliance through accurate document verification. I also assisted with agency banking activities, supported card production processes, and provided quality customer service to enhance the overall customer experience.
                  </p>
                  <Link to="/about" className="timeline-step__link">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="timeline-layout__row timeline-layout__row--reverse">
              <div className="timeline-step timeline-step--secondary">
                <div className="timeline-step__marker">02</div>
                <div className="timeline-step__content">
                  <h2 className="timeline-step__title">
                    Communication Coordinator at Chancen International Rwanda 
                  </h2>
                  <p className="timeline-step__text">
                    At Chancen International, I coordinated communication and engagement activities for over 200 students, organized events and information sessions to encourage participation, and strengthened collaboration between the organization and Kepler students through effective communication and relationship-building.
                  </p>
                  <Link to="/about" className="timeline-step__link">
                    Learn More
                  </Link>
                </div>
              </div>

              <img
                src={thirdImage}
                alt="Chancen International Rwanda"
                className="image-placeholder image-placeholder--wide timeline-image"
              />
            </div>
          </div>

          <div className="timeline-layout__row">
            <img
              src={fourImage}
              alt="Kepler College experience"
              className="image-placeholder image-placeholder--tall timeline-image"
            />

            <div className="timeline-step">
              <div className="timeline-step__marker">03</div>
              <div className="timeline-step__line" />

              <div className="timeline-step__content">
                <h2 className="timeline-step__title">
                  Cohort Representative at Kepler College
                </h2>

                <p className="timeline-step__text">
                  As a Cohort Representative at Kepler College, I serve as a link between students and college administration by communicating student concerns, sharing important information, supporting student engagement, and promoting collaboration to help create a positive and productive learning environment.
                </p>

                <Link to="/about" className="timeline-step__link">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
