"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

// Navigation Component
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navContainer">
        <a href="#" className="navLogo">
          AS
        </a>
        <button
          className={`navToggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger"></span>
        </button>
        <ul className={`navMenu ${isMenuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navLink"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="heroBg"></div>
      <div className="heroContent">
        <div className={styles.heroText}>
          <p className="heroGreeting reveal">Hello, I&apos;m</p>
          <h1 className="heroName reveal">Ankit Sisodya</h1>
          <p className="heroTagline reveal">
            Competitive Programmer • Full-Stack Developer • Open Source
            Contributor
          </p>

          <div className="heroRatings reveal">
            <a
              href="https://codeforces.com/profile/Ankit_singh_sisodya"
              target="_blank"
              rel="noopener noreferrer"
              className="ratingBadge codeforces"
            >
              <span className="ratingPlatform">Codeforces</span>
              <span className="ratingValue">Expert • 1776</span>
            </a>
            <a
              href="https://leetcode.com/u/Ankit_singh_sisodya/"
              target="_blank"
              rel="noopener noreferrer"
              className="ratingBadge leetcode"
            >
              <span className="ratingPlatform">LeetCode</span>
              <span className="ratingValue">Guardian • 2216</span>
            </a>
            <a
              href="https://www.codechef.com/users/Ankitsisodya"
              target="_blank"
              rel="noopener noreferrer"
              className="ratingBadge codechef"
            >
              <span className="ratingPlatform">CodeChef</span>
              <span className="ratingValue">5-Star • 2004</span>
            </a>
          </div>

          <div className="heroSocials reveal">
            <a
              href="https://github.com/Ankitsinghsisodya"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-sisodya-507b99267/"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="mailto:ankitsingh24012005@gmail.com"
              className="socialLink"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="tel:+917667144864"
              className="socialLink"
              aria-label="Phone"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>

          <div className="heroCta reveal">
            <a href="#projects" className="btn btnPrimary">
              View My Work
            </a>
            <a href="#contact" className="btn btnSecondary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <div className="scrollIndicator">
        <div className="mouse"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="sectionTitle reveal">About Me</h2>
        <div className="aboutContent">
          <div className="aboutText reveal">
            <p>
              I&apos;m a <strong>Computer Science</strong> student at{" "}
              <strong>Birla Institute of Technology, Mesra</strong> (2023-2027)
              with a CGPA of <strong>8.42</strong>. My passion lies in
              competitive programming and building impactful web applications.
            </p>
            <p>
              With expertise in solving complex algorithmic problems and a track
              record of <strong>500+ DSA queries resolved</strong> as a mentor,
              I bridge the gap between theoretical knowledge and practical
              application.
            </p>
            <div className="aboutStats">
              <div className="stat">
                <span className="statNumber">17+</span>
                <span className="statLabel">Merged PRs</span>
              </div>
              <div className="stat">
                <span className="statNumber">522</span>
                <span className="statLabel">DSA Queries Resolved</span>
              </div>
              <div className="stat">
                <span className="statNumber">1000+</span>
                <span className="statLabel">Active Users (IEEE Site)</span>
              </div>
            </div>
          </div>
          <div className="aboutEducation reveal">
            <div className="educationCard">
              <div className="educationIcon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="educationDetails">
                <h3>Birla Institute of Technology, Mesra</h3>
                <p className="degree">B.Tech in Computer Science</p>
                <p className="duration">September 2023 – May 2027</p>
                <p className="location">Ranchi, Jharkhand</p>
                <span className="cgpa">CGPA: 8.42</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Experience Section
function Experience() {
  const experiences = [
    {
      company: "TLE Eliminator",
      role: "Intern",
      duration: "Dec 2024 – Aug 2025",
      type: "Remote • 9 months",
      points: [
        "Helped students understand and resolve DSA-related doubts by providing step-by-step explanations",
        "Guided students in <strong>preparing for competitive coding challenges</strong>, focusing on techniques and strategies",
        'Resolved <strong>522 DSA queries</strong> in 3 months, earning the <strong>"Top Mentor"</strong> appreciation for four consecutive weeks',
      ],
    },
    {
      company: "OmegaUp",
      role: "Open Source Contributor",
      tech: "PHP • Vue.js • TypeScript • GitHub Actions",
      proofLink:
        "https://github.com/omegaup/omegaup/pulls?q=is%3Amerged+is%3Apr+author%3AAnkitsinghsisodya+",
      points: [
        "<strong>Impact:</strong> Delivered 17 merged PRs spanning Backend, Frontend, & DevOps modules",
        "<strong>Feature:</strong> Engineered real-time search for dynamic contributor rankings (#8647)",
        "<strong>Backend:</strong> Eliminated N+1 query bottlenecks via efficient bulk operations (#8638)",
        "<strong>DevOps:</strong> Streamlined CI pipelines & automated Discord notification workflows (#8574)",
      ],
    },
  ];

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
                    <i className="fas fa-external-link-alt"></i> View PRs
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

// Projects Section
function Projects() {
  const projects = [
    {
      title: "SlotSwapper",
      description:
        "Collaborative calendar application for real-time schedule management and atomic slot swapping with WebSocket notifications.",
      icon: "fas fa-calendar-alt",
      tech: ["React", "Node.js", "PostgreSQL", "Prisma", "WebSocket", "Docker"],
      liveLink: "https://slotswapper-ss.vercel.app/",
      githubLink: "https://github.com/Ankitsinghsisodya/SlotSwapper",
    },
    {
      title: "Test Case Generator",
      description:
        "AI-powered SaaS using Gemini API to automate test case generation with Razorpay subscription handling, deployed on AWS EC2.",
      icon: "fas fa-robot",
      tech: ["Next.js", "TypeScript", "Gemini API", "Docker", "AWS", "Nginx"],
      liveLink: "https://test-case-generator-two.vercel.app/",
      githubLink: "https://github.com/Ankitsinghsisodya/test-case-generator",
    },
    {
      title: "IEEE BIT Mesra Website",
      description:
        "Full-stack platform with 1000+ active users featuring a leaderboard integrating Codeforces, LeetCode, and CodeChef APIs.",
      icon: "fas fa-globe",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
      liveLink: "https://www.ieeebitmesra.in/",
      githubLink: "https://github.com/Ankitsinghsisodya/IEEE-Website",
    },
  ];

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

// Achievements Section
function Achievements() {
  const achievements = [
    {
      rank: "AIR 505",
      title: "Meta Hacker Cup 2024",
      desc: "All India Rank 505 in Meta Hacker Cup organized by Meta",
      link: "https://www.facebook.com/codingcompetitions/hacker-cup/2024/certificate/1029241675873927",
      linkText: "View Certificate",
    },
    {
      rank: "Rank 7",
      title: "Codewars by IIT Dhanbad",
      desc: "Secured Rank 7 among 1000+ participants",
      link: "https://practice.geeksforgeeks.org/contest/codewars-by-c3/leaderboard",
      linkText: "View Leaderboard",
    },
    {
      rank: "GR 179",
      title: "Codeforces Round 962 (Div. 3)",
      desc: "Global Rank 179 among 60,000+ participants",
      link: "https://codeforces.com/contest/1996/standings/participant/187434533#p187434533",
      linkText: "View Standing",
    },
    {
      rank: "GR 530",
      title: "Codeforces Round 982 (Div. 2)",
      desc: "Global Rank 530 among 24,000+ participants",
      link: "https://codeforces.com/contest/2027/standings/participant/195174316#p195174316",
      linkText: "View Standing",
    },
    {
      rank: "GR 16",
      title: "Cook-a-Code by IIIT Vadodara",
      desc: "Global Rank 16 in team competition",
      link: "https://codeforces.com/gym/565997/standings",
      linkText: "View Standing",
    },
    {
      rank: "GR 344",
      title: "LeetCode Biweekly 145",
      desc: "Global Rank 344 among 23,596 participants",
      link: "https://leetcode.com/contest/biweekly-contest-145/ranking/?region=global_v2",
      linkText: "View Ranking",
    },
    {
      rank: "GR 50",
      title: "CodeChef Starters 174",
      desc: "Global Rank 50 in CodeChef Starters",
      link: "https://www.codechef.com/rankings/START174B?itemsPerPage=100&order=asc&page=1&sortBy=rank",
      linkText: "View Ranking",
    },
  ];

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

// Skills Section
function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: "fas fa-code",
      skills: ["C++", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Web Development",
      icon: "fas fa-laptop-code",
      skills: [
        "React",
        "Next.js",
        "Express.js",
        "Vite",
        "Prisma",
        "Supabase",
        "Appwrite",
      ],
    },
    {
      title: "Databases & Infrastructure",
      icon: "fas fa-database",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Docker",
        "AWS",
        "Nginx",
        "CI/CD",
      ],
    },
    {
      title: "Tools",
      icon: "fas fa-tools",
      skills: ["Git", "GitHub", "Postman", "Vercel", "Cloudinary", "Render"],
    },
  ];

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

// Contact Section
function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="sectionTitle reveal">Get In Touch</h2>
        <p className="contactText reveal">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, feel free to reach out!
        </p>
        <div className="contactLinks reveal">
          <a href="mailto:ankitsingh24012005@gmail.com" className="contactCard">
            <i
              className="fas fa-envelope"
              style={{ fontSize: "1.3rem", color: "var(--accent-primary)" }}
            ></i>
            <span>ankitsingh24012005@gmail.com</span>
          </a>
          <a href="tel:+917667144864" className="contactCard">
            <i
              className="fas fa-phone"
              style={{ fontSize: "1.3rem", color: "var(--accent-primary)" }}
            ></i>
            <span>+91 7667144864</span>
          </a>
        </div>
        <div className="contactSocials reveal">
          <a
            href="https://github.com/Ankitsinghsisodya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-sisodya-507b99267/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://codeforces.com/profile/Ankit_singh_sisodya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Codeforces"
          >
            <i className="fas fa-code"></i>
          </a>
          <a
            href="https://leetcode.com/u/Ankit_singh_sisodya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
          >
            <i className="fas fa-laptop-code"></i>
          </a>
          <a
            href="https://www.codechef.com/users/Ankitsisodya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodeChef"
          >
            <i className="fas fa-utensils"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Designed & Built by <strong>Ankit Sisodya</strong>
        </p>
        <p>&copy; 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
}

// Scroll Reveal Hook
function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
}

// Main Page Component
export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
