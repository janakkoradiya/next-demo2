import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiRobot3Fill } from "react-icons/ri";
import { RiSendPlaneFill } from "react-icons/ri";

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: input },
      ]);
      setInput("");

      // Mock bot reply
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "I'm here to help!" },
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-[#A8B881] shadow-lg p-4 hidden md:block py-5">
        <div className="text-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0250/7571/2047/files/feature-161_480x480.webp?v=1690542158"
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />
          <h2 className="mt-4 text-[#4f631b] text-xl font-bold">Monica</h2>
          {/* <p className="text-black/50 mt-1">Chatbot Creator</p> */}
          {/* <div className="flex justify-center mt-4 space-x-4">
            <a
              href="#"
              className="text-black/30 hover:text-black/90 transition-all duration-200 ease-in-out"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="text-black/30 hover:text-black/90 transition-all duration-200 ease-in-out"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-black/30 hover:text-black/90 transition-all duration-200 ease-in-out"
            >
              <FaLinkedin size={24} />
            </a>
          </div> */}
          <p className="mt-4 text-sm font-medium text-[#4f631b]/80">
            This chatbot is designed to assist with your queries and provide
            information.
          </p>
        </div>
      </aside>

      {/* Chat Window */}
      <div
        className="w-full flex flex-col flex-1 h-full"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/30/da/b2/30dab26c1914666aed1ae752c354964f.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-1 overflow-y-auto p-4 w-full bg-black/0">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-3 w-full flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "bot" && (
                <p className="w-7 h-7 bg-[#4f631b] flex justify-center items-center rounded-full mt-1.5 mr-2">
                  <RiRobot3Fill className="text-lg text-white" />
                </p>
              )}
              <div
                className={`max-w-2xl px-4 py-2 text-[15px] rounded-lg break-words overflow-wrap-anywhere ${
                  message.sender === "user"
                    ? "bg-black/10 text-right text-black"
                    : "bg-[#4f631b] text-white"
                }`}
              >
                {message.text}
              </div>
              {message.sender === "user" && (
                <FaUserCircle className="w-7 h-7 text-gray-500 ml-2 mt-1.5" />
              )}
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        {/* Input Box */}
        <div className="bg-transparent p-4  flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border bg-[#a8b881] text-[#4f631b] placeholder:text-[#4f631b]/60 rounded-3xl focus:outline-none focus:ring-none"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 p-2 flex justify-center items-center bg-[#697e37] text-white rounded-lg hover:bg-[#CDDBAC]/90 focus:outline-none focus:ring-none"
          >
            <RiSendPlaneFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
