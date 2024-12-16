"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/router";

import { TbMessageChatbotFilled } from "react-icons/tb";
import { FaCircleUser } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
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

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll effect on home page
      if (pathname === "/home" || pathname === "/") {
        if (window.scrollY > (20 * window.innerHeight) / 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        // Force white background for other routes
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // TODO: Replace this with actual authentication logic
  useEffect(() => {
    // Example: Check for authentication token or user session
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <nav
        className={`${
          isScrolled
            ? "bg-white"
            : pathname === "/home" || pathname === "/"
            ? "bg-secondary/0"
            : "bg-white"
        } border-primary/10 w-full flex justify-between items-center p-4 px-6 py-6 shadow-primary/10 fixed top-0 left-1/2 transform -translate-x-1/2 z-[10000]`}
      >
        <Link href="/" className="font-bold text-xl pl-2 flex items-center">
          {" "}
          <TbMessageChatbotFilled className="text-[28px] mr-2 mt-[2px]" />{" "}
          <span className="text-[24px] font-extrabold">ChatBot</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="hover:text-primary text-black/90 text-[18px] font-medium border-b border-transparent hover:border-b hover:border-primary"
            >
              <button onClick={() => router.push(link.href)}>{link.label}</button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <Link
              href="/profile"
              className="hover:bg-gray-100 p-2 rounded-full"
            >
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <FaCircleUser className="w-6 h-6 text-gray-600" />
              </div>
            </Link>
          ) : (
            <Link
              href="/auth/login"
              className="bg-primary font-medium hover:bg-primary/90 text-white px-6 py-3 rounded-full text-sm"
            >
              Login
            </Link>
          )}
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
              {isLoggedIn ? (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  style={{ transitionDelay: `${navLinks.length * 0.1}s` }}
                >
                  <Link
                    href="/profile"
                    className="block w-full text-center flex items-center justify-center space-x-2 bg-gray-100 text-black py-2 rounded-full hover:bg-gray-200"
                    onClick={toggleMobileMenu}
                  >
                    <FaCircleUser className="w-5 h-5" />
                    <span>Profile</span>
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  style={{ transitionDelay: `${navLinks.length * 0.1}s` }}
                >
                  <Link
                    href="/auth/login"
                    className="block w-full text-center bg-primary text-white py-2 rounded-full hover:bg-primary/90"
                    onClick={toggleMobileMenu}
                  >
                    Login
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
