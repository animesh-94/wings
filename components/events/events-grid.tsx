"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Event, EventsGridProps, CategoryId } from "./types"; // Updated import
import { events } from "./data";

export default function EventsGrid({ selectedCategory }: EventsGridProps) {
  const filteredEvents = events.filter(
    (event) => event.category === selectedCategory,
  );

  return (
    <section className="container mx-auto px-4 py-8 sm:py-16">
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
      >
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6"
          >
            <div className="relative mb-4 sm:mb-6 aspect-video overflow-hidden rounded-lg">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="relative z-10">
              <h3 className="font-zentry text-xl sm:text-2xl font-bold text-white">
                {event.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/70">
                {event.description}
              </p>

              <div className="mt-3 sm:mt-4 flex justify-between text-xs sm:text-sm">
                <span className="text-blue-400">{event.date}</span>
                <span className="text-green-400">{event.prize}</span>
              </div>

              <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 rounded-lg bg-blue-500 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white transition-colors hover:bg-blue-600"
                >
                  Register Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg border border-white/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white transition-colors hover:bg-white/10"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
