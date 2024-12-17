import React, { useState, useEffect, useRef } from "react";
import {
  FaUserCircle,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaClipboard,
  FaShareAlt,
} from "react-icons/fa";
import { RiRobot3Fill } from "react-icons/ri";
import { MdContentCopy, MdCheck, MdOutlineAttachFile } from "react-icons/md";
import { HiOutlineShare } from "react-icons/hi2";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoAttach } from "react-icons/io5";
import { LuCircleCheckBig } from "react-icons/lu";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const ChatApp = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Welcome to our chatbot! I'm here to assist you with any questions, tasks, or information you need. Whether you're looking for advice, exploring options, or just curious, feel free to ask—I'm ready to help! How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [copiedMessageIndex, setCopiedMessageIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const chatEndRef = useRef(null);

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

  const handleCopy = (text, index) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedMessageIndex(index);
        setTimeout(() => setCopiedMessageIndex(null), 2000);
      })
      .catch((err) => console.error("Failed to copy text:", err));
  };

  const handleShare = (text) => {
    if (navigator.share) {
      navigator
        .share({
          title: "ChatBot Message",
          text: text,
          url: window.location.href,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: `📎 File attached: ${file.name}` },
      ]);
    }
  };

  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    if (image) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: `🖼️ Image uploaded: ${image.name}` },
      ]);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen bg-white gradient-to-br from-primary/20 to-secondary/20">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[80%] md:w-[22%] bg-gray-100 gradient-to-br from-primary/10 to-secondary/20 p-4 py-5 pt-10 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <button
          className="absolute top-4 right-4 text-black/90 md:hidden"
          onClick={toggleSidebar}
        >
          <AiOutlineClose size={22} />
        </button>
        <div className="text-center">
          <img
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/chandler-bing-023401675-16x9_0.jpg?VersionId=AWOx3Tr1LfXJ7QYkmNdGeMkd54BKhs65&size=690:388"
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />
          <h2 className="mt-4 text-lg font-bold text-black/90">Chandler</h2>
          <p className="mt-4 text-sm text-black/60">
            This chatbot is designed to assist with your queries and provide
            information.
          </p>
        </div>
      </aside>

      {/* Chat window */}
      <div className="w-full flex flex-col flex-1 h-full md:ml-[21%] px-2 md:px-20 lg:px-[15%]">
        <header className="p-4 border-b border-gray-200 flex items-center md:hidden">
          <button className="text-black" onClick={toggleSidebar}>
            <AiOutlineMenu size={24} />
          </button>
          <h1 className="text-lg font-bold ml-4">ChatBot</h1>
        </header>
        <div className="flex-1 overflow-y-auto p-4 w-full mb-3 hide-scrollbar">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`relative mb-3 w-full flex items-start ${
                message.sender === "user" ? "justify-start" : "justify-start"
              }`}
            >
              {message.sender === "bot" && (
                <div className="w-9 h-9 bg-white/30 flex justify-center items-center border mt-[20px] rounded-full">
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/robot-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--metaverse-support-communication-pack-people-illustrations-4357100.png"
                    alt=""
                  />
                </div>
              )}
              {message.sender === "user" && (
                <div className="w-9 h-9 flex justify-center items-center border mt-[65px] rounded-full mr-3">
                  <img
                    className="w-full h-full object-cover rounded-full border"
                    src="https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png"
                    alt=""
                  />
                </div>
              )}
              <div
                className={` font-medium text-[15.5px] rounded-t-3xl rounded-br-3xl leading-7 break-words overflow-wrap-anywhere ${
                  message.sender === "user"
                    ? "w-fit bg-gradient-to-br from-primary/5 to-secondary/20 black/5 text-black/80 px-4 py-3 mt-[61px]"
                    : "w-full text-black/80 px-4 py-1 mt-4"
                }`}
              >
                {message.text}
              </div>
              {message.sender === "bot" && (
                <div className="absolute left-12 bottom-[-18px] flex items-center text-[13px] space-x-[9px] text-black/80">
                  <HiOutlineShare
                    className="cursor-pointer hover:text-black scale-[0.9]"
                    onClick={() => handleShare(message.text)}
                  />
                  <div className="relative">
                    {copiedMessageIndex === index ? (
                      <LuCircleCheckBig className="text-black/90" />
                    ) : (
                      <MdContentCopy
                        className="cursor-pointer hover:text-black"
                        onClick={() => handleCopy(message.text, index)}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>
        <div className="bg-transparent p-4 flex items-center">
          <div className="flex items-center w-full px-4 border-2 py-3 border-black/5 rounded-full">
            <label htmlFor="file-upload">
              <IoAttach className="text-[22px] mt-[1px] cursor-pointer mr-2 scale-x-110 text-gray-600 hover:text-gray-800" />
              <input
                type="file"
                id="file-upload"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            <label htmlFor="image-upload">
              <MdOutlineAddPhotoAlternate className="text-xl cursor-pointer mr-4 text-gray-600 hover:text-gray-800" />
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 bg-transparent outline-none placeholder:text-black/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
