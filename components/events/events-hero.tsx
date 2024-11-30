"use client";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function EventsHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
          <div className="absolute inset-0 bg-black/90" />
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 font-mono text-sm uppercase tracking-wider text-blue-400"
        >
          January 21-23, 2025
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hero-heading text-center"
        >
          UNLEASH YOUR <br />
          <span className="text-blue-500">POTENTIAL</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-center text-lg text-white/60"
        >
          Join us for three days of innovation, creativity, and competition at
          WINGS '25.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex gap-6"
        >
          <Link href="#events">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-blue-500 px-8 py-3 font-medium text-white hover:bg-blue-600"
            >
              Explore Events
            </motion.button>
          </Link>
          <Link href="/schedule">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-white/10 px-8 py-3 font-medium text-white hover:bg-white/5"
            >
              View Schedule
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Simple Scroll Indicator */}
      <motion.div
        className="absolute bottom-1 left-1/2 -translate-x-1/2"
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
    </section>
  );
}
