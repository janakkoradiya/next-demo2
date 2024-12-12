import React, { useRef } from "react";
import { BsChatText } from "react-icons/bs";
import { IoTimerOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
import { motion, useInView } from "framer-motion";

const BetterValue = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div ref={sectionRef} className="bg-white py-12 md:py-20 px-3 sm:px-6 lg:px-20">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col lg:flex-row justify-between items-start mx-auto gap-8 lg:gap-0"
      >
        <motion.div 
          variants={itemVariants}
          className="w-full lg:w-[49%] relative"
        >
          <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-primary/5">
            <HiSparkles className="text-2xl -mt-1 -ml-2 text-primary/5" />
          </div>
          <h1 className="text-2xl md:text-[27px] text-black font-bold">
            Better Value With Our Platform
          </h1>
          <h2 className="text-sm md:text-md font-medium text-black/80 mt-4">
            Our platform offers unparalleled value by turning your chatbot into
            a personal assistant for your business. Through insightful
            conversations, the chatbot gathers valuable information about your
            users' needs, preferences, and questions. This data empowers you to
            better understand your audience and refine your strategies to meet
            their expectations.
          </h2>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="w-full lg:w-[43%] grid grid-cols-1 gap-y-8"
        >
          <motion.div 
            variants={itemVariants}
            className="flex gap-x-5 items-start justify-between group"
          >
            <div className="flex justify-center shrink-0">
              <BsChatText className="h-6 w-6 md:h-7 md:w-7 text-black/90 group-hover:text-primary group-hover:scale-110 transition-all ease-in-out duration-200" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium text-black group-hover:text-primary transition-all ease-in-out duration-200">
                Efficient Communication
              </h3>
              <p className="mt-2 text-sm md:text-base text-black/70 group-hover:text-black transition-all ease-in-out duration-200">
                Simplify interactions by streamlining communication with our
                chatbot. It answers queries promptly, ensuring a seamless
                experience for users.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex gap-x-5 items-start justify-between group"
          >
            <div className="flex justify-center shrink-0">
              <IoTimerOutline className="h-7 w-7 md:h-8 md:w-8 text-black/90 group-hover:text-primary group-hover:scale-110 transition-all ease-in-out duration-200" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium text-black group-hover:text-primary transition-all ease-in-out duration-200">
                Time-Saving Automation
              </h3>
              <p className="mt-2 text-sm md:text-base text-black/70 group-hover:text-black transition-all ease-in-out duration-200">
                Automate repetitive tasks such as capturing leads and providing
                personalized recommendations, freeing up your time for more
                strategic activities.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex gap-x-5 items-start justify-between group"
          >
            <div className="flex justify-center shrink-0">
              <IoPeopleOutline className="h-6 w-6 md:h-7 md:w-7 text-black/90 group-hover:text-primary group-hover:scale-110 transition-all ease-in-out duration-200" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium text-black group-hover:text-primary transition-all ease-in-out duration-200">
                Meaningful Connections
              </h3>
              <p className="mt-2 text-sm md:text-base text-black/70 group-hover:text-black transition-all ease-in-out duration-200">
                Stay connected with users in impactful ways, boosting
                satisfaction and ensuring maximum value from every interaction.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BetterValue;
