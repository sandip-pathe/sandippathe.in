import React from "react";
import { Button } from "./ui/Button";
import { Navbar } from "./Navbar";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Background Effect simulating the spline 3D or gradient lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-gradient-to-l from-gray-200 to-transparent skew-x-12 opacity-50 blur-3xl"></div>
        <div className="absolute right-[-10%] top-[-10%] w-[50vw] h-[50vw] rounded-full bg-gray-100 blur-3xl"></div>
      </div>
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight font-semibold tracking-tight text-black mb-6">
            Automate Document Processing, Compliance & Data Quality for Growing
            Tech Companies
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed max-w-3xl">
            We help Series A/B/C tech companies eliminate manual operational
            work. Save 100-200 hours/month on document processing, compliance
            tracking, and data quality issues. Built and delivered in 2-4 weeks.
          </p>

          <p className="text-base md:text-lg text-gray-600 mb-8 flex items-center gap-2">
            <span className="text-xl">🏦</span>
            <span>Built for Fintech, Legal Tech & Health Tech Companies</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              text="Book Free 15-Min Operational Audit"
              className="origin-left"
              href="/services/contact"
            />
            <Button
              text="See How It Works"
              variant="outline"
              className="origin-left"
              href="#intro"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
