import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const AboutUs = () => {
  return (
    <div className="py-20 mt-10">
      <div className="py-10 md:py-16 px-10 md:px-16 bg-secondary/20 border-primary w-[95%] mx-auto rounded-[3rem] flex flex-wrap justify-between space-x-3 items-center">
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
          <h1 className="text-3xl font-medium md:text-5xl text-primary mb-7">
            Shaping the Future, Together
          </h1>
          <p className="text-lg md:text-xl text-black/80">
            Welcome to Company, where innovation meets excellence. Our story is
            one of passion, creativity, and a relentless drive to solve
            real-world challenges. We specialize in delivering tailored
            solutions that empower businesses and individuals to achieve their
            full potential. Founded with the belief that every idea deserves a
            chance to shine, we bring a unique blend of expertise and commitment
            to every project. Whether through cutting-edge technology,
            personalized strategies, or dedicated support, we prioritize your
            success at every step. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam natus rerum unde enim dolorum
            laudantium, ipsum non aspernatur obcaecati nihil quis, quaerat
            corrupti asperiores commodi aliquid recusandae velit fuga corporis!
          </p>

          <div className="flex flex-col md:items-start">
            <Link
              target="_blank"
              href="https://www.byteupai.com/"
              className="text-[19px] text-primary flex space-x-1 group transition-all ease-in-out duration-200 font-medium items-center pb-1 border-b w-fit border-primary mt-5 md:mt-9"
            >
              <span>Visit Our Website</span>{" "}
              <GoArrowUpRight className="group-hover:ml-2.5 transition-all ease-in-out duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
