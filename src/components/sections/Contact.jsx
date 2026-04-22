/**
 * Contact.jsx
 * ===========
 * Contact section with:
 *   • EmailJS-powered form with real-time validation
 *   • Loading state during submission
 *   • Success/error messages with Framer Motion animations
 *   • Social links with hover effects
 *   • Copy email to clipboard with toast
 *   • Availability status badge
 */

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiSend,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCopy,
  FiCheck,
  FiAlertCircle,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import { SiMedium, SiDevdotto } from "react-icons/si";
import { personalInfo, socials } from "../../data/portfolioData";
import SectionHeading from "../SectionHeading";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../../utils/animations";

const socialLinks = [
  { icon: FiGithub, href: socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: socials.linkedin, label: "LinkedIn" },
  { icon: FiTwitter, href: socials.twitter, label: "Twitter" },
  { icon: FiInstagram, href: socials.instagram, label: "Instagram" },
];

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  // ─── Validation ───────────────────────────────────────────────
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim()) {
      errs.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message should be at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // ─── Submission ───────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      // If EmailJS env vars are configured, send via EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      } else {
        // Simulate a successful send for demo purposes
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  // ─── Copy Email ───────────────────────────────────────────────
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = personalInfo.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClasses = (field) =>
    `w-full px-4 py-3 rounded-xl bg-dark-800/50 light:bg-white text-dark-100 light:text-dark-800 placeholder-dark-500 light:placeholder-dark-400 border ${
      errors[field]
        ? "border-error-500 focus:ring-error-500/30"
        : "border-dark-700/30 light:border-dark-200 focus:border-primary-500 focus:ring-primary-500/20"
    } focus:outline-none focus:ring-2 transition-all text-sm`;

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-dark-950/50 light:bg-white relative"
      aria-label="Contact"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Availability */}
            <motion.div variants={fadeInLeft} className="glass rounded-xl p-6 border border-dark-700/20 light:border-dark-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="text-green-400 font-medium text-sm">
                  {personalInfo.availability}
                </span>
              </div>
              <p className="text-dark-400 light:text-dark-500 text-sm leading-relaxed">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to connect — don't hesitate to reach out!
              </p>
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeInLeft} className="glass rounded-xl p-5 border border-dark-700/20 light:border-dark-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary-600/10 text-primary-400">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500 uppercase tracking-wider">Email</p>
                    <p className="text-dark-200 light:text-dark-700 text-sm font-medium">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-dark-400 hover:text-primary-400 hover:bg-dark-800/50 light:hover:bg-dark-100 transition-colors"
                  aria-label="Copy email to clipboard"
                >
                  {copied ? <FiCheck size={16} className="text-green-400" /> : <FiCopy size={16} />}
                </motion.button>
              </div>
            </motion.div>

            {/* Phone */}
            {personalInfo.phone && (
              <motion.div variants={fadeInLeft} className="glass rounded-xl p-5 border border-dark-700/20 light:border-dark-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary-600/10 text-primary-400">
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500 uppercase tracking-wider">Phone</p>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-dark-200 light:text-dark-700 text-sm font-medium hover:text-primary-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Location */}
            <motion.div variants={fadeInLeft} className="glass rounded-xl p-5 border border-dark-700/20 light:border-dark-200">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary-600/10 text-primary-400">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-dark-500 uppercase tracking-wider">Location</p>
                  <p className="text-dark-200 light:text-dark-700 text-sm font-medium">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInLeft}>
              <h4 className="text-xs font-semibold text-dark-400 light:text-dark-500 uppercase tracking-wider mb-3">
                Find me on
              </h4>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl glass border border-dark-700/20 light:border-dark-200 text-dark-300 light:text-dark-500 hover:text-primary-400 hover:border-primary-500/30 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="glass rounded-2xl p-6 md:p-8 border border-dark-700/20 light:border-dark-200 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-dark-300 light:text-dark-600 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClasses("name")}
                  />
                  {errors.name && (
                    <p className="text-error-500 text-xs mt-1 flex items-center gap-1">
                      <FiAlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-dark-300 light:text-dark-600 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClasses("email")}
                  />
                  {errors.email && (
                    <p className="text-error-500 text-xs mt-1 flex items-center gap-1">
                      <FiAlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-dark-300 light:text-dark-600 mb-1.5">
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  className={inputClasses("subject")}
                />
                {errors.subject && (
                  <p className="text-error-500 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle size={12} /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-dark-300 light:text-dark-600 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  className={`${inputClasses("message")} resize-none`}
                />
                {errors.message && (
                  <p className="text-error-500 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-lg shadow-primary-600/20"
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                  >
                    <FiCheck size={16} />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-error-500/10 border border-error-500/20 text-error-500 text-sm"
                  >
                    <FiAlertCircle size={16} />
                    Oops! Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
