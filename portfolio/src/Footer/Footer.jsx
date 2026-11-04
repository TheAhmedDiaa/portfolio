import useI18n from "../i18n/useI18n";

export default function Footer() {
  const { c } = useI18n();
  const f = c.footer;
  return (
    <footer className="border-t border-(--border) bg-(--footer-background) px-6 py-8 text-center text-sm text-(--muted-text) backdrop-blur-md">
      <p>
        © {new Date().getFullYear()} {f.name} · {f.built}
      </p>
      <p className="mt-1">
        <a className="text-(--accent) hover:text-(--accent-hover)" href="#hero">
          {f.top}
        </a>
      </p>
    </footer>
  );
}
