import { Anton, Montserrat } from "next/font/google";
import React from "react";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "800"] });

interface Data {
  skills: string[];
  softSkills: string[];
  achievements: string[];
}

interface Education {
  title: string;
  institution: string;
  year: string;
  logo?: string;
  link?: string;
}

const InvestorSnapshot = ({
  data,
  education,
}: {
  data: Data[];
  education: Education[];
}) => {
  if (!data || data.length === 0) {
    return <p className="text-gray-500">Loading...</p>;
  }
  return (
    <div className="min-h-screen bg-background px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-12 font-montserrat">
          Experience
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 card-hover">
            <h3 className="text-2xl font-bold text-primary mb-4 font-montserrat">
              Education
            </h3>
            {education.map((edu, idx) => (
              <p key={idx} className="text-sm text-muted-foreground mb-3">
                <strong>
                  {edu.logo && (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        height={30}
                        width={30}
                        className="inline mr-2"
                      />
                    </a>
                  )}
                  {edu.title}
                </strong>
                {` - ${edu.institution}`} ({edu.year})
              </p>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-6 card-hover">
            <h3 className="text-2xl font-bold text-primary mb-4 font-montserrat">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {data[0].skills.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 card-hover">
            <h3 className="text-2xl font-bold text-primary mb-4 font-montserrat">
              Achievements
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              {data[0].achievements.map((item, idx) => (
                <li key={idx} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 card-hover">
            <h3 className="text-2xl font-bold text-primary mb-4 font-montserrat">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {data[0].softSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorSnapshot;
