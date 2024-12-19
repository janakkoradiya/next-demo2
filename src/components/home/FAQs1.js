// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const faqs = [
//   {
//     question: "What makes your chatbot platform unique?",
//     answer:
//       "Our platform stands out with its advanced AI capabilities, intuitive interface, and community-based features that help businesses create more engaging and personalized conversations with their users.",
//   },
//   {
//     question: "How easy is it to set up a chatbot?",
//     answer:
//       "Setting up a chatbot is incredibly simple with our platform. Our user-friendly interface allows you to create and customize your chatbot in minutes, with no coding experience required.",
//   },
//   {
//     question: "What kind of support do you offer?",
//     answer:
//       "We provide 24/7 technical support, comprehensive documentation, video tutorials, and a dedicated customer success team to help you get the most out of our platform.",
//   },
//   {
//     question: "Can I customize the chatbot's appearance?",
//     answer:
//       "Yes, absolutely! Our platform offers extensive customization options for your chatbot's appearance, including themes, colors, fonts, and custom CSS to match your brand identity perfectly.",
//   },
// ];

// const FAQsLightMode = () => {
//   const [openIndex, setOpenIndex] = useState(1); // Second question opens by default

//   const toggleFaq = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="bg-secondary  py-20 md:py-28 flex items-center justify-center px-4 sm:px-6">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//         {/* Left Section */}
//         <div className="md:space-y-2 flex flex-col justify-center text-center md:text-left">
//           <h1 className="text-black/90 text-3xl md:text-5xl font-extrabold">
//             Any{" "}
//             <span className="text-transparent font-extrabold bg-clip-text bg-primary">
//               Questions?
//             </span>
//           </h1>
//           <h2 className="text-black/90 text-3xl md:text-5xl font-extrabold">
//             We have Answers!
//           </h2>
//           <div className="flex flex-col md:items-start">
//             <p className=" text-black/70 text-base md:text-lg md:text-left mt-3">
//               Don't find your answer here? Just send us a message for
//             </p>
//             <p className=" text-black/70 text-base md:text-lg md:text-left">
//               any query.
//             </p>
//           </div>
//         </div>

//         {/* Right Section - FAQ */}
//         <div className="mt-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="mb-2">
//               {/* Question */}
//               <motion.button
//                 className={`w-full text-left flex justify-between items-center py-4 ${
//                   openIndex === index ? "text-primary" : "text-black"
//                 }`}
//                 onClick={() => toggleFaq(index)}
//               >
//                 <span className="text-black/90 font-bold text-base md:text-lg">
//                   {faq.question}
//                 </span>
//                 <motion.span className="transform origin-center text-sm md:text-base">
//                   {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
//                 </motion.span>
//               </motion.button>

//               {/* Answer and HR */}
//               <AnimatePresence>
//                 {openIndex === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="text-black/70 mt-2 text-sm md:text-base"
//                   >
//                     <p>{faq.answer}</p>
//                     <hr className="border-t border-gray-300 mt-4" />
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Horizontal Line when Question is Closed */}
//               {openIndex !== index && (
//                 <hr className="border-t border-gray-300" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQsLightMode;

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useRouter } from "next/router";
import { GoArrowUpRight } from "react-icons/go";

const faqs = [
  {
    question: "Who can use this tool?",
    answer:
      "The tool is designed to be versatile and can be used by businesses of any size, from startups to large enterprises, as well as by individual users looking to create chatbots for personal or professional projects.",
  },
  {
    question: "Do I need coding knowledge?",
    answer:
      "No, you don’t need any coding experience. The tool is entirely no-code and built to be user-friendly for anyone, regardless of technical expertise.",
  },
  {
    question: "Are there pre-built templates?",
    answer:
      "Yes, the tool includes a library of pre-designed templates to help you get started quickly. Alternatively, you can create a chatbot from scratch to suit your specific needs.",
  },
  {
    question: "What are the pricing plans?",
    answer:
      "We offer a flexible pay-as-you-go pricing model, ensuring you only pay for the features and usage that you need, making it cost-effective for all users.",
  },
];

const FAQsLightMode = () => {
  const [openIndex, setOpenIndex] = useState(); // Second question opens by default
  const router = useRouter();

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 sm:px-10 mb-20">
      <div className="py-10 bg-secondary md:py-24 flex items-center justify-center px-10 md:px-20 rounded-[4rem]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12">
          {/* Left Section with animation triggered on scroll into view */}
          <motion.div
            className="md:space-y-2 flex flex-col py-8 md:text-left"
            initial={{ x: -200, opacity: 0 }} // Initial position (off-screen to the left)
            whileInView={{ x: 0, opacity: 1 }} // Animates when the section is in view
            viewport={{ once: true }} // Trigger animation once
            transition={{ duration: 1, ease: "easeOut" }} // Animation settings
          >
            <h1 className="text-black/90 text-3xl md:text-5xl font-medium">
              Any{" "}
              <span className="text-transparent font-medium bg-clip-text bg-primary">
                Questions?
              </span>
            </h1>
            <h2 className="text-black/90 text-3xl md:text-5xl font-medium">
              We have Answers!
            </h2>
            <div className="flex flex-col md:items-start">
              <button
                onClick={() => router.push("/contact")}
                className="text-[20px] text-primary flex space-x-1 group transition-all ease-in-out duration-200 font-medium items-center pb-1 border-b w-fit border-primary mt-5 md:mt-6"
              >
                <span>Contact Us</span>{" "}
                <GoArrowUpRight className="group-hover:ml-2.5 transition-all ease-in-out duration-300" />
              </button>
            </div>
          </motion.div>

          {/* Right Section - FAQ with staggered animation triggered on scroll into view */}
          <motion.div
            className="mt-4 md:mt-0"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }, // Stagger the animation of each FAQ
            }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                {/* Question */}
                <motion.button
                  className={`w-full text-left flex justify-between items-center py-4 group group-hover:text-primary ${
                    openIndex === index ? "text-primary" : "text-black"
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-black/90 group-hover:text-primary font-medium text-base md:text-[20px]">
                    {faq.question}
                  </span>
                  <motion.span className="transform origin-center text-sm md:text-base group-hover:text-primary">
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </motion.span>
                </motion.button>

                {/* Answer and HR */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-black/70 mt-2 text-sm md:text-lg"
                    >
                      <p>{faq.answer}</p>
                      <hr className="border-t border-gray-300 mt-4" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Horizontal Line when Question is Closed */}
                {openIndex !== index && (
                  <hr className="border-t border-gray-300" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQsLightMode;
