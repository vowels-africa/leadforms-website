import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = { title: "POPIA Notice — leadforms" };

export default function Popia() {
  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <div className="container">
          <h1>POPIA Notice</h1>
          <span className="legal-updated">Last updated: May 2026</span>
          <div className="legal-prose">
            <p>This notice is provided in terms of <strong>section 18 of the Protection of Personal Information Act 4 of 2013 ("POPIA")</strong>.</p>
            <p>It sets out what personal information we collect from you, why we collect it, who we share it with, and your rights in relation to that information.</p>
            <hr />

            <h2>1. Who is the responsible party?</h2>
            <p>[Operating Entity Name (Pty) Ltd], trading as <strong>leadforms</strong><br />Registration number: [XXXX/XXXXXX/07]<br />Physical address: [Address]<br />Information Officer: [Name]<br />Information Officer email: info-officer@leadforms.co.za</p>

            <h2>2. What personal information do we collect?</h2>
            <p>We collect:</p>
            <ul>
              <li>Your full name</li>
              <li>Your mobile number</li>
              <li>Your email address (where provided)</li>
              <li>Your survey responses</li>
              <li>Your entry and consent preferences</li>
            </ul>
            <p>We also collect technical information when you visit the Platform: IP address, device, and browser type.</p>

            <h2>3. Source of the information</h2>
            <p>We collect this information directly from you when you complete a survey on the Platform or via WhatsApp with our agent Sandy.</p>

            <h2>4. Is providing the information mandatory?</h2>
            <p>Providing your personal information is <strong>voluntary</strong>. However, if you do not provide it, we cannot enter you into a competition or deliver any prize.</p>

            <h2>5. Why do we collect it?</h2>
            <p>We collect your information for these specific, lawful purposes:</p>
            <ul>
              <li>To enter you into the competition you have applied for</li>
              <li>To select, notify, and deliver a prize to the winner</li>
              <li>To send you messages directly related to your entry</li>
              <li>To improve the Platform</li>
              <li><strong>Where you have specifically opted in at entry:</strong> to share your information with a single product partner relevant to the survey topic, who may contact you about product options</li>
            </ul>

            <h2>6. Who do we share it with?</h2>
            <ul>
              <li><strong>Service providers</strong> who help us run the Platform, under written agreements requiring them to protect your information</li>
              <li><strong>A product partner</strong>, only where you have specifically opted in at entry, and only the one partner relevant to the survey topic</li>
              <li><strong>Prize fulfilment partners</strong> where necessary to deliver a prize you have won</li>
              <li><strong>Authorities</strong> where required by law</li>
            </ul>
            <p>We do not sell your personal information.</p>

            <h2>7. Will your information be transferred outside South Africa?</h2>
            <p>Some of our service providers may be located outside South Africa. Where this is the case, we ensure those providers offer a level of protection that is comparable to POPIA, either through the provider's own certified compliance or through binding contractual obligations.</p>

            <h2>8. How long do we keep it?</h2>
            <p>We keep your information only for as long as we need it. The specific retention periods for each category of information are set out in our <Link href="/privacy">Privacy Policy</Link>.</p>

            <h2>9. Your rights under POPIA</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Be told what personal information of yours we hold</li>
              <li>Request a copy of that information</li>
              <li>Have inaccurate information corrected</li>
              <li>Have information we no longer need deleted</li>
              <li>Object to processing for direct marketing</li>
              <li>Withdraw any consent you have given</li>
              <li>Lodge a complaint with the Information Regulator</li>
            </ul>
            <p>To exercise any of these rights, contact our Information Officer at info-officer@leadforms.co.za. We will respond within thirty (30) days.</p>

            <h2>10. Complaints</h2>
            <p>If you are not satisfied with how we have handled your information, you may lodge a complaint with the Information Regulator:</p>
            <p><strong>The Information Regulator (South Africa)</strong><br />JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001<br />Email: enquiries@inforegulator.org.za<br />Complaints email: POPIAComplaints@inforegulator.org.za<br />Website: inforegulator.org.za</p>

            <h2>11. Updates to this notice</h2>
            <p>We may update this notice from time to time. The current version is always published on the Platform.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
