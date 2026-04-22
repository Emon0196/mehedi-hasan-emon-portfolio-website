/**
 * Education.jsx
 * =============
 * Education section with:
 *   • Card-based layout for degrees and programs
 *   • Coursework and honors lists
 *   • Certifications sub-section with verification links
 *   • Animated reveal on scroll
 */

import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiExternalLink, FiMapPin } from "react-icons/fi";
import { HiAcademicCap } from "react-icons/hi";
import { education, certifications } from "../../data/portfolioData";
import { getSkillIcon } from "../../utils/skillIconMap";
import SectionHeading from "../SectionHeading";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 md:py-28 bg-dark-950/50 light:bg-white relative"
      aria-label="Education"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="Academic background and professional certifications"
        />

        {/* Education Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 mb-16"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 md:p-8 border border-dark-700/20 light:border-dark-200 hover:border-primary-500/30 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary-600/10 border border-primary-500/20 flex items-center justify-center">
                    <HiAcademicCap size={32} className="text-primary-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <h3 className="font-heading text-xl font-bold text-dark-100 light:text-dark-800 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary-400 font-medium mb-2">
                    {edu.institution}
                  </p>

                  {/* Meta row */}
                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-dark-400 light:text-dark-500">
                    <span>{edu.duration}</span>
                    {edu.gpa && (
                      <span className="flex items-center gap-1">
                        <FiAward size={14} />
                        GPA: {edu.gpa}
                      </span>
                    )}
                    {edu.location && (
                      <span className="flex items-center gap-1">
                        <FiMapPin size={14} />
                        {edu.location}
                      </span>
                    )}
                  </div>

                  {/* Description (for alternative programs) */}
                  {edu.description && (
                    <p className="text-dark-300 light:text-dark-600 text-sm mb-4">
                      {edu.description}
                    </p>
                  )}

                  {/* Coursework */}
                  {edu.coursework && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-dark-400 light:text-dark-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <FiBookOpen size={12} />
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2.5 py-1 rounded-lg bg-dark-800/40 light:bg-dark-50 text-dark-300 light:text-dark-600 text-xs border border-dark-700/20 light:border-dark-200"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Honors */}
                  {edu.honors && (
                    <div>
                      <h4 className="text-xs font-semibold text-dark-400 light:text-dark-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <FiAward size={12} />
                        Honors & Awards
                      </h4>
                      <ul className="space-y-1">
                        {edu.honors.map((honor) => (
                          <li
                            key={honor}
                            className="flex items-center gap-2 text-dark-300 light:text-dark-600 text-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                            {honor}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-2xl font-bold text-dark-100 light:text-dark-800 text-center mb-8"
            >
              Professional Certifications
            </motion.h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {certifications.map((cert) => {
                const Icon = cert.icon ? getSkillIcon(cert.icon) : FiAward;
                return (
                  <motion.div
                    key={cert.id}
                    variants={fadeInUp}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="glass rounded-xl p-5 border border-dark-700/20 light:border-dark-200 hover:border-primary-500/30 transition-all"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary-600/10 text-primary-400 flex-shrink-0">
                        <Icon size={24} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-heading text-sm font-bold text-dark-100 light:text-dark-800 leading-tight">
                          {cert.name}
                        </h4>
                        <p className="text-primary-400 text-xs mt-0.5">{cert.issuer}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-dark-400 light:text-dark-500">
                      <span>{cert.date}</span>
                      {cert.verificationUrl && (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          Verify
                          <FiExternalLink size={10} />
                        </a>
                      )}
                    </div>

                    {cert.credentialId && (
                      <p className="text-dark-500 text-[10px] mt-2 font-mono">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Education;
