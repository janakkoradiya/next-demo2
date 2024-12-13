import React from "react";
import { BiSolidRocket } from "react-icons/bi";
import { TiGroup } from "react-icons/ti";

const WhyChooseUs2 = () => {
  return (
    <div className="px-3 md:px-10 lg:px-20 py-10 -mt-10 md:pb-20 mb-20">
      {/* sec 1 */}
      <div className="items-center grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 md:gap-y-0">
        <div className="flex flex-col space-y-6 py-5 md:py-8 h-full border-l-[3px] md:border-l-[6px] border-secondary pl-4  md:pl-8 rounded-2xl">
          <BiSolidRocket className="text-2xl md:text-3xl text-primary" />
          <h1 className="text-3xl md:text-4xl text-primary">
            Why Our Platform is Truly a Game Changer
          </h1>
          <p className="text-lg md:text-xl">
            Our platform is not just another chatbot builder, it’s a
            game-changer. We are constantly innovating and introducing exciting
            features to keep you ahead of the curve. From enhanced
            conversational capabilities to robust customization, our product
            ensures a unique and engaging experience for your users.
          </p>
        </div>

        <div className="flex flex-col space-y-6 py-5 md:py-8 h-full border-l-[3px] md:border-l-[6px] border-secondary pl-4  md:pl-8 rounded-2xl">
          <TiGroup className="text-2xl md:text-3xl text-primary" />
          <h1 className="text-3xl md:text-4xl text-primary">
            Expand Your Reach with Community Features
          </h1>
          <p className="text-lg md:text-xl">
            Our community-based functionality helps you connect with a larger
            audience, grow your network, generate more leads, and strengthen
            user relationships. With our advanced features, personalized
            solutions, and dedicated support, we offer growth opportunities and
            a competitive edge that are unmatched by others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs2;
