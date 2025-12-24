import { skillCategories } from "@/config/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="sectionTitle reveal">Technical Skills</h2>
        <div className="skillsGrid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skillCategory reveal">
              <h3>
                <i className={category.icon}></i> {category.title}
              </h3>
              <div className="skillTags">
                {category.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
