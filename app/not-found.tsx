import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px", textAlign: "center", minHeight: "60vh" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.4, marginBottom: 16 }}>
          404
        </div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 16px" }}>
          Page not found
        </h1>
        <p style={{ fontSize: 15, opacity: 0.55, maxWidth: 380, margin: "0 0 32px", lineHeight: 1.6 }}>
          This page doesn't exist. If you think something is off, contact us.
        </p>
        <Link href="/" style={{ background: "var(--color-midnight)", color: "var(--color-off-white)", fontWeight: 500, fontSize: 14, padding: "11px 18px", borderRadius: 8, display: "inline-block" }}>
          Back to home
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
