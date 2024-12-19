import React from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const FoldEffect = () => {
  const words = [
    "Experience The Future of Communication",
    "From UI/UX to CI/CX",
  ];

  return (
    <div className="w-full -mt-10 py-12 md:py-24 overflow-x-hidden flex flex-col items-center justify-center space-y-2 bg-white">
      {words.map((word, index) => (
        <div
          key={word}
          className="relative shadow-2xl shadow-primary/10 border-primary/10 overflow-hidden py-4 md:py-8 w-full"
          style={{ transform: `rotate(${index === 0 ? 1.2 : -1.2}deg)` }}
        >
          <div
            className={`absolute inset-0 ${
              index === 0 ? "bg-secondary" : "bg-primary"
            }`}
          ></div>
          <motion.div
            className={`relative z-10 text-${
              index === 0 ? "primary" : "white"
            } text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium whitespace-nowrap`}
            initial={{ x: 0 }}
            animate={{
              x: index === 0 ? [0, -2000] : [-2000, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            style={{ willChange: "transform" }}
          >
            {`${word}. `.repeat(15)}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FoldEffect;
