"use client";

import React, { useState } from "react";
import { Anton, Montserrat } from "next/font/google";
import { FaGithub, FaExternalLinkAlt, FaFilePowerpoint } from "react-icons/fa";
import BMCModal from "./BMC";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "800"] });

interface Project {
  title: string;
  description: string;
  importance: number;
  color: string;
  hex?: string;
  vision?: string;
  mvp?: string[];
  phase?: string;
  github?: string;
  live?: string;
  pitchDeck?: string;
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
  return (
    <div className="min-h-screen bg-[#F9F7F1] flex flex-col items-center">
      <div className="flex max-h-[9vh] my-20">
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl uppercase text-[#242021] font-extrabold ${anton.className}`}
        >
          Projects
        </h1>
      </div>

      <div
        className="flex flex-wrap gap-4 w-full mx-auto max-w-[80%] justify-baseline"
        style={{ height: "auto" }}
      >
        {data.map((project, index) => (
          <div
            key={index}
            className={`relative p-6 md:p-4 text-[#242021] rounded-lg shadow-md transition duration-300 ease-in-out 
            ${
              project.color || "bg-gray-500"
            } lg:opacity-80 hover:opacity-100 hover:scale-105 w-full`}
            style={{
              height: `${Math.ceil(project.importance / 10) * 100}px`,
              minHeight: "130px",
              backgroundColor: project.hex,
            }}
          >
            <h2
              className={`font-bold text-center ${montserrat.className}`}
              style={{
                fontSize: `clamp(1.4rem, ${
                  project.importance * 0.2
                }vw, 2.8rem)`,
              }}
            >
              {project.title}
            </h2>
            <p className="text-center text-sm md:text-md mt-2">
              {project.description}
            </p>

            <div className="hidden md:block">
              {project.vision && (
                <div className="text-center mt-2 text-md">
                  <p>
                    <strong>Vision:</strong> {project.vision}
                  </p>
                </div>
              )}

              {project.mvp && (
                <div className="text-center mt-2 text-md">
                  <p>
                    <strong>MVP:</strong> {project.mvp.join(", ")}
                  </p>
                </div>
              )}

              {project.phase && (
                <div className="text-center mt-2 text-md">
                  <p>
                    <strong>Phase:</strong> {project.phase}
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-center space-x-4 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black cursor-pointer"
                >
                  <FaGithub size={20} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black cursor-pointer"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              )}
              {project.pitchDeck && (
                <a
                  href={project.pitchDeck}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black cursor-pointer"
                >
                  <FaFilePowerpoint size={20} />
                </a>
              )}
              {project.bmc && (
                <button
                  onClick={() => {
                    setSelectedBMC(project.bmc);
                    setSelectedTitle(project.title);
                  }}
                  className={`text-black px-2 py-1 cursor-pointer text-sm rounded-md hover:text-white ${montserrat.className}`}
                >
                  View Business Model Canvas
                </button>
              )}
            </div>
          </div>
        ))}
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
    </div>
  );
};

export default Projects;
