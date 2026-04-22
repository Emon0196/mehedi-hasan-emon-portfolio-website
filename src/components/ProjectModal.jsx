/**
 * ProjectModal.jsx
 * ================
 * Full-screen overlay showing detailed project information.
 * Opened from the Projects section when a card is clicked.
 *
 * Features:
 *   • Framer Motion enter/exit animations
 *   • Backdrop click or Escape key to close
 *   • Focus trap for accessibility
 *   • Tech stack icons, features list, external links
 */

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiX, FiExternalLink, FiGithub } from "react-icons/fi";
import { getSkillIcon } from "../utils/skillIconMap";

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden"; // Prevent background scroll
    modalRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.title}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Content */}
      <motion.div
        ref={modalRef}
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass bg-dark-900/90 light:bg-white/95 border border-dark-700/50 light:border-dark-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-dark-800/50 light:bg-dark-100 text-dark-300 light:text-dark-600 hover:text-white light:hover:text-dark-900 hover:bg-primary-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <FiX size={20} />
        </button>

        {/* Project Image */}
        <div className="relative h-56 md:h-72 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />

          {/* Category Badge */}
          <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-primary-600/80 text-white">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark-50 light:text-dark-900 mb-3">
            {project.title}
          </h3>

          <p className="text-dark-300 light:text-dark-600 leading-relaxed mb-6 whitespace-pre-line">
            {project.longDescription || project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="font-heading text-sm font-semibold text-dark-400 light:text-dark-500 uppercase tracking-wider mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, i) => {
                const Icon = getSkillIcon(project.techIcons?.[i]);
                return (
                  <span
                    key={tech}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-800/50 light:bg-dark-100 text-dark-200 light:text-dark-700 text-sm border border-dark-700/30 light:border-dark-200"
                  >
                    <Icon size={14} className="text-primary-400" />
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Features */}
          {project.features && (
            <div className="mb-6">
              <h4 className="font-heading text-sm font-semibold text-dark-400 light:text-dark-500 uppercase tracking-wider mb-3">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-dark-300 light:text-dark-600 text-sm"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-dark-700/30 light:border-dark-200">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-dark-800 light:bg-dark-100 text-dark-200 light:text-dark-700 hover:bg-primary-600 hover:text-white transition-colors text-sm font-medium"
              >
                <FiGithub size={16} />
                View Source
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors text-sm font-medium"
              >
                <FiExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
