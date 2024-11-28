"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { events } from "./data";

interface EventsDetailsProps {
  eventId: number;
  onClose: () => void;
}

export default function EventsDetails({
  eventId,
  onClose,
}: EventsDetailsProps) {
  const event = events.find((e) => e.id === eventId);
  if (!event) return null;

  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-neutral-900 p-6 pt-16 md:p-8 md:pt-16"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-white/60 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="relative aspect-video mb-6 overflow-hidden rounded-xl">
          <img
            src={event.image}
            alt={event.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <h2 className="mb-2 text-3xl font-bold text-white">{event.title}</h2>
        <p className="mb-6 text-lg text-white/70">{event.description}</p>

        <div className="mb-8 flex flex-wrap gap-4">
          <div className="rounded-full bg-blue-500/20 px-4 py-2 text-sm text-blue-400">
            {event.date}
          </div>
          <div className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-400">
            {event.prize}
          </div>
        </div>

        {event.highlights && (
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-white">Highlights</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {event.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-white/70"
                >
                  <span className="text-blue-500">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.timeline && (
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-white">Timeline</h3>
            <div className="space-y-4">
              {event.timeline.map((time, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 text-white/70"
                >
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  {time}
                </div>
              ))}
            </div>
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full rounded-xl bg-blue-500 py-4 text-center font-medium text-white hover:bg-blue-600"
        >
          Register Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
