"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";

interface HeroProps {
  // Basic Content
  preTitle?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  date?: string;

  // Visual Features
  enableParallax?: boolean;
  enableGlowingOrbs?: boolean;
  enableFloatingElements?: boolean;
  enableGrid?: boolean;

  // Button Configuration
  primaryButton?: {
    text: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
  };

  // Additional Features
  enableScrollIndicator?: boolean;
  enableAnimatedTags?: boolean;
  animatedTags?: string[];

  // Custom Styles
  className?: string;
  contentClassName?: string;
}

const Hero = ({
  preTitle,
  title,
  titleAccent,
  subtitle,
  date,
  enableParallax = true,
  enableGlowingOrbs = true,
  enableFloatingElements = true,
  enableGrid = true,
  primaryButton,
  secondaryButton,
  enableScrollIndicator = true,
  enableAnimatedTags = false,
  animatedTags = ["IDEATE", "INNOVATE", "ILLUMINATE"],
  className = "",
  contentClassName = "",
}: HeroProps) => {
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
    if (!enableParallax) return;

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
      className={`relative h-screen w-full overflow-hidden bg-black ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Grid */}
      {enableGrid && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
          <div className="absolute inset-0 bg-black/90" />
        </div>
      )}

      {/* Glowing Orbs */}
      {enableGlowingOrbs && (
        <motion.div
          className="absolute inset-0"
          style={{ x: xMotion, y: yMotion }}
        >
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        </motion.div>
      )}

      {/* Floating Elements */}
      {enableFloatingElements && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ x: xMotion, y: yMotion }}
        >
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
      )}

      {/* Main Content */}
      <motion.div
        className={`absolute inset-0 flex flex-col items-center justify-center ${contentClassName}`}
        style={{ y: enableParallax ? y : 0, opacity: enableParallax ? opacity : 1 }}
      >
        {/* Pre-title or Date */}
        {(preTitle || date) && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="block font-mono text-sm uppercase tracking-widest text-blue-400 mb-6"
          >
            {preTitle || date}
          </motion.span>
        )}

        {/* Main Title */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="hero-heading relative z-10 text-white">
            {title}
            {titleAccent && <span className="text-blue-500">{titleAccent}</span>}
          </h1>
          <div className="absolute inset-0 animate-pulse blur-2xl opacity-50">
            <h1 className="hero-heading text-blue-500">
              {title}
              {titleAccent && <span className="text-white">{titleAccent}</span>}
            </h1>
          </div>
        </motion.div>

        {/* Animated Tags */}
        {enableAnimatedTags && (
          <motion.div
            className="mb-12 flex justify-center gap-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {animatedTags.map((word, i) => (
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
        )}

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl text-center text-lg text-white/60"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Buttons */}
        {(primaryButton || secondaryButton) && (
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            {primaryButton && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={primaryButton.onClick}
                className="relative overflow-hidden rounded-full bg-blue-500 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-blue-600"
              >
                {primaryButton.text}
              </motion.button>
            )}

            {secondaryButton && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={secondaryButton.onClick}
                className="rounded-full border border-white/10 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                {secondaryButton.text}
              </motion.button>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      {enableScrollIndicator && (
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
      )}
    </motion.div>
  );
};

export default Hero;
