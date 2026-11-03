export default function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--footer-background) px-6 py-8 text-center text-sm text-(--muted-text) backdrop-blur-md">
      <p>
        © {new Date().getFullYear()} Ahmed Diaa El-Deen · Built with React, Vite &amp; Tailwind CSS
      </p>
      <p className="mt-1">
        <a className="text-(--accent) hover:text-(--accent-hover)" href="#hero">
          Back to top ↑
        </a>
      </p>
    </footer>
  );
}
