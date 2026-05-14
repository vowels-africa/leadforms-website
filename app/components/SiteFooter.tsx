import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <span>© leadforms 2026</span>
        <nav className="footer-links">
          <Link href="/competition-terms">Competition T&Cs</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/popia">POPIA</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
