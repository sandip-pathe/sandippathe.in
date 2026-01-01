import React from "react";
import { SectionLabel } from "./ui/SectionLabel";

export const AboutUsSection: React.FC = () => {
  const credentials = [
    "Built document processing infrastructure handling 10,000+ legal contracts",
    "Designed compliance monitoring systems for financial regulations",
    "Engineered data pipelines where one error costs ₹50L+",
    "Studied how top 20 Indian fintechs handle operational automation",
  ];

  const philosophy = [
    {
      title: "Our Philosophy",
      content:
        "Every system is custom-built for your tools, your data, and your processes. No templates. No cookie-cutter solutions. Just reliable automation that works from day one. You own the code. Zero vendor lock-in.",
    },
    {
      title: "Built on Enterprise Infrastructure",
      content:
        "We use the same tech stack as Stripe, Netflix, and Uber: Temporal for workflow orchestration, FastAPI for APIs, PostgreSQL for data integrity. Your automation runs on battle-tested infrastructure.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <SectionLabel number="3" text="About Us" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold tracking-tight mt-6 mb-8">
            Built by Founders Who've Lived This Pain
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-gray-900">
              We're <span className="font-semibold">Sandip Pathe and team</span>
              , founders who built Anaya, an AI-powered legal intelligence
              platform. We spent 18 months building document processing systems
              that handle thousands of legal contracts, compliance workflows for
              RBI/SEBI regulations, and data pipelines that can't afford a
              single error.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-900">
              Now we help tech founders automate the operational work that's
              blocking their growth—before they hire 10 people to do it
              manually.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Our Background</h3>
            <ul className="space-y-3">
              {credentials.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {philosophy.map((item, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
