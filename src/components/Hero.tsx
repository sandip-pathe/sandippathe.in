"use client";
import MagicBox from "./Magicbox";
import { Pacifico, Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Spinner from "./Spinner";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "800"] });

export default function HeroSection({ loading }: { loading: boolean }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F7F1] p-4 relative overflow-hidden">
      {loading && <Spinner loading={loading} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] font-bold ${montserrat.className} text-[#242021] leading-tight`}
        >
          {"Sandip Pathe".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className={`text-lg sm:text-2xl md:text-3xl mt-4 text-gray-600 ${pacifico.className}`}
        >
          Innovating with
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text font-bold p-1">
            Code
          </span>
          ,
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-bold p-1">
            Creativity
          </span>
          &
          <span className="bg-gradient-to-r from-green-500 to-teal-500 text-transparent bg-clip-text font-bold p-1">
            Heart
          </span>
          .
        </motion.p>

        <div className="mt-8 flex flex-col items-center">
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className={`text-sm font-bold sm:text-lg text-gray-500 animate-pulse ${pacifico.className}`}
          >
            Make your day magical
          </motion.h4>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-4 w-full sm:w-auto"
          >
            <MagicBox />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
