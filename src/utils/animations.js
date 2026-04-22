/**
 * animations.js
 * =============
 * Reusable Framer Motion variant objects.
 * Import these in any component for consistent animation behaviour.
 *
 * Usage:
 *   import { fadeInUp, staggerContainer } from '../utils/animations';
 *   <motion.div variants={staggerContainer} initial="hidden" whileInView="show">
 *     <motion.p variants={fadeInUp}>Hello</motion.p>
 *   </motion.div>
 */

// ─── Fade in from below ───────────────────────────────────────────────────────
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── Fade in from above ──────────────────────────────────────────────────────
export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Fade in from left ───────────────────────────────────────────────────────
export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── Fade in from right ──────────────────────────────────────────────────────
export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── Scale in ────────────────────────────────────────────────────────────────
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Stagger container — wraps children that each use one of the variants above
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// ─── Stagger container (slower, for hero / large elements) ───────────────────
export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// ─── Simple fade ─────────────────────────────────────────────────────────────
export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

// ─── Hover / tap presets (use directly on motion elements) ───────────────────
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

export const tapScale = {
  scale: 0.95,
};

// ─── Page / section transition wrapper ───────────────────────────────────────
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};
