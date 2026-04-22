/**
 * Skills.jsx
 * ==========
 * Skills section with:
 *   • Tabbed categories (Frontend, Backend, Tools/DevOps)
 *   • Each skill card shows its official logo from react-icons/si
 *   • Animated progress bars indicating proficiency
 *   • Hover effects with 3D-like transforms
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../../data/portfolioData";
import { getSkillIcon } from "../../utils/skillIconMap";
import SectionHeading from "../SectionHeading";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const categories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend & Databases" },
  { key: "tools", label: "Tools & DevOps" },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-dark-900 light:bg-dark-50 relative"
      aria-label="Skills"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === cat.key
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                  : "glass text-dark-300 light:text-dark-600 border border-dark-700/30 light:border-dark-200 hover:border-primary-500/30"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {skills[activeTab]?.map((skill) => {
              const Icon = getSkillIcon(skill.icon);
              return (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="group glass rounded-xl p-5 text-center border border-dark-700/20 light:border-dark-200 hover:border-primary-500/40 transition-all cursor-default"
                >
                  {/* Icon */}
                  <motion.div
                    className="mb-3 flex justify-center"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon
                      size={36}
                      className="text-dark-300 light:text-dark-500 group-hover:text-primary-400 transition-colors"
                    />
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-dark-200 light:text-dark-700 text-sm font-medium mb-3">
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full bg-dark-800/50 light:bg-dark-200 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    />
                  </div>

                  {/* Level label */}
                  <span className="text-dark-500 text-xs mt-1.5 block">
                    {skill.level}%
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
