export const DEVELOPER = {
  name: "GHOST\nIN THE\nCODE",  // if your hero renders newlines, otherwise keep as-is
  handle: "GTC-AGENCY // EST. 2019",
  role: "BESPOKE IDENTITY SYSTEMS // HIGH-IMMERSION DIGITAL EXPERIENCES",
  location: "DISTRIBUTED // NO FIXED BASE",
  status: "ACCEPTING NEW CONTRACTS",
  bio: "We don't build websites. We engineer presence. Ghost In The Code is a boutique digital agency specializing in high-immersion identity systems for brands that refuse to be ordinary.",
  extendedBio: "Every engagement starts with a single question: what does this brand feel like at 2am, alone, on a screen? We work until the answer is undeniable. No templates. No shortcuts. No noise.",
  email: "hello@ghostinthecode.io",
  github: "https://github.com/leverh",
};

export const STATS = [
  { value: "47+",  label: "MISSIONS COMPLETED" },
  { value: "12",   label: "ACTIVE CLIENTS" },
  { value: "∞",    label: "PIXELS PUSHED" },
  { value: "100%", label: "DELIVERY RATE" },
];

export const ABOUT_CARDS = [
  {
    label: "AGENCY TYPE",
    value: "Boutique / Independent",
  },
  {
    label: "BASE OF OPS",
    value: "Distributed, Global",
  },
  {
    label: "SPECIALIZATION",
    value: "Identity Systems & Immersive UI",
  },
  {
    label: "ENGAGEMENT MODEL",
    value: "Contract / Project-Based",
  },
  {
    label: "CLEARANCE LEVEL",
    value: "CLIENT EYES ONLY",
  },
  {
    label: "CURRENT STATUS",
    value: "Open for Contracts",
  },
];

export const PROJECTS = [
  {
    id: "AXM-001",
    codename: "AXIOM//SYSTEMS",
    type: "B2B SAAS // DEVELOPER TOOLING",
    accent: "#22D3EE",
    brief:
      "Engineered a high-density developer portal for a distributed infrastructure platform. Designed for engineers who hate marketing — every interaction earns its place.",
    stack: ["React", "TypeScript", "CSS Modules", "REST API", "Figma"],
    url: "#",
    img: "/images/axiom.webp",
    // Image search: "server room blue light long exposure"
  },
  {
    id: "NDX-002",
    codename: "NEON DISTRICT",
    type: "MUSIC COLLECTIVE // UNDERGROUND LABEL",
    accent: "#EF4444",
    brief:
      "Built the digital home for a 12-artist underground collective. High-contrast, high-noise design system built to survive festival posters, dark mode, and OLED screens.",
    stack: ["React", "Framer Motion", "Vite", "Headless CMS", "CSS Modules"],
    url: "#",
    img: "/images/neon-district.webp",
    // Image search: "concert crowd neon lights fog dark"
  },
  {
    id: "PHX-003",
    codename: "PHANTOM ATLAS",
    type: "INDEPENDENT GAME STUDIO // WORLD DESIGN",
    accent: "#FCEE0A",
    brief:
      "Full identity system and interactive world-map UI for an open-world RPG studio. Custom GLSL shaders, scan-line aesthetics, and sub-100ms interaction targets throughout.",
    stack: ["React", "GLSL", "WebGL", "CSS Modules", "Vite"],
    url: "#",
    img: "/images/phantom-atlas.webp",
    // Image search: "futuristic city aerial night rain reflections"
  },
  {
    id: "VBX-004",
    codename: "VELDT BIOTECH",
    type: "HEALTH TECH // SPECULATIVE BIOTECH",
    accent: "#22D3EE",
    brief:
      "Clinical-grade interface design for a genomics data platform. Austere, precise, and deliberately unsettling — a design system built to make complex data feel inevitable.",
    stack: ["React", "D3.js", "TypeScript", "CSS Modules", "Figma"],
    url: "#",
    img: "/images/veldt.webp",
    // Image search: "laboratory microscope blue light abstract"
  },
];

export const CAPABILITIES = [
  // FRONTEND ENGINEERING
  { cat: "FRONTEND",      label: "React / Next.js" },
  { cat: "FRONTEND",      label: "TypeScript" },
  { cat: "FRONTEND",      label: "Vite / Webpack / Turbopack" },
  { cat: "FRONTEND",      label: "CSS Modules / Styled Components" },
  { cat: "FRONTEND",      label: "Framer Motion" },
  { cat: "FRONTEND",      label: "WebGL / Three.js" },

  // VISUAL & INTERACTION
  { cat: "VISUAL",        label: "GLSL Shader Authoring" },
  { cat: "VISUAL",        label: "SVG Animation & Morphing" },
  { cat: "VISUAL",        label: "Canvas API / PixiJS" },
  { cat: "VISUAL",        label: "Lottie / Rive" },
  { cat: "VISUAL",        label: "Custom Cursor & Micro-interaction Systems" },
  { cat: "VISUAL",        label: "Scroll-Driven Animation (GSAP / native)" },

  // IDENTITY SYSTEMS
  { cat: "IDENTITY",      label: "Design System Architecture" },
  { cat: "IDENTITY",      label: "Token-Based Theming" },
  { cat: "IDENTITY",      label: "Figma — Component & Variable Libraries" },
  { cat: "IDENTITY",      label: "Motion Language Design" },
  { cat: "IDENTITY",      label: "Brand Voice & Copywriting" },
  { cat: "IDENTITY",      label: "Iconography & Custom Type Pairing" },

  // INFRASTRUCTURE
  { cat: "INFRA",         label: "Vercel / Netlify / Cloudflare Pages" },
  { cat: "INFRA",         label: "CI/CD — GitHub Actions" },
  { cat: "INFRA",         label: "Headless CMS — Sanity / Contentful" },
  { cat: "INFRA",         label: "REST & GraphQL Integration" },
  { cat: "INFRA",         label: "Edge Functions & ISR" },
  { cat: "INFRA",         label: "Performance Auditing & Core Web Vitals" },

  // IMMERSIVE & EXPERIMENTAL
  { cat: "IMMERSIVE",     label: "Particle Systems & Generative UI" },
  { cat: "IMMERSIVE",     label: "Post-Processing Effects (Bloom, CRT, Grain)" },
  { cat: "IMMERSIVE",     label: "Audio-Reactive Interfaces" },
  { cat: "IMMERSIVE",     label: "Procedural Texture Generation" },
  { cat: "IMMERSIVE",     label: "Real-Time Data Visualization (D3 / Recharts)" },
  { cat: "IMMERSIVE",     label: "WebXR — Experimental Prototyping" },

  // STRATEGY
  { cat: "STRATEGY",      label: "Information Architecture" },
  { cat: "STRATEGY",      label: "Conversion-Focused UX" },
  { cat: "STRATEGY",      label: "Accessibility — WCAG 2.1 AA" },
  { cat: "STRATEGY",      label: "Dark Launch & Staged Rollout Planning" },
  { cat: "STRATEGY",      label: "Cross-Functional Client Collaboration" },
  { cat: "STRATEGY",      label: "Technical Documentation & Handoff" },
];

export const NAV_LINKS = [
  { href: "#about",        label: "DOSSIER" },
  { href: "#services",     label: "OPERATIONS" },
  { href: "#capabilities", label: "CYBERWARE" },
  { href: "#projects",     label: "MISSIONS" },
  { href: "#contact",      label: "TRANSMIT" },
];

export const SERVICES = [
  {
    num: "01",
    name: "Digital Infiltration",
    desc: "Full-stack brand incursions. We embed into your market, map the competitive terrain, and surface a presence that cuts through noise.",
  },
  {
    num: "02",
    name: "Identity Synthesis",
    desc: "Visual systems engineered from zero. Logomarks, type hierarchies, motion language — cohesive identity built for hostile environments.",
  },
  {
    num: "03",
    name: "Neural-Link UX",
    desc: "Interfaces that collapse the gap between intent and action. Interaction design for users who don't read — they feel.",
  },
  {
    num: "04",
    name: "Signal Architecture",
    desc: "Information systems that hold under pressure. IA, navigation logic, and content strategy for products at scale.",
  },
  {
    num: "05",
    name: "Ghost Branding",
    desc: "For clients who need presence without exposure. Unnamed, untracked, unmistakable. We build the identity; you control the reveal.",
  },
  {
    num: "06",
    name: "Dark Launch",
    desc: "Zero-to-live in controlled silence. Staged rollouts, soft launches, and pre-release campaign systems built for precision deployment.",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    name: "Reconnaissance",
    desc: "We map the terrain. Market position, competitor landscape, audience psychology. The brief gets stress-tested before a single pixel moves.",
  },
  {
    num: "02",
    name: "Identity Lock",
    desc: "Visual language, motion principles, type systems, and tone of voice — all defined and documented before build begins. No surprises mid-mission.",
  },
  {
    num: "03",
    name: "Incursion",
    desc: "Full-stack execution. Design and engineering running in parallel. Weekly drops, live previews, and zero radio silence from our end.",
  },
  {
    num: "04",
    name: "Dark Launch",
    desc: "Staged deployment, performance auditing, and post-launch monitoring. We don't disappear at handoff — we stay on comms until all systems are nominal.",
  },
];

export const DATA_STREAM_VALUES = [
  "0xF4E2A1", "SYN_ACK", "PORT:443", "TLS1.3",
  "NODE:7",   "PING:12ms", "HEAP:OK", "0xFF00AA",
  "NET.RUN",  "V.2.077",  "ICE:NONE", "RAM:16.0",
];