import HeroSection from "@/src/components/home/HeroSection";
import Navbar from "@/src/components/Navbar";
import { useRouter } from "next/router";
import AboutProduct from "@/src/components/home/AboutProduct";
import WhyChooseUs from "@/src/components/home/WhyChooseUs";
import BetterValue from "@/src/components/home/BetterValue";
import Features from "@/src/components/home/Features";
import FoldEffect from "@/src/components/home/FoldEffect";
import Footer from "@/src/components/Footer";
import FAQs from "@/src/components/home/FAQs";

const Home = () => {
  const router = useRouter();
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AboutProduct />
      <WhyChooseUs />
      <FoldEffect />
      <BetterValue />
      <Features />
      <FAQs />
      <div className="mt-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
