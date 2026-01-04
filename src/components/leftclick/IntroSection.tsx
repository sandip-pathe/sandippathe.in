"use client";

import React from "react";
import { SectionLabel } from "./ui/SectionLabel";

export const IntroSection: React.FC = () => {
  const problems = [
    {
      stat: "200+ hours/month",
      title:
        "Average time Series A companies waste on manual document processing",
      impact:
        "$9,600-$14,400/year in wasted productivity at $60/hour engineer time",
    },
    {
      stat: "$60,000 - $240,000",
      title:
        "Potential cost of a compliance violation or missed regulatory deadline",
      impact: "Automated monitoring pays for itself with one avoided incident",
    },
    {
      stat: "30-40%",
      title:
        "Of operational time spent fixing data quality issues (duplicates, wrong formats, missing fields)",
      impact: "Product delays, customer complaints, sales friction",
    },
  ];

  return (
    <section id="intro" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <SectionLabel number="1" text="Introducing the Problem" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold tracking-tight max-w-4xl mt-6">
            The Hidden Cost of Manual Operations
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mt-6 max-w-3xl font-light">
            Your team is bleeding time and money on operational work that should
            be automated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <div className="text-4xl md:text-5xl font-semibold text-black mb-4">
                {problem.stat}
              </div>
              <p className="text-base md:text-lg text-gray-900 mb-4 font-medium">
                {problem.title}
              </p>
              <p className="text-sm md:text-base text-gray-600">
                → {problem.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
