import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 sm:max-w-full pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className=" text-2xl font-bold text-secondary mb-4">ChatBot</h2>
            <p className="text-white/70 font-normal mb-6 w-full lg:w-[96%]">
              Empowering businesses with intelligent conversational AI
              solutions. Transform your customer experience with our
              cutting-edge chatbot platform.
            </p>
            <div className="flex space-x-4 items-center">
              <Link
                href="https://github.com"
                className="text-white/70 font-normal hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail className="w-6 h-6 scale-105" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-white/70 font-normal hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-white/70 font-normal hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className=" lg:ml-10">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => router.push('./../../../home')}
                  className="text-white/70 font-normal hover:underline transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => router.push('./../../../about')}
                  className="text-white/70 font-normal hover:underline transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => router.push('./../../../features')}
                  className="text-white/70 font-normal hover:underline transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => router.push('./../../../pricing')}
                  className="text-white/70 font-normal hover:underline transition-colors"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70 font-normal">
              <li>123 AI Street</li>
              <li>Tech Valley, CA 94025</li>
              <li>contact@chatbot.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/30 mt-12 pt-8">
          <p className="text-center text-white/70 font-normal">
            © {new Date().getFullYear()} ChatBot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
