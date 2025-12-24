/**
 * Portfolio Configuration
 *
 * Edit this file to update your portfolio information.
 * The website will automatically reflect the changes.
 */

export const siteConfig = {
  name: "Ankit Sisodya",
  initials: "AS",
  title: "Ankit Sisodya | Portfolio",
  description:
    "Ankit Sisodya - Computer Science student at BIT Mesra, Competitive Programmer, and Full-Stack Developer. Expert on Codeforces, Guardian on LeetCode.",
  tagline:
    "Competitive Programmer • Full-Stack Developer • Open Source Contributor",
  resumeLink:
    "https://drive.google.com/file/d/17nsuQmwnG-FZNcWGhAJ-VehEWinyuTfQ/view",
};

export const contactInfo = {
  email: "ankitsingh24012005@gmail.com",
  phone: "+91 7667144864",
};

export const socialLinks = [
  {
    platform: "github",
    url: "https://github.com/Ankitsinghsisodya",
    icon: "fab fa-github",
    label: "GitHub",
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/ankit-sisodya-507b99267/",
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
  },
  {
    platform: "email",
    url: "mailto:ankitsingh24012005@gmail.com",
    icon: "fas fa-envelope",
    label: "Email",
  },
  {
    platform: "phone",
    url: "tel:+917667144864",
    icon: "fas fa-phone",
    label: "Phone",
  },
];

export const codingProfiles = [
  {
    platform: "Codeforces",
    rating: "Expert • 1776",
    url: "https://codeforces.com/profile/Ankit_singh_sisodya",
    className: "codeforces",
  },
  {
    platform: "LeetCode",
    rating: "Guardian • 2216",
    url: "https://leetcode.com/u/Ankit_singh_sisodya/",
    className: "leetcode",
  },
  {
    platform: "CodeChef",
    rating: "5-Star • 2004",
    url: "https://www.codechef.com/users/Ankitsisodya",
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
  { number: "24+", label: "Merged PRs" },
  { number: "704", label: "DSA Queries Resolved" },
  { number: "1000+", label: "Active Users (IEEE Site)" },
];

export const education = {
  institution: "Birla Institute of Technology, Mesra",
  degree: "B.Tech in Computer Science",
  duration: "September 2023 – April 2027",
  location: "Ranchi, Jharkhand",
  cgpa: "8.42",
};

export const experiences = [
  {
    company: "TLE Eliminator",
    role: "Intern",
    duration: "Dec 2024 – Aug 2025",
    type: "Remote • 9 months",
    tech: null,
    proofLink: null,
    points: [
      "Helped students understand and resolve DSA-related doubts by providing step-by-step explanations",
      "Guided students in <strong>preparing for competitive coding challenges</strong>, focusing on techniques and strategies",
      'Resolved <strong>704 DSA queries</strong> in 9 months and earned the <strong>"Top Mentor"</strong> appreciation for four consecutive weeks',
    ],
  },
  {
    company: "OmegaUp",
    role: "Open Source Contributor",
    duration: null,
    type: null,
    tech: "PHP • Vue.js • TypeScript • GitHub Actions",
    proofLink:
      "https://github.com/omegaup/omegaup/pulls?q=is%3Amerged+is%3Apr+author%3AAnkitsinghsisodya+",
    points: [
      "<strong>Impact:</strong> Delivered 24 merged PRs spanning Backend, Frontend, & DevOps modules",
      "<strong>Feature:</strong> Integrate search functionality in school ranking (<a href='https://github.com/omegaup/omegaup/pull/8669' target='_blank'>#8669</a>)",
      "<strong>Backend:</strong> Optimize bulk fetching of contest problems to reduce N+1 query issues (<a href='https://github.com/omegaup/omegaup/pull/8638' target='_blank'>#8638</a>)",
      "<strong>DevOps:</strong> Add workflow to check PR linked issues and assignees (<a href='https://github.com/omegaup/omegaup/pull/8621' target='_blank'>#8621</a>)",
      "<strong>Validation:</strong> Add image size validation and error messages for image uploads (<a href='https://github.com/omegaup/omegaup/pull/8619' target='_blank'>#8619</a>)",
    ],
  },
  {
    company: "Adventure Booking Platform",
    role: "Freelance Developer",
    duration: null,
    type: "Freelance Project",
    tech: "React.js • Express.js • Redis • Socket.IO • PayPal API",
    proofLink: "https://booking-web-bay.vercel.app/",
    githubLink:
      "https://github.com/Adnan2k5/Booking-Web/commits?author=Ankitsinghsisodya",
    points: [
      "Engineered a data-driven <strong>gamification system</strong> that aggregates user activity to track and award instructor achievements, integrated directly into the <strong>PayPal</strong> service to trigger milestones upon payment completion",
      "Enhanced backend reliability by implementing centralized <strong>error handling middleware</strong> and refactoring authentication logic to optimize password recovery and data validation workflows",
    ],
  },
];

export const projects = [
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

export const achievements = [
  {
    rank: "Regionalist",
    title: "ICPC Asia West 2025",
    desc: "ICPC Asia West Continent Regionalist 2025",
    link: "https://icpc.global/ICPCID/XGJW19PMRAEV",
    linkText: "View Profile",
  },
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

export const skillCategories = [
  {
    title: "Languages",
    icon: "fas fa-code",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Web Development",
    icon: "fas fa-laptop-code",
    skills: [
      "React",
      "Next.js",
      "Express.js",
      "Hono",
      "Vite",
      "Prisma",
      "NextAuth",
      "WebSocket",
      "WebRTC",
      "Supabase",
      "Appwrite",
    ],
  },
  {
    title: "Databases & Infrastructure",
    icon: "fas fa-database",
    skills: [
      "PostgreSQL",
      "NeonDB",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
      "Cloudflare",
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
