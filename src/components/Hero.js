import { siteConfig } from "@/config/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="heroMain">
        <div className="heroAvatar" aria-hidden="true">
          {siteConfig.initials}
        </div>
        <div className="heroText">
          <p className="heroName">Hey, I&apos;m {siteConfig.name.split(" ")[0]}</p>
          <p className="heroTagline">{siteConfig.tagline}</p>
          <p className="heroSubline">Shipping solutions that people actually use.</p>
        </div>
      </div>
      <a
        href={siteConfig.resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Resume"
        className="heroResume"
      >
        <i className="fas fa-file-alt" style={{ fontSize: "1.25rem" }}></i>
      </a>
    </section>
  );
}
