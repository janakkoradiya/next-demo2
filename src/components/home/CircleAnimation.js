import React from "react";
import { PiArrowCircleUpRightThin } from "react-icons/pi";
import { VscRobot } from "react-icons/vsc";
import { RiRobot3Fill } from "react-icons/ri";

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
                fontSize: "16px",
                fill: "#19485f",
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
          <PiArrowCircleUpRightThin className="text-[3rem] md:text-[5rem] text-primary/80 transition-all ease-in-out duration-300 " />
        </div>
      </div>
    </div>
  );
};

export default RotatingCircleText;
