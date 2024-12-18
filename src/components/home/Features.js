import React from "react";
import { motion } from "framer-motion";
import { PiAndroidLogoThin } from "react-icons/pi";
import { PiAndroidLogoFill } from "react-icons/pi";

const Features = () => {
  const features = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1677094310918-cc302203b21c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Easy Chatbot Creation",
      description:
        "Build your own chatbot effortlessly in just a few simple steps no technical expertise needed.",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Shareable Chatbot Links",
      description:
        "Share your chatbot link with anyone, making it easy for users to interact with you from anywhere.",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/woman-texting-couch_53876-96946.jpg?t=st=1733911812~exp=1733915412~hmac=b38f8bf45dcabd66fc78fe2c4c89ba541f7bc4cc17fb1fd56f68742786d91823&w=1380",
      title: "Community Integration",
      description:
        "Expand your reach by leveraging our community feature, helping you connect with a wider audience seamlessly.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRhc2hib2FyZCUyMHRlY2h8ZW58MHx8MHx8fDA%3D",
      title: "Chat Dashboard",
      description:
        "Easily access conversations and contacts through a powerful dashboard to strengthen connections and drive growth.",
    },
  ];

  return (
    <div>
      <div className="gap-x-5 mx-auto px-3 sm:px-10 lg:px-20 py-10 md:py-20 my-10 md:pb-28">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary">
          Product Highlights
        </h1>
        <p className="text-lg my-2 md:my-5 mb-8 text-black/80 w-full md:w-[40%]">
          Built to Solve Problems in a Way No One Else Does, With Innovative{" "}
          Solutions Tailored to Your Unique Needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-secondary/30 border-primary/50 hover:bg-secondary/60 transition-all rounded-3xl p-8 group"
            >
              <div className="mb-7 relative flex items-center">
                <PiAndroidLogoThin className="text-4xl md:text-5xl absolute group-hover:opacity-0 transition-opacity duration-200 ease-in-out" />
                <PiAndroidLogoFill className="text-4xl md:text-5xl text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out" />
              </div>
              <motion.h3
                className="text-2xl md:text-3xl font- text-black/90 mb-4 text-start group-hover:text-primary transition-all duration-200 ease-in-out"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-black/70 text-lg text-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.3 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
