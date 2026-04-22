# 🚀 Portfolio Website

A professional, production-ready developer portfolio built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Features 8 fully animated sections, dark/light mode, EmailJS contact form, and a centralized data file for zero-code content updates.

## ✨ Features

| Feature                | Details                                                                     |
| ---------------------- | --------------------------------------------------------------------------- |
| **8 Sections**         | Hero, About, Skills, Projects, Experience, Education, Publications, Contact |
| **Dark / Light Mode**  | System-preference detection + localStorage persistence                      |
| **Tech Logos**         | 37 official icons via `react-icons/si` (React, Node, Docker, AWS, etc.)     |
| **Project Filter**     | Filter by category (All, Full-Stack, Frontend, Backend)                     |
| **Publication Filter** | Filter by type (Research, Blog, Talk) with expandable abstracts             |
| **Timeline**           | Animated vertical timeline with alternating layout                          |
| **Contact Form**       | EmailJS integration with real-time validation                               |
| **SEO**                | React Helmet Async with Open Graph and Twitter Card tags                    |
| **Accessibility**      | Semantic HTML, ARIA labels, skip-to-content, keyboard nav                   |
| **Animations**         | Scroll-triggered reveals, stagger effects, hover transforms, parallax orbs  |
| **Responsive**         | Mobile-first design, hamburger menu, fluid typography                       |

## 🛠 Tech Stack

- **React 18** — UI library
- **Vite** — Build tool & dev server
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Animations & gestures
- **React Icons** — 37 Simple Icons for tech logos
- **EmailJS** — Serverless contact form
- **React Helmet Async** — SEO meta tags

## 📁 Project Structure

```
portfolio-website/
├── public/                    # Static assets (resume.pdf, images/)
├── src/
│   ├── components/
│   │   ├── sections/          # Hero, About, Skills, Projects, Experience, Education, Publications, Contact
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionHeading.jsx
│   │   └── ProjectModal.jsx
│   ├── data/
│   │   └── portfolioData.js   # ← EDIT THIS FILE to customize content
│   ├── hooks/
│   │   ├── useScrollSpy.js
│   │   └── useTheme.js
│   ├── utils/
│   │   ├── animations.js
│   │   └── skillIconMap.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Customize Content

Edit **`src/data/portfolioData.js`** — this single file controls all text, links, skills, projects, and more. No need to touch component code for basic customization.

### 4. Add Your Photo

Place your headshot at `public/images/avatar.jpg`. The About section will display it automatically.

### 5. Add Your Resume

Place your resume PDF at `public/resume.pdf`.

## 📧 EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
4. Copy `.env.example` to `.env` and fill in your credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note:** Without EmailJS configured, the contact form simulates a successful send for demo purposes.

## 🏗 Build for Production

```bash
npm run build
```

Output is in the `dist/` folder, ready to deploy.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com), import project
3. It auto-detects Vite — just click **Deploy**
4. Add environment variables in Vercel dashboard

### Netlify

1. Push to GitHub
2. Connect repo at [netlify.com](https://www.netlify.com/)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

```bash
npm run build
# Deploy the dist/ folder to gh-pages branch
```

## 🔧 Troubleshooting

| Issue                    | Solution                                                              |
| ------------------------ | --------------------------------------------------------------------- |
| Icons not showing        | Verify icon name in `skillIconMap.js` matches your `portfolioData.js` |
| Contact form not sending | Check `.env` variables and EmailJS dashboard                          |
| Tailwind styles missing  | Ensure `@tailwindcss/vite` plugin is in `vite.config.js`              |
| Build errors             | Run `npm install --legacy-peer-deps` to resolve peer dep conflicts    |

## 📄 License

MIT — free to use and modify for personal or commercial projects.
