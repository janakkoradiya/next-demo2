import React from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const FoldEffect = () => {
  const words = [
    "Experience The Future of Communication",
    "From UI/UX to CI/CX",
  ];

  return (
    <div className="w-full -mt-5 py-12 md:py-24 px-4 md:px-8 flex flex-col items-center justify-center space-y-2 bg-white">
      {words.map((word, index) => (
        <div
          key={word}
          className="relative shadow-2xl shadow-primary/10 border-primary/10 overflow-hidden py-4 md:py-8 w-full"
          style={{ transform: `rotate(${index === 0 ? 1 : -1.4}deg)` }}
        >
          <motion.div
            className={`whitespace-nowrap ${
              index === 0 ? "text-black" : "text-primary/60"
            } text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold`}
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
            <span
              className={`${
                index === 0
                  ? "text-primary font-extrabold"
                  : "text-black font-extrabold"
              }`}
            >
              {`${word}. `}
            </span>
            {`${word}. `.repeat(15)}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FoldEffect;
