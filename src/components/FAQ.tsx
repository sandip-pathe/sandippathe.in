import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Anton, Montserrat } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "800"] });

interface Faqs {
  question: string;
  answer: string;
}

const Accordion = ({ data }: { data: Faqs[] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-foreground mb-12 font-montserrat"
        >
          FAQs
        </motion.h2>

        {data.map((faq, index) => (
          <div
            key={index}
            className="border-b border-border cursor-pointer py-4"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-foreground font-montserrat">
                {faq.question}
              </h3>
              <span
                className={`text-foreground text-xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="text-base text-muted-foreground mt-3 leading-relaxed"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
