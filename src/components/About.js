import { aboutStats, education } from "@/config/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="sectionTitle reveal">About Me</h2>
        <div className="aboutContent">
          <div className="aboutText reveal">
            <p>
              I&apos;m a <strong>Computer Science</strong> student at{" "}
              <strong>{education.institution}</strong> (
              {education.duration.split(" – ")[0].split(" ")[1]}–
              {education.duration.split(" – ")[1].split(" ")[1]}) with a CGPA of{" "}
              <strong>{education.cgpa}</strong>. My passion lies in competitive
              programming, open source contributions, and building impactful web
              applications.
            </p>
            <p>
              As an <strong>ICPC Asia West Regionalist</strong> and active open
              source contributor with <strong>24+ merged PRs</strong>, I combine
              algorithmic expertise with real-world software development.
              I&apos;ve also resolved <strong>700+ DSA queries</strong> as a
              mentor, bridging the gap between theoretical knowledge and
              practical application.
            </p>
            <div className="aboutStats">
              {aboutStats.map((stat, index) => (
                <div key={index} className="stat">
                  <span className="statNumber">{stat.number}</span>
                  <span className="statLabel">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="aboutEducation reveal">
            <div className="educationCard">
              <div className="educationIcon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="educationDetails">
                <h3>{education.institution}</h3>
                <p className="degree">{education.degree}</p>
                <p className="duration">{education.duration}</p>
                <p className="location">{education.location}</p>
                <span className="cgpa">CGPA: {education.cgpa}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
