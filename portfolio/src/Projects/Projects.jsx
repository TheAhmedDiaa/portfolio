import SectionTitle from "../Components/SectionTitle";
import BackgroundSection from "../Components/BackgroundSection";
import { GRADIENT, trackPointer } from "../Components/spotlight";

const PROJECTS = [
  {
    title: "JinStore",
    kind: "E-commerce platform",
    meta: "Frontend developer · Team of 5 · DEPI final project · 2025",
    points: [
      "Built the entire frontend of a MERN e-commerce platform: product browsing, cart, checkout and orders, authentication and a vendor dashboard.",
      "Integrated the team's REST API with Axios, handling JWT authentication, protected routes and role-based views (user, vendor, admin).",
      "Managed state with Context API and built reusable components with a responsive Tailwind CSS UI.",
      "Worked with four teammates (Node/Express/MongoDB backend) via Git and GitHub; deployed on Vercel.",
    ],
    stack: ["React 19", "Vite", "React Router", "Tailwind CSS", "Axios", "REST APIs"],
    links: [
      { label: "Live demo", href: "https://ecommerce-jinstore.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Omar-Kamall/finall-project-depi" },
    ],
  },
  {
    title: "Sunrise Hotels",
    kind: "Hotel booking platform",
    meta: "Freelance · Jan 2025",
    points: [
      "Developed a hotel booking platform where users browse hotel units and connect via WhatsApp to book.",
      "Implemented CRUD with Firebase Realtime Database and a secure admin dashboard using Firebase Authentication and role-based permissions.",
      "Used Cloudinary for image hosting, code splitting and lazy loading; designed a responsive Tailwind CSS UI for all devices.",
    ],
    stack: ["React.js", "Firebase", "Cloudinary", "Tailwind CSS"],
    links: [],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle eyebrow="Projects" title="Things I've built">
          Real apps with authentication, dashboards and live deployments.
        </SectionTitle>

        <div className="grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
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
                <ul className="mt-4 list-disc space-y-2 pl-5 text-(--secondary-text) marker:text-(--accent)">
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
