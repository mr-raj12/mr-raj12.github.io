import { skillCategories } from "@/config/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section reveal">
      <h2 className="sectionTitle">Skills</h2>
      <div className="skillsList">
        {skillCategories.map((cat, i) => (
          <div key={i} className="skillRow">
            <div className="skillRowTitle">{cat.title}</div>
            <div className="skillTags">
              {cat.skills.map((skill, j) => (
                <span key={j}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
