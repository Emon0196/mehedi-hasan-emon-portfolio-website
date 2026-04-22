/**
 * App.jsx
 * =======
 * Root application component.
 * Assembles all sections in order, provides theme context,
 * includes SEO meta tags via Helmet, and a scroll-to-top button.
 */

import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

// Theme hook
import useTheme from "./hooks/useTheme";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Publications from "./components/sections/Publications";
import Contact from "./components/sections/Contact";

import { personalInfo } from "./data/portfolioData";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show / hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{personalInfo.name} — {personalInfo.title}</title>
        <meta name="description" content={`${personalInfo.name} — ${personalInfo.title}. ${personalInfo.tagline}`} />
        <meta name="keywords" content="software engineer, web developer, react, portfolio, full-stack" />
        <meta property="og:title" content={`${personalInfo.name} — ${personalInfo.title}`} />
        <meta property="og:description" content={personalInfo.tagline} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalInfo.name} — ${personalInfo.title}`} />
        <meta name="twitter:description" content={personalInfo.tagline} />
      </Helmet>

      {/* Skip to content — accessibility */}
      <a href="#about" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Publications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top FAB */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-colors"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
