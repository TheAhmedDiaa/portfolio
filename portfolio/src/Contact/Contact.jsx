import { useState } from "react";
import SectionTitle from "../Components/SectionTitle";
import BackgroundSection from "../Components/BackgroundSection";
import { GRADIENT, trackPointer } from "../Components/spotlight";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import gmail from "../assets/gmail.svg";
import phone from "../assets/phone.svg";
import whatsapp from "../assets/whatsapp.svg";

const EMAIL = "theahmeddiaa@gmail.com";

const LINKS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: gmail },
  { label: "LinkedIn", value: "ahmed-diaa-front-end", href: "https://linkedin.com/in/ahmed-diaa-front-end", icon: linkedin },
  { label: "GitHub", value: "theAhmedDiaa", href: "https://github.com/theAhmedDiaa", icon: github },
  { label: "WhatsApp", value: "Message me", href: "https://wa.me/qr/QYYABGVLYFWUE1", icon: whatsapp },
  { label: "Phone", value: "+20 115 780 3789", href: "tel:+201157803789", icon: phone },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

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
      <SectionTitle eyebrow="Contact" title="Let's work together">
        I&apos;m looking for a remote frontend internship. If you have a role or a project, I&apos;d
        love to hear about it.
      </SectionTitle>

      <div className="mb-10 flex flex-wrap items-center justify-center gap-4" data-aos="fade-up">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center rounded-full px-6 py-3 font-semibold text-black transition hover:-translate-y-0.5"
          style={{ background: GRADIENT }}
        >
          Say hello
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex cursor-pointer items-center rounded-full border border-(--border-hover) bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
        >
          {copied ? "Copied!" : "Copy email"}
        </button>
        <span className="sr-only" role="status" aria-live="polite">
          {copied ? "Email address copied to clipboard" : ""}
        </span>
      </div>

      <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
        {LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              onPointerMove={trackPointer}
              className="glass spotlight flex items-center gap-4 rounded-2xl p-4"
            >
              <img src={link.icon} alt="" className="size-8" />
              <span className="min-w-0">
                <span className="block text-sm text-(--muted-text)">{link.label}</span>
                <span className="block truncate font-medium">{link.value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </BackgroundSection>
  );
}
