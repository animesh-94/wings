"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, Trophy, ArrowRight } from "lucide-react";
import { categories, events } from "./data";
import Image from "next/image";

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
  const filteredEvents = events.filter(
    (event) => event.category === selectedCategory,
  );

  return (
    <section id="events" className="relative py-16 sm:py-32">
      {/* Category Selection */}
      <div className="container mx-auto px-4">
        <div className="no-scrollbar mb-16 flex snap-x snap-mandatory overflow-x-auto sm:flex-wrap sm:justify-center gap-4 pb-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex shrink-0 snap-start items-center gap-3 rounded-full border px-6 py-3 transition-all duration-300 ${
                selectedCategory === category.id
                  ? "border-blue-500 bg-blue-500/10 text-blue-400"
                  : "border-white/10 text-white/60 hover:border-white/20 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              <span className="whitespace-nowrap font-medium">
                {category.name}
              </span>
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="categoryHighlight"
                  className="absolute inset-0 -z-10 rounded-full border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Events Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
              onClick={() => onEventSelect(event.id)}
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-sm">
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

                  {/* Featured Badge */}
                  {event.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col p-6">
                  <div className="mb-4">
                    <h3 className="font-zentry text-xl font-bold text-white">
                      {event.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-white/70">
                      {event.description}
                    </p>
                  </div>

                  {/* Event Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Calendar size={16} className="text-blue-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Trophy size={16} className="text-green-400" />
                      <span>{event.prize}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 py-2.5 text-sm font-medium text-white transition-all hover:brightness-110"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </motion.button>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: 0.1,
                    scale: 1,
                    transition: { duration: 0.3 },
                  }}
                  whileHover={{
                    opacity: 0.2,
                    scale: 1.5,
                    transition: { duration: 0.3 },
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 size-32 rounded-full bg-blue-500 blur-3xl"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <p className="text-white/60">No events found in this category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
