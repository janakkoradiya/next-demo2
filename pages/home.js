import HeroSection from "@/src/components/home/HeroSection";
import Navbar from "@/src/components/Navbar";
import { useRouter } from "next/router";
import AboutProduct from "@/src/components/home/AboutProduct";
import WhyChooseUs from "@/src/components/home/WhyChooseUs";
import BetterValue from "@/src/components/home/BetterValue";
import Features from "@/src/components/home/Features";
import FoldEffect from "@/src/components/home/FoldEffect";
import Footer from "@/src/components/Footer";
import FAQs1 from "@/src/components/home/FAQs1";
import WhyChooseUs2 from "@/src/components/home/WhyChooseUs2";

const Home = () => {
  const router = useRouter();
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AboutProduct />
      {/* <WhyChooseUs /> */}
      <FoldEffect />
      <BetterValue />
      <Features />
      <WhyChooseUs2/>
      <FAQs1 />
      <div className="mt-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
