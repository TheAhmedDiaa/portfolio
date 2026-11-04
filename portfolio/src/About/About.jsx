import { lazy } from "react";
import SectionTitle from "../Components/SectionTitle";
import BackgroundSection from "../Components/BackgroundSection";
import LazyMount from "../Components/LazyMount";
import useI18n from "../i18n/useI18n";
import useLowPower from "../Components/useLowPower";
import StaticBackdrop from "../Components/StaticBackdrop";

const CrystalizedBall = lazy(() => import("../Backgrounds/CrystalizedBall/CrystalizedBall"));

const linkClass = "text-(--accent) underline-offset-4 hover:text-(--accent-hover) hover:underline";

export default function About() {
  const { c, lang } = useI18n();
  const a = c.about;
  const rtl = lang === "ar";
  const lowPower = useLowPower();
  return (
    <BackgroundSection id="about" placement="left">
      <SectionTitle eyebrow={a.eyebrow} title={a.title} />

      <div className="grid items-center gap-12 md:grid-cols-2">
        <div data-aos={rtl ? "fade-left" : "fade-right"}>
          <p className="text-lg leading-relaxed text-(--secondary-text)">
            {a.p1.map((part, i) =>
              typeof part === "string" ? (
                part
              ) : (
                <a key={i} className={linkClass} href={part.href} target="_blank" rel="noopener noreferrer">
                  {part.text}
                </a>
              ),
            )}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-(--secondary-text)">
            {a.p2}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4">
            {a.stats.map((stat) => (
              <div key={stat.value} className="glass rounded-2xl p-4">
                <dt className="text-2xl font-extrabold text-(--primary-text)">{stat.value}</dt>
                <dd className="mt-1 text-sm text-(--muted-text)">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto w-full max-w-md" data-aos={rtl ? "fade-right" : "fade-left"}>
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0" aria-hidden="true">
              {lowPower ? (
                <StaticBackdrop variant="orb" />
              ) : (
              <LazyMount>
              <CrystalizedBall
                preset="plasma"
                color="#B86BFF"
                size={0.86}
                crackle={0.85}
                fill={0.5}
                interactive
                hoverStrength={0.7}
              />
              </LazyMount>
              )}
            </div>
          </div>
          <p className="mt-2 text-center text-sm text-(--muted-text)">
            {a.hint}
          </p>
        </div>
      </div>
    </BackgroundSection>
  );
}
