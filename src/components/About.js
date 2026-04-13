import { aboutStats, education } from "@/config/portfolio";

export default function About() {
  return (
    <section id="about" className="section reveal">
      <h2 className="sectionTitle">About</h2>
      <div className="sectionLead">
        <p>
          An engineer, researcher, and open source contributor specializing in{" "}
          <strong>Agentic</strong> and <strong>Distributed Systems</strong>.
        </p>
        <p className="credLine">
          <span className="cred">
            <img
              src="https://www.google.com/s2/favicons?domain=summerofcode.withgoogle.com&sz=64"
              alt=""
              aria-hidden="true"
            />
            <strong>GSoC 2026 Mentor</strong> at{" "}
            <a
              href="https://summerofcode.withgoogle.com/programs/2026/organizations/omegaup"
              target="_blank"
              rel="noopener noreferrer"
              className="credLink"
            >
              omegaUp
            </a>{" "}
            &amp;{" "}
            <a
              href="https://summerofcode.withgoogle.com/programs/2026/organizations/owasp-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="credLink"
            >
              OWASP
            </a>
          </span>
          <span className="credDot" aria-hidden="true">·</span>
          <a
            className="cred"
            href="https://codeforces.com/profile/Ankit_singh_sisodya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.google.com/s2/favicons?domain=codeforces.com&sz=64"
              alt=""
              aria-hidden="true"
            />
            <strong>Expert</strong> on Codeforces
          </a>
          <span className="credDot" aria-hidden="true">·</span>
          <a
            className="cred"
            href="https://leetcode.com/u/Ankit_singh_sisodya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.simpleicons.org/leetcode/FFA116"
              alt=""
              aria-hidden="true"
            />
            <strong>Guardian</strong> on LeetCode
          </a>
          <span className="credDot" aria-hidden="true">·</span>
          <a
            className="cred"
            href="https://www.codechef.com/users/Ankitsisodya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.google.com/s2/favicons?domain=codechef.com&sz=64"
              alt=""
              aria-hidden="true"
            />
            <strong>5★</strong> on CodeChef
          </a>
        </p>
      </div>

      <div className="eduCard">
        <div className="eduIcon" aria-hidden="true">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div className="eduBody">
          <div className="eduInstitution">{education.institution}</div>
          <div className="eduDegree">{education.degree}</div>
          <div className="eduMeta">{education.duration}</div>
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

    </section>
  );
}
