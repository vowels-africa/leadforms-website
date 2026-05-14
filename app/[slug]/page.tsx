import { notFound } from "next/navigation";
import TallyEmbed from "../components/TallyEmbed";

const competitions: Record<string, { title: string; formId: string }> = {
  "car-insurance":  { title: "Car insurance",     formId: "aQK8WE" },
  "life-insurance": { title: "Life insurance",     formId: "aQK8WE" },
  "health-cover":   { title: "Health & gap cover", formId: "aQK8WE" },
  "funeral-cover":  { title: "Funeral cover",      formId: "aQK8WE" },
  "cell-contracts": { title: "Cell contracts",     formId: "aQK8WE" },
  "banking":        { title: "Banking",            formId: "aQK8WE" },
};

export function generateStaticParams() {
  return Object.keys(competitions).map((slug) => ({ slug }));
}

export default async function CompetitionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const competition = competitions[slug];

  if (!competition) notFound();

  return (
    <main>
      <TallyEmbed formId={competition.formId} title={competition.title} />
    </main>
  );
}
