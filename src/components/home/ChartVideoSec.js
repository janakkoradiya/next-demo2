import React from "react";

const ChartVideoSec = () => {
  return (
    <div className="w-full lg:w-[90%] mx-auto h-[400px] md:h-[600px] relative overflow-hidden -mt-10 -mb-40 md:mt-0 md:-mb-32 lg:-mb-10">
      <video
        className="w-full h-full object-contain"
        src="/chartvdo.mp4" // Replace 'video.mp4' with the actual file name in your public folder
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default ChartVideoSec;
