import { useCallback, useEffect, useMemo, useState } from "react";
import AOS from "aos";
import { content } from "./content";
import { LanguageContext } from "./useI18n";

const STORAGE_KEY = "lang";

function readInitial() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "ar" ? "ar" : "en";
  } catch {
    return "en";
  }
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitial);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = content[lang].meta.title;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage blocked, ignore */
    }
    // layout changed (RTL flip), so re-measure scroll animations
    const id = requestAnimationFrame(() => AOS.refreshHard());
    return () => cancelAnimationFrame(id);
  }, [lang]);

  const toggle = useCallback(() => setLang((value) => (value === "en" ? "ar" : "en")), []);

  const value = useMemo(
    () => ({ lang, c: content[lang], isRtl: lang === "ar", toggle }),
    [lang, toggle],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
