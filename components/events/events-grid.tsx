"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, Trophy, ChevronRight } from "lucide-react";
import { Event, EventsGridProps } from "./types";
import { events } from "./data";

export default function EventsGrid({ selectedCategory }: EventsGridProps) {
  const filteredEvents = events.filter(
    (event) => event.category === selectedCategory,
  );

  return (
    <section className="container mx-auto px-4 py-8 sm:py-16">
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {filteredEvents.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </motion.div>
    </section>
  );
}

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-sm border border-white/10"
    >
      {/* Featured Badge */}
      {event.featured && (
        <div className="absolute top-4 right-4 z-20">
          <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400">
            Featured
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative flex h-full flex-col p-6">
        {/* Category Tag */}
        <span className="mb-3 w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
          {event.category}
        </span>

        {/* Title & Description */}
        <h3 className="font-zentry text-xl font-bold text-white mb-2 line-clamp-1">
          {event.title}
        </h3>
        <p className="text-sm text-white/70 line-clamp-2 mb-4">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="mt-auto space-y-3">
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

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-medium text-white transition-all hover:brightness-110"
            >
              Register Now
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center rounded-xl border border-white/10 p-2.5 text-white/80 transition-colors hover:border-white/20"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Hover Effects */}
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

      {/* Timeline Indicators for Featured Events */}
      {event.timeline && (
        <div className="absolute bottom-4 left-4 flex gap-1">
          {event.timeline.map((_, i) => (
            <div
              key={i}
              className="size-1 rounded-full bg-white/30"
              style={{
                opacity: i === 0 ? 1 : 0.5,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};
