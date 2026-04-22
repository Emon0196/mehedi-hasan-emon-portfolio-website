/**
 * useScrollSpy.js
 * ===============
 * Custom hook that observes which section is currently in the viewport.
 * Returns the active section id so the Navbar can highlight the correct link.
 *
 * Usage:
 *   const activeSection = useScrollSpy(["home","about","skills", ...]);
 */

import { useState, useEffect } from "react";

const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: `-${offset}px 0px -50% 0px`,
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export default useScrollSpy;
