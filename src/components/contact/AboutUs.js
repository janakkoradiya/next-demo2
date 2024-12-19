import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const AboutUs = () => {
  return (
    <div className="py-20 mt-10">
      <div className="py-10 md:py-14 px-10 md:px-16 bg-secondary/20 border-primary w-[95%] mx-auto rounded-[3rem] flex flex-wrap justify-between space-x-3 items-center">
        <div className="relative h-[470px] w-full md:w-[27%] rounded-3xl overflow-hidden">
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary bg-opacity-80 rounded-3xl"></div>

          {/* Image */}
          <img
            className="object-cover w-full h-full rounded-3xl"
            src="https://media.istockphoto.com/id/1437475390/vector/abstract-gray-white-triangle-geometric-background-striped-polygon-pattern-network-concept.jpg?s=612x612&w=0&k=20&c=ICJS_fq1bffKRWnBOqh8b0VKYK0SiPwBav7tR21G-Lk="
            alt="Company Background"
          />
        </div>

        <div className="w-full md:w-[65%]">
          <h1 className="text-3xl font-medium md:text-5xl text-primary mb-8">
            Shaping the Future, Together
          </h1>
          <p className="text-lg md:text-[19px] text-black/80">
            Our story began just 5-6 months ago with two passionate individuals
            and a shared dream to transform how businesses communicate. Starting
            with just 2-3 projects, we successfully delivered outstanding
            results, building a reputation for innovation and reliability along
            the way. Today, our growing team of 6-7 talented professionals
            continues to push boundaries and deliver exceptional solutions.
          </p>

          <p className="text-lg md:text-[19px] text-black/80 mt-5">
            Currently, we are working on an exciting chatbot development tool
            designed to revolutionize customer engagement. This tool embodies
            our creativity, technical expertise, and commitment to empowering
            businesses with smart, user-friendly solutions. Thank you for being
            part of our journey the best is yet to come!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
