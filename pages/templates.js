import { useState, useEffect } from "react";

export default function ChatTemplate() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      simulateBotResponse();
    }
  };

  const simulateBotResponse = () => {
    setTyping(true);
    const botResponse = getBotResponse();
    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse]);
      setTyping(false);
    }, 1500);
  };

  const getBotResponse = () => {
    const responses = [
      "I'm here to help! Feel free to ask anything.",
      "What's on your mind?",
      "How can I assist you today?",
    ];
    return {
      sender: "bot",
      text: responses[Math.floor(Math.random() * responses.length)],
    };
  };

  useEffect(() => {
    const chatArea = document.querySelector(".flex-1.overflow-y-auto");
    if (chatArea) {
      chatArea.scrollTop = chatArea.scrollHeight;
    }
  }, [messages]);

  return (
    <div className=" w-screen h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
            B
          </div>
          <div>
            <h2 className="text-lg font-semibold">ChatBot</h2>
            <p className="text-sm text-gray-500">Your virtual assistant</p>
          </div>
        </div>
        <div className="mt-auto">
          <h3 className="text-sm font-semibold mb-2">User Info</h3>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold">
              U
            </div>
            <div>
              <h4 className="text-sm font-medium">User</h4>
              <p className="text-xs text-gray-500">Logged in</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-semibold">Chat</h1>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "bot" && (
                <div className="max-w-xs px-4 py-2.5 rounded-lg bg-gradient-to-br from-primary to-purple-600 text-white shadow-lg">
                  {msg.text}
                </div>
              )}
              {msg.sender === "user" && (
                <div className="max-w-xs p-4 rounded-lg bg-gray-300 text-gray-900 shadow-lg">
                  {msg.text}
                </div>
              )}
            </div>
          ))}
          {typing && (
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="h-3 w-3 bg-gray-400 rounded-full animate-bounce delay-75"></div>
              <div className="h-3 w-3 bg-gray-400 rounded-full animate-bounce delay-150"></div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="ml-2 px-4 py-2 rounded-full bg-primary text-white hover:bg-blue-600 focus:ring-2 focus:ring-primary"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
