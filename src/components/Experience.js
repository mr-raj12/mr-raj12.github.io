import { experiences } from "@/config/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section sectionAlt">
      <div className="container">
        <h2 className="sectionTitle reveal">Experience</h2>
        <div className="experienceGrid">
          {experiences.map((exp, index) => (
            <div key={index} className="experienceCard reveal">
              <div className="experienceHeader">
                <div className="companyInfo">
                  <h3>{exp.company}</h3>
                  <span className="role">{exp.role}</span>
                </div>
                {exp.duration && (
                  <span className="duration">{exp.duration}</span>
                )}
                {exp.proofLink && (
                  <a
                    href={exp.proofLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proofLink"
                  >
                    <i className="fas fa-external-link-alt"></i>{" "}
                    {exp.githubLink ? "Live" : "View PRs"}
                  </a>
                )}
                {exp.githubLink && (
                  <a
                    href={exp.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proofLink"
                    style={{ marginLeft: "8px" }}
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                )}
              </div>
              {exp.type && <p className="experienceType">{exp.type}</p>}
              {exp.tech && <p className="experienceTech">{exp.tech}</p>}
              <ul className="experiencePoints">
                {exp.points.map((point, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
