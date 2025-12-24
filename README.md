# 🚀 Ankit Sisodya | Portfolio

A modern, responsive portfolio website built with **Next.js 16** featuring a sleek dark theme, glassmorphism effects, and smooth animations.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🌙 **Dark Theme** with glassmorphism and gradient effects
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- ⚡ **Fast Performance** - Built with Next.js App Router
- 🎯 **Modular Architecture** - Separate components and centralized config
- 🎨 **Smooth Animations** - Scroll reveal effects using Intersection Observer
- 🔗 **Dynamic Content** - Easy to update via single config file

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** JavaScript/React
- **Styling:** CSS with custom properties
- **Icons:** Font Awesome 6
- **Font:** Inter (Google Fonts)

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles with dark theme
│   ├── layout.js        # Root layout with metadata
│   └── page.js          # Main page composition
├── components/
│   ├── Navbar.js        # Responsive navigation
│   ├── Hero.js          # Hero with ratings
│   ├── About.js         # Education & stats
│   ├── Experience.js    # Work history
│   ├── Projects.js      # Featured projects
│   ├── Achievements.js  # Competition rankings
│   ├── Skills.js        # Technical skills
│   ├── Contact.js       # Contact info
│   └── Footer.js        # Footer
└── config/
    └── portfolio.js     # ⭐ All portfolio data
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Ankitsinghsisodya/Ankitsisodya.git

# Navigate to project
cd Ankitsisodya

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Customization

All portfolio content is managed in a single file: `src/config/portfolio.js`

### Update Personal Info

```javascript
export const siteConfig = {
  name: "Your Name",
  tagline: "Your Tagline",
  // ...
};
```

### Add Projects

```javascript
export const projects = [
  {
    title: "Project Name",
    description: "Description",
    tech: ["React", "Node.js"],
    liveLink: "https://...",
    githubLink: "https://...",
  },
  // ...
];
```

### Add Achievements

```javascript
export const achievements = [
  {
    rank: "Rank 1",
    title: "Competition Name",
    desc: "Description",
    link: "https://proof-link",
  },
  // ...
];
```

- **GitHub:** [@Ankitsinghsisodya](https://github.com/Ankitsinghsisodya)
- **LinkedIn:** [Ankit Sisodya](https://www.linkedin.com/in/ankit-sisodya)
- **Codeforces:** [Expert (1776)](https://codeforces.com/profile/Ankit_singh_sisodya)
- **LeetCode:** [Guardian (2216)](https://leetcode.com/u/Ankit_singh_sisodya/)

