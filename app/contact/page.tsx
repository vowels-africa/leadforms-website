import type { Metadata } from "next";
import TallyEmbed from "../components/TallyEmbed";

export const metadata: Metadata = { title: "Contact — leadforms" };

export default function ContactPage() {
  return (
    <main>
      <TallyEmbed formId="449QX5" title="Contact" />
    </main>
  );
}
