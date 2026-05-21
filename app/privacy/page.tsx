import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = { title: "Privacy Policy — leadforms" };

export default function Privacy() {
  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <div className="container">
          <h1>Privacy Policy</h1>
          <span className="legal-updated">Last updated: May 2026</span>
          <div className="legal-prose">
            <p>This Privacy Policy explains how <strong>leadforms</strong> ("we", "us", "the Platform") collects, uses, and protects your personal information.</p>
            <p>We respect your privacy and comply with the Protection of Personal Information Act 4 of 2013 ("POPIA").</p>
            <hr />

            <h2>1. Who we are</h2>
            <p>leadforms is operated by <strong>RYYVA (Pty) Ltd</strong>.<br />Registration number: 2026/310716/07<br />Physical address: 2nd Floor, Clocktower Retail Centre, V&amp;A Waterfront, Cape Town, 8000<br />Email: hello@leadforms.co.za</p>
            <p>Our Information Officer can be contacted at info-officer@leadforms.co.za.</p>

            <h2>2. What information we collect</h2>
            <p><strong>Information you provide directly:</strong></p>
            <ul>
              <li>Your full name</li>
              <li>Your mobile number</li>
              <li>Your email address (where provided)</li>
              <li>Your survey responses</li>
              <li>Your competition entry preferences, including whether you have opted in to be contacted by a product partner</li>
            </ul>
            <p><strong>Information collected automatically when you use the Platform:</strong></p>
            <ul>
              <li>Your IP address</li>
              <li>The browser and device you use</li>
              <li>The pages you visit and how you interact with them</li>
              <li>Cookies and similar technologies (see section 8)</li>
            </ul>

            <h2>3. How we collect it</h2>
            <p>We collect your information directly from you when you:</p>
            <ul>
              <li>Complete a survey on the Platform</li>
              <li>Engage with Sandy, our WhatsApp Agent</li>
              <li>Contact us by email or via our contact form</li>
            </ul>
            <p>Technical information is collected automatically when you visit the Platform.</p>

            <h2>4. Why we collect it</h2>
            <p>We process your personal information for these specific purposes:</p>
            <ul>
              <li>To enter you into the competition you have applied for</li>
              <li>To administer the competition, including selecting and notifying the winner</li>
              <li>To deliver any prize you may win</li>
              <li>To send you transactional messages directly relating to your entry</li>
              <li>To improve the Platform and our service</li>
              <li>To comply with our legal obligations</li>
              <li><strong>Where you have specifically opted in:</strong> to share your information with a single product partner relevant to the topic of the survey, who may contact you with product options</li>
            </ul>
            <p>We do not use your information for any other purpose without your consent.</p>

            <h2>5. Who we share it with</h2>
            <p>We share your information only with:</p>
            <ul>
              <li><strong>Service providers</strong> who help us run the Platform — including hosting, communications, and analytics providers. These providers process information on our behalf under written agreements that require them to protect it.</li>
              <li><strong>A product partner</strong>, only where you have specifically opted in at entry. The partner shared with you will be relevant to the topic of the survey. You will be told at the point of entry what category of partner this is.</li>
              <li><strong>Prize fulfilment partners</strong> where necessary to deliver a prize you have won.</li>
              <li><strong>Authorities</strong> where we are required to do so by law.</li>
            </ul>
            <p><strong>We do not sell your personal information.</strong></p>

            <h2>6. How long we keep it</h2>
            <ul>
              <li><strong>Entry information</strong> is retained for the duration of the competition plus six (6) months</li>
              <li><strong>Information shared with a product partner</strong>, with your consent, is retained by us for twelve (12) months from the date of consent, after which we anonymise it</li>
              <li><strong>Information required for legal or accounting purposes</strong> is retained for the period required by law</li>
            </ul>
            <p>You may request earlier deletion at any time (see section 7).</p>

            <h2>7. Your rights</h2>
            <p>Under POPIA, you have the right to:</p>
            <ul>
              <li>Be told what personal information of yours we hold</li>
              <li>Request a copy of that information</li>
              <li>Request that we correct or update inaccurate information</li>
              <li>Request that we delete information we no longer need</li>
              <li>Object to the processing of your information for direct marketing</li>
              <li>Withdraw any consent you have given</li>
              <li>Lodge a complaint with the Information Regulator</li>
            </ul>
            <p>To exercise any of these rights, contact us at info-officer@leadforms.co.za. We will respond within thirty (30) days.</p>
            <p>You can also lodge a complaint with the Information Regulator of South Africa:</p>
            <p><strong>The Information Regulator (South Africa)</strong><br />JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001<br />Email: enquiries@inforegulator.org.za<br />Complaints email: POPIAComplaints@inforegulator.org.za</p>

            <h2>8. Cookies</h2>
            <p>The Platform uses cookies to remember your preferences, measure how the Platform is used, and improve performance. You can disable cookies in your browser at any time, though some features of the Platform may not work without them.</p>

            <h2>9. Security</h2>
            <p>We take reasonable technical and organisational measures to protect your personal information from unauthorised access, loss, or misuse — including encryption in transit and access controls on stored data. No system is perfectly secure, but we work to keep yours safe.</p>

            <h2>10. Cross-border transfers</h2>
            <p>Where any of our service providers are located outside South Africa, we ensure that an adequate level of protection applies to your information, either through the provider's own certified compliance or through binding contractual obligations.</p>

            <h2>11. Changes to this policy</h2>
            <p>We may update this Privacy Policy from time to time. The current version is always available on the Platform.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
