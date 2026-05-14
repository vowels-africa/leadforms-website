import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="leadforms home">
          <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
            <path d="M5 7 L33 7 Q37 7 37 11 L37 16 Q33 16 33 20 Q33 24 37 24 L37 29 Q37 33 33 33 L5 33 Q1 33 1 29 L1 24 Q5 24 5 20 Q5 16 1 16 L1 11 Q1 7 5 7 Z" fill="#0E1B2E"/>
            <circle cx="12" cy="20" r="2.2" fill="#D4F542"/>
            <circle cx="19" cy="20" r="2.2" fill="#D4F542"/>
            <circle cx="26" cy="20" r="2.2" fill="#D4F542"/>
          </svg>
          <span className="brand-text">leadforms</span>
        </Link>
        <nav className="nav-links">
          <Link href="/#competitions">Competitions</Link>
          <Link href="/#how">How it works</Link>
          <Link href="/#competitions" className="btn btn-midnight">Enter now</Link>
        </nav>
      </div>
    </header>
  );
}
