/**
 * Publications.jsx
 * ================
 * Publications section for research papers, blog posts, and talks.
 *   • Filter tabs by publication type (All, Research, Blog, Talk)
 *   • Expandable abstracts with "Read More"
 *   • Author highlighting (bolded own name)
 *   • DOI/URL/PDF links
 *   • Citation count badge
 *   • Graceful empty state if no publications
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiFileText,
  FiVideo,
  FiBookOpen,
  FiChevronDown,
  FiChevronUp,
  FiStar,
} from "react-icons/fi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { publications, publicationTypes, personalInfo } from "../../data/portfolioData";
import SectionHeading from "../SectionHeading";
import { fadeInUp, staggerContainer } from "../../utils/animations";

// Icon per publication type
const typeIcons = {
  blog: FiFileText,
  research: FiBookOpen,
  talk: HiOutlineMicrophone,
};

const typeColors = {
  blog: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  research: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  talk: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

/**
 * Highlights the portfolio owner's name in the author list.
 */
const formatAuthors = (authors) => {
  const ownerName = personalInfo.name;
  return authors.map((author, i) => (
    <span key={i}>
      {i > 0 && ", "}
      {author === ownerName ? (
        <span className="font-semibold text-primary-400">{author}</span>
      ) : (
        <span className="text-dark-400 light:text-dark-500">{author}</span>
      )}
    </span>
  ));
};

const Publications = () => {
  const [activeType, setActiveType] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

  // Hide entire section if no publications
  if (!publications || publications.length === 0) {
    return (
      <section
        id="publications"
        className="py-20 md:py-28 bg-dark-900 light:bg-dark-50"
        aria-label="Publications"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Publications"
            subtitle="Research and writing coming soon"
          />
          <div className="text-center glass rounded-2xl p-12 border border-dark-700/20 light:border-dark-200">
            <FiBookOpen size={48} className="mx-auto text-dark-600 mb-4" />
            <p className="text-dark-400 light:text-dark-500">
              Publications coming soon. Stay tuned!
            </p>
          </div>
        </div>
      </section>
    );
  }

  const filtered =
    activeType === "all"
      ? publications
      : publications.filter((p) => p.type === activeType);

  return (
    <section
      id="publications"
      className="py-20 md:py-28 bg-dark-900 light:bg-dark-50"
      aria-label="Publications"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Publications"
          subtitle="Research papers, technical articles, and conference talks"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {publicationTypes.map((type) => (
            <motion.button
              key={type.value}
              onClick={() => setActiveType(type.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeType === type.value
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                  : "glass text-dark-300 light:text-dark-600 border border-dark-700/30 light:border-dark-200 hover:border-primary-500/30"
              }`}
            >
              {type.label}
            </motion.button>
          ))}
        </div>

        {/* Publications List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {filtered.map((pub) => {
              const TypeIcon = typeIcons[pub.type] || FiFileText;
              const isExpanded = expandedId === pub.id;

              return (
                <motion.article
                  key={pub.id}
                  variants={fadeInUp}
                  className="glass rounded-xl border border-dark-700/20 light:border-dark-200 hover:border-primary-500/20 transition-all overflow-hidden"
                >
                  <div className="p-5 md:p-6">
                    {/* Top row: type badge + featured */}
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                          typeColors[pub.type]
                        }`}
                      >
                        <TypeIcon size={12} />
                        {pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
                      </span>

                      {pub.featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-medium border border-yellow-500/20">
                          <FiStar size={10} />
                          Featured
                        </span>
                      )}

                      {pub.citations != null && (
                        <span className="ml-auto text-dark-500 text-xs">
                          {pub.citations} citation{pub.citations !== 1 ? "s" : ""}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-lg font-bold text-dark-100 light:text-dark-800 mb-2 leading-snug">
                      {pub.title}
                    </h3>

                    {/* Authors */}
                    <p className="text-sm mb-1">{formatAuthors(pub.authors)}</p>

                    {/* Venue & Date */}
                    <p className="text-dark-500 text-xs mb-3">
                      {pub.venue} · {pub.date}
                    </p>

                    {/* Description / Abstract — expandable */}
                    <div className="relative">
                      <p
                        className={`text-dark-300 light:text-dark-600 text-sm leading-relaxed ${
                          !isExpanded ? "line-clamp-2" : ""
                        }`}
                      >
                        {pub.description}
                      </p>
                      {pub.description && pub.description.length > 150 && (
                        <button
                          onClick={() =>
                            setExpandedId(isExpanded ? null : pub.id)
                          }
                          className="flex items-center gap-1 text-primary-400 text-xs mt-1.5 hover:text-primary-300 transition-colors"
                        >
                          {isExpanded ? (
                            <>
                              Show less <FiChevronUp size={12} />
                            </>
                          ) : (
                            <>
                              Read more <FiChevronDown size={12} />
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {pub.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-dark-800/50 light:bg-dark-100 text-dark-400 light:text-dark-500 text-[11px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-dark-700/20 light:border-dark-200">
                      {pub.url && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary-600/10 text-primary-400 text-xs font-medium hover:bg-primary-600/20 transition-colors"
                        >
                          <FiExternalLink size={12} />
                          View Publication
                        </a>
                      )}
                      {pub.pdf && (
                        <a
                          href={pub.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-dark-800/50 light:bg-dark-100 text-dark-300 light:text-dark-600 text-xs font-medium hover:text-primary-400 transition-colors"
                        >
                          <FiFileText size={12} />
                          PDF
                        </a>
                      )}
                      {pub.video && (
                        <a
                          href={pub.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-dark-800/50 light:bg-dark-100 text-dark-300 light:text-dark-600 text-xs font-medium hover:text-primary-400 transition-colors"
                        >
                          <FiVideo size={12} />
                          Watch
                        </a>
                      )}
                      {pub.doi && (
                        <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-dark-800/50 light:bg-dark-100 text-dark-500 text-xs font-mono">
                          DOI: {pub.doi}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Publications;
