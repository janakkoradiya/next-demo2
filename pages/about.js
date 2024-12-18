import React from "react";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import AboutUs from "@/src/components/contact/AboutUs";
import ReadyToStart from "@/src/components/contact/ReadyToStart";

const about = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <ReadyToStart />
      <Footer />
    </div>
  );
};

export default about;
