# Shawmica Sivatharan — Personal Portfolio

A modern, responsive portfolio website showcasing projects, skills, experience, certifications, and contact information. Built for clarity, performance, and a polished developer presence.

**Live site:** [portfolio-mine-ashen.vercel.app](https://portfolio-mine-ashen.vercel.app)

---

## About

I'm Shawmica Sivatharan — a third-year IT undergraduate at Rajarata University of Sri Lanka with a strong focus on **Artificial Intelligence**, **Machine Learning**, **Computer Vision**, and **full-stack web development**. This site brings together my work across AI/ML, software engineering, and cloud technologies in one place.

---

## Features

- **Hero** — Introduction, profile image, resume download, and quick contact CTA
- **About** — Background, education, and core strengths
- **Skills** — Filterable tech stack (frontend, backend, languages, tools, design)
- **Projects** — Featured work with tags, demos, and GitHub links (RAG assistants, EdTech apps, computer vision, full-stack apps, and more)
- **Experience** — Professional and academic experience timeline
- **Certifications** — Industry credentials and learning achievements
- **Extracurricular** — Leadership, volunteering, and community involvement
- **Contact** — Validated contact form with email delivery
- **Dark / light theme** — System-aware theme switching
- **Animations** — Smooth scroll and Framer Motion transitions

---

## Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Framework** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, Shadcn UI, Radix UI |
| **Routing** | React Router |
| **Forms** | React Hook Form, Zod |
| **Animation** | Framer Motion |
| **Icons** | Lucide React, Font Awesome |
| **Deployment** | Vercel |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (included with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/shawmica/portfolio_mine.git
cd portfolio_mine

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview   # Preview the production build locally
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
portfolio_mine/
├── public/                 # Static assets
├── src/
│   ├── components/         # Page sections and UI components
│   │   ├── ui/             # Shadcn UI primitives
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── ExtracurricularSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/              # Route pages
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities
│   ├── img/                # Images and resume PDF
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## Customization

To personalize the portfolio for your own use:

1. Update content in `src/components/` (hero text, about, projects, experience, etc.)
2. Replace images and `src/img/Resume.pdf` with your own assets
3. Edit social links in `src/components/Footer.tsx` and `src/components/Header.tsx`
4. Configure the contact form in `src/components/ContactSection.tsx` (Web3Forms access key)

---

## Connect

| | |
|---|---|
| **GitHub** | [github.com/shawmica](https://github.com/shawmica) |
| **LinkedIn** | [linkedin.com/in/shawmica-sivatharan](https://www.linkedin.com/in/shawmica-sivatharan) |


---


