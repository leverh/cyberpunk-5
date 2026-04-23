import "./styles/global.css";

// Atmosphere
import {
  ParticleCanvas,
  Overlays,
  MouseGlow,
  HudCorners,
  StatusHud,
  DataStream,
} from "./components/atmosphere";

// Layout
import { Nav, Footer } from "./components/layout";

// UI
import { CyberDivider } from "./components/ui";

// Sections
import {
  Hero,
  About,
  Capabilities,
  Projects,
  Contact,
  Services,
  Process 
} from "./components/sections";

/**
 * Root portfolio component.
 *
 * Architecture:
 *  - Atmosphere layer (canvas, overlays, HUD chrome) renders fixed behind content
 *  - Nav is fixed at top
 *  - Sections scroll naturally, separated by CyberDividers
 *  - Footer at the bottom
 *
 * To add a new section:
 *  1. Create a component in src/components/sections/
 *  2. Import & drop it in the <main> below
 *  3. Add a CyberDivider above it
 *  4. (Optional) Add a nav link in src/config/siteConfig.js
 */
export default function App() {
  return (
    <>
      {/* ── Fixed Atmosphere ── */}
      <ParticleCanvas />
      <Overlays />
      <MouseGlow />
      <HudCorners />
      <StatusHud />
      <DataStream />

      {/* ── Navigation ── */}
      <Nav />

      {/* ── Scrollable Content ── */}
      <main id="top" style={{ position: "relative", zIndex: 2 }}>
        <Hero />

        <CyberDivider />
        <About />

        <CyberDivider />
        <Services />

        <CyberDivider />
        <Process />

        <CyberDivider />
        <Capabilities />

        <CyberDivider />
        <Projects />

        <CyberDivider />
        <Contact />

        <Footer />
      </main>
    </>
  );
}
