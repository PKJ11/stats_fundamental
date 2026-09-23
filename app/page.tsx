import type { Metadata } from "next";
import StaticHtmlFrame from "./components/StaticHtmlFrame";

export const metadata: Metadata = {
  title: "Statistics for Data Science",
  description:
    "Eight concepts that build on one another, from summarising a single column of numbers to fitting a line that predicts.",
};

export default function Home() {
  return (
    <StaticHtmlFrame
      src="/index_landing_page.html"
      title="Statistics for Data Science"
    />
  );
}
