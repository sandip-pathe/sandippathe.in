import React from "react";
import { Navbar } from "@/components/leftclick/Navbar";
import { CaseStudyDetail } from "@/components/leftclick/CaseStudyDetail";
import { getCaseStudy } from "@/data/caseStudies";
import { notFound } from "next/navigation";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const caseStudy = getCaseStudy(id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div
      className="min-h-screen bg-white text-black selection:bg-black selection:text-white"
      style={{ fontFamily: "var(--font-inter-tight), sans-serif" }}
    >
      <Navbar />
      <CaseStudyDetail caseStudy={caseStudy} />
    </div>
  );
}
