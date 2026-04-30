/**
 * Portfolio Configuration
 *
 * Edit this file to update your portfolio information.
 * The website will automatically reflect the changes.
 */

export const siteConfig = {
  name: "Mrityunjay Raj",
  initials: "MR",
  title: "Mrityunjay Raj",
  description:
    "Mrityunjay Raj - Computer Science student at BIT Mesra, 5x Hackathon Winner, AI Engineer, Open Source Contributor.",
  tagline:
    "CSE • BIT Mesra • AI Engineer • 5x Hackathon Winner",
  resumeLink:
    "https://drive.google.com/file/d/15WgBVmarlHjF76NDsubvpdaAJWCaWO9e/view",
};

export const contactInfo = {
  email: "mr.raj.earth@gmail.com",
};

export const socialLinks = [
  {
    platform: "github",
    url: "https://github.com/mr-raj12",
    icon: "fab fa-github",
    label: "GitHub",
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/mrityunjay-raj/",
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
  },
  {
    platform: "twitter",
    url: "https://x.com/mr_raj_earth",
    icon: "fab fa-x-twitter",
    label: "X (Twitter)",
  },
  {
    platform: "email",
    url: "mailto:mr.raj.earth@gmail.com",
    icon: "fas fa-envelope",
    label: "Email",
  },
];

export const codingProfiles = [
  {
    platform: "Codeforces",
    rating: "Pupil • 1225",
    url: "https://codeforces.com/profile/mr_raj12",
    className: "codeforces",
  },
  {
    platform: "LeetCode",
    rating: "Specialist • 1556",
    url: "https://leetcode.com/u/mr_raj12/",
    className: "leetcode",
  },
  {
    platform: "CodeChef",
    rating: "1-Star • 1376",
    url: "https://www.codechef.com/users/mr_raj12",
    className: "codechef",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const aboutStats = [
  { number: "75+", label: "Merged PRs (Open Source)" },
  {
    number: "2k+",
    label: "Active Users (GSoC Espionage)",
    link: "https://gsoc.app/",
  },
];

export const education = {
  institution: "Birla Institute of Technology, Mesra",
  degree: "B.Tech in Computer Science",
  duration: "September 2023 – July 2027",
  cgpa: "8.22",
};

export const experiences = [
  {
    company: "Google Summer of Code 2026",
    role: "Open Source Developer – Python Software Foundation",
    duration: "May 2026 – Sep 2026",
    type: "Remote • Active",
    tech: "Python • BorgBackup • C",
    logo: "https://www.google.com/s2/favicons?domain=summerofcode.withgoogle.com&sz=128",
    proofLink: "https://summerofcode.withgoogle.com/programs/2026/organizations/python-software-foundation",
    points: [
      "Project: <strong>Borgbackup Pack Files for borg2</strong> implementing pack file support for the next-generation borg2 storage backend — <a href=\"https://github.com/search?q=is%3Apr+author%3Amr-raj12+is%3Amerged&type=pullrequests\" target=\"_blank\" rel=\"noopener noreferrer\">view all PRs</a>",
    ],
  },
  {
    company: "Klyrax Labs",
    role: "Associate Software Engineer",
    duration: "Dec 2025 – Present",
    type: "Remote • Part-time",
    tech: null,
    logo: "/logos/klyrax_labs_logo.jpg",
    proofLink: "https://www.linkedin.com/in/mrityunjay-raj/",
    points: [
      "Contributing to product development and engineering initiatives as an Associate Software Engineer",
    ],
  },
  {
    company: "Open Source Contributor",
    role: "BorgBackup • BorgBase • OSSF",
    duration: "Dec 2025 – Present",
    type: "Remote • 50+ Pull Requests",
    tech: "Python • CI/CD • GitHub Actions",
    logo: "/logos/borg.png",
    proofLink:
      "https://github.com/borgbackup/borg/pulls?q=is%3Amerged+is%3Apr+author%3Amr-raj12",
    points: [
      "<strong>BorgBackup (Borg):</strong> Authored 33 PRs optimizing CI/CD pipelines, Python 3.12 compatibility, and resolving complex timezone bugs",
      "<strong>BorgBase (Vorta):</strong> Authored 16 PRs optimizing CI/CD pipelines, Python 3.12 compatibility, and resolving complex timezone bugs, completing 2 full projects",
      "<strong>OSSF (CVE Binary Tool):</strong> Resolved critical Windows crash loops involving sqlite3 databases via filesystem optimizations",
    ],
  },
  {
    company: "EkamApps (Turrant AI)",
    role: "AI Engineering Intern",
    duration: "Oct 2025 – Jan 2026",
    type: "Remote • 4 months",
    tech: "Python • FastAPI • Next.js • PostgreSQL • REST APIs • Supabase",
    logo: "/logos/ekamapps.jpg",
    proofLink: "https://turrant.ai",
    points: [
      "Engineered a scalable RESTful API suite and credit-based billing microservice, successfully handling <strong>500+ concurrent transactions</strong> using Node.js and FastAPI",
      "Architected a multi-tenant notification system across WhatsApp, email, and web portals using an event-driven architecture with message queuing",
      "Optimized PostgreSQL schemas (<strong>118+ tables</strong>) via advanced query tuning and indexing, improving OCR accuracy by 25%",
    ],
  },
  {
    company: "BITAcademia",
    role: "SDE Intern",
    duration: "July 2025 – Present",
    type: "Birla Institute of Technology, Mesra",
    tech: "React • Node.js • MongoDB • Express",
    logo: "https://www.google.com/s2/favicons?domain=bitmesra.ac.in&sz=128",
    proofLink: "http://139.167.188.221:3000",
    githubLink: "https://github.com/BitWebApp/BitWebApp-24",
    points: [
      "Developed features for the official academic platform to streamline academic management for students, faculty, and administration",
      "Contributed to building a comprehensive system for managing academic workflows at BIT Mesra",
    ],
  },
  {
    company: "PromptCue",
    role: "SDE Intern",
    duration: "Jan 2025 – Jun 2025",
    type: "Remote • 6 months",
    tech: "Node.js • Next.js • Redis • PostgreSQL",
    logo: "/logos/promptcue.png",
    proofLink: "https://www.linkedin.com/in/mrityunjay-raj/",
    points: [
      "Built an AI aggregator platform integrating LLMs, MCP tools, local file systems, and image generation APIs using Node.js and Next.js",
      "Implemented multi-model support enabling seamless switching between Gemini, GPT, Claude, and other LLMs through a unified interface",
      "Reduced model inference latency by <strong>30%</strong> by implementing Redis caching strategies and asynchronous processing queues",
    ],
  },
  {
    company: "ScrapGenie",
    role: "SDE Intern",
    duration: "Dec 2024 – Jan 2025",
    type: "Remote • 2 months",
    tech: null,
    logo: "/logos/scrapgenie.jpg",
    proofLink: "https://www.linkedin.com/in/mrityunjay-raj/",
    points: [
      "Contributed to software development initiatives enhancing operational efficiency and scalability for an innovative scrap recycling platform",
    ],
  },
];

export const projects = [
  {
    title: "GSoC Espionage",
    description:
      "GitHub PR analytics dashboard with 1.4k+ active users visualizing merge rates, contributor stats, and activity timelines for any repository. Features branch filtering, customizable time ranges, CSV/JSON data exports, GSoC 2026 organization lists, and theme support.",
    icon: "fas fa-chart-line",
    tech: ["React", "TypeScript", "Vite", "GitHub API"],
    liveLink: "https://gsoc.app/",
    githubLink: "https://github.com/Ankitsinghsisodya/Gsoc-espionage",
  },
];

export const achievements = [
  {
    rank: "Tech Lead",
    title: "Pantheon'25 – HackQuest'25",
    desc: "Technical Lead managing infrastructure for 4000+ visitors and spearheading the HackQuest'25 hackathon for 1200+ participants",
    link: "https://pantheon25.com/",
    linkText: "pantheon25.com",
  },
  {
    rank: "Core Dev",
    title: "BITOTSAV",
    desc: "Core Developer building a QR-based ticketing system for 5000+ attendees, boosting event engagement by 40%",
    link: "https://bitotsav.bitmesra.ac.in/",
    linkText: "bitotsav.bitmesra.ac.in",
  },
  {
    rank: "Coordinator",
    title: "UNESQUO & SPIC MACAY",
    desc: "Technical Coordinator ensuring 99.9% uptime for web platforms during cultural and musical events",
    link: "http://unesquo.in/",
    linkText: "unesquo.in",
  },
  {
    rank: "2nd Place",
    title: "HACKATRON – BIT Sindri",
    desc: "Secured 2nd place with an innovative Stocks Portfolio Manager solution at HACKATRON",
    link: "https://www.linkedin.com/posts/vaibhav-anand-singh-412604299_teamosiris-hackathon-hackatron-ugcPost-7357728905987788800-T3L3",
    linkText: "View Post",
  },
  {
    rank: "PPI Offer",
    title: "HACKFEST – IIT ISM Dhanbad",
    desc: "Received Pre-Placement Interview (PPI) offer from ILNB Services at HACKFEST by IIT ISM Dhanbad",
    link: "https://www.linkedin.com/posts/vaibhav-anand-singh-412604299_hackfest25-fintech-ai-ugcPost-7317647847674298386-bCB4",
    linkText: "View Post",
  },
  {
    rank: "1st Place",
    title: "CICADA-CTF",
    desc: "Secured 1st place in CICADA-CTF and won the no-monitor contest in Blind Coding competition",
    link: null,
    linkText: null,
  },
];

export const skillCategories = [
  {
    title: "Languages",
    icon: "fas fa-code",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL", "Solidity"],
  },
  {
    title: "Web Development",
    icon: "fas fa-laptop-code",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "GraphQL",
      "REST APIs",
      "WebSockets",
      "Prisma",
      "Supabase",
      "Appwrite",
    ],
  },
  {
    title: "Databases & Cloud",
    icon: "fas fa-database",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
      "GCP",
      "Nginx",
      "CI/CD",
    ],
  },
  {
    title: "Tools",
    icon: "fas fa-tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Firebase", "Vercel", "Cloudinary", "Render"],
  },
];
