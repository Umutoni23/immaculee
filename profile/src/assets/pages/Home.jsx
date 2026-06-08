import { Link } from "react-router-dom";
import heroImage from "../hero.png";
import secondImage from "../scrum.png";
import thirdImage from "../virtual.png";
import fourImage from "../react.svg";
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
                a Project Management student at Kepler College in Kigali. I specialize in organizing and managing projects while applying technology and innovation to solve real-world problems. I am passionate about creating practical digital solutions, improving processes, and continuously developing my skills through hands-on experience. I am driven by growth, impact, and delivering meaningful results through my work.
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
                alt="Portfolio gallery preview"
                className="image-placeholder image-placeholder--tall timeline-image"
              />

              <div className="timeline-step">
                <div className="timeline-step__marker">01</div>
                <div className="timeline-step__line" />
                <div className="timeline-step__content">
                  <h2 className="timeline-step__title">
                    Communication Cordinator at Chancen Internation Rwanda
                  </h2>
                  <p className="timeline-step__text">
                    I supported the planning and coordination of engineering
                    projects by managing schedules, tracking progress and
                    ensuring effective team collaboration, contributing to
                    timely and effecirnt project delivery.
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
                    Teaching Assisstant at IEE
                  </h2>
                  <p className="timeline-step__text">
                    I supported teaching and learning activities by assissting
                    in lesson delivery, guiding students and creating
                    supportive classroom environment that improves student
                    engagement and understanding.
                  </p>
                  <Link to="/about" className="timeline-step__link">
                    Learn More
                  </Link>
                </div>
              </div>

              <img
                src={thirdImage}
                alt="Portfolio feature preview"
                className="image-placeholder image-placeholder--wide timeline-image"
              />
            </div>
          </div>

          <div className="timeline-layout__row">
            <img
              src={fourImage}
              alt="New experience"
              className="image-placeholder image-placeholder--tall timeline-image"
            />

            <div className="timeline-step">
              <div className="timeline-step__marker">03</div>
              <div className="timeline-step__line" />

              <div className="timeline-step__content">
                <h2 className="timeline-step__title">
                  Frontend Developer at Igire Rwanda
                </h2>

                <p className="timeline-step__text">
                  I worked as a Frotn-End developer at Igire Rwanda where l
                  built responsivene and user-friendly web interfaces using
                  React,HTML,CSS and Javascript. I translated design concepts
                  into functions, ensecured across-device compatibility abd
                  collaborated with team member to improve overall user
                  experience while strengthening my technical and
                  proble-solving skills.
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
