"use client";

import { navLinks, siteConfig } from "@/config/portfolio";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navContainer">
        <a href="#" className="navLogo">
          {siteConfig.initials}
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
          <li>
            <a
              href={siteConfig.resumeLink}
              className="navLink resumeBtn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file-alt"></i> Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
