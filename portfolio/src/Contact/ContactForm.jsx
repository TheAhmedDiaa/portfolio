import { useState } from "react";
import { GRADIENT } from "../Components/spotlight";
import useI18n from "../i18n/useI18n";

const EMAIL = "theahmeddiaa@gmail.com";
// Formspree form id (the part after /f/ in your form URL). Set VITE_FORMSPREE_ID in your host's env.
// Without it, the form opens the visitor's mail app with the message prefilled.
const FORM_ID = import.meta.env.VITE_FORMSPREE_ID;

const field =
  "w-full rounded-xl border border-(--border-hover) bg-white/5 px-4 py-3 text-(--primary-text) placeholder:text-(--muted-text) outline-none transition focus:border-(--accent) focus:bg-white/10";

export default function ContactForm() {
  const { c } = useI18n();
  const f = c.contact.form;
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot: bots fill this, humans never see it

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!FORM_ID) {
      const subject = encodeURIComponent(`${f.subjectPrefix} ${name}`);
      const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass mx-auto mb-10 grid max-w-2xl gap-4 rounded-3xl p-6 sm:p-8"
      data-aos="fade-up"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium text-(--secondary-text)">
          {f.name}
          <input name="name" type="text" required autoComplete="name" placeholder={f.namePh} className={field} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-(--secondary-text)">
          {f.email}
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            dir="ltr"
            placeholder="you@example.com"
            className={field}
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium text-(--secondary-text)">
        {f.message}
        <textarea name="message" required rows={5} placeholder={f.messagePh} className={`${field} resize-y`} />
      </label>

      {/* honeypot */}
      <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex cursor-pointer items-center rounded-full px-6 py-3 font-semibold text-black transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
          style={{ background: GRADIENT }}
        >
          {status === "sending" ? f.sending : f.send}
        </button>
        <p role="status" aria-live="polite" className={`text-sm ${status === "error" ? "text-red-400" : "text-[#40ffaa]"}`}>
          {status === "sent" ? f.sent : status === "error" ? f.error : ""}
        </p>
      </div>
    </form>
  );
}
