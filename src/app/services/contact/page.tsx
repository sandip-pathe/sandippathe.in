"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function ContactPage() {
  return (
    <div
      className="min-h-screen bg-white text-black selection:bg-black selection:text-white antialiased"
      style={{ fontFamily: "var(--font-inter-tight), sans-serif" }}
    >
      <main className="min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl min-h-screen py-6">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen">
            {/* Left Column: Info */}
            <div className="flex flex-col justify-start pt-4 space-y-6">
              <Link
                href="/services"
                className="group flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-full font-medium text-sm w-fit"
              >
                <div className="bg-black rounded-full p-1 text-white group-hover:-translate-x-1 transition-transform duration-300">
                  <ArrowLeft size={14} />
                </div>
                Go Back
              </Link>

              <div>
                <h1 className="text-3xl md:text-4xl leading-tight font-semibold tracking-tight mb-4">
                  Let's Talk About Your Automation Needs
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Book a free 15-minute operational audit. We'll review your
                  current workflow, identify automation opportunities, and show
                  you exactly what we can build for you.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  What to Expect on the Call
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-semibold text-xs">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">
                        Review Your Workflow
                      </h4>
                      <p className="text-gray-600 text-sm">
                        We'll walk through your current manual processes and
                        identify the biggest time sinks.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-semibold text-xs">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">
                        Spot Automation Opportunities
                      </h4>
                      <p className="text-gray-600 text-sm">
                        We'll show you exactly which parts can be automated and
                        estimate the time/cost savings.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-semibold text-xs">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">
                        Get a Custom Proposal
                      </h4>
                      <p className="text-gray-600 text-sm">
                        If it's a good fit, you'll receive a fixed-price
                        proposal within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Calendly Embed */}
            <div className="h-full w-full">
              <CalendlyEmbed />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
