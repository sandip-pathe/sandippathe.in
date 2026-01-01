"use client";

import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Footer } from "./Footer";
import { CaseStudy } from "@/data/caseStudies";

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({
  caseStudy,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <main className="pt-32 pb-24 container mx-auto px-4 md:px-8">
        {/* Top Section: Back Button + Intro Text & Hero Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">
          <div className="flex flex-col items-start">
            <Link
              href="/services"
              className="group flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors px-5 py-2.5 rounded-full font-medium text-sm mb-12"
            >
              <div className="bg-black rounded-full p-1 text-white group-hover:-translate-x-1 transition-transform duration-300">
                <ArrowLeft size={14} />
              </div>
              Go Back
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.2] font-normal tracking-tight">
              {caseStudy.title}
            </h1>
          </div>

          <div className="w-full aspect-[4/3] lg:aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-sm">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Section: Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar: Pills */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-4 items-start lg:sticky lg:top-32">
              {caseStudy.tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] rounded-full px-6 py-3 font-medium text-gray-800"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content: Main Text */}
          <div className="lg:col-span-8 space-y-16">
            {/* Header */}
            <div>
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">
                {caseStudy.title}
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 font-light">
                {caseStudy.subtitle}
              </p>
            </div>

            {/* Challenge */}
            <div>
              <h3 className="text-3xl font-medium mb-6">Challenge</h3>
              <p className="text-lg leading-relaxed text-gray-800">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-3xl font-medium mb-6">Solution</h3>
              <ul className="list-disc pl-5 space-y-4 text-lg leading-relaxed text-gray-800 marker:text-black">
                {caseStudy.solution.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div>
              <h3 className="text-3xl font-medium mb-6">Impact</h3>
              <ul className="list-disc pl-5 space-y-4 text-lg leading-relaxed text-gray-800 marker:text-black">
                {caseStudy.impact.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
