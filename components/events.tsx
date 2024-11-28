"use client";
import { motion } from "framer-motion";
import BentoTilt from "@/components/bento-tilt";
import BentoCard from "@/components/bento-card";
import { useRef } from "react";

export default function Events() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-black pb-52" ref={containerRef}>
      <div className="container mx-auto px-3 md:px-10">
        {/* Section Header */}
        <div className="px-5 py-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="block font-mono text-sm uppercase tracking-wider text-blue-400"
          >
            Discover Our Events
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-heading mt-4 text-5xl md:text-7xl"
          >
            EXPLORE THE <span className="text-blue-500">FUTURE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg text-white/70"
          >
            Immerse yourself in a rich universe of events where innovation meets
            excellence. Join us in shaping the future of technology.
          </motion.p>
        </div>

        {/* Bento Grid - Keeping original structure */}
        <BentoTilt className="relative mb-7 h-96 w-full overflow-hidden rounded-md border border-white/10 md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <span className="font-zentry">
                HACK<span className="text-blue-500">ATHON</span>
              </span>
            }
            description="24-hour coding marathon to build innovative solutions for real-world problems."
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-1 grid-rows-[repeat(5,1fr)] gap-7 md:grid-cols-2 md:grid-rows-3">
          {/* Technical Events */}
          <BentoTilt className="row-span-1 overflow-hidden rounded-md border border-white/10 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <span className="font-zentry">
                  TECH<span className="text-blue-500">FEST</span>
                </span>
              }
              description="Showcase your technical prowess in a series of challenging events."
            />
          </BentoTilt>

          {/* Cultural Events */}
          <BentoTilt className="row-span-1 overflow-hidden rounded-md border border-white/10 md:col-span-1">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <span className="font-zentry">
                  CUL<span className="text-purple-500">TURE</span>
                </span>
              }
              description="Experience the fusion of art and technology."
            />
          </BentoTilt>

          {/* Workshops */}
          <BentoTilt className="row-span-1 overflow-hidden rounded-md border border-white/10 md:col-span-1">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <span className="font-zentry">
                  WORK<span className="text-green-500">SHOPS</span>
                </span>
              }
              description="Learn from industry experts in hands-on sessions."
            />
          </BentoTilt>

          {/* Coming Soon Tile */}
          <BentoTilt className="row-span-1 overflow-hidden rounded-md border border-white/10 md:col-span-1">
            <div className="group relative flex size-full flex-col justify-between bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-5">
              <h2 className="font-zentry text-3xl font-bold text-white md:text-4xl">
                More<span className="text-blue-500">Coming</span>Soon!
              </h2>
              <motion.div
                className="absolute bottom-5 right-5 text-white"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                →
              </motion.div>
            </div>
          </BentoTilt>

          {/* Competitions */}
          <BentoTilt className="row-span-1 overflow-hidden rounded-md border border-white/10 md:col-span-1">
            <BentoCard
              src="/videos/feature-5.mp4"
              title={
                <span className="font-zentry">
                  COM<span className="text-yellow-500">PETE</span>
                </span>
              }
              description="Challenge yourself in high-stakes competitions."
            />
          </BentoTilt>
        </div>
      </div>

      {/* Background Effects */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #4F46E5 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
}
