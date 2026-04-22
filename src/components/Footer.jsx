/**
 * Footer.jsx
 * ==========
 * Site footer with social icons, quick section links,
 * copyright with auto-updated year, and back-to-top button.
 */

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp, FiInstagram } from "react-icons/fi";
import { SiMedium, SiDevdotto } from "react-icons/si";
import { socials, personalInfo, navLinks } from "../data/portfolioData";
import { fadeInUp, staggerContainer } from "../utils/animations";

const socialIcons = [
  { icon: FiGithub, href: socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: socials.linkedin, label: "LinkedIn" },
  { icon: FiTwitter, href: socials.twitter, label: "Twitter" },
  { icon: FiInstagram, href: socials.instagram, label: "Instagram" },
  { icon: FiMail, href: `mailto:${socials.email}`, label: "Email" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark-950 light:bg-dark-100 border-t border-dark-800/50 light:border-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-heading text-2xl font-bold gradient-text mb-3">
              {personalInfo.name.split(" ").map((n) => n[0]).join("")}
              <span className="text-primary-500">.</span>
            </h3>
            <p className="text-dark-400 light:text-dark-500 text-sm leading-relaxed max-w-xs">
              {personalInfo.tagline}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-heading text-sm font-semibold text-dark-300 light:text-dark-700 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-400 light:text-dark-500 text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-heading text-sm font-semibold text-dark-300 light:text-dark-700 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-lg bg-dark-800/50 light:bg-white text-dark-400 light:text-dark-500 hover:text-primary-400 hover:bg-dark-800 light:hover:bg-dark-50 border border-dark-700/30 light:border-dark-200 transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-800/50 light:border-dark-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 light:text-dark-400 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <p className="text-dark-500 light:text-dark-400 text-sm">
            Made with <span className="text-red-500">❤️</span> using React & Tailwind CSS
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-lg bg-primary-600/10 text-primary-400 hover:bg-primary-600 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <FiArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
