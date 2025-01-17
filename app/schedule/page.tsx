"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Calendar, MapPin, Download, ChevronRight } from "lucide-react";
import Link from "next/link";

// Define schedule data structure
interface Event {
  time: string;
  title: string;
  location: string;
  description: string;
  category: "technical" | "cultural" | "workshop" | "other";
}

interface DaySchedule {
  date: string;
  title: string;
  description: string;
  events: Event[];
}

// Schedule data
const schedule: DaySchedule[] = [
  {
    date: "February 21, 2025",
    title: "Day 1: Setting the Stage",
    description: "Opening ceremonies and key talks to kick off the tech fest",
    events: [
      {
        time: "03:00 PM",
        title: "Inaugural Ceremony",
        location: "Main Auditorium",
        description: "Welcome address and festival inauguration",
        category: "other",
      },
      {
        time: "05:00 PM",
        title: "TED Talks",
        location: "Conference Hall",
        description: "Inspirational lecture talks by experts",
        category: "technical",
      },
    ],
  },
  {
    date: "February 22, 2025",
    title: "Day 2: Tech Exploration",
    description: "A packed day of tech events and competitions",
    events: [
      {
        time: "09:00 AM",
        title: "E-sports",
        location: "Gaming Arena",
        description: "Competitive gaming session begins",
        category: "technical",
      },
      {
        time: "09:00 AM",
        title: "Dronix",
        location: "Drone Field",
        description: "Drone-building and flying competition",
        category: "technical",
      },
      {
        time: "09:00 AM",
        title: "Robo Olympics",
        location: "Innovation Center",
        description: "Robotics competition featuring innovative challenges",
        category: "technical",
      },
      {
        time: "09:00 AM",
        title: "Bridge Mania",
        location: "Civil Engineering Lab",
        description: "Bridge-building competition for engineering enthusiasts",
        category: "technical",
      },
      {
        time: "09:00 AM",
        title: "India Innovates",
        location: "Exhibition Hall",
        description: "Showcasing innovative projects and ideas",
        category: "technical",
      },
      {
        time: "09:00 AM",
        title: "Hackathon",
        location: "Coding Zone",
        description: "Coding and problem-solving marathon",
        category: "technical",
      },
      {
        time: "09:00 AM",
        title: "Ode to Code",
        location: "Computer Lab",
        description: "Programming contest to solve challenges",
        category: "technical",
      },
      {
        time: "09:00 AM",
        title: "CAD War",
        location: "Design Studio",
        description: "Design battle using CAD tools",
        category: "technical",
      },
      {
        time: "02:00 PM",
        title: "Bike and Car Expo",
        location: "Open Ground",
        description:
          "Exhibition of bikes and cars, including futuristic designs",
        category: "other",
      },
      {
        time: "06:00 PM",
        title: "Musical Concert",
        location: "Open Air Theater",
        description: "Live music performances to end the day",
        category: "cultural",
      },
    ],
  },
  {
    date: "February 23, 2025",
    title: "Day 3: Grand Finals and Farewell",
    description: "Final rounds and prize distribution to conclude the festival",
    events: [
      {
        time: "09:00 AM",
        title: "Bridge Mania Finals",
        location: "Civil Engineering Lab",
        description: "Final round of bridge-building competition",
        category: "technical",
      },
      {
        time: "09:00 AM",
        title: "Robo Olympics Finals",
        location: "Innovation Center",
        description: "Robotics competition finals",
        category: "technical",
      },
      {
        time: "09:00 AM",
        title: "Dronix Finals",
        location: "Drone Field",
        description: "Finals of the drone competition",
        category: "technical",
      },
      {
        time: "03:00 PM",
        title: "Prize Distribution",
        location: "Main Auditorium",
        description: "Recognition and awards for winners",
        category: "other",
      },
    ],
  },
];

const SchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  };

  // Category styling
  const categoryStyles = {
    technical: {
      bg: "bg-blue-500/20",
      border: "border-blue-500/30",
      text: "text-blue-400",
      glow: "shadow-blue-500/20",
    },
    cultural: {
      bg: "bg-purple-500/20",
      border: "border-purple-500/30",
      text: "text-purple-400",
      glow: "shadow-purple-500/20",
    },
    workshop: {
      bg: "bg-green-500/20",
      border: "border-green-500/30",
      text: "text-green-400",
      glow: "shadow-green-500/20",
    },
    other: {
      bg: "bg-gray-500/20",
      border: "border-gray-500/30",
      text: "text-gray-400",
      glow: "shadow-gray-500/20",
    },
  };

  return (
    <main
      className="min-h-screen bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Hero Section */}
      <motion.section
        ref={containerRef}
        className="relative h-screen overflow-hidden"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Large Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]"
            style={{
              x: mousePosition.x * -1,
              y: mousePosition.y * -1,
            }}
          />

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-[120px]"
            style={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
          />

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              delay: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/3 top-2/3 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[120px]"
            style={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}
          />

          {/* Floating Geometric Elements */}
          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/4 top-1/4 size-48 rounded-full border border-white/10"
          />

          <motion.div
            animate={{
              y: [20, -20, 20],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute right-1/4 bottom-1/4 size-64 rounded-full border border-white/10"
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
            <div className="absolute inset-0 bg-black/90" />
          </div>
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-4"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-mono text-sm uppercase tracking-wider text-blue-400"
          >
            February 21-23, 2025
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-heading text-center"
          >
            EVENT <br />
            <span className="text-blue-500">SCHEDULE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-center text-lg text-white/60"
          >
            Three days of innovation, creativity, and excellence
          </motion.p>
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
      </motion.section>

      {/* Schedule Section */}
      <section className="relative">
        {/* Background continuation */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

        <div className="container relative mx-auto px-4 py-32">
          {/* Day Selection */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {schedule.map((day, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedDay(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative flex items-center gap-3 rounded-full px-6 py-3 transition-all ${selectedDay === index
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-white/60 hover:text-white"
                    }`}
                >
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">{day.date}</span>
                  {selectedDay === index && (
                    <motion.div
                      layoutId="dayHighlight"
                      className="absolute inset-0 -z-10 rounded-full border border-blue-500/50 shadow-lg shadow-blue-500/20"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Day Details */}
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white">
              {schedule[selectedDay].title}
            </h2>
            <p className="text-lg text-white/60">
              {schedule[selectedDay].description}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mx-auto max-w-4xl">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50 sm:left-1/2" />

            {schedule[selectedDay].events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-8 ${index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"
                  } ${index % 2 === 0 ? "sm:ml-auto" : ""} sm:w-1/2`}
              >
                {/* Timeline Node */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-4 h-4 w-4 rounded-full ${categoryStyles[event.category].bg
                    } ${categoryStyles[event.category].border} shadow-lg ${categoryStyles[event.category].glow
                    } sm:left-1/2 ${index % 2 === 0 ? "sm:translate-x-4" : "sm:-translate-x-4"
                    }`}
                />

                {/* Event Card */}
                <motion.div
                  whileHover={{ scale: 1.02, translateZ: 20 }}
                  className={`ml-12 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 backdrop-blur-sm sm:ml-0 transition-all duration-300 hover:border-white/20`}
                  style={{
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="mb-4 flex items-center gap-2 text-sm text-white/60">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {event.title}
                  </h3>
                  <p className="mb-4 text-sm text-white/60">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-white/40">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>

                  {/* Category Tag */}
                  <div
                    className={`absolute top-4 right-4
                     rounded-full px-3 py-1 text-xs ${categoryStyles[event.category].bg
                      } ${categoryStyles[event.category].text}`}
                  >
                    {event.category}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 text-center backdrop-blur-sm"
          >
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10  blur-xl"
            />

            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Get the Complete Schedule
              </h2>
              <p className="mb-8 text-white/60">
                Download the detailed schedule to your device
              </p>
              <Link href="#">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 font-medium text-white"
                >
                  <Download className="h-5 w-5" />
                  Download PDF
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default SchedulePage;
