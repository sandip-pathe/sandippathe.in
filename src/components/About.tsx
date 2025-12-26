"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Section {
  number: string;
  heading: string;
  subheading: string;
  keywords: string[];
  description: string;
  image: string;
}

const About = ({ data }: { data: Section[] }) => {
  const sortedData = [...data].sort((a, b) => a.number.localeCompare(b.number));

  return (
    <div className="min-h-screen bg-background px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-foreground mb-16 font-montserrat"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 card-hover overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl font-bold text-primary/20 font-montserrat">
                    {section.number}
                  </span>
                  {section.image && (
                    <div className="w-16 h-16 rounded-lg overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity">
                      <img
                        src={section.image}
                        alt={section.heading}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2 font-montserrat">
                  {section.heading}
                </h3>

                <p className="text-sm text-primary mb-3 font-semibold">
                  {section.subheading}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {section.keywords?.map((keyword, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full border border-border"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
