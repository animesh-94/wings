"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedTitle from "./animated-title";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(16 / 9);
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
  const { scrollYProgress } = useScroll({
    target: clipRef,
    offset: ["start end", "end start"],
  });

  // Adjust aspect ratio for different screen sizes
  useEffect(() => {
    const updateAspectRatio = () => {
      // On mobile, use a more square-like aspect ratio
      const isMobile = window.innerWidth <= 768;
      setAspectRatio(isMobile ? 1 : 16 / 9);
    };

    // Set initial aspect ratio
    updateAspectRatio();

    // Add resize listener
    window.addEventListener("resize", updateAspectRatio);

    // Cleanup listener
    return () => window.removeEventListener("resize", updateAspectRatio);
  }, []);

  // Track when video should start playing (when animation reaches full screen)
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      // Start video when scroll progress reaches or exceeds 0.5 (full screen state)
      // Once started, keep playing even if scrolled back up
      if (latest >= 0.5 && !shouldPlayVideo) {
        setShouldPlayVideo(true);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, shouldPlayVideo]);

  // Transform the clip path based on scroll progress
  const clipSize = useTransform(scrollYProgress, [0.3, 0.5], ["40%", "100%"]);
  const clipRadius = useTransform(scrollYProgress, [0.3, 0.5], ["20px", "0px"]);

  return (
    <div
      ref={containerRef}
      id="about"
      className="min-h-screen w-screen bg-black"
    >
      {/* Content Section */}
      <div className="relative mb-4 mt-36 flex flex-col items-center gap-5 px-4">
        {/* Welcome Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-blue-400">
            Welcome to
          </span>
          <h2 className="hero-heading">
            WINGS <span className="text-blue-500">'25</span>
          </h2>
        </motion.div>

        {/* Main Title */}
        <AnimatedTitle
          title="UNLEASH <span class='text-blue-500'>INNOVATION</span>, ILLUMINATE THE <span class='text-blue-500'>FUTURE</span>"
          containerClass="hero-heading special-font mt-5 text-center"
        />

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex max-w-2xl flex-col items-center gap-6 text-center"
        >
          <p className="text-lg leading-relaxed text-white/80">
            The journey begins here—where ideas take flight, skills shine, and
            boundaries are redefined. WINGS '25 is not just an event; it's a
            showcase of innovation and creativity, a platform for tech
            enthusiasts to innovate, integrate, and illuminate the future.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full pt-8">
            {[
              { value: "3", label: "Days" },
              { value: "20+", label: "Events" },
              { value: "5000+", label: "Participants" },
              { value: "₹5L+", label: "Prize Pool" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-blue-400 font-medium pt-4">
            Take a glimpse of the home of WINGS'25
          </p>
        </motion.div>
      </div>

      {/* Video Section - Untouched */}
      <div ref={clipRef} className="relative h-dvh w-screen">
        <motion.div
          style={{
            width: clipSize,
            height: clipSize,
            borderRadius: clipRadius,
            aspectRatio: aspectRatio.toString(),
          }}
          className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-black"
        >
          {/* Loading skeleton */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
          )}
          {/* YouTube iframe with custom parameters */}
          <iframe
            className="absolute left-0 top-0 size-full object-cover"
            src={`https://www.youtube.com/embed/93EFs6KStWQ?autoplay=${shouldPlayVideo ? 1 : 0}&mute=1&loop=1`}
            title="Background video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsVideoLoaded(true)}
          />
        </motion.div>
      </div>
    </div>
  );
}
