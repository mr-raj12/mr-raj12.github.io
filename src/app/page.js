"use client";

import {
  About,
  Achievements,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
} from "@/components";
import { useEffect } from "react";

/**
 * Custom hook for scroll reveal animations
 */
function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
    };
  }, []);
}

export default function Home() {
  useScrollReveal();

  return (
    <div className="page">
      <main className="container">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
        <Footer />
      </main>
      <Navbar />
    </div>
  );
}
