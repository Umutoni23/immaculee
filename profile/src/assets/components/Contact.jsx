import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "umutonileoncie37@gmail.com",
    href: "mailto:umutonileoncie37@gmail.com",
    note: "Best for internship opportunities and professional communication.",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+250 791 365 439",
    href: "tel:+250791365439",
    note: "Available for direct calls and quick follow-up conversations.",
  },
  {
    icon: FaPhone,
    label: "Alternative Phone",
    value: "+250 798 863 710",
    href: "tel:+250798863710",
    note: "A secondary contact option for reliable communication.",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Umutoni23/Course-Management-System",
    href: "https://github.com/Umutoni23/Course-Management-System",
    note: "Explore my coding work, practice projects, and technical growth.",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "instagram.com",
    href: "https://instagram.com",
    note: "A social channel for staying connected online.",
  },
];

const contactHighlights = [
  "Open to internships, project collaboration, and professional networking.",
  "Interested in opportunities that combine project management, teamwork, and technology.",
  "Committed to clear communication, reliability, and continuous growth.",
];

function Contact() {
  return (
    <section className="page-section contact-page">
      <div className="contact-hero">
        <p className="contact-hero__eyebrow">Contact</p>
        <h1 className="contact-hero__title">
          Let&apos;s connect for professional opportunities and collaboration
        </h1>
        <p className="contact-hero__text">
          Thank you for visiting my portfolio. If you would like to discuss an
          internship, a project opportunity, or a professional introduction,
          you can reach me through the details below. I value clear
          communication and meaningful connections that support growth.
        </p>
      </div>

      <div className="contact-grid">
        <article className="contact-card">
          <p className="contact-card__label">Contact Details</p>
          <h2 className="contact-card__title">Professional ways to reach me</h2>
          <p className="contact-card__text">
            Use the contact options below for direct communication, networking,
            and project-related conversations.
          </p>

          <div className="contact-list">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={`${item.label}-${item.value}`}
                  className="contact-list__item"
                >
                  <div className="contact-list__icon" aria-hidden="true">
                    <Icon />
                  </div>

                  <div className="contact-list__content">
                    <p className="contact-list__label">{item.label}</p>
                    <a
                      href={item.href}
                      className="contact-list__link"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                    <p className="contact-list__note">{item.note}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </article>

        <aside className="contact-sidebar">
          <article className="contact-sidebar__panel contact-sidebar__panel--primary">
            <p className="contact-card__label contact-card__label--light">
              Professional Profile
            </p>
            <h2 className="contact-sidebar__title">
              Ready to learn, contribute, and grow
            </h2>
            <p className="contact-sidebar__text">
              I am Leoncie Umutoni, a Project Management student with growing
              experience in teamwork, coordination, and technology. I am
              especially interested in opportunities where I can contribute
              with professionalism while continuing to build my skills through
              real work and collaboration.
            </p>

            <div className="contact-highlights">
              {contactHighlights.map((highlight) => (
                <div key={highlight} className="contact-highlights__item">
                  <span className="contact-highlights__dot" aria-hidden="true" />
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="contact-sidebar__panel contact-sidebar__panel--secondary">
            <div className="contact-availability">
              <FaMapMarkerAlt
                className="contact-availability__icon"
                aria-hidden="true"
              />
              <div>
                <p className="contact-availability__label">Availability</p>
                <p className="contact-availability__text">
                  Available for internship inquiries, academic networking, and
                  collaborative conversations in project management and
                  technology-related work.
                </p>
              </div>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
