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
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 backdrop-blur-md"
      >
        {/* Header Image Section */}
        <div className="relative h-56 w-full md:h-64">
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
          <div className="absolute bottom-0 left-0 w-full p-6">
            <h2 className="font-zentry text-3xl font-bold text-white md:text-4xl">
              {event.title}
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-h-[calc(90vh-14rem)] overflow-y-auto p-6">
          {/* Event Quick Details */}
          <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            <DetailCard icon={Calendar} label="Date" value={event.date} />
            <DetailCard icon={Trophy} label="Prize" value={event.prize} />
            <DetailCard
              icon={MapPin}
              label="Venue"
              value={`${event.building}, ${event.venue}`}
            />
            <DetailCard
              icon={CreditCard}
              label="Entry Fee"
              value={
                typeof event.fees === "object"
                  ? "Multiple Categories"
                  : event.fees || "Free"
              }
            />
          </div>

          {/* About Section */}
          <div className="mb-6">
            <p className="text-lg leading-relaxed text-white/80">
              {event.description}
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Left Column */}
            <div>
              {/* Highlights/Requirements */}
              {event.highlights && (
                <div className="mb-6">
                  <h3 className="mb-3 font-zentry text-xl font-bold text-white">
                    Event Highlights
                  </h3>
                  <div className="space-y-2">
                    {event.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-white/80"
                      >
                        <Check size={16} className="text-blue-400" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Rules Section */}
              {event.rules && (
                <div className="mb-6">
                  <h3 className="mb-3 font-zentry text-xl font-bold text-white">
                    Rules & Guidelines
                  </h3>
                  <div className="space-y-2">
                    {event.rules.map((rule, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2 text-white/80"
                      >
                        <span className="text-blue-400">{index + 1}.</span>
                        <span>{rule}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Registration & Contact */}
            <div>
              {/* Registration Section */}
              <div className="mb-6 rounded-lg border border-white/10 bg-white/5 p-4">
                <h3 className="mb-4 font-zentry text-xl font-bold text-white">
                  Registration
                </h3>

                {typeof event.fees === "object" ? (
                  <div className="mb-4">
                    <h4 className="mb-2 text-white/80">Category Fees:</h4>
                    {Object.entries(event.fees).map(([category, fee]) => (
                      <div
                        key={category}
                        className="flex justify-between text-white/70"
                      >
                        <span>{category}</span>
                        <span>{fee}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mb-4 text-white/80">
                    Registration Fee: {event.fees || "Free"}
                  </p>
                )}

                {event.qrCode && (
                  <>
                    <div className="mb-4">
                      <Image
                        src="/payment-qr.jpeg"
                        alt="Payment QR Code"
                        width={200}
                        height={200}
                        className="mx-auto rounded-lg"
                      />
                    </div>
                    <div className="mb-4 text-sm text-white/60">
                      1. Scan QR code to make payment 2. Take screenshot of
                      payment 3. Upload screenshot in registration form
                    </div>
                  </>
                )}

                <motion.a
                  href="https://forms.google.com/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 py-3 text-center font-medium text-white transition-all hover:brightness-110"
                >
                  Register Now
                </motion.a>
              </div>

              {/* Coordinators */}
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 mb-8">
                <h3 className="mb-4 font-zentry text-lg font-bold text-white">
                  Event Coordinators
                </h3>
                {event.coordinators?.map((coordinator, index) => (
                  <div key={index} className="mb-3 last:mb-0">
                    <p className="font-medium text-white">{coordinator.name}</p>
                    <a
                      href={`tel:${coordinator.phone}`}
                      className="flex items-center gap-2 text-white/60 hover:text-white"
                    >
                      <Phone size={14} />
                      {coordinator.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
