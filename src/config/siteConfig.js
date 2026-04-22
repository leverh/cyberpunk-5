/* ═══════════════════════════════════════════════════════════════
   SITE CONFIG
   ═══════════════════════════════════════════════════════════════
   All your personal content lives here. Edit this file to
   customize the portfolio with your own info, projects, skills,
   and links. No need to touch any component files.
   ═══════════════════════════════════════════════════════════════ */

export const DEVELOPER = {
  name: "MADE BY EVER",
  handle: "@MADEBYEVER",
  role: "FRONT-END DEVELOPER // CREATIVE TECHNOLOGIST",
  bio: `Five years crafting interfaces that make people stop and look twice. I live at the intersection of code and aesthetics — building websites, brands, and web apps that feel as good as they function.`,
  extendedBio: `I'm a front-end developer with a full-stack foundation, based in New York City. What drives me isn't just clean code — it's the moment a design clicks, when the typography, the motion, and the layout all pull together into something that feels inevitable. I work with individuals and businesses to build their web presence from the ground up: websites, branding, and custom web applications. If you care about how your product looks and feels, we'll get along just fine.`,
  email: "hello@madebyever.com",
  github: "https://github.com/leverh",
  linkedin: "https://linkedin.com", // ← update when ready
  location: "NEW YORK CITY",
  status: "AVAILABLE FOR NEW PROJECTS",
  portraitImg:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face", // ← swap with your own photo
};

export const STATS = [
  { value: "5+", label: "YEARS ACTIVE" },
  { value: "20+", label: "PROJECTS SHIPPED" },
  { value: "3", label: "SERVICES OFFERED" },
  { value: "∞", label: "PIXELS PUSHED" },
];

export const PROJECTS = [
  {
    id: "PRJ-001",
    codename: "NEURAL//DASH",
    type: "CLASSIFIED // WEB APPLICATION",
    year: "2025",
    brief:
      "Real-time analytics platform processing 2M+ daily events with sub-100ms response. Custom WebSocket layer, ML-powered anomaly detection, and a dashboard that makes data feel alive.",
    stack: ["REACT", "D3.JS", "WEBSOCKET", "PYTHON", "TENSORFLOW"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=550&fit=crop",
    accent: "#FCEE0A",
    url: "#",
  },
  {
    id: "PRJ-002",
    codename: "PHANTOM//UI",
    type: "DESIGN SYSTEM // OPEN SOURCE",
    year: "2024",
    brief:
      "200+ adaptive components. Built-in a11y, motion primitives, and behavioral theming that responds to user patterns. Adopted by 40+ engineering teams across three continents.",
    stack: ["TYPESCRIPT", "STORYBOOK", "FIGMA API", "CSS HOUDINI"],
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=550&fit=crop",
    accent: "#EF4444",
    url: "#",
  },
  {
    id: "PRJ-003",
    codename: "ECHO//COMMERCE",
    type: "E-COMMERCE // ENTERPRISE",
    year: "2024",
    brief:
      "Headless commerce engine doing $12M+ ARR. Custom checkout with 99.97% uptime. Micro-frontend architecture with edge rendering and real-time inventory sync across 200+ SKUs.",
    stack: ["NEXT.JS", "STRIPE", "GRAPHQL", "REDIS", "DOCKER"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=550&fit=crop",
    accent: "#22D3EE",
    url: "#",
  },
  {
    id: "PRJ-004",
    codename: "VOID//ENGINE",
    type: "CREATIVE TOOL // EXPERIMENTAL",
    year: "2023",
    brief:
      "Browser-native 3D scene editor with real-time multiplayer. WebGPU rendering, custom shader graph, CRDT-based state sync. Think Figma if it had a z-axis.",
    stack: ["THREE.JS", "WEBGPU", "CRDT", "RUST/WASM"],
    img: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=900&h=550&fit=crop",
    accent: "#FCEE0A",
    url: "#",
  },
];

export const CAPABILITIES = [
  { label: "REACT / NEXT.JS", pct: 95, cat: "FRONTEND" },
  { label: "TYPESCRIPT", pct: 92, cat: "FRONTEND" },
  { label: "NODE / EXPRESS", pct: 88, cat: "BACKEND" },
  { label: "POSTGRESQL", pct: 85, cat: "BACKEND" },
  { label: "SYSTEM DESIGN", pct: 90, cat: "ARCHITECTURE" },
  { label: "THREE.JS / WEBGL", pct: 80, cat: "CREATIVE" },
  { label: "DEVOPS / AWS", pct: 78, cat: "INFRASTRUCTURE" },
  { label: "PYTHON / ML", pct: 75, cat: "DATA" },
];

export const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#capabilities" },
  { label: "WORK", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export const DATA_STREAM_VALUES = [
  "0xF4E2A1", "SYN_ACK", "PORT:443", "TLS1.3",
  "NODE:7", "PING:12ms", "HEAP:OK", "0xFF00AA",
  "NET.RUN", "V.2.077", "ICE:NONE", "RAM:16.0",
];
