/**
 * SectionHeading.jsx
 * ==================
 * Reusable section title + subtitle with an animated accent underline.
 * Used at the top of every major section for visual consistency.
 *
 * Props:
 *   title    — The section heading text
 *   subtitle — Short description shown below the title
 */

import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="text-center mb-16"
    >
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-dark-50 light:text-dark-900">
        {title}
      </h2>

      {/* Animated accent underline */}
      <motion.div
        className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mb-6"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {subtitle && (
        <p className="text-dark-400 light:text-dark-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
