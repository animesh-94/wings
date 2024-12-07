"use client";
import { motion } from "framer-motion";
import BentoTilt from "@/components/bento-tilt";
import BentoCard from "@/components/bento-card";
import { useRef } from "react";
import Link from "next/link";

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
            From hackathons to robotics, explore our diverse range of events
            designed to challenge your skills and ignite innovation.
          </motion.p>
        </div>

        {/* Hackathon - Featured Event */}
        <BentoTilt className="relative mb-7 h-96 w-full overflow-hidden rounded-md border border-white/10 md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <span className="font-zentry">
                HACK<span className="text-blue-500">ATHON</span>
              </span>
            }
            description="24-hour coding challenge with ₹35,500 prize pool. Build innovative solutions with industry mentors."
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-1 grid-rows-[repeat(5,1fr)] gap-7 md:grid-cols-2 md:grid-rows-3">
          {/* Robo Olympics */}
          <BentoTilt className="row-span-1 overflow-hidden rounded-md border border-white/10 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <span className="font-zentry">
                  ROBO<span className="text-blue-500">OLYMPICS</span>
                </span>
              }
              description="Compete in thrilling robotic challenges with a grand prize of ₹1,00,000"
            />
          </BentoTilt>

          {/* E-Sports */}
          <BentoTilt className="row-span-1 overflow-hidden rounded-md border border-white/10 md:col-span-1">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <span className="font-zentry">
                  E-<span className="text-purple-500">SPORTS</span>
                </span>
              }
              description="Battle it out in thrilling online games with ₹45,000 in prizes"
            />
          </BentoTilt>

          {/* Dronix */}
          <BentoTilt className="row-span-1 overflow-hidden rounded-md border border-white/10 md:col-span-1">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <span className="font-zentry">
                  DRO<span className="text-green-500">NIX</span>
                </span>
              }
              description="Show off your drone piloting skills and win ₹45,000"
            />
          </BentoTilt>

          {/* Auto Expo */}
          <BentoTilt className="row-span-1 overflow-hidden rounded-md border border-white/10 md:col-span-1">
            <BentoCard
              src="/videos/feature-5.mp4"
              title={
                <span className="font-zentry">
                  AUTO<span className="text-yellow-500">EXPO</span>
                </span>
              }
              description="Stunning showcase of innovative bikes and cars"
            />
          </BentoTilt>

          {/* View All Events Link */}
          <BentoTilt className="row-span-1 overflow-hidden rounded-md border border-white/10 md:col-span-1">
            <Link
              href="/events"
              className="group relative flex size-full flex-col justify-between bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-5"
            >
              <h2 className="font-zentry text-3xl font-bold text-white md:text-4xl">
                View All <span className="text-blue-500">Events</span>
              </h2>
              <div className="text-sm text-white/60">
                Explore all our exciting competitions and challenges
              </div>
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
            </Link>
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
