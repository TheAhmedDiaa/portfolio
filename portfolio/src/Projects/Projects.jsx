import SectionTitle from "../Components/SectionTitle";
import BackgroundSection from "../Components/BackgroundSection";
import { GRADIENT, trackPointer } from "../Components/spotlight";
import useI18n from "../i18n/useI18n";

// language-independent data; text comes from i18n/content.js (items[id])
const PROJECT_DATA = [
  {
    id: "jinstore",
    stack: ["React 19", "Vite", "React Router", "Tailwind CSS", "Axios", "REST APIs"],
    hrefs: ["https://ecommerce-jinstore.vercel.app/", "https://github.com/Omar-Kamall/finall-project-depi"],
  },
  {
    id: "sunrise",
    stack: ["React.js", "Firebase", "Cloudinary", "Tailwind CSS"],
    hrefs: [],
  },
];

export default function Projects() {
  const { c } = useI18n();
  const p = c.projects;
  const projects = PROJECT_DATA.map((data) => ({
    ...p.items[data.id],
    stack: data.stack,
    links: p.items[data.id].links.map((label, i) => ({ label, href: data.hrefs[i] })),
  }));
  return (
    <section id="projects" className="w-full px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle eyebrow={p.eyebrow} title={p.title}>
          {p.sub}
        </SectionTitle>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              onPointerMove={trackPointer}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="glass spotlight flex flex-col rounded-3xl"
            >
              <div
                className="flex h-32 items-end p-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(64,255,170,0.18), rgba(64,121,255,0.18) 55%, rgba(184,107,255,0.22))",
                }}
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-(--accent)">
                    {project.kind}
                  </p>
                  <h3 className="text-3xl font-extrabold">{project.title}</h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm text-(--muted-text)">{project.meta}</p>
                <ul className="mt-4 list-disc space-y-2 ps-5 text-(--secondary-text) marker:text-(--accent)">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3 pt-2">
                    {project.links.map((link, i) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          i === 0
                            ? "inline-flex items-center gap-1 rounded-full px-5 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5"
                            : "inline-flex items-center gap-1 rounded-full border border-(--border-hover) bg-white/5 px-5 py-2 text-sm font-semibold transition hover:bg-white/10"
                        }
                        style={i === 0 ? { background: GRADIENT } : undefined}
                      >
                        {link.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
