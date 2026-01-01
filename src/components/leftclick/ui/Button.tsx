"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  variant?: "dark" | "light" | "outline";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = "dark",
  className = "",
  onClick,
  href,
}) => {
  const isDark = variant === "dark";
  const isOutline = variant === "outline";

  const buttonClasses = `
    group relative flex items-center justify-between rounded-full pl-6 pr-2 py-2 text-base font-medium transition-all duration-300 ease-out
    ${
      isDark
        ? "bg-black text-white"
        : isOutline
        ? "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white"
        : "bg-white text-black"
    }
    ${className}
  `;

  const content = (
    <>
      <span className="relative overflow-hidden h-6 w-full text-left">
        <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
          {text}
        </span>
        <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
          {text}
        </span>
      </span>

      <div
        className={`
        relative flex h-10 w-10 flex-none items-center justify-center rounded-full transition-all duration-300
        ${
          isDark
            ? "bg-white text-black"
            : isOutline
            ? "bg-black text-white group-hover:bg-white group-hover:text-black"
            : "bg-black text-white"
        }
      `}
      >
        <div className="relative h-4 w-4 overflow-hidden">
          <ArrowRight className="absolute inset-0 h-full w-full -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
          <ArrowRight className="absolute inset-0 h-full w-full translate-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-full" />
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} style={{ minWidth: "160px" }}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      style={{ minWidth: "160px" }}
    >
      {content}
    </button>
  );
};
