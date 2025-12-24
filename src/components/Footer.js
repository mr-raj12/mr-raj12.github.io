import { siteConfig } from "@/config/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          Designed & Built by <strong>{siteConfig.name}</strong>
        </p>
        <p>&copy; {currentYear} All Rights Reserved</p>
      </div>
    </footer>
  );
}
