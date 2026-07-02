import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = { title: "Competition T&Cs — leadforms" };

export default function CompetitionTerms() {
  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <div className="container">
          <h1>Competition Terms and Conditions</h1>
          <span className="legal-updated">Last updated: July 2026</span>
          <div className="legal-prose">
            <p>These terms govern all promotional competitions run on <strong>leadforms.co.za</strong> (the "Platform"), operated by <strong>Ryyva (Pty) Ltd</strong>, trading as leadforms ("we", "us", "the Promoter").</p>
            <p>By entering any competition on the Platform, you agree to be bound by these terms together with any specific terms that apply to the individual competition you have entered.</p>
            <p>These terms comply with section 36 of the Consumer Protection Act 68 of 2008 ("CPA") and the regulations published thereunder.</p>
            <hr />

            <h2>1. The Promoter</h2>
            <p>Ryyva (Pty) Ltd, trading as leadforms<br />Registration number: 2026/310716/07<br />Physical address: 2nd Floor, Clocktower Retail Centre, V&amp;A Waterfront, Cape Town, 8000<br />Email: hello@leadforms.co.za</p>

            <h2>2. Eligibility</h2>
            <p>Competitions are open to natural persons who are:</p>
            <ul>
              <li>Eighteen (18) years of age or older</li>
              <li>Resident in the Republic of South Africa</li>
              <li>In possession of a valid South African identity number or passport</li>
              <li>Not employees, directors, agents, or service providers of the Promoter, its parent, subsidiaries, affiliates, or sponsors of the competition, nor immediate family members of any of the above</li>
            </ul>

            <h2>3. How to enter</h2>
            <p>Entry is free. No purchase is required to enter, to win, or to claim a prize.</p>
            <p>To enter, you must:</p>
            <ol>
              <li>Complete one of the surveys made available on the Platform</li>
              <li>Answer the survey questions truthfully and in full</li>
              <li>Provide your name, mobile number, and any other entry information requested</li>
              <li>Tick the consent box confirming that you are 18 or older, that you are resident in South Africa, and that you accept these terms and the Privacy Policy</li>
            </ol>
            <p>Ticking the consent box is required to enter. It is the affirmative act by which you accept these terms, including the provisions on partner contact set out in clause 9.</p>
            <p>You may enter each unique competition once per calendar month. Multiple entries from the same person within a single competition period will result in disqualification of all entries from that person.</p>

            <h2>4. Competition period</h2>
            <p>Each competition runs from the first day of a calendar month at 00:00 (SAST) until the last day of that month at 23:59 (SAST), unless a different period is specified for that competition on the Platform.</p>

            <h2>5. Selection of the winner</h2>
            <p>One (1) winner per competition is selected by random draw on the <strong>last Friday of the month following the competition period</strong>.</p>
            <p>The draw is conducted electronically using a random selection process applied to the pool of qualifying entries. The selection is conducted by an independent person who is not involved in the day-to-day administration of the competition, in accordance with the CPA regulations.</p>

            <h2>6. The prize</h2>
            <p>The prize for each competition is described on the Platform at the time of entry.</p>
            <p>Prizes are not transferable and cannot be exchanged for cash or for any other prize, except where the Promoter elects to pay a prize as a cash amount, in which case that cash amount is the full and final prize.</p>
            <p>The Promoter reserves the right to substitute the prize for a comparable prize of equal or greater value should the original prize become unavailable for reasons beyond the Promoter's reasonable control.</p>

            <h2>7. Notification and collection</h2>
            <p>The winner will be notified within seven (7) days of the draw, via the contact details provided at entry. The winner's name will also be published on the Platform.</p>
            <p>To claim the prize, the winner must:</p>
            <ul>
              <li>Provide a copy of their valid South African identity document or passport</li>
              <li>Confirm acceptance of the prize in writing</li>
              <li>Do so within thirty (30) days of notification</li>
            </ul>
            <p>If the winner cannot be reached, fails to claim the prize, or fails to provide proof of identity within this period, the prize is forfeited and a new winner may be drawn at the Promoter's discretion.</p>

            <h2>8. Publicity</h2>
            <p>By entering the competition, the winner agrees that their first name, surname initial, city of residence, and (with separate consent) a photograph may be published on the Platform and on the Promoter's social media channels for the purpose of announcing the result.</p>
            <p>A winner may elect to remain anonymous in any public announcement by informing the Promoter in writing at the time of claiming the prize.</p>

            <h2>9. Personal information and partner contact</h2>
            <p>The personal information you provide on entry will be processed in accordance with the <Link href="/privacy">Privacy Policy</Link> and <Link href="/popia">POPIA Notice</Link> published on the Platform.</p>
            <p>When you tick the consent box to enter (clause 3), you consent to the Promoter sharing your details with a single product partner relevant to the topic of the survey you completed, so that the partner may contact you about relevant product options. The partner shared with you will always be relevant to the survey topic — for example, a life insurance survey may result in contact from a life insurance provider.</p>
            <p>You may withdraw this consent at any time, at no cost, by:</p>
            <ul>
              <li>Replying STOP to any message you receive, or</li>
              <li>Emailing info-officer@leadforms.co.za</li>
            </ul>
            <p>Withdrawing consent does not affect your entry into the draw. Your survey answers, including any timing and budget information you provide, form part of the information shared with the partner.</p>

            <h2>10. Disqualification</h2>
            <p>The Promoter reserves the right to disqualify any entry that is:</p>
            <ul>
              <li>Incomplete or inaccurate</li>
              <li>Fraudulent or made on behalf of another person without that person's authority</li>
              <li>Generated by automated means</li>
              <li>Otherwise in breach of these terms</li>
            </ul>

            <h2>11. Limitation of liability</h2>
            <p>To the maximum extent permitted by law, the Promoter, its directors, employees, and agents will not be liable for any loss, damage, cost, or expense suffered or incurred by any entrant arising out of or in connection with the competition or any prize, except where such liability cannot be excluded under the CPA.</p>
            <p>The Promoter is not responsible for prize-related issues, including defects in the prize, once the prize has been delivered to the winner.</p>

            <h2>12. Tax</h2>
            <p>Where any prize triggers a tax liability for the winner, that liability is the responsibility of the winner.</p>

            <h2>13. Disputes</h2>
            <p>Any dispute relating to a competition that cannot be resolved directly with the Promoter may be referred to the Consumer Goods and Services Ombud or to the National Consumer Commission.</p>

            <h2>14. Governing law</h2>
            <p>These terms are governed by the laws of the Republic of South Africa.</p>

            <h2>15. Amendments</h2>
            <p>The Promoter may amend these terms from time to time. The current version applies to all competitions and is always available on the Platform.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
