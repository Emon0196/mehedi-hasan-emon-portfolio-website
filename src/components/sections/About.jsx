/**
 * About.jsx
 * =========
 * About section with:
 *   • Professional bio with stagger animation
 *   • Animated quick-stats counters
 *   • Skills highlights preview
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, stats } from "../../data/portfolioData";
import SectionHeading from "../SectionHeading";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../../utils/animations";

const About = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-dark-950/50 light:bg-white relative"
      aria-label="About me"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know the developer behind the code"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo / Avatar side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative border */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 opacity-20 blur-lg" />
              <div className="relative rounded-2xl overflow-hidden glass border border-dark-700/30 light:border-dark-200 aspect-square">
                {personalInfo.avatar ? (
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-600/20 to-secondary-600/20 flex items-center justify-center">
                    <span className="font-heading text-8xl font-bold gradient-text">
                      {personalInfo.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                )}
              </div>

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 glass rounded-xl px-6 py-4 border border-dark-700/30 light:border-dark-200"
              >
                <p className="font-heading text-2xl font-bold gradient-text">
                  {stats[0]?.value}
                </p>
                <p className="text-dark-400 light:text-dark-500 text-sm">
                  {stats[0]?.label}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              variants={fadeInRight}
              className="font-heading text-2xl md:text-3xl font-bold text-dark-50 light:text-dark-900 mb-4"
            >
              A passionate learner who loves building
              <span className="gradient-text"> impactful products</span>
            </motion.h3>

            <motion.p
              variants={fadeInRight}
              className="text-dark-300 light:text-dark-600 leading-relaxed mb-6 whitespace-pre-line"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Info Grid */}
            <motion.div
              variants={fadeInRight}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {[
                { label: "Location", value: personalInfo.location },
                { label: "Email", value: personalInfo.email },
                { label: "Status", value: personalInfo.availability },
                { label: "Experience", value: stats[0]?.value || "3+" },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-dark-500 light:text-dark-400 text-xs uppercase tracking-wider">
                    {item.label}
                  </span>
                  <p className="text-dark-200 light:text-dark-700 text-sm font-medium truncate">
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInRight} className="flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors text-sm"
              >
                Download Resume
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-xl glass text-dark-200 light:text-dark-700 font-medium border border-dark-700/30 light:border-dark-200 hover:border-primary-500/50 transition-colors text-sm"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="glass rounded-xl p-6 text-center border border-dark-700/20 light:border-dark-200 hover:border-primary-500/30 transition-colors"
            >
              <motion.span
                className="font-heading text-3xl md:text-4xl font-bold gradient-text block mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5, type: "spring" }}
              >
                {stat.value}
              </motion.span>
              <span className="text-dark-400 light:text-dark-500 text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
