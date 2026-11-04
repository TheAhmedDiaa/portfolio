import { useEffect, useRef, useState } from "react";
import GradientText from "../TextAnimations/GradientText/GradientText.jsx";
import useI18n from "../i18n/useI18n";

const LINKS = [{ id: "about" }, { id: "skills" }, { id: "journey" }, { id: "projects" }, { id: "contact" }];

export default function Header() {
  const { c, lang, toggle } = useI18n();
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
          aria-label={c.nav.main}
          className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6"
        >
          <a href="#hero" aria-label={c.nav.backToTop} className="text-lg font-bold">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="bg-transparent"
            >
              {c.nav.brand}
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
                  {c.nav.links[link.id]}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            lang={lang === "en" ? "ar" : "en"}
            aria-label={c.langButton.aria}
            className="inline-flex h-9 cursor-pointer items-center rounded-full border border-(--border-hover) bg-white/5 px-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {c.langButton.label}
          </button>
          <button
            ref={toggleRef}
            type="button"
            className="grid size-10 cursor-pointer place-items-center rounded-full text-white md:hidden"
            aria-label={open ? c.nav.closeMenu : c.nav.openMenu}
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
          </div>
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
                  {c.nav.links[link.id]}
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
