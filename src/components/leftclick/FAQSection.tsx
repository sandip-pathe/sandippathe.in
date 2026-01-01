"use client";

import React, { useState } from "react";
import { SectionLabel } from "./ui/SectionLabel";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start justify-between gap-4 text-left hover:opacity-70 transition-opacity"
      >
        <span className="text-lg md:text-xl font-semibold pr-8">
          {question}
        </span>
        <div className="flex-shrink-0 mt-1">
          {isOpen ? (
            <Minus className="w-6 h-6" />
          ) : (
            <Plus className="w-6 h-6" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "Do you work with early-stage startups or only later-stage companies?",
      answer:
        "We work primarily with Series A/B/C companies (typically ₹2-50Cr in funding). If you're pre-Series A, we can still talk—but you need to have clear operational pain, proven revenue, and budget allocated to solve this problem.",
    },
    {
      question:
        "What if we're not technical? Do we need to understand how it works?",
      answer:
        "Nope. You just tell us the problem (\"We spend 20 hours/week on KYC review\"), we build the solution. You get training on how to use the system, but you don't need to understand how it's built. Think of it like using Salesforce—you don't need to know how Salesforce was coded.",
    },
    {
      question: "Can you integrate with our existing tools?",
      answer:
        "Yes. We work with 100+ tools including: Salesforce, HubSpot, Notion, Slack, Google Sheets, Stripe, Razorpay, QuickBooks, Zoho, PostgreSQL, MongoDB, custom APIs, and more. If you use something custom or niche, we'll figure it out. That's literally what we do.",
    },
    {
      question: "What if the system breaks after you deliver it?",
      answer:
        "First 2 weeks of support are included in every project. If something breaks, we fix it immediately (4-hour response time). After that, most clients opt for ongoing maintenance (₹30K-₹1L/month) so they never have to think about it. But you own the code, so your team can maintain it if needed.",
    },
    {
      question: "How is this different from hiring a full-time developer?",
      answer:
        "Full-time developer: ₹10-20L/year + 3-6 months to build + you manage them + they might quit\n\nUs: ₹2-8L one-time + 2-4 weeks to deliver + we manage ourselves + we've built this 10 times before\n\nYou get it faster, cheaper, and with someone who knows what works (because we've already made all the mistakes on our own startup).",
    },
    {
      question: "Do you offer a guarantee?",
      answer:
        "Yes. We guarantee the system delivers the specific outcome we agree on in the proposal. If it doesn't work as promised, we keep building until it does. No extra charges. We stand behind our work because we're founders too—we know what it's like to waste money on things that don't work.",
    },
    {
      question: "Can we see examples of your previous work?",
      answer:
        "On the audit call, we'll walk you through similar systems we've built (anonymized for confidentiality). We'll show you the architecture, dashboards, and real performance metrics. Due to NDAs, we can't share client names publicly, but we're happy to discuss case studies in detail privately.",
    },
    {
      question: "What tech stack do you use?",
      answer:
        "Depends on your needs and existing infrastructure, but typically: Python/FastAPI for backend processing, React/Next.js for dashboards, PostgreSQL or MongoDB for data storage, Temporal for workflow orchestration, hosted on Railway/Vercel/Azure/AWS. We use whatever makes sense for your specific use case—not what's trendy.",
    },
    {
      question: "Do you work with clients outside India?",
      answer:
        "Yes. We're based in Mumbai but work remotely with clients globally. Time zone differences aren't an issue—we do async communication via Slack + scheduled video calls when needed. Most of our work is code, not meetings.",
    },
    {
      question: "What if our requirements change during the project?",
      answer:
        "Minor changes are included. Major scope changes get a separate proposal. We're flexible—we're founders, we know plans change. We just need to agree on what \"done\" looks like before we start, so there's no confusion later.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <SectionLabel number="6" text="FAQ" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold tracking-tight mt-6">
            Common Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
