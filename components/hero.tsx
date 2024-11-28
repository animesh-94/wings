"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animated text arrays
  const titleWords = ["WINGS", "'25"];
  const taglineWords = ["IDEATE", "INNOVATE", "ILLUMINATE"];

  return (
    <motion.div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at center, #4F46E5 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ y, opacity }}
      >
        {/* Title Animation */}
        <motion.div className="relative mb-12 flex items-baseline gap-4">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              className="hero-heading text-white"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.1, 0, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Tagline Animation */}
        <div className="mb-16 flex gap-4 overflow-hidden">
          {taglineWords.map((word, i) => (
            <motion.span
              key={i}
              className="text-sm font-light tracking-[0.2em] text-white/70"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1 + i * 0.1,
                ease: [0.25, 0.1, 0, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Buttons */}
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.button
            className="group relative px-8 py-4 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-white">REGISTER NOW</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
          </motion.button>

          <motion.button
            className="group relative hover:text-white px-8 py-4 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-black">LEARN MORE</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scaleX: 1 }}
              whileHover={{ scaleX: 0 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 1 }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="h-12 w-0.5 bg-white/20"
            animate={{
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
