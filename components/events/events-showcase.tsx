"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { categories, events } from "./data";

interface EventsShowcaseProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onEventSelect: (id: number) => void;
}

export default function EventsShowcase({
  selectedCategory,
  onCategoryChange,
  onEventSelect,
}: EventsShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const filteredEvents = events.filter(
    (event) => event.category === selectedCategory,
  );

  return (
    <section className="relative py-32">
      {/* Category Selection */}
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex items-center gap-3 rounded-full px-6 py-3 transition-colors ${
                selectedCategory === category.id
                  ? "bg-blue-500/20 text-blue-400"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="categoryHighlight"
                  className="absolute inset-0 -z-10 rounded-full border border-blue-500"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Events Horizontal Scroll */}
      <div className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto px-[10vw] pb-8 scrollbar-hide"
        >
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative min-w-[300px] max-w-[400px] flex-1"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-xl"
                onClick={() => onEventSelect(event.id)}
              >
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {event.title}
                  </h3>
                  <p className="mb-4 text-sm text-white/70">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-400">{event.date}</span>
                    <span className="text-green-400">{event.prize}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[10vw] bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[10vw] bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
}
