import { codingProfiles, siteConfig, socialLinks } from "@/config/portfolio";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="heroBg"></div>
      <div className="heroContent">
        <div className={styles.heroText}>
          <p className="heroGreeting reveal">Hello, I&apos;m</p>
          <h1 className="heroName reveal">{siteConfig.name}</h1>
          <p className="heroTagline reveal">{siteConfig.tagline}</p>

          <div className="heroRatings reveal">
            {codingProfiles.map((profile) => (
              <a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`ratingBadge ${profile.className}`}
              >
                <span className="ratingPlatform">{profile.platform}</span>
                <span className="ratingValue">{profile.rating}</span>
              </a>
            ))}
          </div>

          <div className="heroSocials reveal">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target={
                  link.platform !== "email" && link.platform !== "phone"
                    ? "_blank"
                    : undefined
                }
                rel={
                  link.platform !== "email" && link.platform !== "phone"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="socialLink"
                aria-label={link.label}
              >
                <i className={link.icon}></i>
              </a>
            ))}
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
