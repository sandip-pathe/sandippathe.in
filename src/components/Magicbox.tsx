"use client";
import { useEffect, useState } from "react";
import { FaFaceSmileWink } from "react-icons/fa6";
import { GiCardJoker, GiGluttonousSmile } from "react-icons/gi";

export default function MagicBox() {
  const [showJoke, setShowJoke] = useState(false);
  const [joke, setJoke] = useState("Click the Joker Icon for a surprise joke!");
  const [loading, setLoading] = useState(false);

  async function fetchJoke() {
    setLoading(true);
    try {
      const res = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single"
      );
      const data = await res.json();
      setJoke(data.joke);
    } catch (error) {
      setJoke("Oops! No jokes right now. Try again later.");
    } finally {
      setLoading(false);
      setShowJoke(true);
    }
  }

  return (
    <div className="relative flex flex-col items-center md:flex-row">
      <div
        className="cursor-pointer rounded-full shadow-lg hover:scale-110 transition transform duration-200"
        onClick={fetchJoke}
      >
        <FaFaceSmileWink className="text-yellow-400 text-7xl md:text-9xl animate-wiggle" />
      </div>
      {showJoke && (
        <div className="absolute mt-20 md:mt-0 md:ml-16 p-4 w-72 md:w-96 bg-white rounded-lg shadow-lg text-center transition-opacity duration-300 animate-fadeIn text-clip">
          {joke}
        </div>
      )}

      <style>
        {`
          @keyframes wiggle {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-5deg); }
            50% { transform: rotate(5deg); }
          }

          .animate-wiggle {
            animation: wiggle 1s infinite;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
