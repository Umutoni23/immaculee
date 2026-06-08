import {
  FaBriefcase,
  FaBuilding,
  FaEnvelope,
  FaHospital,
  FaIdBadge,
  FaPhone,
  FaUserMd,
  FaUserTie,
} from "react-icons/fa";

const references = [
  {
    icon: FaUserTie,
    category: "Academic Reference",
    name: "Mr. Pascal UMI",
    position: "Instructor/Lecturer",
    organization: "Kepler College",
    phone: "+250 788 353 297",
    email: "pascal.u@keplercollege.ac.rw",
    relationship:
      "An academic lecturer who can confirm my classroom participation, discipline, and commitment to learning at Kepler College.",
  },
  {
    icon: FaBriefcase,
    category: "Professional Reference",
    name: "Mr. Jean Pierre NDAGIJIMANA",
    position: "Doctor",
    organization: "Centre Hospitalier Universitaire de Kigali (CHUK)",
    phone: "+250 783 888434",
    email: "ndagijimapeter@gmail.com",
    relationship:
      "A professional reference from CHUK who can speak about my conduct, communication, and the way I relate with people in a professional setting.",
  },
  {
    icon: FaBuilding,
    category: "Additional Reference",
    name: "Mr. Deo UWIMPUHWE",
    position: "Engineer Planning Coordinator ",
    organization: "Rwanda Energy Group (REG)",
    phone: "+250 786 072 243",
    email: "duwimpuhwe@eucl.reg.rw",
    relationship:
      "A workplace reference who can verify my teamwork, responsibility, and contribution in an engineering and coordination environment.",
  },
];

const referenceHighlights = [
  "This page combines academic and professional referees from Kepler College, CHUK, and Rwanda Energy Group.",
  "Each reference includes a full name, current role, organization, direct phone number, email address, and a short explanation of the relationship.",
  "These details help employers or institutions understand who can verify my academic performance, professional conduct, and workplace contribution.",
];

function Reference() {
  return (
    <section className="page-section contact-page">
      <div className="contact-hero">
        <p className="contact-hero__eyebrow">References</p>
        <h1 className="contact-hero__title">
          Professional reference details for internship, academic, and career
          opportunities
        </h1>
        <p className="contact-hero__text">
          This section presents the key information normally included on a
          reference page: the referee&apos;s full name, position, organization,
          phone number, email address, and your relationship with that person.
        </p>
      </div>

      <div className="reference-page__stack">
        <article className="contact-card reference-page__list">
          <p className="contact-card__label">Reference List</p>
          <h2 className="contact-card__title">
            Information to include for each reference
          </h2>
          <p className="contact-card__text">
            The references below present my academic and professional contacts
            in a clear format so that employers, internship coordinators, and
            institutions can easily understand each person&apos;s role and
            connection to my experience.
          </p>

          <div className="contact-list">
            {references.map((item) => {
              const Icon = item.icon;

              return (
                <article key={`${item.category}-${item.name}`} className="contact-list__item">
                  <div className="contact-list__icon" aria-hidden="true">
                    <Icon />
                  </div>

                  <div className="contact-list__content">
                    <p className="contact-list__label">{item.category}</p>
                    <p className="contact-list__link">{item.name}</p>
                    <div className="reference-details">
                      <div className="reference-details__item">
                        <span
                          className="reference-details__icon"
                          aria-hidden="true"
                        >
                          <FaUserTie />
                        </span>
                        <p className="contact-list__note">
                          <strong>Name:</strong> {item.name}
                        </p>
                      </div>

                      <div className="reference-details__item">
                        <span
                          className="reference-details__icon"
                          aria-hidden="true"
                        >
                          {item.position === "Doctor" ? (
                            <FaUserMd />
                          ) : (
                            <FaIdBadge />
                          )}
                        </span>
                        <p className="contact-list__note">
                          <strong>Position:</strong> {item.position}
                        </p>
                      </div>

                      <div className="reference-details__item">
                        <span
                          className="reference-details__icon"
                          aria-hidden="true"
                        >
                          {item.organization.includes("CHUK") ? (
                            <FaHospital />
                          ) : (
                            <FaBuilding />
                          )}
                        </span>
                        <p className="contact-list__note">
                          <strong>Organization:</strong> {item.organization}
                        </p>
                      </div>

                      <div className="reference-details__item">
                        <span
                          className="reference-details__icon"
                          aria-hidden="true"
                        >
                          <FaPhone />
                        </span>
                        <p className="contact-list__note">
                          <strong>Phone:</strong> {item.phone}
                        </p>
                      </div>

                      <div className="reference-details__item">
                        <span
                          className="reference-details__icon"
                          aria-hidden="true"
                        >
                          <FaEnvelope />
                        </span>
                        <p className="contact-list__note">
                          <strong>Email:</strong> {item.email}
                        </p>
                      </div>

                      <div className="reference-details__item">
                        <span
                          className="reference-details__icon"
                          aria-hidden="true"
                        >
                          <FaBriefcase />
                        </span>
                        <p className="contact-list__note">
                          <strong>Relationship:</strong> {item.relationship}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </article>

        <section className="reference-page__notes" aria-label="Reference guidance">
          <article className="contact-sidebar__panel contact-sidebar__panel--primary">
            <p className="contact-card__label contact-card__label--light">
              Important Note
            </p>
            <h2 className="contact-sidebar__title">
              What makes a reference page look professional
            </h2>
            <p className="contact-sidebar__text">
              This reference page is strongest when each referee is clearly
              linked to a real part of my journey: academic growth at Kepler
              College, professional interaction at CHUK, and workplace
              contribution at Rwanda Energy Group.
            </p>

            <div className="contact-highlights">
              {referenceHighlights.map((highlight) => (
                <div key={highlight} className="contact-highlights__item">
                  <span className="contact-highlights__dot" aria-hidden="true" />
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="contact-sidebar__panel contact-sidebar__panel--secondary reference-page__best-practice">
            <div className="contact-availability">
              <FaEnvelope
                className="contact-availability__icon"
                aria-hidden="true"
              />
              <div>
                <p className="contact-availability__label">Best Practice</p>
                <p className="contact-availability__text">
                  Keep reference details accurate and updated, and make sure
                  each referee has agreed to be listed. Using specific
                  relationships for each person helps employers quickly see
                  which contact is best suited to confirm academic performance
                  or professional experience.
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Reference;
