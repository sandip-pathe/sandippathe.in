import React from "react";

interface SectionLabelProps {
  number: string;
  text: string;
  dark?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  text,
  dark = false,
}) => {
  return (
    <div
      className={`inline-flex items-center bg-gray-100 rounded-full pl-2 pr-4 py-1 mb-6 ${
        dark ? "text-white" : "text-black"
      }`}
    >
      <span
        className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-2 ml-0 ${
          dark ? "bg-white text-black" : "bg-black text-white"
        }`}
        style={{ marginLeft: "-4px" }}
      >
        {number}
      </span>
      <span className="text-sm font-medium tracking-wide">{text}</span>
    </div>
  );
};
