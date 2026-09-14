import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StaticHtmlFrame from "../../components/StaticHtmlFrame";

const TITLES: Record<string, string> = {
  "1": "Measures of Central Tendency and Spread",
  "2": "Probability Distributions",
  "3": "The Central Limit Theorem",
  "4": "Sampling and Sampling Distributions",
  "5": "Hypothesis Testing",
  "6": "Shape, Quartiles and Unusual Values",
  "7": "Correlation",
  "8": "Simple Linear Regression",
};

export function generateStaticParams() {
  return Object.keys(TITLES).map((id) => ({ id }));
}

export async function generateMetadata(
  props: PageProps<"/concept/[id]">
): Promise<Metadata> {
  const { id } = await props.params;
  const title = TITLES[id];
  return { title: title ? `Concept ${id} · ${title}` : "Concept not found" };
}

export default async function ConceptPage(props: PageProps<"/concept/[id]">) {
  const { id } = await props.params;
  const title = TITLES[id];
  if (!title) notFound();

  return <StaticHtmlFrame src={`/index_${id}.html`} title={title} />;
}
