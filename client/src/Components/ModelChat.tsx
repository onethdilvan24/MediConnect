"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function ModelChat() {
  const [openModal, setOpenModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Function to send a message
  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput(""); // Clear input field
    }
  };

  return (
    <>
      {/* Button to open chat */}
      <Button onClick={() => setOpenModal(true)}>Ask Bot</Button>

      {/* Chat Modal */}
      <Modal show={openModal} onClose={() => setOpenModal(false)} size="md">
        <Modal.Header>Chat with Bot</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col h-[400px] w-full bg-gray-100 border rounded-lg">
            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg w-fit max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white self-end ml-auto"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="flex items-center p-2 border-t bg-white">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()} // Send on Enter key press
              />
              <button
                onClick={sendMessage}
                className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
