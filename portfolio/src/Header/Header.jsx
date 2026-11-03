import { useEffect, useRef, useState } from "react";
import GradientText from "../TextAnimations/GradientText/GradientText.jsx";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const toggleRef = useRef(null);

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setScrolled(window.scrollY > 16);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...LINKS.map((link) => link.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          solid ? "bg-(--nav-background) shadow-[var(--shadow-lg)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6"
        >
          <a href="#hero" aria-label="Back to top" className="text-lg font-bold">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="bg-transparent"
            >
              Ahmed Diaa
            </GradientText>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    active === link.id
                      ? "bg-white/10 text-white"
                      : "text-(--secondary-text) hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            ref={toggleRef}
            type="button"
            className="grid size-10 cursor-pointer place-items-center rounded-full text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>

        <div
          id="mobile-menu"
          inert={!open}
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 px-6 pb-4">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`block rounded-xl px-4 py-3 text-lg font-medium ${
                    active === link.id ? "bg-white/10 text-white" : "text-(--secondary-text)"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="h-0.5"
        aria-hidden="true"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #40ffaa, #4079ff, #b86bff)",
        }}
      />
    </header>
  );
}
