"use client";

import React from "react";
import { SectionLabel } from "./ui/SectionLabel";
import { Check, ChevronDown } from "lucide-react";
import { useCurrencyDetection } from "@/hooks/useCurrencyDetection";
import { formatPriceRange, formatMonthlyPrice } from "@/utils/pricing";

interface PricingSolutionProps {
  title: string;
  investment: string;
  timeline: string;
  roi: string;
}

const PricingCard: React.FC<PricingSolutionProps> = ({
  title,
  investment,
  timeline,
  roi,
}) => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-black transition-colors duration-300">
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      <div className="space-y-4 mb-6">
        <div>
          <div className="text-sm text-gray-600 mb-1">Investment</div>
          <div className="text-3xl font-bold">{investment}</div>
        </div>
        <div className="flex gap-8">
          <div>
            <div className="text-sm text-gray-600 mb-1">Timeline</div>
            <div className="text-lg font-semibold">{timeline}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Typical ROI</div>
            <div className="text-lg font-semibold">{roi}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PricingSection: React.FC = () => {
  const currency = useCurrencyDetection();

  const solutions = [
    {
      title: "Document Processing Automation",
      investment: formatPriceRange(3000, 8000, currency),
      timeline: "3-4 weeks",
      roi: "2-4 months",
    },
    {
      title: "Compliance Monitoring System",
      investment: formatPriceRange(2000, 5000, currency),
      timeline: "2-3 weeks",
      roi: "1-2 months",
    },
    {
      title: "Data Quality Pipeline",
      investment: formatPriceRange(1500, 4000, currency),
      timeline: "2 weeks",
      roi: "1-3 months",
    },
  ];

  const included = [
    "Custom pipeline built for your specific use case",
    "Integration with your existing tools (Salesforce, Notion, Slack, etc.)",
    "Error handling & validation rules",
    "Monitoring dashboard",
    "API documentation + team training",
    "2 weeks free support after launch",
    "You own the source code (zero lock-in)",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <SectionLabel number="5" text="Pricing" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold tracking-tight mt-6">
            Simple, Transparent Investment
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl">
            Fixed-price projects. No hourly billing. No surprise charges. You
            know exactly what you're paying before we write a single line of
            code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, idx) => (
            <PricingCard key={idx} {...solution} />
          ))}
        </div>

        <details className="border-b border-gray-200 pb-8">
          <summary className="cursor-pointer flex items-center justify-between py-6 hover:opacity-70 transition-opacity group">
            <h3 className="text-2xl md:text-3xl font-semibold">
              What's Included in Every Project
            </h3>
            <ChevronDown className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" />
          </summary>
          <div className="pt-4 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {included.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-lg">
                <span className="font-semibold">Optional Maintenance:</span>{" "}
                {currency === "INR"
                  ? "₹30K-₹1L/month"
                  : formatPriceRange(300, 1000, currency) + "/month"}
              </p>
              <p className="text-gray-600 mt-2">
                Includes: monitoring, updates, optimization, priority support
                (24-hour response time)
              </p>
            </div>
          </div>
        </details>

        <details className="mt-8 border-b border-gray-200 pb-8">
          <summary className="cursor-pointer flex items-center justify-between py-6 hover:opacity-70 transition-opacity group">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Why This Investment Makes Sense
            </h3>
            <ChevronDown className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" />
          </summary>
          <div className="pt-4 pb-8">
            <div className="bg-black text-white rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-300">
                    Hiring 2 operations people:
                  </h4>
                  <p className="text-gray-400">
                    {currency === "INR" ? "₹12-20L" : "$12,000-20,000"}/year +
                    benefits + recruiting costs + management overhead + they
                    take sick leave
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-300">
                    This automation:
                  </h4>
                  <p className="text-gray-400">
                    {formatPriceRange(2000, 8000, currency)} one-time investment
                    + works 24/7 + never takes leave + scales infinitely + no
                    management overhead
                  </p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-white/10 rounded-xl">
                <h4 className="text-lg font-semibold mb-3">
                  Example ROI Calculation
                </h4>
                <p className="text-gray-300">
                  If your team wastes 150 hours/month at{" "}
                  {currency === "INR" ? "₹5,000" : "$60"}/hour ={" "}
                  {currency === "INR" ? "₹7.5L" : "$9,000"}/year in wasted
                  productivity
                </p>
                <p className="text-gray-300 mt-2">
                  Investment: {currency === "INR" ? "₹5L" : "$5,000"} one-time •
                  Break-even: 8 months • Year 2 savings:
                  {currency === "INR" ? "₹7.5L" : "$9,000"} (pure profit)
                </p>
              </div>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
};
