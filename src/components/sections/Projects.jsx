import { PROJECTS } from "../../config";
import { Reveal, SectionHeader } from "../ui";
import styles from "./Projects.module.css";

function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Reveal>
      <div className={styles.card}>
        {/* Visual */}
        <div className={styles.visual}>
          <img src={project.img} alt={project.codename} loading="lazy" />
          <div className={styles.hudOverlay} data-id={project.id} />
          <div
            className={styles.num}
            style={{ WebkitTextStrokeColor: project.accent }}
          >
            {num}
          </div>
        </div>

        {/* Info */}
        <div className={styles.info}>
          <div
            className={styles.type}
            style={{
              color: project.accent,
              textShadow: `0 0 8px ${project.accent}44`,
            }}
          >
            {project.type}
          </div>

          <h3 className={styles.codename}>{project.codename}</h3>
          <p className={styles.brief}>{project.brief}</p>

          <div className={styles.stack}>
            {project.stack.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            className={styles.link}
            style={{ color: project.accent }}
          >
            VIEW PROJECT
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <SectionHeader id="003" tag="CLASSIFIED" />

      <Reveal delay={1}>
        <h2 className={styles.title}>
          Selected
          <br />
          <em>operations.</em>
        </h2>
      </Reveal>

      <div className={styles.list}>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
