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
    <div className="mt-6 max-w-[80%] lg:max-w-[80%] mx-auto w-full items-start">
      <div className="min-h-screen bg-[#F9F7F1]">
        <div className="flex max-h-[9vh] my-20 items-center flex-col">
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl uppercase text-[#242021] font-extrabold ${anton.className}`}
          >
            Investor FAQs
          </h1>
        </div>

        {data.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 cursor-pointer py-3"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3
                className={`text-xl font-semibold text-[#242021] ${montserrat.className}`}
              >
                {faq.question}
              </h3>
              <span
                className={`text-[#242021] text-xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className={`text-xl text-[#242021] mt-2 ${montserrat.className}`}
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
