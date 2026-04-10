# Aura Divers — Abyssal Intelligence

A fully responsive, animated multi-page React website for **Aura Divers**, a deep-sea exploration and maritime intelligence company. Built with React 19, Vite 8, Tailwind CSS v4, and Framer Motion.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.2 | UI framework |
| Vite | 8.0 | Build tool & dev server |
| Tailwind CSS | 4.2 | Utility-first styling |
| @tailwindcss/vite | 4.2 | Tailwind v4 Vite plugin |
| Framer Motion | 12.38 | Animations |
| React Router DOM | 7.14 | Client-side routing |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
cd aura-divers
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
aura-divers/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Logo.jsx        # Animated SVG submersible logo
│   │   ├── Navbar.jsx      # Fixed nav with active route indicator & mobile menu
│   │   └── Footer.jsx      # Site-wide footer with links
│   ├── pages/
│   │   ├── Home.jsx        # Landing page
│   │   ├── Fleet.jsx       # Fleet overview & vessel cards
│   │   ├── Exploration.jsx # Active missions & roadmap
│   │   ├── Innovation.jsx  # R&D technologies
│   │   ├── Network.jsx     # Global network & partnerships
│   │   └── DeployMission.jsx # Mission deployment form
│   ├── App.jsx             # Router setup
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles & Tailwind theme
├── index.html
├── vite.config.js
└── package.json
```

---

## Pages

### `/` — Home
Full landing page with a fullscreen hero, animated stats strip, services bento grid, the Aura Advantage section, a testimonial, and a contact form.

### `/fleet` — Fleet Overview
Filterable vessel catalog with cards showing technical specs, status indicators (READY / ACTIVE), and a real-time fleet status panel.

### `/exploration` — Exploration Missions
Cinematic hero with a depth progress bar, active protocol project cards, a 2025–2030 roadmap bento grid, and a global stats strip.

### `/innovation` — Innovation R&D
Blueprint grid aesthetic with a hero featuring a rotated tech card, proprietary technologies bento (Neural-Mapping Sonar, Aura-Mesh Fabric, Deep-Link GPS, Pressure-Lock Seals), future engineering roadmap, and a newsletter CTA.

### `/network` — Global Network
World map with live telemetry overlay, strategic alliances panel, partner logo grid, collaboration CTA section, and network stats.

### `/deploy` — Deploy Mission
Mission command console with mission type selector, depth range slider, deployment region dropdown, objectives textarea, spinning transmission status indicator, and a real-time telemetry sidebar.

---

## Design System

Based on the **Abyssal Navigator** design language — a deep-ocean HUD aesthetic.

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| Background | `#081423` | Page background (the void) |
| Primary | `#44ddc2` | Teal accent, bioluminescent guide |
| Primary Container | `#00bfa6` | Interactive zones |
| Primary Fixed | `#68fade` | Headings, highlights |
| Secondary | `#b9c7e4` | Body text, muted content |
| Surface Container Low | `#111c2c` | Cards, content blocks |
| Surface Container High | `#1f2b3b` | Elevated panels |
| Surface Container Highest | `#2a3546` | Floating elements |
| Surface Container Lowest | `#040f1e` | Deepest sections |

### Typography

- **Headlines / Display** — `Space Grotesk` (300–700 weight), tight tracking
- **Body / Labels** — `Inter` (300–600 weight)

### Animation Patterns

- `fadeUp` — scroll-triggered entrance via `whileInView`, staggered with `custom` delay
- `layoutId="nav-underline"` — smooth active nav indicator transition
- Hover: `scale(1.05)` + teal glow `box-shadow`
- Logo: spring rotation on hover
- Depth bar: width animation on mount

### Key CSS Utilities (defined in `index.css`)

```css
.glass-panel   /* backdrop-blur + rgba background */
.glass-card    /* lighter glass variant */
.text-gradient /* teal gradient text */
.hero-gradient /* bottom fade overlay */
.blueprint-grid /* fine grid background pattern */
.hero-mesh     /* radial dot mesh background */
.primary-glow  /* teal box-shadow glow */
```

---

## Components

### `<Logo />`
Custom animated SVG of a submersible with bioluminescent dots and depth waves. Accepts a `size` prop (default `40`). Springs on hover.

### `<Navbar />`
- Fixed, glassmorphic
- Scroll-aware background opacity
- Active route underline with Framer Motion `layoutId`
- Mobile hamburger with animated slide-down menu
- "Deploy Mission" CTA button routes to `/deploy`

### `<Footer />`
- Animated social icons
- Logo + brand tagline
- Navigation links with hover color transitions

---

## Fonts & Icons

Loaded via Google Fonts CDN in `index.html`:

- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- [Inter](https://fonts.google.com/specimen/Inter)
- [Material Symbols Outlined](https://fonts.google.com/icons)

---

## Scripts

```bash
npm run dev      # Start dev server at localhost:5173
npm run build    # Production build to /dist
npm run preview  # Preview production build locally
```
