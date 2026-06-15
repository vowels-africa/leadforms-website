import Link from "next/link";
import AnchorLink from "./components/AnchorLink";
import SiteFooter from "./components/SiteFooter";
import MonthlyEntries from "./components/MonthlyEntries";

export default function Home() {
  return (
    <>
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
            <AnchorLink href="#competitions">Competitions</AnchorLink>
            {/* <AnchorLink href="#winners">Winners</AnchorLink> */}
            <AnchorLink href="#how">How it works</AnchorLink>
            <AnchorLink href="#competitions" className="btn btn-midnight">Enter now</AnchorLink>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" />
            9 competitions running right now
          </div>
          <h1>Every form is a<br />chance to <span className="lime-highlight">win.</span></h1>
          <p>Answer five quick questions on the topics you care about. Get entered into a real prize draw, themed to the survey. No catch.</p>
          <div className="hero-ctas">
            <AnchorLink href="#competitions" className="btn btn-midnight">
              See active competitions
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </AnchorLink>
            <AnchorLink href="#how" className="btn btn-outline">How it works</AnchorLink>
          </div>
        </div>
      </section>

      <section className="competitions" id="competitions">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow-lime">Running this month</div>
              <h2>Pick a competition. Answer. Enter.</h2>
            </div>
            <div className="section-meta">Drawn last Friday of every month</div>
          </div>

          <div className="competition-grid">

            <Link href="https://submit.leadforms.co.za/car-insurance" className="competition-card" target="_blank" rel="noopener noreferrer">
              <div className="card-head">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 17h-2v-6l1.5-4.5a1.5 1.5 0 0 1 1.4-1H17a1.5 1.5 0 0 1 1.4 1l1.6 4.5v6h-2"/>
                  <circle cx="7" cy="17" r="2"/>
                  <circle cx="17" cy="17" r="2"/>
                  <path d="M5 12h14"/>
                </svg>
                <span className="card-status">Live</span>
              </div>
              <div className="card-prize">R500</div>
              <div className="card-prize-label">Fuel card</div>
              <div className="card-meta">Car insurance · 90 seconds</div>
            </Link>

            <Link href="https://submit.leadforms.co.za/life-insurance" className="competition-card" target="_blank" rel="noopener noreferrer">
              <div className="card-head">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l8 4v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z"/>
                </svg>
                <span className="card-status">Live</span>
              </div>
              <div className="card-prize">R1 000</div>
              <div className="card-prize-label">Grocery voucher</div>
              <div className="card-meta">Life insurance · 90 seconds</div>
            </Link>

            <Link href="https://submit.leadforms.co.za/health-cover" className="competition-card" target="_blank" rel="noopener noreferrer">
              <div className="card-head">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 4v6a4 4 0 0 0 8 0V4"/>
                  <path d="M8 2v2M12 2v2"/>
                  <circle cx="18" cy="16" r="3"/>
                  <path d="M10 14v2a3 3 0 0 0 3 3h2"/>
                </svg>
                <span className="card-status ending">Ending soon</span>
              </div>
              <div className="card-prize">R1 000</div>
              <div className="card-prize-label">Wellness voucher</div>
              <div className="card-meta">Health &amp; gap cover · 90 seconds</div>
            </Link>

            <Link href="https://submit.leadforms.co.za/funeral-cover" className="competition-card" target="_blank" rel="noopener noreferrer">
              <div className="card-head">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="9" cy="9" r="3"/>
                  <circle cx="17" cy="11" r="2.5"/>
                  <path d="M3 19v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1"/>
                  <path d="M15 19v-1a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v1"/>
                </svg>
                <span className="card-status">Live</span>
              </div>
              <div className="card-prize">R800</div>
              <div className="card-prize-label">Restaurant voucher</div>
              <div className="card-meta">Funeral cover · 90 seconds</div>
            </Link>

            <Link href="https://submit.leadforms.co.za/cell-contracts" className="competition-card" target="_blank" rel="noopener noreferrer">
              <div className="card-head">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="7" y="2" width="10" height="20" rx="2"/>
                  <line x1="11" y1="18" x2="13" y2="18"/>
                </svg>
                <span className="card-status">Live</span>
              </div>
              <div className="card-prize">R500</div>
              <div className="card-prize-label">Data vouchers</div>
              <div className="card-meta">Cell contracts · 90 seconds</div>
            </Link>

            <Link href="https://submit.leadforms.co.za/banking" className="competition-card" target="_blank" rel="noopener noreferrer">
              <div className="card-head">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="6" width="20" height="12" rx="2"/>
                  <line x1="2" y1="10" x2="22" y2="10"/>
                  <line x1="6" y1="14" x2="9" y2="14"/>
                </svg>
                <span className="card-status">Live</span>
              </div>
              <div className="card-prize">R500</div>
              <div className="card-prize-label">Retail gift card</div>
              <div className="card-meta">Banking · 90 seconds</div>
            </Link>

            <Link href="https://submit.leadforms.co.za/retirement-savings" className="competition-card" target="_blank" rel="noopener noreferrer">
              <div className="card-head">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2a7 7 0 0 1 7 7c0 4-3 7-7 9-4-2-7-5-7-9a7 7 0 0 1 7-7z"/>
                  <path d="M12 6v4l2.5 2.5"/>
                </svg>
                <span className="card-status new">New</span>
              </div>
              <div className="card-prize">R1 000</div>
              <div className="card-prize-label">Toward your savings</div>
              <div className="card-meta">Retirement &amp; savings · 90 seconds</div>
            </Link>

            <Link href="https://submit.leadforms.co.za/investment" className="competition-card" target="_blank" rel="noopener noreferrer">
              <div className="card-head">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                  <polyline points="16 7 22 7 22 13"/>
                </svg>
                <span className="card-status new">New</span>
              </div>
              <div className="card-prize">R1 000</div>
              <div className="card-prize-label">To grow</div>
              <div className="card-meta">Investment products · 90 seconds</div>
            </Link>

            <Link href="https://submit.leadforms.co.za/trading" className="competition-card" target="_blank" rel="noopener noreferrer">
              <div className="card-head">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                  <polyline points="7 10 10 7 13 10 17 6"/>
                </svg>
                <span className="card-status new">New</span>
              </div>
              <div className="card-prize">R1 000</div>
              <div className="card-prize-label">Cash</div>
              <div className="card-meta">Trading platform · 90 seconds</div>
            </Link>

          </div>
        </div>
      </section>

      <section className="how" id="how">
        <div className="container">
          <div className="how-header">
            <div className="how-eyebrow">How it works</div>
            <h2>Three steps. One chance to win.</h2>
          </div>
          <div className="how-grid">
            <div className="how-step">
              <div className="step-num">1</div>
              <h3 className="step-title">Pick a competition</h3>
              <p className="step-body">Choose a prize that fits your life — fuel, groceries, data, wellness.</p>
            </div>
            <div className="how-step">
              <div className="step-num">2</div>
              <h3 className="step-title">Answer 5 questions</h3>
              <p className="step-body">90 seconds. Right here on the web.</p>
            </div>
            <div className="how-step">
              <div className="step-num">3</div>
              <h3 className="step-title">You&apos;re in the draw</h3>
              <p className="step-body">One winner per competition, drawn the last Friday of every month.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container">
          <div className="trust-row">
            <div className="trust-stat">
              <div className="trust-num"><MonthlyEntries /></div>
              <div className="trust-label">Entries this month</div>
            </div>
            <div className="trust-divider" />
            <div className="trust-stat">
              <div className="trust-num">R 38 400</div>
              <div className="trust-label">Prizes paid out</div>
            </div>
            <div className="trust-divider" />
            <div className="trust-stat">
              <div className="trust-num">POPIA</div>
              <div className="trust-label">Compliant</div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
