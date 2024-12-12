"use client";
import React, { useState, useEffect } from "react";
import Button from "@/src/components/Button";
import { motion } from "framer-motion";
import styled from "styled-components";

// Create a styled component wrapper that preserves the Button styles
const ButtonWrapper = styled(motion.div)`
  /* Preserve any margin/positioning styles */
  display: inline-block;

  /* Override any conflicting styles from framer-motion */
  button {
    outline: none !important;
    cursor: pointer !important;
    border: none !important;
    padding: 0.9rem 1.7rem !important;
    margin: 0 !important;
    font-family: inherit !important;
    position: relative !important;
    display: inline-block !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    border-radius: 500px !important;
    overflow: hidden !important;
    background: #6a42c2 !important;
    color: ghostwhite !important;

    &:hover {
      &::before {
        transform: translateX(0) skew(30deg) !important;
      }
      span {
        color: white !important;
      }
    }

    &::before {
      content: "" !important;
      position: absolute !important;
      top: 0 !important;
      left: -20px !important;
      width: 120% !important;
      height: 100% !important;
      background: #000 !important;
      z-index: 0 !important;
      transform: translateX(-100%) skew(30deg) !important;
      transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1) !important;
    }

    span {
      position: relative !important;
      z-index: 1 !important;
      transition: color 0.4s !important;
    }
  }
`;

const HeroSection = () => {
  const [fontSize, setFontSize] = useState("3.5rem");

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

  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-[85rem] mx-auto px-4 sm:px-6 pt-28 md:pt-40 pb-10"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 max-w-3xl text-center mx-auto"
        >
          <h1
            className="block font-extrabold text-black"
            style={{
              lineHeight: "1.2",
              fontSize: fontSize,
            }}
          >
            Redefining the future from{" "}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-primary caveat"
            >
              UI/UX
            </motion.span>{" "}
            to{" "}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-primary caveat"
            >
              CI/CX
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5 max-w-3xl text-center mx-auto"
        >
          <p className="text-[18px] text-gray-600">
            Revolutionize user engagement with our cutting-edge chatbot platform
            that delivers seamless, interactive conversations. Empower your
            business with intelligent, personalized chatbots designed to connect
            with your audience like never before.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 md:gap-[-10px] gap-0 flex flex-col sm:flex-row justify-center items-center"
        >
          {/* <ButtonWrapper
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              text="Create Your Chatbot"
              onClick={() => console.log("Create Your Chatbot clicked!")}
            />
          </ButtonWrapper> */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex justify-center items-center gap-x-3 text-center bg-primary border border-transparent text-white text-[16px] font-medium rounded-full hover:bg-primary/80 py-3 px-6 sm:ml-4"
            href="/profile"
          >
            Create Your Chatbot
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex justify-center items-center gap-x-3 text-center bg-black border border-transparent text-white text-[16px] font-medium rounded-full hover:bg-black/80 py-3 px-6 sm:ml-4"
            href="#features"
          >
            Know More
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
