import React, { useRef } from "react";

const ChartVideoSec = () => {
  // Reference to the video element
  const videoRef = useRef(null);

  // Pause video on hover
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Play video when hover ends
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div
      className="w-[97%] md:w-[90%] lg:w-[70%] mx-auto mt-32 relative overflow-hidden"
      style={{ aspectRatio: "16 / 5" }} // Ensures a consistent aspect ratio
      //   onMouseEnter={handleMouseEnter}
      //   onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="w-full h-[300px] object-cover"
        src="/chartvdo.mp4" // Ensure this video is in your public folder
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default ChartVideoSec;
