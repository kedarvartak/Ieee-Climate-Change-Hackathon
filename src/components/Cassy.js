// src/components/Cassy.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

export default function Cassy() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello, I'm Cassy, your eco-bot friend who will help you personalize your climate change journey.",
      sender: 'cassy',
    },
  ]);

  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = () => {
    if (userInput.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: userInput,
      sender: 'user',
    };

    setMessages([...messages, newMessage]);
    setUserInput('');

    // Simulate Cassy's response after a short delay
    setTimeout(() => {
      const cassyResponse = {
        id: messages.length + 2,
        text: "Thank you for your message! How can I assist you today?",
        sender: 'cassy',
      };
      setMessages((prevMessages) => [...prevMessages, cassyResponse]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  return (
    <>
      {/* Floating Button with Glassmorphism */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-16 h-16 bg-white bg-opacity-20 backdrop-blur-md border border-white text-white rounded-full shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform transform hover:bg-opacity-30 hover:scale-110"
        aria-label="Open Cassy Chatbot"
      >
        <FaRobot size={24} />
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white bg-opacity-20 backdrop-blur-md border border-white rounded-lg shadow-lg flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-white">
            <h3 className="text-lg font-orbitron font-semibold text-white">Cassy</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Close Cassy Chatbot"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Message Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg font-orbitron ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-200'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white">
            <div className="flex">
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 rounded-lg bg-white bg-opacity-30 backdrop-blur-md border border-white text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 font-orbitron"
                onKeyDown={handleKeyDown}
                aria-label="Type your message"
              />
              <button
                onClick={handleSend}
                className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-orbitron flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform transform hover:scale-105"
                aria-label="Send Message"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
