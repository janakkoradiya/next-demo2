import React from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
  // Animation variants for the videos
  const videoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="flex justify-center items-center px-3 md:px-10 lg:px-20 md:py-10 md:mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        {/* Video 1 */}
        <motion.video
          variants={videoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          autoPlay
          loop
          muted
          className="w-full md:w-1/2 h-[220px] md:h-[320px] lg:h-[420px] object-cover rounded-[1.5rem]"
        >
          <source src="/vid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        {/* Video 2 */}
        <motion.video
          variants={videoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          autoPlay
          loop
          muted
          className="w-full md:w-1/2 h-[220px] md:h-[320px] lg:h-[420px] object-cover rounded-[1.5rem]"
        >
          <source src="/vid2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </div>
  );
};

export default VideoSection;
