"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFilePowerpoint } from "react-icons/fa";
import BMCModal from "./BMC";

interface Project {
  title: string;
  description: string;
  importance: number;
  color?: string;
  hex?: string;
  vision?: string;
  mvp?: string[];
  phase?: string;
  github?: string;
  live?: string;
  pitchDeck?: string;
  tags?: string[];
  tech?: string[];
  bmc?: {
    KP: string[];
    VP: string[];
    CS: string[];
    CH: string[];
    C$: string[];
    R$: string[];
    KR: string[];
    KA: string[];
    CR: string[];
  };
}

const Projects = ({ data }: { data: Project[] }) => {
  const [selectedBMC, setSelectedBMC] = useState<null | Project["bmc"]>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");

  // Extract unique phases for filtering
  const phases: string[] = [
    "all",
    ...Array.from(
      new Set(
        data
          .map((p) => p.phase)
          .filter((phase): phase is string => Boolean(phase))
      )
    ),
  ];

  const filteredData =
    filter === "all"
      ? data
      : data.filter((project) => project.phase === filter);

  return (
    <div className="min-h-screen bg-background px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 md:mb-0 font-montserrat"
          >
            Projects
          </motion.h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {phases.map((phase) => (
              <button
                key={phase}
                onClick={() => setFilter(phase)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === phase
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-muted-foreground hover:bg-muted border border-border"
                }`}
              >
                {phase === "all" ? "All Projects" : phase}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 card-hover overflow-hidden"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Header with Phase Badge */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground font-montserrat flex-1">
                    {project.title}
                  </h3>
                  {project.phase && (
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 whitespace-nowrap ml-2">
                      {project.phase}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Vision */}
                {project.vision && (
                  <div className="mb-4 p-3 bg-muted/50 rounded-lg border border-border">
                    <p className="text-sm">
                      <span className="font-semibold text-primary">
                        Vision:
                      </span>{" "}
                      <span className="text-muted-foreground">
                        {project.vision}
                      </span>
                    </p>
                  </div>
                )}

                {/* MVP Features */}
                {project.mvp && project.mvp.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      MVP Features:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.mvp.slice(0, 3).map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-background text-muted-foreground rounded-full border border-border"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.mvp.length > 3 && (
                        <span className="text-xs px-3 py-1 text-primary">
                          +{project.mvp.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-background hover:bg-muted border border-border rounded-lg transition-colors text-foreground text-sm"
                      aria-label="View on GitHub"
                    >
                      <FaGithub size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors text-sm"
                      aria-label="View Live Demo"
                    >
                      <FaExternalLinkAlt size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.pitchDeck && (
                    <a
                      href={project.pitchDeck}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-background hover:bg-muted border border-border rounded-lg transition-colors text-foreground text-sm"
                      aria-label="View Pitch Deck"
                    >
                      <FaFilePowerpoint size={16} />
                      <span>Pitch</span>
                    </a>
                  )}
                  {project.bmc && (
                    <button
                      onClick={() => {
                        setSelectedBMC(project.bmc || null);
                        setSelectedTitle(project.title);
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-background hover:bg-muted border border-border rounded-lg transition-colors text-foreground text-sm"
                    >
                      <span>📊</span>
                      <span>Business Model</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No projects found for this filter.
            </p>
          </div>
        )}
      </div>

      {selectedBMC && (
        <BMCModal
          title={selectedTitle}
          bmc={selectedBMC}
          onClose={() => {
            setSelectedBMC(null);
            setSelectedTitle("");
          }}
        />
      )}
    </div>
  );
};

export default Projects;
