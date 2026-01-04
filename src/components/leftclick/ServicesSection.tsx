import React from "react";
import { SectionLabel } from "./ui/SectionLabel";
import { CheckCircle2 } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  details: string[];
}

const ProcessStepCard: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  details,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full text-xl font-bold">
          {number}
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-700 mb-6 text-lg">{description}</p>
      <ul className="space-y-3">
        {details.map((detail, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  const processSteps = [
    {
      number: "1",
      title: "Free Operational Audit",
      description: "15-minute call to analyze your manual processes",
      details: [
        "Walk us through your current manual process",
        "We identify automation opportunities you might have missed",
        "Get exact time/cost savings estimate (in hours and $)",
        "Receive 1-page analysis - free, no obligation",
      ],
    },
    {
      number: "2",
      title: "Custom Proposal",
      description: "Same-day detailed proposal tailored to your needs",
      details: [
        "Technical approach (exactly how we'll build it)",
        "Integration points with your existing tools",
        "Fixed-price investment (no hourly billing)",
        "ROI projection (when you'll break even)",
      ],
    },
    {
      number: "3",
      title: "Build & Deliver",
      description: "2-4 weeks of development with daily updates",
      details: [
        "Week 1: Core functionality, daily progress updates",
        "Week 2: Integration with your systems",
        "Week 3-4: Refinement and edge case testing",
        "Weekly demos - you see it working, give feedback",
      ],
    },
    {
      number: "4",
      title: "Launch & Support",
      description: "Go live with 2 weeks of free monitoring",
      details: [
        "We fix any issues immediately (4-hour response)",
        "Monitor system performance daily",
        "Optimize based on real usage patterns",
        "Full documentation + team training included",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <SectionLabel number="4" text="How it works" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold tracking-tight mt-6">
            From First Call to Live System in 2-4 Weeks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processSteps.map((step, idx) => (
            <ProcessStepCard key={idx} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};
