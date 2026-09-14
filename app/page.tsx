import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StaticHtmlFrame from "./components/StaticHtmlFrame";

export const metadata: Metadata = {
  title: "Statistics for Data Science",
  description:
    "Eight concepts that build on one another, from summarising a single column of numbers to fitting a line that predicts.",
};

// Header logo is 1200x185 (aspect ratio 185/1200). At the header's 60vw max-width,
// its rendered height is exactly 60vw * 185/1200 = 9.25vw; the content below is
// offset by that plus the header's own vertical padding so it never sits underneath
// the fixed header.
const HEADER_OFFSET = "calc(9.25vw + 20px)";

export default function Home() {
  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 50,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          background: "#fff",
          padding: "10px 0",
        }}
      >
        <Link
          href="/"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "60vw",
            textDecoration: "none",
          }}
        >
          <Image
            src="/image/best-engineering-college-in-Nagpur-1.png"
            alt="Jhulelal Institute of Technology"
            width={1200}
            height={185}
            priority
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </Link>
      </header>
      <div
        style={{
          boxSizing: "border-box",
          width: "100vw",
          height: "100dvh",
          paddingTop: HEADER_OFFSET,
        }}
      >
        <StaticHtmlFrame
          src="/index_landing_page.html"
          title="Statistics for Data Science"
          fill
        />
      </div>
    </>
  );
}
