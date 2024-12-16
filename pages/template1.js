import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TemplateHero1 from "@/src/components/template1/TemplateHero1";
import Template1 from "@/src/components/template1/Template1";

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
      className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar bg-[#A8B881]"
    >
      {/* TemplateHero Section */}
      <motion.div
        className="snap-start"
        style={{
          opacity: heroOpacity,
          y: heroY,
        }}
      >
        <TemplateHero1 />
      </motion.div>

      {/* Template1 Section */}
      <motion.div
        className="snap-start"
        style={{
          opacity: template1Opacity,
          y: template1Y,
        }}
      >
        <Template1 />
      </motion.div>
    </div>
  );
};

export default Templates;
