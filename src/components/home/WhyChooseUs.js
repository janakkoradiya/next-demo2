"use client";
import { motion } from "framer-motion";

const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto px-2 md:px-10 lg:px-20 py-20 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-xl text-4xl font-bold md:text-5xl">
          Why Choose Us
          <span className="text-primary/30"> Over the Competition?</span>
        </h2>
      </div>

      <div className="">
        <BounceCard className="w-full">
          <CardTitle>
            Our platform isn't just a chatbot builder, it's a game-changer.
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl bg-primary p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[1deg]">
            <span className="block text-center font-medium text-xl text-white/90 px-10 py-7">
              With innovative features, enhanced conversational capabilities,
              and robust customization, we deliver a unique and engaging user
              experience to keep you ahead of the curve. One standout feature is
              our <strong>community-based functionality</strong>, designed to
              amplify your reach by connecting you with a broader audience. This
              powerful tool allows businesses and individuals to expand their
              network, generate more leads, and strengthen relationships with
              their users. Choose us for cutting-edge features, unparalleled
              support, and a commitment to helping you grow in ways our
              competitors simply can't match.
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[400px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold py-3">
      {children}
    </h3>
  );
};

export default BouncyCardsFeatures;
