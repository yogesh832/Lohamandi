import React, { useEffect, useState } from "react";
import axios from "axios";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://lohamandi-3.onrender.com/api/contact")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);

  const openModal = (message) => {
    setSelectedMessage(message);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedMessage(null);
    setShowModal(false);
  };

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-bold">Contact Messages</h2>
      <ul className="space-y-2 max-h-[600px] overflow-auto border p-3 rounded bg-white shadow-sm">
        {messages.map((msg) => (
          <li
            key={msg._id}
            className="border py-4 p-2 rounded cursor-pointer hover:bg-gray-100"
            onClick={() => openModal(msg)}
          >
            <p className="font-semibold">{msg.name}</p>
            <p className="text-sm text-gray-500">{msg.email}</p>
            <p className="text-sm">{msg.message.slice(0, 80)}...</p>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {showModal && selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
            <h3 className="text-lg font-bold mb-2">
              Message from {selectedMessage.name}
            </h3>
            <p className="text-sm text-gray-500 mb-1">
              <strong>Email:</strong> {selectedMessage.email}
            </p>
            <div className="my-4 text-gray-800 whitespace-pre-wrap">
              {selectedMessage.message}
            </div>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageList;
