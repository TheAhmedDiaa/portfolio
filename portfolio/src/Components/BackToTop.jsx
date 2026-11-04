import { useEffect, useState } from "react";
import useI18n from "../i18n/useI18n";

// Floating button, appears after scrolling down one screen.
export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { c } = useI18n();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={c.nav.backToTop}
      title={c.nav.backToTop}
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`glass fixed bottom-6 end-6 z-40 grid size-12 cursor-pointer place-items-center rounded-full text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-accent-md)] ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5m0 0l-6 6m6-6l6 6" />
      </svg>
    </button>
  );
}
