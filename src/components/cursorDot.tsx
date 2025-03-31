"use client";

import { useEffect, useState } from "react";

const CursorDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotColor, setDotColor] = useState("bg-black");

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Detect background color
      const element = document.elementFromPoint(
        e.clientX,
        e.clientY
      ) as HTMLElement;
      if (element) {
        const bgColor = window.getComputedStyle(element).backgroundColor;
        const isDark = isDarkColor(bgColor);
        setDotColor(isDark ? "bg-white" : "bg-black");
      }
    };

    document.addEventListener("mousemove", updatePosition);
    return () => document.removeEventListener("mousemove", updatePosition);
  }, []);

  // Function to determine if the background color is dark
  const isDarkColor = (rgb: string) => {
    if (!rgb.startsWith("rgb")) return false;
    const [r, g, b] = rgb.match(/\d+/g)?.map(Number) || [255, 255, 255];
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  };

  return (
    <div
      className={`fixed w-10 h-10 rounded-full pointer-events-none transition-colors duration-200 mix-blend-difference ${dotColor}`}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default CursorDot;
