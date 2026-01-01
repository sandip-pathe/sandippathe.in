"use client";

import React, { useState } from "react";
import { SectionLabel } from "./ui/SectionLabel";

const testimonials = [
  {
    id: "fatjoe",
    logo: "fatjoe.",
    quote:
      "Nick & the LeftClick team knows their stuff. Their AI systems are incredible.",
    author: "Joe Davies",
    title: "Cofounder, FATJOE",
    image: "https://picsum.photos/seed/joe/100/100",
  },
  {
    id: "scaling",
    logo: "SCALING",
    quote:
      "LeftClick transformed our operational efficiency overnight. A true partner in growth.",
    author: "Sarah Jenkins",
    title: "CEO, Scaling Systems",
    image: "https://picsum.photos/seed/sarah/100/100",
  },
];

export const TestimonialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-lc-gray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <SectionLabel number="4" text="Client reviews" />
          <h2 className="text-4xl md:text-[4.5rem] leading-[1.05] font-semibold tracking-tight mt-6">
            Some words from happy clients.
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-12">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 font-bold ${
                activeTab === idx
                  ? "bg-black text-white border-black"
                  : "bg-transparent text-gray-400 border-gray-300 hover:border-gray-500"
              }`}
            >
              {t.logo}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-200/50 rounded-3xl p-12 md:p-16 flex items-center justify-center">
            <h3 className="text-3xl md:text-4xl font-medium leading-tight text-center">
              "{testimonials[activeTab].quote}"
            </h3>
          </div>

          <div className="bg-gray-200/50 rounded-3xl p-12 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 bg-gray-300">
              <img
                src={testimonials[activeTab].image}
                alt={testimonials[activeTab].author}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-2xl font-semibold mb-2">
              {testimonials[activeTab].author}
            </h4>
            <p className="text-gray-600">{testimonials[activeTab].title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
