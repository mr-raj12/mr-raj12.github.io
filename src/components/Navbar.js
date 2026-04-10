import { contactInfo, siteConfig, socialLinks } from "@/config/portfolio";

// Order: Home, Resume, Email, GitHub, LinkedIn, Twitter
const dockOrder = ["github", "linkedin", "twitter", "email"];

export default function Navbar() {
  const byPlatform = Object.fromEntries(
    socialLinks.map((s) => [s.platform, s])
  );

  return (
    <nav className="dock" aria-label="Primary">
      <a href="#home" className="dockItem" aria-label="Home">
        <i className="fas fa-home"></i>
      </a>
      <a
        href={siteConfig.resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="dockItem"
        aria-label="Resume"
      >
        <i className="fas fa-file-alt"></i>
      </a>
      <span className="dockSep" aria-hidden="true"></span>
      {dockOrder.map((p) => {
        const link = byPlatform[p];
        if (!link) return null;
        return (
          <a
            key={p}
            href={link.url}
            target={p === "email" ? undefined : "_blank"}
            rel={p === "email" ? undefined : "noopener noreferrer"}
            className="dockItem"
            aria-label={link.label}
          >
            <i className={link.icon}></i>
          </a>
        );
      })}
    </nav>
  );
}
