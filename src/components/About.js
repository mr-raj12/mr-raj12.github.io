import { aboutStats, codingProfiles, education } from "@/config/portfolio";

export default function About() {
  return (
    <section id="about" className="section reveal">
      <h2 className="sectionTitle">About</h2>
      <div className="sectionLead">
        <p>
          I&apos;m a <strong>Computer Science</strong> student at{" "}
          <strong>{education.institution}</strong> with a CGPA of{" "}
          <strong>{education.cgpa}</strong>. I love competitive programming,
          contributing to open source, and Shipping solutions that people
          actually use.
        </p>
        <p>
          As an <strong>ICPC Asia West Regionalist</strong> and{" "}
          <strong>GSoC&apos;26 Mentor</strong> for{" "}
          <strong>omegaUp</strong> and <strong>OWASP</strong>, I pair
          algorithmic depth with real-world software engineering. Along the way
          I&apos;ve shipped <strong>100+ merged PRs</strong> across major OSS
          projects and resolved <strong>700+ DSA queries</strong> as a mentor.
        </p>
      </div>

      <div className="eduCard">
        <div className="eduIcon" aria-hidden="true">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div className="eduBody">
          <div className="eduInstitution">{education.institution}</div>
          <div className="eduDegree">{education.degree}</div>
          <div className="eduMeta">
            {education.duration} · {education.location}
          </div>
          <div className="eduCgpa">CGPA: {education.cgpa}</div>
        </div>
      </div>

      <div className="aboutStats">
        {aboutStats.map((stat, i) => {
          const inner = (
            <>
              <span className="statNumber">{stat.number}</span>
              <span className="statLabel">{stat.label}</span>
            </>
          );
          return stat.link ? (
            <a
              key={i}
              href={stat.link}
              target="_blank"
              rel="noopener noreferrer"
              className="statCard"
            >
              {inner}
            </a>
          ) : (
            <div key={i} className="statCard">
              {inner}
            </div>
          );
        })}
      </div>

      <div className="codingProfiles">
        {codingProfiles.map((profile, i) => (
          <a
            key={i}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="profileLink"
          >
            <span className="profilePlatform">{profile.platform}</span>
            <span className="profileRating">{profile.rating}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
