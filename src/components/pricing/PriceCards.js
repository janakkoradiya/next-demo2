import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const PriceCards = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals exploring chatbot solutions.",
      price: "Free",
      features: [
        { name: "Basic Chatbot Builder", available: true },
        { name: "Pre-built Templates", available: true },
        { name: "Community Support", available: true },
        { name: "Custom Integrations", available: false },
      ],
    },
    {
      name: "Essential",
      description: "Ideal for small teams looking to grow their audience.",
      price: "$15/month",
      features: [
        { name: "Advanced Analytics", available: true },
        { name: "Team Collaboration", available: true },
        { name: "Custom Branding", available: false },
        { name: "Email Support", available: true },
      ],
    },
    {
      name: "Professional",
      description: "Designed for businesses scaling their operations.",
      price: "$30/month",
      features: [
        { name: "Custom Branding", available: true },
        { name: "API Access", available: true },
        { name: "Unlimited Chatbots", available: true },
        { name: "Priority Support", available: true },
      ],
    },
    {
      name: "Enterprise",
      description: "Tailored for large organizations with advanced needs.",
      price: "$50/month",
      features: [
        { name: "Dedicated Account Manager", available: true },
        { name: "Custom Features", available: true },
        { name: "24/7 Priority Support", available: true },
        { name: "Enterprise-level Security", available: true },
      ],
    },
  ];

  return (
    <div className="px-4 md:px-10 lg:px-16 mb-28 -mt-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-4 bg-primary/10 rounded-[1.5rem] p-6 sm:p-8 lg:p-10"
          >
            <div className="mb-4">
              <h1 className="text-2xl sm:text-3xl font-medium mb-4 text-primary">
                {plan.name}
              </h1>
              <p className="text-base sm:text-[17px] leading-6 font-medium text-black/80">
                {plan.description}
              </p>

              <p className="py-3 mt-5 font-semibold text-xl sm:text-2xl text-primary">
                {plan.price}
              </p>
            </div>

            <div>
              <ul className="flex flex-col gap-y-2">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-sm sm:text-base text-black"
                  >
                    {feature.available ? (
                      <IoIosCheckmarkCircleOutline className="text-[21px]" />
                    ) : (
                      <IoIosCloseCircleOutline className="text-[21px]" />
                    )}
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <button className="bg-primary hover:bg-primary/90 transition-all duration-200 text-white rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-[16px]">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCards;
