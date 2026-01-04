import React from "react";
import { SectionLabel } from "./ui/SectionLabel";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface CaseStudyProps {
  title: string;
  subtitle: string;
  image: string;
  slug: string;
  investment: string;
  timeline: string;
  roi: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({
  title,
  subtitle,
  image,
  slug,
  investment,
  timeline,
  roi,
}) => {
  return (
    <Link
      href={`/services/case-study/${slug}`}
      className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300 block"
    >
      <div className="aspect-[4/3] w-full overflow-hidden relative bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Floating Arrow Button */}
        <div className="absolute bottom-6 right-6 z-20">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 hover:scale-110">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{subtitle}</p>

        <div className="flex flex-wrap gap-2 text-sm">
          <span className="bg-gray-100 px-3 py-1 rounded-full">
            <span className="font-medium">Investment:</span> {investment}
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">
            <span className="font-medium">Timeline:</span> {timeline}
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">
            <span className="font-medium">ROI:</span> {roi}
          </span>
        </div>
      </div>
    </Link>
  );
};

export const CaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      title: "Document Processing Automation",
      subtitle: "90% automation in under 2 hours. Freed up 160 hours/month.",
      slug: "document-processing",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
      investment: "$3,000 - $8,000",
      timeline: "3-4 weeks",
      roi: "2-4 months",
    },
    {
      title: "Compliance Monitoring & Alerting",
      subtitle:
        "Zero violations in 6 months. Passed RBI audit with zero findings.",
      slug: "compliance-monitoring",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      investment: "$2,000 - $5,000",
      timeline: "2-3 weeks",
      roi: "1-2 months",
    },
    {
      title: "Data Quality Pipelines",
      subtitle: "Data quality score went from 60% → 95% in 2 weeks.",
      slug: "data-quality",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      investment: "$1,500 - $4,000",
      timeline: "2 weeks",
      roi: "1-3 months",
    },
  ];

  return (
    <section id="case-studies" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <SectionLabel number="2" text="Case Studies" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold tracking-tight mt-6">
            What We Build for Companies Like Yours
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};
