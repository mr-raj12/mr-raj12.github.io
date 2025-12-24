import { projects } from "@/config/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="sectionTitle reveal">Featured Projects</h2>
        <div className="projectsGrid">
          {projects.map((project, index) => (
            <article key={index} className="projectCard reveal">
              <div className="projectImage">
                <div className="projectOverlay">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectBtn"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectBtn"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="projectPlaceholder">
                  <i className={project.icon}></i>
                </div>
              </div>
              <div className="projectContent">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="projectTech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
