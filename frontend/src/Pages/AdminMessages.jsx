import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const fetchMessages = async () => {
    const res = await axios.get(`https://lohamandi.com/contact`);
    setMessages(res.data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-1">
        <h2 className="text-xl font-bold mb-2">Messages</h2>
        <ul className="space-y-2 max-h-[400px] overflow-auto border p-3 bg-white rounded shadow">
          {messages.map((msg) => (
            <li
              key={msg._id}
              onClick={() => setSelectedMessage(msg)}
              className="border p-2 rounded hover:bg-gray-100 cursor-pointer"
            >
              <p className="font-semibold">{msg.name}</p>
              <p className="text-xs text-gray-500">{msg.email}</p>
              <p className="text-sm">{msg.message.slice(0, 50)}...</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-3 bg-white p-4 rounded shadow">
        {selectedMessage ? (
          <>
            <h2 className="text-xl font-bold">From: {selectedMessage.name}</h2>
            <p>
              <strong>Email:</strong> {selectedMessage.email}
            </p>
            <p>
              <strong>Message:</strong>
            </p>
            <p>{selectedMessage.message}</p>
          </>
        ) : (
          <p>Select a message to view.</p>
        )}
      </div>
    </div>
  );
};

export default AdminMessages;
