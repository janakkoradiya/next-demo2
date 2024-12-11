import HeroSection from "@/src/components/home/HeroSection";
import Navbar from "@/src/components/Navbar";
import { useRouter } from "next/router";
import AboutProduct from "@/src/components/home/AboutProduct";
import WhyChooseUs from "@/src/components/home/WhyChooseUs";
import BetterValue from "@/src/components/home/BetterValue";
import Features from "@/src/components/home/Features";

const Home = () => {
  const router = useRouter();
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AboutProduct />
      <WhyChooseUs />
      <BetterValue/>
      <Features/>
    </div>
  );
};

export default Home;
