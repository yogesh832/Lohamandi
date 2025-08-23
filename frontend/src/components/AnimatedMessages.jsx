"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedMessages() {
  const messages = [
    { text: "B2C & B2B Marketplace", color: "#F07155" }, // red
    { text: "Digital Ordering", color: "#ffff" }, // teal
    { text: "Automated Workflows", color: "#FFff" }, // yellow
    { text: "Instant Quotes", color: "#ffff" }, // blue
    { text: "Live Tracking", color: "#ffff" }, // purple
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2500); // change every 2.5s
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="h-10 overflow-hidden flex ">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold"
          style={{ color: messages[index].color }}
        >
          {messages[index].text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
