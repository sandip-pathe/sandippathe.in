import React from "react";

const Spinner = ({ loading }: { loading: boolean }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg z-50 min-h-screen bg-[#F9F7F1] overflow-hidden">
      <div className="relative flex items-center justify-center w-30 h-30 animate-spin-slow">
        <div
          className="absolute w-15 h-15 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-pulse"
          style={{ top: "0%", left: "50%", transform: "translate(-50%, -50%)" }}
        ></div>
        <div
          className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse delay-200"
          style={{
            top: "50%",
            left: "100%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <div
          className="absolute w-7 h-7 rounded-full bg-gradient-to-r from-green-500 to-teal-500 animate-pulse delay-400"
          style={{
            top: "100%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <div
          className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 animate-pulse delay-600"
          style={{ top: "50%", left: "0%", transform: "translate(-50%, -50%)" }}
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
