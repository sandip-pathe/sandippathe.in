"use client";

import React from "react";
import { Navbar } from "@/components/leftclick/Navbar";
import { Home } from "@/components/leftclick/Home";

export default function ServicesPage() {
  return (
    <div
      className="min-h-screen bg-white text-black selection:bg-black selection:text-white antialiased"
      style={{ fontFamily: "var(--font-inter-tight), sans-serif" }}
    >
      <Home />
    </div>
  );
}
