"use client";

import { motion } from "framer-motion";
import { Anton, Orbitron, Space_Mono, Montserrat } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

interface Sections {
  number: string;
  heading: string;
  subheading: string;
  keywords: string[];
  description: string;
  image: string;
}

const cardVariants = {
  hidden: {
    opacity: 0.2,
    y: 100,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    scale: 0.9,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const About = ({ data }: { data: Sections[] }) => {
  // Sort sections numerically based on the string "01", "02", etc.
  const sortedData = [...data].sort((a, b) => a.number.localeCompare(b.number));

  return (
    <div className="min-h-screen bg-[#F9F7F1] flex flex-col items-center mb-20">
      <div className="flex max-h-[9vh] my-20">
        <h1
          className={`text-5xl md:text-7xl uppercase text-[#242021] font-extrabold ${anton.className}`}
        >
          About
        </h1>
      </div>

      {sortedData.map((section, index) => (
        <motion.div
          key={index}
          className="relative w-full max-w-[90%] md:max-w-[80%]"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.3, once: true }}
        >
          <div
            className={`relative flex flex-col md:flex-wrap md:flex-row items-start justify-between p-4 bg-white shadow-xl mb-8 ${
              index % 2 === 0 ? "md:rotate-[-3deg]" : "md:rotate-[3deg]"
            }`}
            style={{
              height: "auto",
              borderBottom:
                index !== sortedData.length - 1 ? "1px solid #D3D3D3" : "none",
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center md:hidden"
              style={{
                backgroundImage: `url(${section.image})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                filter: "blur(2px)",
                opacity: 0.4,
                minHeight: "100%",
              }}
            ></div>

            <div
              className={`flex-[0.5] text-xl md:text-2xl font-bold text-gray-800 z-10 ${orbitron.className}`}
            >
              {section.number}
            </div>

            <div className="flex-[1.3] z-10">
              <p
                className={`text-xs md:text-sm font-semibold text-[#242120] ${montserrat.className}`}
              >
                {section.subheading}
              </p>
              <h2
                className={`text-3xl md:text-5xl font-bold text-[#242120] ${anton.className}`}
              >
                {section.heading}
              </h2>
            </div>

            <div className="flex-[0.9] overflow-scroll z-10">
              {section.keywords.map((keyword, index) => (
                <p
                  key={index}
                  className={`mb-1 text-xs md:text-sm font-bold ${
                    spaceMono.className
                  }
                  ${index % 2 === 0 ? "text-[#d2003f]" : "text-[#08a27e]"}`}
                >
                  {keyword}
                </p>
              ))}
            </div>

            <div className="flex-[2.2] z-10">
              <p
                className={`text-black pr-4 font-semibold text-xs md:text-sm leading-relaxed ${montserrat.className}`}
              >
                {section.description}
              </p>
            </div>
            <div className="flex-[1.2] hidden md:flex justify-end">
              <img
                src={section.image}
                alt={section.heading}
                width={150}
                height={100}
                className="object-cover w-56 h-36"
                style={{
                  objectFit: "cover", // Ensures the image covers the area
                  objectPosition: "top", // Aligns the image from the top
                }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default About;
