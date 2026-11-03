export default function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center" data-aos="fade-up">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-(--accent)">{eyebrow}</p>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {children && <p className="mt-3 text-(--secondary-text)">{children}</p>}
    </div>
  );
}
