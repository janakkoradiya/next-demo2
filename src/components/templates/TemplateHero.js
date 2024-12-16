import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";
import ScrollDownArrow from "./ScrollDownArrow";

const TemplateHero = () => {
  const socialLinks = [
    { icon: FaGithub, href: "#", color: "hover:text-gray-800" },
    { icon: FaLinkedin, href: "#", color: "hover:text-blue-600" },
    { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-500" },
  ];

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Profile Image with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.4,
        }}
      >
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/chandler-bing-023401675-16x9_0.jpg?VersionId=AWOx3Tr1LfXJ7QYkmNdGeMkd54BKhs65&size=690:388"
          alt="User Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl"
        />
      </motion.div>

      {/* User Name with Stagger Animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="text-center mt-6"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.3,
              },
            },
          }}
          className="text-3xl font-bold text-gray-800"
        >
          Chandler
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.5,
              },
            },
          }}
          className="text-xl text-gray-600 mt-2"
        >
          Statistical Analysis Executive
        </motion.p>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex space-x-5 mt-6"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.7 + index * 0.1,
                },
              },
            }}
            className={`text-black/40 ${social.color} transition-colors duration-300 ease-in-out`}
          >
            <social.icon size={25} />
          </motion.a>
        ))}
      </motion.div>

      {/* Let's Chat Button with Scroll Animation */}
      <motion.p
        onClick={scrollToContent}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 px-6 py-3 text-primary  rounded-full shadow-lg hover:text-primary/90 transition-colors flex items-center space-x-2"
      >
        <span>Let's Chat</span>
      </motion.p>

      {/* Animated Scroll Indicator */}
      <ScrollDownArrow />
    </div>
  );
};

export default TemplateHero;
