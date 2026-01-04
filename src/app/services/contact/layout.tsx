import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call - Automation Services | Sandip Pathe",
  description:
    "Book a free 15-minute operational audit. We'll review your workflow, identify automation opportunities, and show you what we can build for you.",
  openGraph: {
    title: "Book a Call - Automation Services",
    description:
      "Free 15-minute operational audit to identify automation opportunities in your workflow.",
    url: "https://sandippathe.in/services/contact",
    siteName: "Sandip Pathe",
  },
  alternates: {
    canonical: "https://sandippathe.in/services/contact",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
