/**
 * portfolioData.js
 * ================
 * Centralized data file for the entire portfolio.
 * Edit the values below to customize with your own information.
 * All components read from this single file for easy content updates.
 */

// ─── Personal Information ─────────────────────────────────────────────────────
export const personalInfo = {
  name: "Mehedi Hasan Emon",                                      // Replace with your name
  title: "Full-Stack Software Engineer | AI Enthusiast",                 // Your professional title
  tagline: "Building digital experiences that matter",   // Hero tagline (typing effect)
  bio: `I am a CSE graduate passionate about software engineering, encompassing Full-Stack development, API integration, and quality assurance. With a foundation in machine learning and data analysis, coupled with a strong commitment to maintaining high data integrity, I focus on creating scalable applications and following high development standards throughout the Software Development Life Cycle.`,
  email: "mehedihasanemon972@gmail.com",
  phone: "+8801964438983",                           // Optional — set to "" to hide
  location: "Jigatola, Dhaka",
  resume: "/Resume_Mehedi Hasan Emon (1).pdf",                                 // Place your resume in /public
  avatar: "/images/2021_me.jpg",                          // Place your photo in /public/images
  availability: "Open to opportunities",                 // Or "Available for freelance", etc.
};

// ─── Social Links ─────────────────────────────────────────────────────────────
export const socials = {
  github: "https://github.com/Emon0196",
  linkedin: "https://www.linkedin.com/in/mehedi-hasan-emon-02731938a",
  twitter: "https://x.com/OMGbepari",
  email: "mehedihasanemon972@gmail.com",
  instagram: "https://www.instagram.com/goriber_gopal_var/",
};

// ─── Quick Stats (About Section) ─────────────────────────────────────────────
export const stats = [
  { label: "Years of Experience", value: "1+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies", value: "10+" },
  { label: "Publications", value: "1" },
];

// ─── Navigation Links ────────────────────────────────────────────────────────
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Publications", href: "#publications" },
  { name: "Contact", href: "#contact" },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
// icon: string key matching an export name from react-icons/si (see skillIconMap.js)
// level: proficiency 0–100 (used for animated progress bars)
export const skills = {
  frontend: [
    { name: "React", icon: "SiReact", level: 90 },
    { name: "JavaScript", icon: "SiJavascript", level: 95 },
    { name: "TypeScript", icon: "SiTypescript", level: 85 },
    { name: "HTML5", icon: "SiHtml5", level: 95 },
    { name: "CSS3", icon: "SiCss3", level: 90 },
    { name: "Tailwind CSS", icon: "SiTailwindcss", level: 90 },
    { name: "Next.js", icon: "SiNextdotjs", level: 80 },
    { name: "Wordpress", icon: "SiWordpress", level: 80 },
    { name: "Framer Motion", icon: "SiFramer", level: 70 },
    { name: "Zustand", icon: "SiZustand", level: 80 },
    //{ name: "Sass", icon: "SiSass", level: 85 },
  ],
  backend: [
    { name: "Laravel", icon: "SiLaravel", level: 85 },
    { name: "Node.js", icon: "SiNodedotjs", level: 85 },
    { name: "Express", icon: "SiExpress", level: 85 },
    { name: "Python", icon: "SiPython", level: 80 },
    { name: "MySQL", icon: "SiMysql", level: 75 },
    { name: "MongoDB", icon: "SiMongodb", level: 85 },
    { name: "PostgreSQL", icon: "SiPostgresql", level: 80 },
    //{ name: "Firebase", icon: "SiFirebase", level: 80 },
  ],
  tools: [
    { name: "Git", icon: "SiGit", level: 90 },
    { name: "GitHub", icon: "SiGithub", level: 90 },
    { name: "Docker", icon: "SiDocker", level: 75 },
    { name: "Vercel", icon: "SiVercel", level: 85 },
    { name: "Netlify", icon: "SiNetlify", level: 80 },
    { name: "Figma", icon: "SiFigma", level: 75 },
    { name: "VS Code", icon: "SiVisualstudiocode", level: 95 },
    { name: "Postman", icon: "SiPostman", level: 85 },
  ],
};

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "FrontEnd Website for Fine Dining Restaurant",
    description: "React.js based smooth FrontEnd UI website for a fine dining restaurant.",
    longDescription: `This is a react.js Front-End website to showcase a simple but elegant fine-dining restaurant design in a responsive manner. This app was created using the Create React App(CRA) development tool. The website features a clean and modern design with smooth animations and transitions, providing an engaging user experience. It includes sections for the restaurant's menu, reservation system, and contact information, all optimized for both desktop and mobile devices.`,
    image: "/projects/project1.png",
    category: "Frontend",
    featured: true,
    tech: ["React", "JavaScript", "Vite", "Tailwind CSS", "Html" ],
    techIcons: ["SiReact", "SiJavascript", "SiVite", "SiTailwindcss", "SiHtml5"],
    features: [
      "Created with React.js and Vite for fast development and optimized performance",
      "Elegant fine-dining restaurant design built in a responsive manner",
      "Smooth animations and transitions for an engaging user experience",
      "Classic double-column layout with hero section, menu, reservation form, and contact info",
    ],
    github: "https://github.com/Emon0196/Fine-Dining-Restaurant-FrontEnd-Website",
    live: "https://emon0196.github.io/Fine-Dining-Restaurant-FrontEnd-Website/",
  },
  {
    id: 2,
    title: "Barcode-Driven Inventory Kanban System",
    description: "A kanban system powered by barcode scanning for efficient inventory management.",
    longDescription: `Developed an modern, full-stack inventory management system that supports barcode scanning, drag-and-drop Kanban categorization, analytics dashboard, and MongoDB integration. Built with Next.js 15, Tailwind CSS, and Zustand.`,
    image: "/projects/project2.png",
    category: "Full-Stack",
    featured: true,
    tech: ["Next.js", "TypeScript", "Mongodb", "Tailwind CSS", "Zustand"],
    techIcons: ["SiNextdotjs", "SiTypescript", "SiMongodb", "SiTailwindcss", "SiZustand"],
    features: [
      "Scan a product barcode using an image input and Fetch product details from external API",
      "View products by category in a responsive drag-and-drop board",
      "Dynamically create new categories and move products between categories",
      "Built-in analytics dashboard Charts to show product distribution by category",
    ],
    github: "https://github.com/Emon0196/kanban-based-barcode-driven-inventory",
    live: "https://kanban-based-barcode-driven-invento.vercel.app/",
  },
  {
    id: 3,
    title: " Cron Job API for Subscription-based Payment",
    description: "A Node.js API that handles scheduled tasks for subscription billing and user notifications.",
    longDescription: `This is a Back-End project for creating Cron Job API that processes Subscription Payment. This API runs every 24 hours to process user subscription payments based on the user’s status. It Checks for users whose trial plans have expired (planEndDate is in the past). If a user's status is active, the API charges them $97 using Authorize.net sdk. Payment details (card number, CVC, expiry date) are stored in the user schema. Besides, it logs the payment success or failure and updates the subscription status accordingly.`,
    image: "/projects/project3.png",
    category: "Backend",
    featured: false,
    tech: ["Express.js", "Node.js", "Mongoose", "JWT"],
    techIcons: ["SiExpress", "SiNodedotjs", "SiMongoose", "SiJsonwebtokens"],
    features: [
      "Used node-cron to schedule the job and integrated with Authorize.net for payment processing.",
      "Implemented robust error handling and logging for payment failures",
      "Updated user subscription status based on payment outcomes",
      "Implemented JWT Bearer Token as middleware for authentication and authorization of API endpoints",
    ],
    github: "https://github.com/Emon0196/cron-job-api",
    //live: "https://chat-demo.vercel.app",
  },
  {
    id: 4,
    title: "Online Car Rental System",
    description: "A web application for browsing and booking rental cars with real-time pricing.",
    longDescription: `Developed a comprehensive online car rental system that allows users to search for available vehicles, view detailed information, and complete reservations. The application features a user-friendly interface built with Laravel and JavaScript, integrated with a backend API for handling bookings and inventory management.`,

    image: "/projects/project4.png",
    category: "Full-Stack",
    featured: false,
    tech: ["Laravel", "JavaScript", "MySQL", "SCSS", "Tailwind CSS"],
    techIcons: ["SiLaravel", "SiJavascript", "SiMysql", "SiSass", "SiTailwindcss"],
    features: [
      "User-friendly interface for browsing and booking rental cars",
      "Real-time pricing information",
      "Vehicle availability calendar",
      "Secure booking process with form validation",
      "Admin dashboard for managing inventory and reservations",
    ],
    github: "https://github.com/Emon0196/Online-Car-Rental-System",
    //live: "https://portfolio-dash-demo.vercel.app",
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    company: "Africa Bangladesh Business Forum (ABBF)",
    position: "Junior Software Engineer",
    duration: "November 2025 – February 2026",
    location: "Remote",
    current: false,
    description: [
      "Developed a membership portal for ABBF and designed a email manager for Kingmansa b2b marketplace admin.",
      "Daily site maintenance, security checkup, server backup.",
      "Created UI/UX design and Elementor pages for ABBF and Kingmansa websites.",
      "Regulary performed QA and UAT testing on b2b platform for potential bugs, updated feedback and documentation.",
    ],
    tech: ["React", "Node.js", "Laravel", "Rest API", "Wordpress", "Elementor", "MySQL", "Mongodb", "Trello", "Figma", "Cloudflare"],
  },
  {
    id: 2,
    company: "Aleena Tech",
    position: "Junior Laravel Developer",
    duration: "January 2025 – May 2025",
    location: "Dhaka, Bangladesh",
    current: false,
    description: [
      "Created, updated, and tested REST APIs for Laravelbased backend systems.",
      "Designed, created and implemented visually appealing react UI pages into Laravel applications.",
      "Routinely practiced standards like API documentation and version control.",
    ],
    tech: ["Laravel", "React", "Rest API", "MySQL", "Docker", "Git & GitHub", "Postman"],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    institution: "Brac University",
    degree: "Bachelor of Science in Computer Science and Engineering",
    duration: "2019 – 2024",
    graduationYear: "2024",
    gpa: "3.42/4.0",
    location: "Dhaka, Bangladesh",
    coursework: [
      "Data Structures and Algorithms",
      "Database Systems",
      "Operating Systems",
      "AL & Machine Learning",
      "Software Engineering",
    ],
    honors: [
      "Dean's List (Fall 2020, Spring 2021)",
      "Peer mentorship program for unprivileged children",
      "Award for first place in intra-university quiz competition (TARC)",
    ],
  },

  {
    id: 2,
    institution: "Adamjee Cantonment College",
    degree: "HSC in Science",
    duration: "2016 - 2018",
    graduationYear: "2018",
    gpa: "5.00/5.00",
    location: "Dhaka, Bangladesh",  },
    {
    id: 2,
    institution: "Kurmitola High School and College",
    degree: "SSC in Science",
    duration: "2014 - 2016",
    graduationYear: "2016",
    gpa: "5.00/5.00",
    location: "Dhaka, Bangladesh",  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
export const certifications = [
  {
    id: 1,
    name: "Full Stack Web Development with MERN ",
    issuer: "Ostad Limited",
    date: "November 2024",
    credentialId: "C21114",
    verificationUrl: "https://ostad.app/share/certificate/c21114-mehedi-hasan-emon",
    //icon: "SiAmazonwebservices",
  },
];

// ─── Publications ─────────────────────────────────────────────────────────────
export const publications = [
  {
    id: 1,
    title: "Byzantine-Resilient Federated Learning Leveraging Confidence Score to Identify Retinal Disease",
    type: "research",
    authors: ["Mehedi Hasan Emon", "M Sakib Osman Eshan", "Md. Naimul Huda Nafi", "Tanzim Reza", "Mohammad Zavid Parvez"],
    venue: "Dicta Conference 2023",
    date: "29 January 2024",
    description: "Federated learning is a distributed machine learning paradigm that enables multiple actors to collaboratively train a common model without sharing their local data, thus addressing data privacy issues, especially in sensitive domains such as healthcare. However, federated learning is vulnerable to poisoning attacks, where malicious (Byzantine) clients can manipulate their local updates to degrade the performance or compromise the privacy of the global model. To mitigate this problem, this paper proposes a novel method that reduces the influence of malicious clients based on their confidence. We evaluate our method on the Retinal OCT dataset consisting of age-related macular degeneration and diabetic macular edema, using InceptionV3 and VGG19 architecture. The proposed technique significantly improves the global model’s precision, recall, F1 score, and area under the receiver operating characteristic curve (AUC-ROC) for both InceptionV3 and VGG19. For InceptionV3, precision rises from 0.869 to 0.906, recall rises from 0.836 to 0.889, and F1 score rises from 0.852 to 0.898. For VGG19, precision rises from 0.958 to 0.963, recall rises from 0.917 to 0.941, and F1 score rises from 0.937 to 0.952.",
    url: "https://ieeexplore.ieee.org/document/10410968",
    tags: ["Computer Vision", "Federated learning", "Deep Learning", "Medical Image Processing", "Data poisoning", "Retinal OCT"],
    citations: 4,
    featured: true,
  },
];

// ─── Project Filter Categories ────────────────────────────────────────────────
export const projectCategories = [
  "All",
  "Full-Stack",
  "Frontend",
  "Backend",
];

// ─── Publication Type Filters ─────────────────────────────────────────────────
export const publicationTypes = [
  { label: "All", value: "all" },
  { label: "Research Papers", value: "research" },
  { label: "Blog Posts", value: "blog" },
  { label: "Talks", value: "talk" },
];
