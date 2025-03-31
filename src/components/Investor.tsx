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
    <div className="min-h-screen bg-[#F9F7F1] p-8 flex flex-col items-center">
      <div className="flex max-h-[9vh] my-20">
        <h1
          className={`text-5xl md:text-7xl uppercase text-[#242021] font-extrabold ${anton.className}`}
        >
          Resume
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[90%] lg:max-w-[80%] mx-auto">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2
            className={`text-3xl font-bold text-[#434493] mb-4 ${montserrat.className}`}
          >
            Education
          </h2>
          {education.map((edu, idx) => (
            <p key={idx} className="text-sm text-[#434493] mb-2">
              <strong>
                {edu.logo && (
                  <a href={edu.link} target="_blank" rel="noopener noreferrer">
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

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2
            className={`text-3xl font-bold text-[#bf1fba] mb-4 ${montserrat.className}`}
          >
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {data[0].skills.map((item, idx) => (
              <li key={idx} className="text-sm text-[#bf1fba] mb-2">
                {item}
              </li>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2
            className={`text-3xl font-bold text-[#FD673B] mb-4 ${montserrat.className}`}
          >
            Achievements
          </h2>
          <ul className="list-disc pl-5">
            {data[0].achievements.map((item, idx) => (
              <li key={idx} className="text-sm text-[#FD673B] mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2
            className={`text-3xl font-bold text-[#08AB88] mb-4 ${montserrat.className}`}
          >
            Human Skills (Soft Skills)
          </h2>
          <div className="flex flex-wrap gap-2">
            {data[0].softSkills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-[#08AB88] text-white px-3 py-1 rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorSnapshot;
