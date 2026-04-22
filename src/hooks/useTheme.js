/**
 * useTheme.js
 * ===========
 * Custom hook for dark / light mode toggling.
 * - Reads system preference on first visit
 * - Persists user choice in localStorage
 * - Applies "light" class to <html> (dark is the default, no class needed)
 *
 * Usage:
 *   const { theme, toggleTheme } = useTheme();
 */

import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) return saved;

    // Fall back to system preference
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};

export default useTheme;
