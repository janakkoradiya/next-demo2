import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiRobot3Fill } from "react-icons/ri";

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
      <aside className="w-1/4 bg-white shadow-lg p-4 hidden md:block py-5">
        <div className="text-center">
          <img
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/chandler-bing-023401675-16x9_0.jpg?VersionId=AWOx3Tr1LfXJ7QYkmNdGeMkd54BKhs65&size=690:388"
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />
          <h2 className="mt-4 text-lg font-bold">Chandler</h2>
          <p className="text-gray-600">Chatbot Creator</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="#"
              className="text-black hover:text-black/90 transition-all duration-200 ease-in-out"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="text-black hover:text-black/90 transition-all duration-200 ease-in-out"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-black hover:text-black/90 transition-all duration-200 ease-in-out"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            This chatbot is designed to assist with your queries and provide
            information.
          </p>
        </div>
      </aside>

      {/* Chat Window */}
      <div className="w-full flex flex-col flex-1 h-full">
        <div className="flex-1 overflow-y-auto p-4 w-full mb-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-3 w-full flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "bot" && (
                <p className="w-7 h-7 bg-primary flex justify-center items-center rounded-full mt-1.5 mr-2">
                  <RiRobot3Fill className="text-lg text-white" />
                </p>
              )}
              <div
                className={`max-w-2xl px-4 py-2 text-[15px] rounded-lg break-words overflow-wrap-anywhere ${
                  message.sender === "user"
                    ? "bg-black/10 text-right text-black"
                    : "bg-primary text-white"
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
        <div className="bg-white p-4 border-t flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-none"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-none"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
