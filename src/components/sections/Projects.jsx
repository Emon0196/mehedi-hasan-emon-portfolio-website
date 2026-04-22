/**
 * Projects.jsx
 * ============
 * Projects section with:
 *   • Category filter tabs (All, Full-Stack, Frontend, Backend)
 *   • Responsive card grid with hover overlay effects
 *   • Featured project badge
 *   • Click to open ProjectModal for detailed view
 *   • Tech stack icons on each card
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiStar } from "react-icons/fi";
import { projects, projectCategories } from "../../data/portfolioData";
import { getSkillIcon } from "../../utils/skillIconMap";
import SectionHeading from "../SectionHeading";
import ProjectModal from "../ProjectModal";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-dark-950/50 light:bg-white relative"
      aria-label="Projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects I've built — from concept to deployment"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                  : "glass text-dark-300 light:text-dark-600 border border-dark-700/30 light:border-dark-200 hover:border-primary-500/30"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group glass rounded-2xl overflow-hidden border border-dark-700/20 light:border-dark-200 hover:border-primary-500/30 transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setSelectedProject(project);
                }}
                aria-label={`View details for ${project.title}`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-yellow-500/90 text-dark-900 text-xs font-semibold">
                      <FiStar size={12} />
                      Featured
                    </span>
                  )}

                  {/* Category */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary-600/80 text-white text-xs font-medium">
                    {project.category}
                  </span>

                  {/* Quick Links Overlay */}
                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-dark-800/80 text-white hover:bg-primary-600 transition-colors"
                        aria-label={`GitHub for ${project.title}`}
                      >
                        <FiGithub size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-dark-800/80 text-white hover:bg-primary-600 transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-dark-100 light:text-dark-800 mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-400 light:text-dark-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Icons */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((tech, i) => {
                      const Icon = getSkillIcon(project.techIcons?.[i]);
                      return (
                        <span
                          key={tech}
                          className="flex items-center gap-1 px-2 py-1 rounded-md bg-dark-800/50 light:bg-dark-100 text-dark-300 light:text-dark-600 text-xs"
                          title={tech}
                        >
                          <Icon size={12} className="text-primary-400" />
                          {tech}
                        </span>
                      );
                    })}
                    {project.tech.length > 5 && (
                      <span className="px-2 py-1 rounded-md bg-dark-800/50 text-dark-400 text-xs">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
