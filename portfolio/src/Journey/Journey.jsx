import SectionTitle from "../Components/SectionTitle";
import BackgroundSection from "../Components/BackgroundSection";
import Tabs from "../Components/Tabs";

const EXPERIENCE = [
  "Built responsive client web apps with React.js, Tailwind CSS, Bootstrap and Firebase; integrated REST APIs (OpenWeatherMap, IPGeolocation).",
  "Implemented secure authentication with Firebase Authentication and role-based access control for admin dashboards.",
  "Optimized image delivery with Cloudinary, lazy loading and responsive images.",
  "Gathered requirements and delivered projects on agreed timelines in a remote setting, using Git/GitHub and Vercel for version control and deployment.",
];

const COURSES = [
  "Data Structures and Algorithms",
  "Database Systems",
  "Web Technologies",
  "Software Engineering",
  "OOP",
];

const CERTS = [
  {
    title: "DEPI: React Frontend Web Developer",
    org: "Digital Egypt Pioneers Program, MCIT",
    date: "Jun – Dec 2025",
  },
  {
    title: "Web Designer Summer Training",
    org: "ITIDA & NTI · 120 hours, 95%",
    date: "Jul 2026",
  },
  {
    title: "CS50x: Introduction to Computer Science",
    org: "Harvard University (edX)",
    date: "Dec 2024",
  },
];

function Experience() {
  return (
    <article className="glass mx-auto max-w-3xl rounded-2xl p-6 sm:p-8">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold">Freelance Frontend Developer</h3>
          <p className="text-(--secondary-text)">Self-employed · Remote, Egypt</p>
        </div>
        <span className="chip">Jan 2025 – Present</span>
      </header>
      <ul className="mt-5 list-disc space-y-2 pl-5 text-(--secondary-text) marker:text-(--accent)">
        {EXPERIENCE.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function Education() {
  return (
    <article className="glass mx-auto max-w-3xl rounded-2xl p-6 sm:p-8">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold">Mansoura University</h3>
          <p className="text-(--secondary-text)">Bachelor of Computer and Information Science</p>
        </div>
        <span className="chip">Expected 2027</span>
      </header>
      <p className="mb-3 mt-5 text-sm font-semibold uppercase tracking-widest text-(--muted-text)">
        Coursework
      </p>
      <ul className="flex flex-wrap gap-2">
        {COURSES.map((course) => (
          <li key={course} className="chip">
            {course}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Certifications() {
  return (
    <ul className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
      {CERTS.map((cert) => (
        <li key={cert.title} className="glass flex flex-col rounded-2xl p-5">
          <span className="chip mb-4 self-start">{cert.date}</span>
          <h3 className="font-semibold">{cert.title}</h3>
          <p className="mt-1 text-sm text-(--secondary-text)">{cert.org}</p>
        </li>
      ))}
    </ul>
  );
}

const TABS = [
  { id: "experience", label: "Experience", content: <Experience /> },
  { id: "education", label: "Education", content: <Education /> },
  { id: "certifications", label: "Certifications", content: <Certifications /> },
];

export default function Journey() {
  return (
    <BackgroundSection id="journey" placement="full">
      <SectionTitle eyebrow="Journey" title="Experience, education and training" />
      <div data-aos="fade-up">
        <Tabs tabs={TABS} label="Journey" />
      </div>
    </BackgroundSection>
  );
}
