"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useState } from "react";
import faqData from "@/data/faq.json";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const faqs: FAQ[] = faqData;

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50 sm:top-6 sm:right-6">
        <ThemeToggle />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Home</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-foreground font-normal mb-3 sm:mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-serif">
            Quick answers to common questions about my work, availability, and
            collaboration.
          </p>
        </motion.div>
      </header>

      {/* FAQ List */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted/30 dark:bg-muted/50 border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-serif text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openId === faq.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 sm:px-6 pb-4 sm:pb-5"
                >
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Footer />
      </div>
    </div>
  );
}
