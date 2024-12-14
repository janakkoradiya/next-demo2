import React from "react";
import { useRouter } from "next/router";

const ReadyToStart = () => {
  const router = useRouter();
  return (
    <div className="py-10 px-4 md:px-10 lg:px-20 -mb-10">
      <div className="w-full flex flex-col text-center justify-center items-center bg-primary/10 p-16 md:p-32 rounded-t-[3rem]">
        <h1
          className="text-4xl md:text-5xl text-primary mb-5 font- w-full md:w-[60%] mx-auto "
          style={{ lineHeight: "55px" }}
        >
          Ready to Start Creating Your Personalized Chatbot?
        </h1>
        <p className="text-[17px] md:text-[19px] mb-10 w-full md:w-[64%] mx-auto text-black/80">
          Empower your business with a chatbot tailored to your needs. Sign up
          now and experience how automation can transform your customer
          interactions.
        </p>
        <button
          onClick={() => router.push("/auth/login")}
          className="bg-primary px-6 py-3 rounded-full text-base text-white hover:bg-primary/90 transition-all duration-200"
        >
          Sign Up for free
        </button>
      </div>
    </div>
  );
};

export default ReadyToStart;
