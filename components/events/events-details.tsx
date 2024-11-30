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
  Phone,
  Mail,
  CreditCard,
  ScrollText,
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
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-md border border-white/10"
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
          {/* Event Quick Details */}
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <DetailCard icon={Calendar} label="Date" value={event.date} />
            <DetailCard icon={Trophy} label="Prize" value={event.prize} />
            <DetailCard
              icon={CreditCard}
              label="Entry Fee"
              value={event.fees || "Free"}
            />
            <DetailCard icon={Clock} label="Duration" value="2 Hours" />
          </div>

          {/* Two Column Layout for Main Content */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left Column */}
            <div className="flex flex-col justify-between">
              {/* Description */}
              <div className="mb-8">
                <h3 className="mb-4 font-zentry text-xl font-bold text-white">
                  About the Event
                </h3>
                <p className="text-lg leading-relaxed text-white/80">
                  {event.description}
                </p>
              </div>

              {/* Rules Section */}
              <div className="mb-8">
                <h3 className="mb-4 font-zentry text-xl font-bold text-white">
                  Rules & Guidelines
                </h3>
                <div className="space-y-3">
                  {event.rules?.map((rule, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
                    >
                      <span className="text-blue-400 font-medium">
                        {index + 1}.
                      </span>
                      <span className="text-white/80">{rule}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Venue Details */}
              <div className="mb-8">
                <h3 className="mb-4 font-zentry text-xl font-bold text-white">
                  Venue Information
                </h3>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 text-blue-400" />
                    <div>
                      <p className="font-medium text-white">{event.building}</p>
                      <p className="text-white/60">{event.venue}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="mb-4 font-zentry text-xl font-bold text-white">
                  Event Coordinators
                </h3>
                {event.coordinators?.map((coordinator, index) => (
                  <div
                    key={index}
                    className="mb-4 rounded-lg border border-white/10 bg-white/5 p-4"
                  >
                    <p className="mb-2 font-medium text-white">
                      {coordinator.name}
                    </p>
                    <div className="space-y-2 text-white/60">
                      <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <a href={`tel:${coordinator.phone}`}>
                          {coordinator.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <a href={`mailto:${coordinator.email}`}>
                          {coordinator.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment QR Code */}
              {event.fees && event.qrCode && (
                <div className="mb-8">
                  <h3 className="mb-4 font-zentry text-xl font-bold text-white">
                    Payment Details
                  </h3>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="mb-4 text-center">
                      <p className="text-white/80">Scan to pay ₹{event.fees}</p>
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src="/payment-qr.jpeg"
                        alt="Payment QR Code"
                        width={300}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Register Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 py-4 mb-4 text-center font-medium text-white transition-all hover:brightness-110"
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
