"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Parallax effect for mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  };

  // Smooth spring animation for parallax
  const springConfig = { damping: 15, stiffness: 150 };
  const xMotion = useSpring(mousePosition.x, springConfig);
  const yMotion = useSpring(mousePosition.y, springConfig);

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
        <div className="absolute inset-0 bg-black/90" />
      </div>

      {/* Dynamic Gradient Orbs */}
      <motion.div
        className="absolute inset-0"
        style={{ x: xMotion, y: yMotion }}
      >
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ y, opacity }}
      >
        {/* Floating Elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ x: xMotion, y: yMotion }}
        >
          {/* Decorative Elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-40 h-40 border border-white/10 rounded-full"
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Central Content */}
        <div className="relative z-10 text-center">
          {/* Pre-title */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="block font-mono text-sm uppercase tracking-widest text-blue-400 mb-6"
          >
            March 14-16, 2025
          </motion.span>

          {/* Main Title with Glitch Effect */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="hero-heading relative z-10 text-white">
              WINGS<span className="text-blue-500">'25</span>
            </h1>
            <div className="absolute inset-0 animate-pulse blur-2xl opacity-50">
              <h1 className="hero-heading text-blue-500">
                WINGS<span className="text-white">'25</span>
              </h1>
            </div>
          </motion.div>

          {/* Animated Tagline */}
          <motion.div
            className="mb-12 flex justify-center gap-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {["IDEATE", "INNOVATE", "ILLUMINATE"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1.2 + i * 0.2,
                  duration: 0.8,
                  ease: [0.25, 0.1, 0, 1],
                }}
                className="text-sm font-light tracking-[0.3em] text-white/70"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#3B82F6" }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-full bg-blue-500 px-8 py-4 text-sm font-medium text-white transition-colors"
            >
              <span className="relative z-10">REGISTER NOW</span>
              <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-blue-400"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-white/10 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              EXPLORE MORE
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-white/40">
            Scroll
          </span>
          <motion.div className="h-10 w-[2px] bg-gradient-to-b from-blue-500 to-transparent" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
