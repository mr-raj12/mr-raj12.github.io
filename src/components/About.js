import Image from "next/image";
import { aboutStats, codingProfiles, education } from "@/config/portfolio";

const profileIcons = {
  codeforces: "https://www.google.com/s2/favicons?domain=codeforces.com&sz=64",
  leetcode: "https://cdn.simpleicons.org/leetcode/FFA116",
  codechef: "https://www.google.com/s2/favicons?domain=codechef.com&sz=64",
};

export default function About() {
  return (
    <section id="about" className="section reveal">
      <h2 className="sectionTitle">About</h2>
      <div className="sectionLead">
        <p>
          An engineer and open source contributor specializing in{" "}
          <strong>AI Systems</strong> and <strong>Full-Stack Development</strong>.
        </p>
        <p className="credLine">
          <a
            className="cred"
            href="https://www.ycombinator.com/startupschool"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://www.google.com/s2/favicons?domain=ycombinator.com&sz=64"
              alt=""
              aria-hidden="true"
              width={16}
              height={16}
            />
            <strong>Y Combinator</strong> Startup School
          </a>
          {/* {codingProfiles.map((profile, i) => (
            <span key={i} style={{ display: "contents" }}>
              <span className="credDot" aria-hidden="true">·</span>
              <a
                className="cred"
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={profileIcons[profile.className]}
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                />
                <strong>{profile.rating.split(" • ")[0]}</strong> on {profile.platform}
              </a>
            </span>
          ))} */}
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
