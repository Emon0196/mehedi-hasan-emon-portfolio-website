/**
 * skillIconMap.js
 * ===============
 * Maps string icon names from portfolioData.js to actual react-icons/si components.
 * This indirection lets the data file stay serializable (plain strings)
 * while components render real SVG icons.
 *
 * Usage:
 *   import { getSkillIcon } from '../utils/skillIconMap';
 *   const IconComponent = getSkillIcon("SiReact");
 *   <IconComponent size={24} />
 */

import {
  SiLaravel,
  SiWordpress,
  SiFramer,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiVuedotjs,
  SiRedux,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiFlask,
  SiOpenjdk,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiVscodium,
  SiPostman,
  SiGooglecloud,
  SiMeta,
  SiStripe,
  SiRedis,
  SiTensorflow,
  SiGrafana,
  SiSocketdotio,
  SiD3Dotjs,
} from "react-icons/si";

import { FaCode } from "react-icons/fa";

/** Complete lookup table — add entries here when introducing new skills */
const iconMap = {
  SiLaravel,
  SiWordpress,
  SiFramer,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiVuedotjs,
  SiRedux,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiFlask,
  SiOpenjdk,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiVisualstudiocode: SiVscodium,
  SiPostman,
  SiGooglecloud,
  SiMeta,
  SiStripe,
  SiRedis,
  SiTensorflow,
  SiGrafana,
  SiSocketdotio,
  SiD3dotjs: SiD3Dotjs,
};

/**
 * Returns the icon component for a given string key.
 * Falls back to a generic code icon if the key isn't mapped.
 */
export const getSkillIcon = (iconName) => {
  return iconMap[iconName] || FaCode;
};

export default iconMap;
