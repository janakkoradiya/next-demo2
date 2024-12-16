import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";
import ScrollDownArrow1 from "./ScrollDownArrow1";

const TemplateHero1 = () => {
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
    <div className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#D7E1BC] to-[#CDDAAC]">
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
          src="https://cdn.shopify.com/s/files/1/0250/7571/2047/files/feature-161_480x480.webp?v=1690542158"
          alt="User Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-sm"
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
          className="text-3xl font-bold text-[#4f631b]"
        >
          Monica
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
          className="text-[18px] text-[#4f631b]/90 mt-1"
        >
          Head Chef
        </motion.p>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex space-x-5 mt-7"
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
            className={`text-[#4f631b]/80 ${social.color} transition-colors duration-300 ease-in-out`}
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
        className="mt-12 px-6 py-3 text-[#4f631b]  rounded-full shadow-lg transition-colors flex items-center space-x-2"
      >
        <span>Let's Chat</span>
      </motion.p>

      {/* Animated Scroll Indicator */}
      <ScrollDownArrow1 />
    </div>
  );
};

export default TemplateHero1;
