import React from "react";

const Features = () => {
  const features = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1677094310918-cc302203b21c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Easy Chatbot Creation",
      description:
        "Build your own chatbot effortlessly in just a few simple steps, no technical expertise needed.",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Shareable Chatbot Links",
      description:
        "Share your chatbot link with anyone, making it easy for users to interact with you from anywhere.",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/woman-texting-couch_53876-96946.jpg?t=st=1733911812~exp=1733915412~hmac=b38f8bf45dcabd66fc78fe2c4c89ba541f7bc4cc17fb1fd56f68742786d91823&w=1380",
      title: "Community Integration",
      description:
        "Expand your reach by leveraging our community feature, helping you connect with a wider audience seamlessly.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRhc2hib2FyZCUyMHRlY2h8ZW58MHx8MHx8fDA%3D",
      title: "Chat Dashboard",
      description:
        "Easily access conversations and contacts through a powerful dashboard to strengthen connections and drive growth.",
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-3 sm:px-10 lg:px-20 py-12 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg transition-shadow duration-300 group "
            >
              <div className="flex justify-center mb-4 overflow-hidden rounded-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[150px] object-cover border transform transition-transform duration-300 group-hover:scale-105 group-hover:opacity-80"
                />
              </div>
              <h3 className="text-md font-semibold text-black/90 mb-2 text-start">
                {feature.title}
              </h3>
              <div className="w-full h-[0.5px] bg-black/10 mb-2"></div>
              <p className="text-black/70 text-sm text-start">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
