"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Calendar, MapPin, Download, ChevronRight } from "lucide-react";

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
    date: "March 14, 2025",
    title: "Day 1: Innovation Unleashed",
    description:
      "Opening ceremonies and technical events kick off the festival",
    events: [
      {
        time: "09:00 AM",
        title: "Opening Ceremony",
        location: "Main Auditorium",
        description:
          "Inaugural ceremony with distinguished guests and keynote speakers",
        category: "other",
      },
      {
        time: "10:30 AM",
        title: "Hackathon Begins",
        location: "Tech Hub",
        description: "24-hour coding marathon kicks off",
        category: "technical",
      },
      {
        time: "11:30 AM",
        title: "AI/ML Workshop",
        location: "Workshop Hall A",
        description:
          "Introduction to artificial intelligence and machine learning",
        category: "workshop",
      },
      {
        time: "02:00 PM",
        title: "Competitive Programming",
        location: "Computer Lab",
        description: "Algorithm challenge begins",
        category: "technical",
      },
      {
        time: "04:30 PM",
        title: "Robotics Showcase",
        location: "Innovation Center",
        description: "Display of cutting-edge robotics projects",
        category: "technical",
      },
      {
        time: "06:30 PM",
        title: "Tech Talks",
        location: "Conference Hall",
        description: "Industry experts share insights",
        category: "other",
      },
    ],
  },
  {
    date: "March 15, 2025",
    title: "Day 2: Creative Convergence",
    description: "A blend of technical and cultural events",
    events: [
      {
        time: "09:00 AM",
        title: "Hackathon Judging",
        location: "Tech Hub",
        description: "Project presentations and evaluations",
        category: "technical",
      },
      {
        time: "10:00 AM",
        title: "Dance Competition",
        location: "Cultural Center",
        description: "Solo and group dance performances",
        category: "cultural",
      },
      {
        time: "11:30 AM",
        title: "Web Development Workshop",
        location: "Workshop Hall B",
        description: "Modern web technologies and frameworks",
        category: "workshop",
      },
      {
        time: "02:00 PM",
        title: "Gaming Tournament",
        location: "E-Sports Arena",
        description: "Competitive gaming events",
        category: "technical",
      },
      {
        time: "04:00 PM",
        title: "Music Festival",
        location: "Open Air Theater",
        description: "Live bands and performances",
        category: "cultural",
      },
      {
        time: "07:00 PM",
        title: "Cultural Night",
        location: "Main Stage",
        description: "Grand cultural performances",
        category: "cultural",
      },
    ],
  },
  {
    date: "March 16, 2025",
    title: "Day 3: Grand Finale",
    description: "Culmination of events and closing ceremony",
    events: [
      {
        time: "09:30 AM",
        title: "Startup Pitch",
        location: "Business Center",
        description: "Innovation pitches to investors",
        category: "technical",
      },
      {
        time: "11:00 AM",
        title: "Photography Exhibition",
        location: "Art Gallery",
        description: "Display of contest entries",
        category: "cultural",
      },
      {
        time: "02:00 PM",
        title: "Technical Quiz Finals",
        location: "Quiz Hall",
        description: "Final round of tech quiz",
        category: "technical",
      },
      {
        time: "03:30 PM",
        title: "Award Ceremony",
        location: "Main Auditorium",
        description: "Recognition of winners across all events",
        category: "other",
      },
      {
        time: "05:00 PM",
        title: "Closing Ceremony",
        location: "Main Auditorium",
        description: "Farewell address and celebrations",
        category: "other",
      },
      {
        time: "07:00 PM",
        title: "DJ Night",
        location: "Open Air Theater",
        description: "Closing party celebration",
        category: "cultural",
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
            March 14-16, 2025
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-6 w-6 rotate-45 border-b-2 border-r-2 border-white/50"
          />
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
                  className={`group relative flex items-center gap-3 rounded-full px-6 py-3 transition-all ${
                    selectedDay === index
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
                className={`relative mb-8 ${
                  index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"
                } ${index % 2 === 0 ? "sm:ml-auto" : ""} sm:w-1/2`}
              >
                {/* Timeline Node */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-4 h-4 w-4 rounded-full ${
                    categoryStyles[event.category].bg
                  } ${categoryStyles[event.category].border} shadow-lg ${
                    categoryStyles[event.category].glow
                  } sm:left-1/2 ${
                    index % 2 === 0 ? "sm:translate-x-4" : "sm:-translate-x-4"
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
                     rounded-full px-3 py-1 text-xs ${
                       categoryStyles[event.category].bg
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
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl"
            />

            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Get the Complete Schedule
              </h2>
              <p className="mb-8 text-white/60">
                Download the detailed schedule to your device
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 font-medium text-white"
              >
                <Download className="h-5 w-5" />
                Download PDF
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default SchedulePage;
