"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import AboutProductCard from "@/src/components/home/AboutProductCard";
import CircleAnimation from "@/src/components/home/CircleAnimation";

// Main Component
const TextParallaxContentExample = () => {
  return (
    <div className="mt-28">
      <div className="bg-white">
        <TextParallaxContent
          imgUrl="https://media.istockphoto.com/id/1437475390/vector/abstract-gray-white-triangle-geometric-background-striped-polygon-pattern-network-concept.jpg?s=612x612&w=0&k=20&c=ICJS_fq1bffKRWnBOqh8b0VKYK0SiPwBav7tR21G-Lk="
          subheading=" Transform the way you interact with your audience by embracing the power of conversational AI! Our innovative chatbot platform is designed to cater to individuals and businesses, enabling seamless engagement with users in a whole new way."
          subheading2="
With our chatbot, you can:"
          heading="Transform Audience Engagement with Conversational AI to Seamlessly Connect, Engage, and Innovate"
        >
          <ExampleContent />
        </TextParallaxContent>
      </div>
    </div>
  );
};

// Export Default
export default TextParallaxContentExample;

// Helper Components
const TextParallaxContent = ({
  imgUrl,
  subheading,
  subheading2,
  heading,
  children,
}) => {
  return (
    <div style={{ paddingLeft: 12, paddingRight: 12 }}>
      <div className="relative h-[95vh]">
        <StickyImage imgUrl={imgUrl} />
        <div className="">
          <OverlayCopy
            heading={heading}
            subheading={subheading}
            subheading2={subheading2}
          />
        </div>
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <motion.div
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl relative"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        height: "calc(70vh)",
        top: 30,
        scale,
      }}
    >
      {/* Black Faint Overlay */}
      <motion.div className="absolute inset-0 bg-primary opacity-85" />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, subheading2, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full px-6 md:px-10 lg:px-32 flex-col items-center justify-center text-white"
      style={{ y, opacity }}
    >
      <p
        className="text-center text-2xl md:text-[45px] leading-normal font-normal"
        style={{ lineHeight: "60px" }}
      >
        {heading}
      </p>
      <button
        onClick={() => router.push("/register")}
        className=" mt-10 inline-flex z-[1000] justify-center items-center text-center border-white text-primary text-[17px] font-medium rounded-full py-4 px-8 sm:ml-4 bg-secondary hover:bg-secondary/80 transition"
      >
        Sign Up for free
      </button>

      {/* <p className=" text-center text-lg md:text-xl mt-5 text-white/90">
        {subheading}
      </p>

      <p className="mb-2 text-center text-lg md:text-xl text-white/90">
        {subheading2}
      </p> */}
    </motion.div>
  );
};
const ExampleContent = () => {
  const cardContainerRef = useRef(null);
  const isInView = useInView(cardContainerRef, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const textContainerRef = useRef(null);
  const textInView = useInView(textContainerRef, { once: true, amount: 0.2 });

  return (
    <>
      {/* <motion.div
        ref={cardContainerRef}
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-2 md:px-10 lg:px-16 pb-20 mt-10"
      >
        {[
          {
            title: "Engage Visitors Effortlessly",
            description:
              "Replace static interactions with real-time conversations, allowing users to ask questions, explore offerings, and connect instantly for a personalized experience.",
          },
          {
            title: "Build a Community Connection",
            description:
              "Go beyond just your website! Share your chatbot with your community, allowing anyone to reach out, interact, and provide you with valuable leads & insights.",
          },
          {
            title: "Lead Generation Made Simple",
            description:
              "Our bots can capture user contact information by asking the right questions, ensuring you never miss an opportunity to grow your business.",
          },
          {
            title: "Track Performance with Dashboard",
            description:
              "Get full visibility into chatbot interactions with an easy-to-use dashboard. Analyze conversations, track inquiries, & gather leads to optimize your strategy.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <AboutProductCard
              title={card.title}
              description={card.description}
            />
          </motion.div>
        ))}
      </motion.div> */}

      {/* ===== text  */}
      <motion.div
        ref={textContainerRef}
        className="pb-14 md:pb-7 flex justify-between flex-wrap items-center px-2 md:px-20 py-10"
        initial={{ opacity: 0, y: 50 }}
        animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-[25%] sm:w-[30%]">
          <CircleAnimation />
        </div>
        <motion.div
          className="w-[75%] sm:w-[65%] text-lg md:text-[28px] md:leading-9 md:pr-20"
          initial={{ opacity: 0, x: -50 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          Whether you're an individual looking to build{" "}
          <span className="">stronger relationships with your audience</span> or
          a company aiming to generate leads and boost engagement, our chatbot
          solution is your ultimate tool for success.
        </motion.div>
      </motion.div>
    </>
  );
};
