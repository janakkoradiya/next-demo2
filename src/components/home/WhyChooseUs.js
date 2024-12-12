"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const BouncyCardsFeatures = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-20 -mt-9 text-slate-800">
      <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={titleVariants}
        className="mb-6 sm:mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-4 lg:px-8"
      >
        <h2 className="max-w-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Why Choose Us
          <span className="text-primary/30 block sm:inline">
            {" "}
            Over the Competition?
          </span>
        </h2>
      </motion.div>

      <div className="w-full">
        <BounceCard className="w-full">
          <CardTitle>
            Our platform isn't just a chatbot builder, it's a game-changer.
          </CardTitle>
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 4, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-4 right-4 md:top-22 translate-y-4 rounded-t-2xl bg-primary p-4"
          >
            <span className="block text-center font-medium text-base sm:text-lg md:text-xl text-white/90 px-2 sm:px-6 md:px-10 py-4  sm:py-5 md:py-7">
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
          </motion.div>
          {/* Additional div for small screens */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:hidden mt-4 text-center font-medium text-base sm:text-lg text-slate-700 px-4 sm:px-6 py-4 pb-6"
          >
            With innovative features, enhanced conversational capabilities, and
            robust customization, we deliver a unique and engaging user
            experience to keep you ahead of the curve. One standout feature is
            our <strong>community-based functionality</strong>, designed to
            amplify your reach by connecting you with a broader audience. This
            powerful tool allows businesses and individuals to expand their
            network, generate more leads, and strengthen relationships with
            their users. Choose us for cutting-edge features, unparalleled
            support, and a commitment to helping you grow in ways our
            competitors simply can't match.
          </motion.div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 0.98 }}
      className={`group relative min-h-[500px] sm:min-h-[550px] md:min-h-[350px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-4 sm:p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-xl sm:text-2xl md:text-3xl font-semibold py-5 pb-7 sm:pb-4 sm:py-3">
      {children}
    </h3>
  );
};

export default BouncyCardsFeatures;
