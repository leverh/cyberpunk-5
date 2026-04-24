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
