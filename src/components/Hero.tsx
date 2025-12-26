"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Suspense } from "react";

type AudienceMode = "investor" | "recruiter" | "client" | "default";

interface AudienceContent {
  tagline: string;
  subtitle: string;
  cta: string;
  status: string;
  statusColor: string;
}

const audienceContent: Record<AudienceMode, AudienceContent> = {
  investor: {
    tagline: "Building Blissm - Mental Health for Everyone",
    subtitle:
      "Technical founder democratizing mental health through AI. Building with LLMs, RAG, and deep learning to make mental healthcare accessible like WhatsApp made messaging.",
    cta: "View My Ventures",
    status: "Open to Investment",
    statusColor: "bg-green-500",
  },
  recruiter: {
    tagline: "Full-Stack AI Engineer | Technical Founder",
    subtitle:
      "Built mental health apps, academic platforms, and analytics systems. Experienced with LLMs, RAG, React, Python, and scaling products from zero to MVP.",
    cta: "See My Experience",
    status: "Available for Founding Roles",
    statusColor: "bg-blue-500",
  },
  client: {
    tagline: "AI-Powered Product Development",
    subtitle:
      "End-to-end development from concept to deployment. Specialized in LLMs, RAG, React, Next.js, and FastAPI. Built healthcare, education, and analytics platforms.",
    cta: "Start a Project",
    status: "Taking Clients",
    statusColor: "bg-purple-500",
  },
  default: {
    tagline: "Engineer Building AI-Powered Solutions",
    subtitle:
      "Passionate about LLMs, RAG, and deep learning. Currently building Blissm (mental health app) and exploring opportunities in founding roles, investments, and partnerships.",
    cta: "Explore My Work",
    status: "Open to Opportunities",
    statusColor: "bg-blue-500",
  },
};

function HeroContent() {
  const searchParams = useSearchParams();
  const mode = (searchParams?.get("mode") as AudienceMode) || "default";
  const content = audienceContent[mode] || audienceContent.default;

  const scrollToSection = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Ambient background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-5xl relative z-10"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <span
              className={`w-2 h-2 rounded-full ${content.statusColor} animate-pulse`}
            />
            <span className="text-sm text-muted-foreground">
              {content.status}
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-montserrat text-foreground mb-6"
        >
          {"Sandip Pathe".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
              className="inline-block hover:text-primary transition-colors cursor-default"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Dynamic Tagline */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold gradient-text mb-4"
        >
          {content.tagline}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          {content.subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={scrollToSection}
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-primary/50"
          >
            {content.cta}
          </button>
          <a
            href="#contact"
            className="px-8 py-4 bg-card hover:bg-muted border border-border text-foreground rounded-lg font-semibold transition-all hover:scale-105 active:scale-95"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Magic Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-8"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="px-4 py-2 bg-card border border-primary/30 rounded-full text-sm text-primary font-medium">
              🤖 LLMs & RAG
            </span>
            <span className="px-4 py-2 bg-card border border-primary/30 rounded-full text-sm text-primary font-medium">
              ⚛️ React & Next.js
            </span>
            <span className="px-4 py-2 bg-card border border-primary/30 rounded-full text-sm text-primary font-medium">
              🐍 Python & FastAPI
            </span>
            <span className="px-4 py-2 bg-card border border-primary/30 rounded-full text-sm text-primary font-medium">
              🧠 TensorFlow & Deep Learning
            </span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function HeroSection({ loading }: { loading: boolean }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-foreground">Loading...</div>
        </div>
      }
    >
      <HeroContent />
    </Suspense>
  );
}
