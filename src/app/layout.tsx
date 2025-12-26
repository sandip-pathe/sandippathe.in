import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sandippathe.in"),
  title: "Sandip Pathe | AI Engineer & Founder - Building Durable AI Workflows",
  description:
    "Sandip Pathe is a software engineer and founder building AI orchestration systems for legal tech, research platforms, and healthcare. Based in Mumbai, India.",
  keywords: [
    "Sandip Pathe",
    "Sandip Pathe software engineer",
    "Sandip Pathe AI",
    "Sandip Pathe founder",
    "AI workflow engineer",
    "Full-Stack Engineer Mumbai",
    "Legal AI startup",
    "AI orchestration",
    "Durable workflows",
  ],
  authors: [{ name: "Sandip Pathe", url: "https://sandippathe.in" }],
  creator: "Sandip Pathe",
  publisher: "Sandip Pathe",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Sandip Pathe | AI Engineer & Founder",
    description:
      "Software engineer and founder building AI orchestration systems. I design and run AI workflows for systems that can't afford to break.",
    url: "https://sandippathe.in",
    siteName: "Sandip Pathe",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://sandippathe.in/og.webp",
        width: 1200,
        height: 630,
        alt: "Sandip Pathe - AI Engineer & Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandip Pathe | AI Engineer & Founder",
    description:
      "Software engineer building AI orchestration systems for legal tech and healthcare.",
    creator: "@sandippathe",
    images: ["https://sandippathe.in/og.webp"],
  },
  alternates: {
    canonical: "https://sandippathe.in",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sandip Pathe",
  url: "https://sandippathe.in",
  image: "https://sandippathe.in/profile.webp",
  sameAs: [
    "https://www.linkedin.com/in/sandippathe",
    "https://github.com/sandip-pathe",
    "https://x.com/sandip_pathe26",
  ],
  jobTitle: "Founder & Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Anaya (Legal AI Startup)",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "VIT Mumbai",
  },
  knowsAbout: [
    "AI Orchestration",
    "Durable Workflows",
    "Full-Stack Development",
    "LangChain",
    "React",
    "Next.js",
    "FastAPI",
  ],
  description:
    "Software engineer and founder building AI orchestration systems for legal tech, research platforms, and healthcare. Based in Mumbai, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
