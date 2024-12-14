import React from "react";

const PricingHero = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 md:py-20 mt-1">
      <div className="bg-primary/0 p-10 py-16 rounded-[3rem] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-medium md:text-5xl text-primary mb-5 font- w-full md:w-[60%] mx-auto">
          Choose Your Plan
        </h1>
        <p className="text-[17px] md:text-[19px] w-full md:w-[64%] mx-auto text-black/80">
          Find the perfect plan to match your needs. Whether you’re just
          starting or scaling your business, we’ve got you covered with flexible
          options.
        </p>
      </div>
    </div>
  );
};

export default PricingHero;
