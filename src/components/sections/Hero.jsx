/**
 * Hero.jsx
 * ========
 * Full-viewport hero section with:
 *   • Animated gradient background
 *   • Typing / reveal effect for tagline via Framer Motion
 *   • Three CTA buttons (Projects, Contact, Resume)
 *   • Bouncing scroll indicator
 */

import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiSend } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";
import { personalInfo } from "../../data/portfolioData";
import { staggerContainerSlow, fadeInUp } from "../../utils/animations";

const Hero = () => {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Split tagline into words for stagger animation
  const taglineWords = personalInfo.tagline.split(" ");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
      aria-label="Hero"
    >
      {/* Floating decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary-600/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary-500/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-accent-500/10 blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
      >
        {/* Greeting */}
        <motion.div variants={fadeInUp} className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary-300 light:text-primary-600 text-sm font-medium border border-primary-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {personalInfo.availability}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-dark-50 light:text-dark-900"
        >
          Hi, I'm{" "}
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl md:text-2xl text-dark-300 light:text-dark-600 font-medium mb-4"
        >
          {personalInfo.title}
        </motion.p>

        {/* Tagline with word-by-word reveal */}
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg text-dark-400 light:text-dark-500 mb-10 max-w-2xl mx-auto"
        >
          {taglineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
              className="inline-block mr-1.5"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("#projects")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25"
          >
            <HiOutlineCode size={18} />
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("#contact")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass text-dark-200 light:text-dark-700 font-medium hover:bg-dark-800/50 light:hover:bg-dark-100 border border-dark-700/30 light:border-dark-200 transition-colors"
          >
            <FiSend size={16} />
            Contact Me
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass text-dark-200 light:text-dark-700 font-medium hover:bg-dark-800/50 light:hover:bg-dark-100 border border-dark-700/30 light:border-dark-200 transition-colors"
          >
            <FiDownload size={16} />
            Resume
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => handleScroll("#about")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-dark-400 light:text-dark-500 hover:text-primary-400 transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <FiArrowDown size={18} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
