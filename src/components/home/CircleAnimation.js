import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const RotatingCircleText = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative w-full max-w-md overflow-hidden aspect-square">
        {/* Rotating Circle with Text */}
        <svg
          className="absolute left-0 top-0 w-full animate-rotate"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 300 300"
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
            />
          </defs>
          <circle cx="150" cy="150" r="75" fill="none" />
          <g>
            <use xlinkHref="#circlePath" fill="none" />
            <text
              className="font-extrabold"
              style={{
                fontSize: "17px",
                fill: "#6A42C2",
              }}
            >
              <textPath xlinkHref="#circlePath">
                Experience the future of communication!
              </textPath>
            </text>
          </g>
        </svg>

        {/* Centered Icon */}
        <div className="absolute inset-0 flex items-center justify-center group">
          <IoIosArrowRoundForward className="text-[2rem] md:text-[5rem] text-primary/70 group-hover:scale-125 transition-all ease-in-out duration-300 hover:text-[2.5rem] md:hover:text-[5.6rem] group-hover:text-primary/80" />
        </div>
      </div>
    </div>
  );
};

export default RotatingCircleText;
