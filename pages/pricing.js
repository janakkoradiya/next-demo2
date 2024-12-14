import Footer from "@/src/components/Footer";
import FAQsLightMode from "@/src/components/home/FAQs1";
import Navbar from "@/src/components/Navbar";
import PriceCards from "@/src/components/pricing/PriceCards";
import PriceTable from "@/src/components/pricing/PriceTable";
import PricingHero from "@/src/components/pricing/PricingHero";
import React from "react";

const pricing = () => {
  return (
    <div>
      <Navbar />
      <PricingHero />
      <PriceCards/>
      <PriceTable/>
      <FAQsLightMode />
      <Footer />
    </div>
  );
};

export default pricing;
