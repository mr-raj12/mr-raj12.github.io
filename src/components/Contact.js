import { codingProfiles, contactInfo, socialLinks } from "@/config/portfolio";

export default function Contact() {
  // Extended socials for contact section (includes coding profiles)
  const contactSocials = [
    ...socialLinks.filter(
      (l) => l.platform === "github" || l.platform === "linkedin"
    ),
    ...codingProfiles.map((p) => ({
      platform: p.platform.toLowerCase(),
      url: p.url,
      icon:
        p.platform === "Codeforces"
          ? "fas fa-code"
          : p.platform === "LeetCode"
          ? "fas fa-laptop-code"
          : "fas fa-utensils",
      label: p.platform,
    })),
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="sectionTitle reveal">Get In Touch</h2>
        <p className="contactText reveal">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, feel free to reach out!
        </p>
        <div className="contactLinks reveal">
          <a href={`mailto:${contactInfo.email}`} className="contactCard">
            <i
              className="fas fa-envelope"
              style={{ fontSize: "1.3rem", color: "var(--accent-primary)" }}
            ></i>
            <span>{contactInfo.email}</span>
          </a>
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
            className="contactCard"
          >
            <i
              className="fas fa-phone"
              style={{ fontSize: "1.3rem", color: "var(--accent-primary)" }}
            ></i>
            <span>{contactInfo.phone}</span>
          </a>
        </div>
        <div className="contactSocials reveal">
          {contactSocials.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
