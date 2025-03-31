import { Anton, Montserrat } from "next/font/google";
import React from "react";

interface BMCData {
  KP: string[];
  KA: string[];
  KR: string[];
  VP: string[];
  CR: string[];
  CH: string[];
  CS: string[];
  C$: string[];
  R$: string[];
}

interface BMCModalProps {
  title: string;
  bmc: BMCData;
  onClose: () => void;
}

const anton = Anton({ subsets: ["latin"], weight: ["400"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "800"] });

const BMCModal: React.FC<BMCModalProps> = ({ title, bmc, onClose }) => {
  const sectionStyles: Record<keyof BMCData, string> = {
    KP: "bg-blue-500",
    KA: "bg-green-500",
    KR: "bg-teal-400",
    VP: "bg-blue-300",
    CR: "bg-yellow-400",
    CH: "bg-yellow-300",
    CS: "bg-yellow-200",
    C$: "bg-purple-400",
    R$: "bg-red-500",
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 px-4 sm:px-0 overflow-scroll">
      <div className="bg-white rounded-lg p-6 w-full max-w-5xl shadow-lg">
        <h2
          className={`text-xl sm:text-2xl font-bold text-center text-[#242021] mb-4 ${anton.className}`}
        >
          ({title}) Business Model Canvas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          {Object.entries(bmc).map(([key, value]) => (
            <div
              key={key}
              className={`p-4 ${
                montserrat.className
              } border rounded-md text-[#242021] ${
                sectionStyles[key as keyof BMCData]
              }`}
            >
              <strong>{key}</strong>
              <ul className="mt-2 list-disc list-inside">
                {value.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer with Responsive Button */}
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 w-full sm:w-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BMCModal;
