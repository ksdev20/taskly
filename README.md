# 🎨 Taskly

Taskly is the user interface for the **Taskly Task Tracing App**.  
It is built with **React**, **Astro**, **TypeScript**, and **Tailwind CSS**, designed to be fast, accessible, and user‑centric.  
The frontend communicates with the Taskly Backend API to provide a seamless experience for managing tasks.

![Taskly Dashboard Screenshot](/public/taskly-ui-screenshot.png)

---

## ✨ Features

- **Task Management**
  - Create, view, and delete tasks
  - Support for priority, stage, tags, and notifications
- **Responsive UI**
  - Built with Tailwind CSS for mobile‑first design
- **Performance**
  - Lightning‑fast builds and hot reload via Vite
  - Optimized for SEO, accessibility, and Core Web Vitals
- **Developer Friendly**
  - Modular components
  - TypeScript for type safety
  - Clean project structure

---

## 📂 Project Structure

```plaintext
frontend/
├── public/             # Static assets (icons, images, etc.)
├── src/
│   ├── components/     # Reusable UI components (TaskCard, Navbar, etc.)
│   ├── pages/          # Application pages (Home, Dashboard, etc.)
│   ├── styles/         # Global styles and Tailwind configuration
│   ├── utils/          # Helper functions (API calls, formatters)
│   ├── hooks/          # Custom React hooks
│   └── main.tsx        # Application entry point
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite build configuration
