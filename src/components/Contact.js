import { contactInfo } from "@/config/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section reveal">
      <h2 className="sectionTitle">Contact</h2>
      <div className="sectionLead">
        <p>
          The fastest way to reach me is via email or the platforms in the dock
          below.
        </p>
      </div>
      <div className="contactList">
        <a
          href={`mailto:${contactInfo.email}`}
          className="contactRow"
        >
          <i className="fas fa-envelope contactIcon"></i>
          <span>{contactInfo.email}</span>
        </a>
        <a
          href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
          className="contactRow"
        >
          <i className="fas fa-phone contactIcon"></i>
          <span>{contactInfo.phone}</span>
        </a>
      </div>
    </section>
  );
}
