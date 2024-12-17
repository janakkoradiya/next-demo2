import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Template from "@/src/components/templates/Template";
import TemplateHero from "@/src/components/templates/TemplateHero";

const Templates = () => {
  const containerRef = useRef(null); // Ref for the scroll container
  const { scrollYProgress } = useScroll({
    container: containerRef, // Attach scrolling listener to the container
  });

  // Transform for TemplateHero and Template1
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-30%"]);

  const template1Opacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  const template1Y = useTransform(scrollYProgress, [0.3, 1], ["30%", "0%"]);

  // Ensure the page loads at the top
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0); // Scroll to the top on page load
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar"
    >
      {/* TemplateHero Section */}
      <motion.div
        className="snap-start"
        style={{
          opacity: heroOpacity,
          y: heroY,
        }}
      >
        <TemplateHero />
      </motion.div>

      {/* Template1 Section */}
      <motion.div
        className="snap-start"
        style={{
          opacity: template1Opacity,
          y: template1Y,
        }}
      >
        <Template />
      </motion.div>
    </div>
  );
};

export default Templates;

// =========================================================================================================
// faded animation
// =========================================================================================================

// import React, { useRef, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Template from "@/src/components/templates/Template";
// import TemplateHero from "@/src/components/templates/TemplateHero";

// const Templates = () => {
//   const containerRef = useRef(null); // Ref for the scroll container
//   const { scrollYProgress } = useScroll({
//     container: containerRef, // Attach scrolling listener to the container
//   });

//   // TemplateHero animations
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
//   const heroTranslateY = useTransform(
//     scrollYProgress,
//     [0, 0.3],
//     ["0%", "-40%"]
//   );
//   const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
//   const heroRotate = useTransform(scrollYProgress, [0, 0.3], ["0deg", "10deg"]);

//   // Template1 animations
//   const templateOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
//   const templateTranslateY = useTransform(
//     scrollYProgress,
//     [0.3, 1],
//     ["40%", "0%"]
//   );
//   const templateScale = useTransform(scrollYProgress, [0.3, 1], [0.8, 1]);
//   const templateRotate = useTransform(
//     scrollYProgress,
//     [0.3, 1],
//     ["-10deg", "0deg"]
//   );

//   // Ensure the page loads at the top
//   useEffect(() => {
//     if (containerRef.current) {
//       containerRef.current.scrollTo(0, 0); // Scroll to the top on page load
//     }
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar bg-black/20"
//     >
//       {/* TemplateHero Section */}
//       <motion.div
//         className="snap-start "
//         style={{
//           opacity: heroOpacity,
//           translateY: heroTranslateY,
//           scale: heroScale,
//           rotate: heroRotate,
//         }}
//       >
//         <TemplateHero />
//       </motion.div>

//       {/* Template Section */}
//       <motion.div
//         className="snap-start "
//         style={{
//           opacity: templateOpacity,
//           translateY: templateTranslateY,
//           scale: templateScale,
//           rotate: templateRotate,
//         }}
//       >
//         <Template />
//       </motion.div>
//     </div>
//   );
// };

// export default Templates;

// =========================================================================================================
// new animation 3
// =========================================================================================================

// import React, { useRef, useEffect } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import Template from "@/src/components/templates/Template";
// import TemplateHero from "@/src/components/templates/TemplateHero";

// const Templates = () => {
//   const containerRef = useRef(null); // Ref for the scroll container
//   const { scrollYProgress } = useScroll({
//     container: containerRef, // Attach scrolling listener to the container
//   });

//   // TemplateHero animations with dynamic 3D effects and subtle motion blur
//   const heroTranslateY = useTransform(
//     scrollYProgress,
//     [0, 0.2],  // Speed up the transition range
//     ["0%", "-60%"]  // Increase the speed of translation
//   );
//   const heroScale = useTransform(
//     scrollYProgress,
//     [0, 0.2],  // Speed up scaling range
//     [1, 1.1]  // Slightly less scaling to make it feel snappy
//   );
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

//   // Template animations with layered parallax and smoothing effects
//   const templateOpacity = useTransform(scrollYProgress, [0.2, 1], [0, 1]);
//   const templateTranslateY = useTransform(
//     scrollYProgress,
//     [0.2, 1],  // Adjust scroll range for faster transitions
//     ["30%", "0%"]  // Increase the speed of vertical movement
//   );
//   const templateScale = useTransform(scrollYProgress, [0.2, 1], [0.9, 1]);

//   // Add spring for smoother, bouncy transitions
//   const springTemplateOpacity = useSpring(templateOpacity, {
//     stiffness: 1000,  // Increased stiffness for faster response
//     damping: 20,  // Slightly reduced damping for faster movement
//   });
//   const springHeroOpacity = useSpring(heroOpacity, {
//     stiffness: 1000,
//     damping: 20,
//   });

//   // Ensure the page loads at the top
//   useEffect(() => {
//     if (containerRef.current) {
//       containerRef.current.scrollTo(0, 0); // Scroll to the top on page load
//     }
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-full h-screen overflow-y-scroll hide-scrollbar bg-black/20"
//     >
//       {/* TemplateHero Section with dynamic scaling and smooth opacity change */}
//       <motion.div
//         className=""
//         style={{
//           opacity: springHeroOpacity,
//           translateY: heroTranslateY,
//           scale: heroScale,
//         }}
//       >
//         <TemplateHero />
//       </motion.div>

//       {/* Template Section with layered parallax and smooth transitions */}
//       <motion.div
//         className="flex items-center justify-center min-h-screen"
//         style={{
//           opacity: springTemplateOpacity,
//           translateY: templateTranslateY,
//           scale: templateScale,
//         }}
//       >
//         <Template />
//       </motion.div>
//     </div>
//   );
// };

// export default Templates;
