"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  const faqs = [
    {
      question: "What makes your chatbot platform unique?",
      answer:
        "Our platform stands out with its advanced AI capabilities, intuitive interface, and community-based features that help businesses create more engaging and personalized conversations with their users.",
    },
    {
      question: "How easy is it to set up a chatbot?",
      answer:
        "Setting up a chatbot is incredibly simple with our platform. Our user-friendly interface allows you to create and customize your chatbot in minutes, with no coding experience required.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide 24/7 technical support, comprehensive documentation, video tutorials, and a dedicated customer success team to help you get the most out of our platform.",
    },
    {
      question: "Can I customize the chatbot's appearance?",
      answer:
        "Yes, absolutely! Our platform offers extensive customization options for your chatbot's appearance, including themes, colors, fonts, and custom CSS to match your brand identity perfectly.",
    },
  ];

  return (
    <div className="w-full bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 py-20 md:py-28">
        <h2 className="text-3xl md:text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        {/* <div className="w-[80px] h-1 rounded-xl bg-primary mb-12 mx-auto"></div> */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border border-gray-200 rounded-lg overflow-hidden"
      initial={false}
    >
      <motion.button
        className="w-full bg-white/30 p-4 text-left hover:bg-primary/5 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="transform origin-center"
        >
          ↓
        </motion.span>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-4 bg-white/10 text-gray-600">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQs;
