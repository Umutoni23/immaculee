import {
  skillCategories,
  skillHighlights,
  toolsAndPlatforms,
} from "../data/Skills";

function Skills() {
  return (
    <section className="page-section skills-page">
      <div className="skills-hero">
        <p className="skills-hero__eyebrow">Skills</p>
        <h1 className="skills-hero__title">
          A professional combination of project, technical, and teamwork skills
        </h1>
        <p className="skills-hero__text">
          My skills reflect a balance between project management knowledge,
          communication, teamwork, and growing technical ability. These
          strengths help me contribute with organization, professionalism, and
          practical problem-solving in different learning and work
          environments.
        </p>
      </div>

      <div className="skills-grid">
        <article className="skills-card skills-card--highlight">
          <p className="skills-card__label">Professional Summary</p>
          <h2 className="skills-card__title">What I bring to a team</h2>
          <p className="skills__text">
            I bring a strong foundation in coordination, collaboration, and
            digital learning. I am especially interested in opportunities where
            I can combine structured planning with communication and technical
            growth to support meaningful results.
          </p>
        </article>

        <article className="skills-card">
          <p className="skills-card__label">Tools and Platforms</p>
          <h2 className="skills-card__title">Platforms I use with confidence</h2>
          <div className="skills-tags">
            {toolsAndPlatforms.map((tool) => (
              <span key={tool} className="skills-tags__item">
                {tool}
              </span>
            ))}
          </div>
        </article>
      </div>

      <section className="skills-showcase">
        <div className="skills-showcase__intro">
          <p className="skills-card__label skills-card__label--light">
            Skills Overview
          </p>
          <h2 className="skills-showcase__title">
            Key areas that support my academic and professional growth
          </h2>
          <p className="skills-showcase__text">
            These categories summarize the abilities I continue to develop and
            apply across my studies, practical experiences, and collaborative
            work.
          </p>
        </div>

        <div className="skills-category-grid">
          {skillCategories.map((category, index) => (
            <article key={category.title} className="skills-category-card">
              <div className="skills-category-card__badge">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="skills-category-card__title">{category.title}</h3>
              <p className="skills-category-card__description">
                {category.description}
              </p>

              <div className="skills-category-card__list">
                {category.items.map((item) => (
                  <div key={item} className="skills-category-card__item">
                    <span
                      className="skills-category-card__dot"
                      aria-hidden="true"
                    />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-highlights">
        <div className="skills-highlights__intro">
          <p className="skills-card__label">Strength Highlights</p>
          <h2 className="skills-card__title">
            Strengths that shape how I work
          </h2>
        </div>

        <div className="skills-highlights__grid">
          {skillHighlights.map((highlight) => (
            <article key={highlight.title} className="skills-highlight-card">
              <h3 className="skills-highlight-card__title">{highlight.title}</h3>
              <p className="skills-highlight-card__text">{highlight.text}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Skills;
