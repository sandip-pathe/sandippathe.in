import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Automation Services - Sandip Pathe | Document Processing, Compliance & Data Quality",
  description:
    "Custom automation solutions for Series A/B/C tech companies. Automate document processing, compliance monitoring, and data quality pipelines. Built in 2-4 weeks, save 100-200 hours/month.",
  keywords: [
    "automation services",
    "document processing automation",
    "compliance automation",
    "data quality automation",
    "fintech automation",
    "legal tech automation",
    "health tech automation",
    "workflow automation",
    "business process automation",
    "AI automation services Mumbai",
    "Sandip Pathe automation",
  ],
  openGraph: {
    title: "Automation Services - Sandip Pathe",
    description:
      "Custom automation solutions for tech companies. Automate document processing, compliance, and data quality. Save 100-200 hours/month.",
    url: "https://sandippathe.in/services",
    siteName: "Sandip Pathe",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://sandippathe.in/services-og.webp",
        width: 1200,
        height: 630,
        alt: "Automation Services by Sandip Pathe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation Services - Sandip Pathe",
    description:
      "Custom automation for document processing, compliance, and data quality. Built for tech companies.",
    creator: "@sandip_pathe26",
    images: ["https://sandippathe.in/services-og.webp"],
  },
  alternates: {
    canonical: "https://sandippathe.in/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
