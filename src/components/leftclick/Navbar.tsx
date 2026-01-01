"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`absolute top-0 left-0 right-0 w-full transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/services"
          className="flex items-center gap-3 group select-none"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black w-8 h-8"
          >
            <path
              d="M4 4H8V20H4V4Z"
              fill="currentColor"
              className="group-hover:translate-x-1 transition-transform"
            />
            <path
              d="M10 4L16 10L10 16"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-bold text-lg tracking-tight text-black group-hover:translate-x-1 transition-transform">
            Sandip Pathe
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleScrollToSection("case-studies")}
            className="text-sm font-medium hover:opacity-60 transition-opacity"
          >
            Case studies
          </button>
          <button
            onClick={() => handleScrollToSection("about")}
            className="text-sm font-medium hover:opacity-60 transition-opacity"
          >
            About
          </button>
          <Button text="Let's talk" href="/services/contact" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 md:hidden flex flex-col gap-4 shadow-xl">
          <button
            onClick={() => handleScrollToSection("case-studies")}
            className="text-lg font-medium text-left"
          >
            Case studies
          </button>
          <button
            onClick={() => handleScrollToSection("about")}
            className="text-lg font-medium text-left"
          >
            About
          </button>
          <div className="pt-2">
            <Button
              text="Let's talk"
              className="w-full"
              href="/services/contact"
            />
          </div>
        </div>
      )}
    </nav>
  );
};
