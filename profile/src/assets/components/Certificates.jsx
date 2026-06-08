import aiCertificateImage from "../aiproductivity.png";
import essentialAiImage from "../chancen.png";
import scrumMasterImage from "../scrum.png";
import teachingCertificateImage from "../virtual.png";
import virtualAssistantImage from "../hero.png";
import AIProductivityImage from "../aiproductivity.png";
import ManagementInPracticeImage from "../react.svg";

const certificates = [
  {
    title: "AI for Productivity",
    issuer: "Kepler College",
    period: "2026",
    image: aiproductivityImage,
    imageAlt: "AI Certificate",
    description:
      "This certificate demonstrates my foundational understanding of Artificial Intelligence concepts and how they can be applied in real-world situations. It reflects my ability to learn and engage with modern technologies that support innovation and digital transformation.",
  },
  {
    title: "Virtual Assistant",
    issuer: "ALX Africa",
    period: "2023",
    image: virtualimage,
    imageAlt: "Virtual Assistant Certificate",
    description:
      "This certificate represents my experience in teaching and facilitation, where I developed strong communication and presentation skills. It highlights my ability to share knowledge effectively and support learning in a structured environment.",
  },
  {
    title: "Professional Scrum Master",
    issuer: "Article 26",
    period: "2025",
    image: scrumMasterImage,
    imageAlt: "Professional Scrum Master Certificate",
    description:
      "This certificate shows my knowledge of Agile practices and Scrum framework in project management. It reflects my understanding of teamwork, project coordination, and delivering work in an organized and efficient manner.",
  },
  {
     title: "Essential AI",
    issuer: "ALX Africa",
    period: "2024",
    image: essentialAiImage,
    imageAlt: "Essential AI Certificate",
    description:
      "This certificate highlights my growing understanding of key Artificial Intelligence concepts and how they apply to learning and professional development. It shows my ability to connect AI knowledge with practical use in academic and work-related tasks.",
  },
  {
    title: "Virtual Assistant",
    issuer: "ALX Africa",
    period: "2024",
    image: virtualAssistantImage,
    imageAlt: "Virtual Assistant Certificate",
    description:
      "This certificate demonstrates my skills in virtual assistance, including organization, communication, and digital task management. It reflects my ability to support administrative and online tasks efficiently in a professional setting.",
  },
  {
    title: "AI in Productivity",
    issuer: "Professional Development",
    period: "2025",
    image: AIProductivityImage,
    imageAlt: "AI in Productivity Certificate",
    description:
      "This certificate shows my understanding of how Artificial Intelligence can improve productivity through smarter workflows, better organization, and more efficient task completion. It reflects my interest in using digital tools to work effectively and create practical results.",
  },
  {
    title: "Project Management in Practice",
    issuer: "Professional Development",
    period: "2025",
    image: ManagementInPracticeImage,
    imageAlt: "Project Management in Practice Certificate",
    description:
      "This certificate reflects my practical understanding of project management and the ability to apply planning, coordination, and execution skills in real working environments. It strengthens my capacity to organize tasks, support teamwork, and contribute to successful project delivery.",
  },
];

function Certificates() {
  return (
    <section className="page-section certificates-page">
      <div className="certificates-hero">
        <p className="certificates-hero__eyebrow">Certificates</p>
        <h1 className="certificates-hero__title">
          Professional certificates and achievements
        </h1>
        <p className="certificates-hero__text">
          This section is designed to present your certificates in a clear and
          professional way. You can add academic, technical, and professional
          development certificates here to strengthen your portfolio and show
          continuous learning.
        </p>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <article key={certificate.title} className="certificate-card">
            <div className="certificate-card__image-slot">
              <img
                src={certificate.image}
                alt={certificate.imageAlt || certificate.title}
                className="certificate-card__image"
              />
            </div>

            <div className="certificate-card__body">
              <div className="certificate-card__badge">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="certificate-card__title">{certificate.title}</h2>
              <p className="certificate-card__meta">
                {certificate.issuer} | {certificate.period}
              </p>
              <p className="certificate-card__description">
                {certificate.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
