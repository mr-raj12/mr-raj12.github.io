import { achievements } from "@/config/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="section sectionAlt">
      <div className="container">
        <h2 className="sectionTitle reveal">Achievements</h2>
        <div className="achievementsGrid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievementCard reveal">
              <div className="achievementRank">{achievement.rank}</div>
              <h3>{achievement.title}</h3>
              <p>{achievement.desc}</p>
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="achievementLink"
              >
                {achievement.linkText} <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
