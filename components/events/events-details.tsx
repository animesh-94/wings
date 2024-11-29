"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Trophy,
  Clock,
  MapPin,
  ArrowRight,
  Check,
} from "lucide-react";
import { events } from "./data";
import Image from "next/image";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-md border border-white/10"
      >
        {/* Header Image Section */}
        <div className="relative h-64 w-full md:h-72">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/80" />

          {/* Close Button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-4 rounded-full bg-black/30 p-2 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/50 hover:text-white"
          >
            <X size={20} />
          </motion.button>

          {/* Event Title Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
            {event.featured && (
              <span className="mb-3 inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400">
                Featured Event
              </span>
            )}
            <h2 className="font-zentry text-3xl font-bold text-white md:text-4xl">
              {event.title}
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-h-[calc(90vh-16rem)] overflow-y-auto p-6 md:p-8">
          {/* Event Details */}
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <DetailCard icon={Calendar} label="Date" value={event.date} />
            <DetailCard icon={Trophy} label="Prize" value={event.prize} />
            <DetailCard icon={Clock} label="Duration" value="2 Hours" />
            <DetailCard icon={MapPin} label="Venue" value="Main Hall" />
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-lg leading-relaxed text-white/80">
              {event.description}
            </p>
          </div>

          {/* Highlights Section */}
          {event.highlights && (
            <div className="mb-8">
              <h3 className="mb-4 font-zentry text-xl font-bold text-white">
                Event Highlights
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {event.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
                  >
                    <Check size={18} className="mt-0.5 text-blue-400" />
                    <span className="text-white/80">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Timeline Section */}
          {event.timeline && (
            <div className="mb-8">
              <h3 className="mb-4 font-zentry text-xl font-bold text-white">
                Event Timeline
              </h3>
              <div className="relative space-y-4">
                {event.timeline.map((time, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex gap-4 pl-6"
                  >
                    <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-500" />
                    {index !== event.timeline.length - 1 && (
                      <div className="absolute bottom-0 left-1 top-3 w-px bg-gradient-to-b from-blue-500/50 to-transparent" />
                    )}
                    <div className="flex-1 rounded-lg border border-white/10 bg-white/5 p-4">
                      <span className="text-white/80">{time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Register Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 py-4 text-center font-medium text-white transition-all hover:brightness-110"
          >
            <span className="flex items-center justify-center gap-2">
              Register Now
              <ArrowRight size={18} />
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Helper Component for Event Details
const DetailCard = ({ icon: Icon, label, value }: any) => (
  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
    <div className="mb-2 flex items-center gap-2 text-sm text-white/60">
      <Icon size={16} />
      <span>{label}</span>
    </div>
    <div className="text-lg font-medium text-white">{value}</div>
  </div>
);
