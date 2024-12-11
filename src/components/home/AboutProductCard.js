import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="p-6 group flex flex-col items-start  bg-gray-50 border-[3px] border-white shadow-black/10 shadow-2xl hover:shadow-lg  rounded-xl text-start cursor-pointer transform transition-all duration-500 ease-in-out active:scale-1 ">
      <div className="text-black text-start font-bold text-[20px] mb-1">
        {title}
      </div>
      <div className="w-[50px] transition-all duration-500 ease-in-out group-hover:w-[30%] h-1 bg-primary mb-3"></div>
      <p className="text-black/90 text-[15px]">{description}</p>
    </div>
  );
};

export default Card;
