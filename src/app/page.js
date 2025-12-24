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
 * Uses Intersection Observer to animate elements when they enter viewport
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
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
}

/**
 * Main Portfolio Page
 *
 * All data is managed in /src/config/portfolio.js
 * Edit that file to update your portfolio information.
 */
export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
