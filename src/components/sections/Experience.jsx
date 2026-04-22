/**
 * Experience.jsx
 * ==============
 * Animated vertical timeline showing work history.
 *   • Alternating left/right on desktop, single column on mobile
 *   • Scroll-triggered fade-in for each entry
 *   • "Present" badge for current role
 *   • Technology icons for each position
 */

import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import { experience } from "../../data/portfolioData";
import { getSkillIcon } from "../../utils/skillIconMap";
import SectionHeading from "../SectionHeading";
import { fadeInLeft, fadeInRight, fadeInUp } from "../../utils/animations";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-dark-900 light:bg-dark-50 relative"
      aria-label="Experience"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and the teams I've been part of"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 md:-translate-x-1/2" />

          {experience.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                variants={isLeft ? fadeInLeft : fadeInRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className={`relative mb-12 md:mb-16 ${
                  isLeft
                    ? "md:pr-[50%] md:text-right"
                    : "md:pl-[50%] md:text-left"
                } pl-12 md:pl-0`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-1 left-4 md:left-1/2 w-4 h-4 rounded-full border-2 z-10 -translate-x-1/2 ${
                    exp.current
                      ? "bg-green-500 border-green-400 shadow-lg shadow-green-500/30"
                      : "bg-primary-600 border-primary-400"
                  }`}
                >
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`glass rounded-xl p-6 border border-dark-700/20 light:border-dark-200 hover:border-primary-500/30 transition-colors ${
                    isLeft ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  {/* Header */}
                  <div className={`flex items-start gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                    <div className="p-2 rounded-lg bg-primary-600/10 text-primary-400 flex-shrink-0">
                      <FiBriefcase size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-dark-100 light:text-dark-800">
                        {exp.position}
                      </h3>
                      <p className="text-primary-400 font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className={`flex flex-wrap gap-3 mb-4 text-xs text-dark-400 light:text-dark-500 ${isLeft ? "md:justify-end" : ""}`}>
                    <span className="flex items-center gap-1">
                      {exp.duration}
                      {exp.current && (
                        <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-green-500/10 text-green-400">
                          Current
                        </span>
                      )}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1">
                        <FiMapPin size={12} />
                        {exp.location}
                      </span>
                    )}
                  </div>

                  {/* Responsibilities */}
                  <ul className={`space-y-2 mb-4 ${isLeft ? "md:text-right" : ""}`}>
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-dark-300 light:text-dark-600 text-sm"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-dark-800/50 light:bg-dark-100 text-dark-300 light:text-dark-600 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
