const strengths = [
  "Project coordination and planning across academic and practical environments.",
  "Clear communication with teams, students, and stakeholders.",
  "A growing technical foundation in digital tools and frontend development.",
];

const experienceItems = [
  {
    role: "Retail Banking & Payments Intern",
    company: "Bank of Kigali (Bk)",
    summary:
      "Assisted customers with account services, card issuance, and KYC verification to ensure efficient and compliant retail banking operations. Supported agency banking and card production activities while delivering quality customer service and resolving operational issues.",
  },
  {
    role: "Communication Coordinator",
    company: "Chancen International Rwanda",
    summary:
      "Coordinated communication and engagement activities for over 200 students while organizing events and information sessions to increase participation. Strengthened collaboration between Chancen International and Kepler students through effective communication and relationship-building.",
  },
  {
    role: "Cohort Representative",
    company: "Kepler College",
    summary:
      "Served as a liaison between students and faculty, advocating for student needs and facilitating communication. Represented the voices of peers in meetings and contributed to initiatives that enhanced the overall student experience.",
  },
];

function About() {
  return (
    <section className="page-section about-page">
      <div className="about-hero">
        <p className="about-hero__eyebrow">About Me</p>
        <h1 className="about-hero__title">
          A motivated project management student building professional and
          meaningful digital work.
        </h1>
        <p className="about-hero__text">
          I am Immaculee Uwiduhaye, a Project Management student with a strong
          interest in technology, collaboration, and creating solutions that
          make a real impact. My journey combines academic growth with hands-on
          experience, helping me develop both professional discipline and a
          practical understanding of teamwork, planning, and innovation.
        </p>
      </div>

      <div className="about-grid">
        <article className="about-card about-card--highlight">
          <p className="about-card__label">Professional Profile</p>
          <h2 className="about-card__title">What I bring to a team</h2>
          <p className="about-card__text">
            I enjoy working in environments where organization, creativity, and
            problem-solving come together. My goal is to contribute with
            professionalism, keep learning through real experience, and grow
            into roles where I can coordinate ideas into successful results.
          </p>
        </article>

        <article className="about-card">
          <p className="about-card__label">Core Strengths</p>
          <div className="about-strengths">
            {strengths.map((strength) => (
              <div key={strength} className="about-strengths__item">
                <span className="about-strengths__dot" aria-hidden="true" />
                <p>{strength}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <section className="about-experience">
        <div className="about-experience__intro">
          <p className="about-card__label">Work Experience</p>
          <h2 className="about-card__title">
            Experience that reflects growth, responsibility, and adaptability
          </h2>
          <p className="about-card__text">
            These roles have strengthened my ability to coordinate work,
            support others, and contribute with both technical and professional
            skills in different settings.
          </p>
        </div>

        <div className="about-experience__list">
          {experienceItems.map((item, index) => (
            <article key={item.role} className="experience-card">
              <div className="experience-card__number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="experience-card__content">
                <h3 className="experience-card__title">{item.role}</h3>
                <p className="experience-card__company">{item.company}</p>
                <p className="experience-card__text">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

export default About;
