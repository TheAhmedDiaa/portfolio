import { useState } from "react";
import SectionTitle from "../Components/SectionTitle";
import BackgroundSection from "../Components/BackgroundSection";
import { GRADIENT, trackPointer } from "../Components/spotlight";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import gmail from "../assets/gmail.svg";
import phone from "../assets/phone.svg";
import whatsapp from "../assets/whatsapp.svg";
import useI18n from "../i18n/useI18n";

const EMAIL = "theahmeddiaa@gmail.com";

// ltr: value is Latin/number text, forced left-to-right even on the Arabic page
const LINKS = [
  { key: "email", value: EMAIL, href: `mailto:${EMAIL}`, icon: gmail, ltr: true },
  { key: "linkedin", value: "ahmed-diaa-front-end", href: "https://linkedin.com/in/ahmed-diaa-front-end", icon: linkedin, ltr: true },
  { key: "github", value: "theAhmedDiaa", href: "https://github.com/theAhmedDiaa", icon: github, ltr: true },
  { key: "whatsapp", href: "https://wa.me/qr/QYYABGVLYFWUE1", icon: whatsapp },
  { key: "phone", value: "+20 115 780 3789", href: "tel:+201157803789", icon: phone, ltr: true },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { c, lang } = useI18n();
  const t = c.contact;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <BackgroundSection id="contact" placement="center">
      <SectionTitle eyebrow={t.eyebrow} title={t.title}>
        {t.sub}
      </SectionTitle>

      <div className="mb-10 flex flex-wrap items-center justify-center gap-4" data-aos="fade-up">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center rounded-full px-6 py-3 font-semibold text-black transition hover:-translate-y-0.5"
          style={{ background: GRADIENT }}
        >
          {t.sayHello}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex cursor-pointer items-center rounded-full border border-(--border-hover) bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
        >
          {copied ? t.copied : t.copyEmail}
        </button>
        <span className="sr-only" role="status" aria-live="polite">
          {copied ? t.copiedStatus : ""}
        </span>
      </div>

      <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
        {LINKS.map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              onPointerMove={trackPointer}
              className="glass spotlight flex items-center gap-4 rounded-2xl p-4"
            >
              <img src={link.icon} alt="" className="size-8" />
              <span className="min-w-0">
                <span className="block text-sm text-(--muted-text)">{t.labels[link.key]}</span>
                <span
                  className="block truncate font-medium"
                  dir={link.ltr ? "ltr" : undefined}
                  style={link.ltr && lang === "ar" ? { textAlign: "right" } : undefined}
                >
                  {link.ltr ? link.value : t.messageMe}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </BackgroundSection>
  );
}
