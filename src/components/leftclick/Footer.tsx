import React from "react";
import { Button } from "./ui/Button";
import Link from "next/link";

export const Footer: React.FC = () => {
  const solutions = [
    "Document Processing Automation",
    "Compliance Monitoring Systems",
    "Data Quality Pipelines",
  ];

  const industries = [
    "Fintech & Lending",
    "Legal Tech",
    "Health Tech",
    "Prop Tech",
    "B2B SaaS",
  ];

  const resources = [
    { name: "How It Works", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Case Studies", href: "#case-studies" },
  ];

  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Final CTA Section */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 max-w-3xl leading-tight">
            Stop Wasting 100+ Hours/Month on Manual Work
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Book a free 15-minute operational audit. We'll identify exactly
            where you're losing time and how to fix it. No obligation. No sales
            pitch. Just honest technical analysis from founders who've solved
            this problem before.
          </p>
          <Button
            text="Book Free Audit Call"
            variant="light"
            href="/services/contact"
          />

          {/* Email CTA */}
          <div className="mt-16 pt-12 border-t border-gray-800">
            <h3 className="text-2xl font-semibold mb-4">Prefer Email First?</h3>
            <p className="text-gray-400 mb-4">Send us a quick note with:</p>
            <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-6">
              <li>Your company name and what you're building</li>
              <li>
                What operational problem is killing you (document processing,
                compliance, or data quality)
              </li>
              <li>Rough estimate of hours wasted per week</li>
            </ol>
            <p className="text-gray-400 mb-4">
              We'll reply within 24 hours with initial thoughts.
            </p>
            <a
              href="mailto:sandippathe9689@gmail.com"
              className="inline-flex items-center text-xl font-semibold hover:opacity-70 transition-opacity"
            >
              📧 sandippathe9689@gmail.com
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-gray-800">
          <div>
            <h4 className="font-semibold mb-4 text-white">Solutions</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {solutions.map((solution, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white transition-colors">
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Industries</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {industries.map((industry, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white transition-colors">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {resources.map((resource, idx) => (
                <li key={idx}>
                  <a
                    href={resource.href}
                    className="hover:text-white transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white w-8 h-8"
            >
              <path d="M4 4H8V20H4V4Z" fill="currentColor" />
              <path
                d="M10 4L16 10L10 16"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <div className="font-bold text-lg">Sandip Pathe & Team</div>
              <div className="text-sm text-gray-500">
                Automation Infrastructure for Tech Companies
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            © Copyright 2025, Sandip Pathe
          </div>
        </div>
      </div>
    </footer>
  );
};
