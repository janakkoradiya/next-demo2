"use client"; // Required for Next.js when using useEffect or client-side logic
import React, { useState, useEffect } from "react";
import Button from "@/src/components/Button"; // Ensure this path is correct

const HeroSection = () => {
  const [fontSize, setFontSize] = useState("3.5rem");

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 768) {
        setFontSize("4rem"); // for medium and up (md: 4rem)
      } else {
        setFontSize("3rem"); // for small screens
      }
    };

    // Set the initial font size based on screen width
    handleResize();

    // Add event listener to adjust on resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 pt-28 md:pt-40 pb-10">
        {/* Title */}
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <h1
            className="block font-extrabold text-black"
            style={{
              lineHeight: "1.2",
              fontSize: fontSize, // Dynamically change font size
            }}
          >
            Redefining the future from{" "}
            <span className="text-primary shadowsintolight">UI/UX</span> to{" "}
            <span className="text-primary shadowsintolight"> CI/CX</span>
          </h1>
        </div>
        {/* End Title */}

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-[18px] text-gray-600">
            Revolutionize user engagement with our cutting-edge chatbot platform
            that delivers seamless, interactive conversations. Empower your
            business with intelligent, personalized chatbots designed to connect
            with your audience like never before.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 gap-1 flex flex-col sm:flex-row justify-center items-center">
          <Button
            text="Create Your Chatbot"
            onClick={() => console.log("Create Your Chatbot clicked!")}
          />
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-primary border border-transparent text-white text-[16px] font-medium rounded-full hover:bg-primary/80 py-3 px-6  sm:ml-4"
            href="#features"
          >
            Know More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
