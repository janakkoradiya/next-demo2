"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const [fontSize, setFontSize] = useState("4rem");
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 768) {
        setFontSize("4rem");
      } else {
        setFontSize("3rem");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleKnowMore = () => {
    const featuresSection = document.querySelector("#features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('')] before:bg-no-repeat before:bg-bottom before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 min-h-[80vh]">
      {/* <!-- Gradients --> */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        {/* <div className="bg-gradient-to-r from-[#D9E0A4] via-[#D9E0A4] to-[#D9E0A4] blur-3xl w-[25rem] h-[44rem] rotate-[-0deg] transform -translate-x-[10rem]"></div> */}
        <div className="bg-gradient-to-b from-[#d9e0a4de] via-[#d9e0a4e0] to-[#d9e0a4b8] blur-[70px] w-[135rem] h-[36rem] rounded-fulls origin-top-left -rotate- -translate-x-[0rem] -ml-4"></div>
      </div>
      {/* Glowing and Spreading Gradient Circle */}
      {/* <div className="absolute inset-0 mt-5 flex items-center justify-center">
        <div className="w-[28rem] h-44 blur-[7.5rem] rounded-full bg-gradient-to-r from-[#229f81] via-[#195f5a] to-[#048a7a] opacity-40 animate-glow" />
      </div> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-[85rem] mx-auto px-4 sm:px-6 pt-28 md:pt-40 mt-10 pb-20"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 w-[95%] text-center mx-auto relative z-10"
        >
          <h1
            className="block font-bold text-black"
            style={{
              lineHeight: "1.2",
              fontSize: fontSize,
            }}
          >
            Redefining the Future with Interactive <br />
            <span className="text-primary font-extrabold">
              <Typewriter
                options={{
                  strings: ["Chatbot Solutions"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                  pauseFor: 5000,
                }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center">
          <button
            onClick={() => router.push("/profile")}
            className="inline-flex z-[1000] justify-center items-center text-center bg-secondary text-primary text-[17px] font-medium rounded-full py-4 px-8 sm:ml-4 hover:bg-secondary/90 transition"
          >
            Create Your Chatbot
          </button>
          <button
            onClick={() => router.push("/pricing")}
            className="inline-flex z-[1000] justify-center items-center text-center  border-primary text-white text-[17px] font-medium rounded-full py-4 px-8 sm:ml-4 bg-primary hover:bg-primary/90 transition"
          >
            Know More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
