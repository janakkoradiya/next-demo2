import React from "react";
import { motion } from "framer-motion";

const ScrollDownArrow1 = () => {
  const chevronVariants = {
    hidden: { opacity: 0, scale: 0.3, y: 0 },
    visible: (custom) => ({
      opacity: [0, 1, 1, 0],
      y: [0, 24, 36, 52],
      scale: [0.3, 0.5, 0.7, 0.5],
      transition: {
        duration: 3, // Total animation duration for each chevron
        ease: "easeOut",
        repeat: Infinity,
        delay: custom * 0.3, // Staggered delay for synchronization
      },
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center h-fit w-full relative mt-7">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`chevron relative w-8 h-2 mb-2`} // Ensure uniform spacing
          variants={chevronVariants}
          custom={index}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute top-0 left-0 w-1/2 h-full bg-[#6c8135] transform skew-y-[30deg]"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#6c8135] transform skew-y-[-30deg]"></div>
          <div className="absolute top-0 left-0 w-1/2 h-full bg-[#6c8135] transform skew-y-[30deg]"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#6c8135] transform skew-y-[-30deg]"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollDownArrow1;
