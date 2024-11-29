"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-50">
        <div className="relative w-[800px] h-[800px]">
          <Image
            src="/logo-black.jpeg"
            alt="Wings Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Main Content Container */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ y, opacity }}
      >
        {/* Central Content */}
        <div className="relative z-10 text-center">
          {/* Pre-title */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="block font-mono text-sm uppercase tracking-widest text-blue-400 mb-6"
          >
            January 21-23, 2025
          </motion.span>

          {/* Main Title */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className=" hero-heading relative z-10 text-white">
              WINGS<span className="text-blue-500">'25</span>
            </h1>
            <div className="absolute inset-0 blur-2xl opacity-50">
              <h1 className="hero-heading text-blue-500">
                WINGS<span className="text-white">'25</span>
              </h1>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="mb-12 flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {["IDEATE", "INNOVATE", "ILLUMINATE"].map((word, i) => (
              <span
                key={i}
                className="text-sm font-light tracking-[0.3em] text-white/70"
              >
                {word}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link href="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="rounded-full bg-blue-500 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-blue-600"
              >
                REGISTER NOW
              </motion.button>
            </Link>

            <Link href="#about">
              <button className="rounded-full border border-white/10 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/5">
                VISITOR PASS
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Simple Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-white/40">
            Scroll
          </span>
          <div className="h-10 w-[2px] bg-gradient-to-b from-blue-500 to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
