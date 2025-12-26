"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AIShowcase {
  title: string;
  category: string;
  description: string;
  tech: string[];
  features: string[];
  demo?: string;
  github?: string;
}

const AI_PROJECTS: AIShowcase[] = [
  {
    title: "Blissm - Mental Health App",
    category: "Healthcare AI",
    description:
      "AI-powered mental health platform for doctors and patients. Features AI journaling, intelligent chatbots for therapeutic conversations, and community support. Building towards democratized mental health like WhatsApp did for messaging.",
    tech: ["LLMs", "RAG", "React Native", "FastAPI", "TensorFlow"],
    features: [
      "AI journaling with sentiment analysis",
      "Therapeutic chatbot conversations",
      "Doctor-patient community platform",
      "Hyper-personalized mental health support",
    ],
    github: "https://github.com/sandip-pathe/blissm",
    demo: "https://blissm.app/pitchdeck",
  },
  {
    title: "Research Repository Platform",
    category: "Academic Tools",
    description:
      "Comprehensive platform integrating academic profiling with project management. Unified system for universities to manage research lifecycle from funding to publication.",
    tech: ["React", "Next.js", "TypeScript", "Python"],
    features: [
      "Academic profile management",
      "Research project tracking",
      "Funding pipeline integration",
      "Publication workflow automation",
    ],
    github: "https://github.com/sandip-pathe/rr",
  },
  {
    title: "Attendance & Analytics System",
    category: "EdTech",
    description:
      "Smart attendance tracking with analytics for NGOs and educational institutions. Real-time monitoring and insights for better resource allocation.",
    tech: ["React", "Python", "Analytics Dashboard"],
    features: [
      "Real-time attendance tracking",
      "Analytics and reporting",
      "Multi-organization support",
      "Mobile-first design",
    ],
    github: "https://github.com/sandip-pathe/sa",
  },
  {
    title: "Event-Based Meme Generator",
    category: "Creative AI",
    description:
      "Fun application generating memes based on trending events. Combines event detection with creative content generation.",
    tech: ["React", "AI APIs", "Event Streams"],
    features: [
      "Trending event detection",
      "Automated meme generation",
      "Template customization",
      "Social sharing integration",
    ],
    demo: "https://meme-app.com",
  },
];

const CATEGORIES = [
  "All",
  "Healthcare AI",
  "Academic Tools",
  "EdTech",
  "Creative AI",
];

export default function AIShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? AI_PROJECTS
      : AI_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
          >
            <span className="text-primary">🤖</span>
            <span className="text-sm text-primary font-semibold">
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-montserrat"
          >
            Real Projects & Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Real projects leveraging AI and modern tech to solve meaningful
            problems in healthcare, education, and beyond
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-muted border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 mb-2 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground font-montserrat mt-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2 font-semibold">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-background text-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-1 mb-4">
                  <p className="text-xs text-muted-foreground font-semibold mb-2">
                    Key Features:
                  </p>
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5">→</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-sm text-primary hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Agent Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-card border border-border rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 font-montserrat text-center">
            Agent Architecture Philosophy
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Orchestration
              </h4>
              <p className="text-sm text-muted-foreground">
                Central coordination of specialized agents with task planning
                and delegation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔄</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Communication
              </h4>
              <p className="text-sm text-muted-foreground">
                Message passing, state sharing, and collaborative
                decision-making
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Execution</h4>
              <p className="text-sm text-muted-foreground">
                Tool use, API integration, and autonomous action in complex
                environments
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
