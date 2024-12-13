"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/router";


const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "./../../../home", label: "Home" },
    { href: "./../../../templates", label: "Templates" },
    { href: "./../../../pricing", label: "Pricing" },
    { href: "./../../../contact", label: "Contact" },
    { href: "./../../../profile", label: "Profile" },
  ];

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.3,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const toggleMobileMenu = (route) => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    router.push(route)
  };

  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <nav className="bg-white border border-primary/10 rounded-full w-[98%] sm:w-[90%] flex justify-between items-center p-4 px-4 shadow-lg shadow-primary/10 fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <button onClick={() => router.push("./../../../home")} className="font-bold text-xl pl-2">
          {" "}
          LOGO
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="hover:text-purple-800 border-b border-white hover:border-b hover:border-primary"
            >
              <button onClick={() => router.push(link.href)}>{link.label}</button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button
            onClick={() => { router.push('./../../../auth/login')}}
            className="bg-primary font-medium hover:bg-primary/90 text-white px-6 py-3 rounded-full text-sm"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="fixed top-20 left-0 right-0 bg-white shadow-lg z-40 md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <p
                    className="block py-2 text-lg hover:text-purple-800 border-b border-gray-200 cursor-pointer"
                    onClick={() => {toggleMobileMenu(link.href)}}
                  >
                    {link.label}
                  </p>
                </motion.div>
              ))}

              <motion.div
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                style={{ transitionDelay: `${navLinks.length * 0.1}s` }}
              >
                <button
                  className="block w-full text-center bg-primary text-white py-2 rounded-full hover:bg-primary/90"
                  onClick={() => {toggleMobileMenu('./../../auth/login')}}
                >
                  Login
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
