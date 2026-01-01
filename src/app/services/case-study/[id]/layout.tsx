import type { Metadata } from "next";
import { getCaseStudy } from "@/data/caseStudies";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const caseStudy = getCaseStudy(id);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found - Sandip Pathe",
    };
  }

  return {
    title: `${caseStudy.title} - Case Study | Sandip Pathe`,
    description: caseStudy.challenge,
    openGraph: {
      title: `${caseStudy.title} - Case Study`,
      description: caseStudy.subtitle,
      url: `https://sandippathe.in/services/case-study/${id}`,
      siteName: "Sandip Pathe",
      images: [
        {
          url: caseStudy.image,
          width: 1200,
          height: 1200,
          alt: caseStudy.title,
        },
      ],
    },
    alternates: {
      canonical: `https://sandippathe.in/services/case-study/${id}`,
    },
  };
}

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
