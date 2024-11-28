"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EventsHero from "@/components/events/events-hero";
import EventsShowcase from "@/components/events/events-showcase";
import EventsDetails from "@/components/events/events-details";
import RegistrationSection from "@/components/events/registration-cta";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("technical");
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen bg-black">
      <EventsHero />
      <EventsShowcase
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onEventSelect={setSelectedEventId}
      />
      <AnimatePresence>
        {selectedEventId && (
          <EventsDetails
            eventId={selectedEventId}
            onClose={() => setSelectedEventId(null)}
          />
        )}
      </AnimatePresence>
      <RegistrationSection />
    </main>
  );
}
