// Cheap CSS-only stand-in for the animated GPU backgrounds (no canvas, no JS loop).
const VARIANTS = {
  shards:
    "radial-gradient(ellipse at 20% 30%, rgba(137,106,189,0.45), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(168,85,247,0.35), transparent 55%)",
  topo:
    "radial-gradient(ellipse at 50% 100%, rgba(79,124,255,0.35), transparent 60%), repeating-linear-gradient(180deg, rgba(79,124,255,0.10) 0 1px, transparent 1px 28px)",
  threads:
    "radial-gradient(ellipse at 30% 20%, rgba(100,39,200,0.45), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(64,121,255,0.25), transparent 55%)",
  orb: "radial-gradient(circle at 50% 50%, rgba(184,107,255,0.55), rgba(184,107,255,0.15) 45%, transparent 68%)",
};

export default function StaticBackdrop({ variant = "shards" }) {
  return <div className="h-full w-full" aria-hidden="true" style={{ background: VARIANTS[variant] }} />;
}
