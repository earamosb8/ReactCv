export default function Footer() {
  return (
    <footer className="mt-8 py-4">
      <p className="text-[9px] uppercase tracking-[3px] text-zinc-800 font-mono">
        © {new Date().getFullYear()} Eduardo Ramos — Minimal Architecture
      </p>
    </footer>
  );
}
