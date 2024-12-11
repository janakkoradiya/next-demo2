import React from "react";
import { BsChatText } from "react-icons/bs";
import { IoTimerOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";

const BetterValue = () => {
  return (
    <div className="bg-white py-12 md:py-20 px-2 sm:px-6 lg:px-20">
      <div className="flex justify-between items-start mx-auto">
        <div className="w-[49%] relative">
          <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-primary/5">
            <HiSparkles className="text-2xl -mt-1 -ml-2 text-primary/5" />
          </div>
          <h1 className="text-[27px] text-black font-bold">
            Better Value With Our Platform
          </h1>
          <h2 className="text-md  font-medium text-black/80 ">
            Our platform offers unparalleled value by turning your chatbot into
            a personal assistant for your business. Through insightful
            conversations, the chatbot gathers valuable information about your
            users' needs, preferences, and questions. This data empowers you to
            better understand your audience and refine your strategies to meet
            their expectations.
          </h2>
        </div>
        <div className="w-[43%] grid grid-cols-1 gap-y-8 ">
          <div className="flex gap-x-5 items-start justify-between group">
            <div className="flex justify-center">
              <BsChatText className="h-7 w-7 text-black/90  group-hover:text-primary group-hover:scale-110 transition-all ease-in-out duration-200" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-black group-hover:text-primary transition-all ease-in-out duration-200">
                Efficient Communication
              </h3>
              <p className="mt-2 text-base text-black/70  group-hover:text-black transition-all ease-in-out duration-200">
                Simplify interactions by streamlining communication with our
                chatbot. It answers queries promptly, ensuring a seamless
                experience for users.
              </p>
            </div>
          </div>

          <div className="flex gap-x-5 items-start justify-between group">
            <div className="flex justify-center">
              <IoTimerOutline className="h-8 w-8 text-black/90 group-hover:text-primary group-hover:scale-110 transition-all ease-in-out duration-200 " />
            </div>
            <div>
              <h3 className="text-xl font-medium text-black group-hover:text-primary transition-all ease-in-out duration-200">
                Time-Saving Automation
              </h3>
              <p className="mt-2 text-base text-black/70  group-hover:text-black transition-all ease-in-out duration-200">
                Automate repetitive tasks such as capturing leads and providing
                personalized recommendations, freeing up your time for more
                strategic activities.
              </p>
            </div>
          </div>

          <div className="flex gap-x-5 items-start justify-between group">
            <div className="flex justify-center">
              <IoPeopleOutline className="h-7 w-7 text-black/90 group-hover:text-primary group-hover:scale-110 transition-all ease-in-out duration-200 " />
            </div>
            <div>
              <h3 className="text-xl font-medium text-black group-hover:text-primary transition-all ease-in-out duration-200">
                Meaningful Connections
              </h3>
              <p className="mt-2 text-base text-black/70  group-hover:text-black transition-all ease-in-out duration-200">
                Stay connected with users in impactful ways, boosting
                satisfaction and ensuring maximum value from every interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetterValue;
