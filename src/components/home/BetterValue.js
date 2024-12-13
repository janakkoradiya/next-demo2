import React, { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/router";

const BetterValue = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="bg-white py-12 md:py-20 px-3 sm:px-6 lg:px-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col lg:flex-row justify-between items-start mx-auto gap-y-8 lg:gap-0"
      >
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[44%] relative"
        >
          <h1 className="-mt-2 text-3xl md:text-[45px] md:leading-[55px] text-black font-[400]">
            Unlock more value with our AI Chatbot that connects you with
            customers
          </h1>

          <button
            onClick={() => router.push("/auth/signup")}
            className="text-[20px] text-primary flex space-x-1 group transition-all ease-in-out duration-200 font-medium items-center pb-1 border-b border-primary mt-5 md:mt-9"
          >
            <span>Start Your Free Trial</span>{" "}
            <GoArrowUpRight className="group-hover:ml-2.5 transition-all ease-in-out duration-300" />
          </button>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[47%] grid grid-cols-1 gap-y-4 md:gap-y-10"
        >
          <motion.div
            variants={itemVariants}
            className="flex gap-x-3 md:gap-x-6 items-start justify-between group"
          >
            <div className="flex justify-center shrink-0">
              <IoMdCheckmarkCircleOutline className="mt-1 md:mt-0 h-5 w-5 md:h-7 md:w-7 text-black/90 group-hover:text-primary group-hover:scale-110 transition-all ease-in-out duration-200" />
            </div>
            <div>
              <h3 className="text-lg md:text-[27px] font-[400] text-black group-hover:text-primary transition-all ease-in-out duration-200">
                Efficient Communication
              </h3>
              <p className="mt-1 md:mt-3 text-base md:text-[20px]  md:leading-[32px] text-black/70 group-hover:text-black transition-all ease-in-out duration-200">
                Simplify interactions by streamlining communication with our
                chatbot. It answers queries promptly, ensuring a seamless
                experience for users.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-x-3 md:gap-x-6 items-start justify-between group"
          >
            <div className="flex justify-center shrink-0">
              <IoMdCheckmarkCircleOutline className="mt-1 md:mt-0 h-5 w-5 md:h-7 md:w-7 text-black/90 group-hover:text-primary group-hover:scale-110 transition-all ease-in-out duration-200" />
            </div>
            <div>
              <h3 className="text-lg md:text-[27px] font-[400] text-black group-hover:text-primary transition-all ease-in-out duration-200">
                Time-Saving Automation
              </h3>
              <p className="mt-1 md:mt-3 text-base md:text-[20px]  md:leading-[32px] text-black/70 group-hover:text-black transition-all ease-in-out duration-200">
                Automate repetitive tasks such as capturing leads and providing
                personalized recommendations, freeing up your time for more
                strategic activities.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-x-3 md:gap-x-6 items-start justify-between group"
          >
            <div className="flex justify-center shrink-0">
              <IoMdCheckmarkCircleOutline className="mt-1 md:mt-0 h-5 w-5 md:h-7 md:w-7 text-black/90 group-hover:text-primary group-hover:scale-110 transition-all ease-in-out duration-200" />
            </div>
            <div>
              <h3 className="text-lg md:text-[27px] font-[400] text-black group-hover:text-primary transition-all ease-in-out duration-200">
                Meaningful Connections
              </h3>
              <p className="mt-1 md:mt-3 text-base md:text-[20px]  md:leading-[32px] text-black/70 group-hover:text-black transition-all ease-in-out duration-200">
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
