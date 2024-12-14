import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";

const planData = [
  {
    plan: "Starter",
    features: [true, true, true, false, false, false, false, false],
    price: "Free",
  },
  {
    plan: "Essential",
    features: [true, true, true, true, false, false, false, false],
    price: "$15",
  },
  {
    plan: "Professional",
    features: [true, true, true, true, true, true, false, false],
    price: "$30",
  },
  {
    plan: "Enterprise",
    features: [true, true, true, true, true, true, true, true],
    price: "$50",
  },
];

const featureList = [
  "Debugging Traces",
  "Dataset Collection",
  "Human Labeling",
  "Testing and Evaluation",
  "Prompt Management",
  "Monitoring",
  "Bulk Data Export",
  "Price",
];

const PriceTable = () => {
  return (
    <div className="max-w-7xl mx-auto bg-secondary/15 px-10 p-6 rounded-3xl shadow-sm my-20 mb-32">
      {/* Add horizontal scrolling for smaller screens */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border-b border-black/10">
          <thead className="">
            <tr className="rounded-3xl border-primary/20 border-b text-primary text-[20px]">
              <th className="text-left p-4 py-6 font-normal">Features</th>
              {planData.map((plan, idx) => (
                <th key={idx} className="text-center p-4 py-6 font-normal">
                  {plan.plan}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureList.map((feature, featureIdx) => (
              <tr key={featureIdx} className="border-t border-black/5">
                <td className="p-4 text-gray-700">{feature}</td>
                {planData.map((plan, planIdx) => (
                  <td key={planIdx} className="text-center p-4 py-5">
                    {featureIdx < featureList.length - 1 ? (
                      plan.features[featureIdx] ? (
                        <span className="text-black text-[22px] text-center w-full flex justify-center items-center">
                          <IoCheckmarkCircle />
                        </span>
                      ) : (
                        <span className="text-black/30">—</span>
                      )
                    ) : (
                      <span className="text-primary font-semibold">
                        {plan.price}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable;
