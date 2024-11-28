"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <motion.div
        className="bg-red-400 absolute top-0 left-0 w-1/2 h-full"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 5 }}
      >
        <img
          src="/left.png"
          alt="Split Left"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
