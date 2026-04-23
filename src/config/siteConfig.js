export const DEVELOPER = {
  name: "MADE BY EVER",
  handle: "@MADEBYEVER",
  role: "FRONT-END DEVELOPER // CREATIVE TECHNOLOGIST",

  bio: `I'm a front-end developer and creative technologist building web experiences that feel alive - not assembled from a drag-and-drop tool.
  My focus is on small businesses that deserve better than cookie-cutter templates. `,

  extendedBio: `Every project I take on is built from scratch, with intention, structure, and performance baked in from day one. I sit at the intersection of design and development — I care about how things look
  and how they run.`,

  email: "contact@madebyever.com",
  github: "https://github.com/leverh",
  linkedin: "https://linkedin.com", // ← update when ready

  location: "AVAILABLE WORLDWIDE",
  status: "AVAILABLE FOR NEW PROJECTS",

  portraitImg: "/assets/portrait.jpg", // ← swap with your own photo
};

export const STATS = [
  { value: "5+",  label: "YEARS ACTIVE" },
  { value: "20+", label: "PROJECTS SHIPPED" },
  { value: "∞",   label: "NO TEMPLATES" },
  { value: "100%", label: "CUSTOM BUILDS" },
];

export const ABOUT_CARDS = [
  { label: "LOCATION",     value: "Available Worldwide" },
  { label: "AVAILABILITY", value: "Open for Projects" },
  { label: "FOCUS",        value: "Small Business & Startups" },
  { label: "APPROACH",     value: "Custom. Always." },
];

export const PROJECTS = [
  {
    id: "PRJ-001",
    codename: "USA EXPLORER",
    type: "WEB APPLICATION // INTERACTIVE",
    year: "2025",
    brief:
      "An interactive map tool for businesses that want to showcase locations, service areas, or customer stories — no coding needed to update.",
    stack: ["REACT", "CSS Modules", "Leaflet.js"],
    img: "/images/USA.webp",
    accent: "#FCEE0A",
    url: "#",
  },
  {
    id: "PRJ-002",
    codename: "SUMMIT",
    type: "SAAS // LANDING PAGE",
    year: "2025",
    brief:
      "A high-converting landing page for a SaaS product — designed to turn first-time visitors into sign-ups from the moment they land.",
    stack: ["REACT", "CSS Modules", "BRANDING"],
    img: "/images/SaaS.webp",
    accent: "#EF4444",
    url: "https://summit-saas.netlify.app/",
  },
  {
    id: "PRJ-003",
    codename: "FIEBER PRINTS",
    type: "E-COMMERCE // PLATFORM",
    year: "2024",
    brief:
      "A full e-commerce store for a Berlin punk collective — customers can browse, buy, and pay securely, with orders managed from a simple admin panel.",
    stack: ["REACT", "Next.js", "STRIPE", "NODE.JS", "CSS Modules", "BRANDING"],
    img: "/images/FieberPrints.webp",
    accent: "#22D3EE",
    url: "#",
  },
  {
    id: "PRJ-004",
    codename: "EPICENTER HUB",
    type: "PLATFORM // DASHBOARD",
    year: "2024",
    brief:
      "A real-time data dashboard pulling live USGS earthquake data — demonstrating complex API integration, interactive maps, and data visualisation.",
    stack: ["REACT", "Leaflet.js", "USGS API", "Chart.js", "CSS Modules"],
    img: "/images/Epicenter.webp",
    accent: "#FCEE0A",
    url: "https://extraordinary-maamoul-73fb24.netlify.app/",
  },
];

export const CAPABILITIES = [
  { label: "REACT",   pct: 95, cat: "FRONTEND" },
  { label: "NEXT.JS",   pct: 95, cat: "FRONTEND" },
  { label: "HTML / CSS / JS",   pct: 99, cat: "FRONTEND" },
  { label: "TYPESCRIPT",        pct: 88, cat: "FRONTEND" },
  { label: "PYTHON",      pct: 90, cat: "BACKEND" },
  { label: "FIGMA / DESIGN",    pct: 88, cat: "DESIGN" },
  { label: "BRANDING / IDENTITY", pct: 82, cat: "DESIGN" },
  { label: "GSAP / ANIMATION",  pct: 80, cat: "CREATIVE" },
  { label: "THREE.JS",  pct: 80, cat: "CREATIVE" },
  { label: "SEO / PERFORMANCE", pct: 90, cat: "INFRASTRUCTURE" },
  { label: "NODE / APIs",       pct: 75, cat: "BACKEND" },
  { label: "FRAMER / WEBFLOW",  pct: 78, cat: "TOOLS" },
];

export const NAV_LINKS = [
  { label: "ABOUT",    href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "SKILLS",   href: "#capabilities" },
  { label: "WORK",     href: "#projects" },
  { label: "CONTACT",  href: "#contact" },
];

export const SERVICES = [
  {
    num: "01",
    // icon: "⬡",
    name: "Web Design",
    desc: "Custom layouts with clear visual hierarchy, responsive structure, and brand-driven design. Built to guide attention — not scatter it.",
  },
  {
    num: "02",
    // icon: "◈",
    name: "Front-End Development",
    desc: "HTML, CSS, JavaScript, React. Clean component-based builds with smooth animations and zero bloat.",
  },
  {
    num: "03",
    // icon: "◎",
    name: "Branding",
    desc: "Logo systems, color palettes, type pairings, and visual identity — so your site and your brand feel like one cohesive thing.",
  },
  {
    num: "04",
    // icon: "▣",
    name: "Content Creation",
    desc: "Copywriting, page structure, and messaging that actually converts. Words that sound like you — not like every other business.",
  },
  {
    num: "05",
    // icon: "⚡",
    name: "Performance & SEO",
    desc: "Fast load times, SEO-ready structure, Core Web Vitals optimized. Sites that rank and don't make users wait.",
  },
  {
    num: "06",
    // icon: "◇",
    name: "Landing Pages & Apps",
    desc: "SaaS landing pages, e-commerce platforms, interactive web apps — anything that needs to convert visitors into customers.",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    name: "Intake",
    desc: "We map out your goals, audience, and scope. What the site needs to do — and for who.",
  },
  {
    num: "02",
    name: "Design",
    desc: "Visual direction, layout structure, brand alignment. You see it before a single line of code is written.",
  },
  {
    num: "03",
    name: "Build",
    desc: "Responsive front-end development, animations, refinement, and real-device testing.",
  },
  {
    num: "04",
    name: "Deploy",
    desc: "Launch, handoff, and support. The system goes live — and you know how to use it.",
  },
];

export const DATA_STREAM_VALUES = [
  "0xF4E2A1", "SYN_ACK", "PORT:443", "TLS1.3",
  "NODE:7",   "PING:12ms", "HEAP:OK", "0xFF00AA",
  "NET.RUN",  "V.2.077",  "ICE:NONE", "RAM:16.0",
];