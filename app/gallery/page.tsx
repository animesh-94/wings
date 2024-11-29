"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

// Mock data - Replace with your actual images
const galleryImages = [
  {
    id: 1,
    src: "https://picsum.photos/seed/wings1/800/600",
    alt: "Technical Workshop",
    category: "workshops",
    year: "2024",
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/wings2/800/600",
    alt: "Hackathon Finals",
    category: "events",
    year: "2024",
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/wings3/800/600",
    alt: "Cultural Performance",
    category: "cultural",
    year: "2024",
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/wings4/800/600",
    alt: "Robotics Competition",
    category: "technical",
    year: "2023",
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/wings5/800/600",
    alt: "Guest Lecture",
    category: "workshops",
    year: "2023",
  },
  {
    id: 6,
    src: "https://picsum.photos/seed/wings6/800/600",
    alt: "Award Ceremony",
    category: "events",
    year: "2023",
  },
  {
    id: 7,
    src: "https://picsum.photos/seed/wings7/800/600",
    alt: "Dance Performance",
    category: "cultural",
    year: "2023",
  },
  {
    id: 8,
    src: "https://picsum.photos/seed/wings8/800/600",
    alt: "Coding Challenge",
    category: "technical",
    year: "2022",
  },
  {
    id: 9,
    src: "https://picsum.photos/seed/wings9/800/600",
    alt: "Project Exhibition",
    category: "exhibition",
    year: "2022",
  },
  {
    id: 10,
    src: "https://picsum.photos/seed/wings10/800/600",
    alt: "Music Night",
    category: "cultural",
    year: "2022",
  },
  {
    id: 11,
    src: "https://picsum.photos/seed/wings11/800/600",
    alt: "Tech Talk",
    category: "workshops",
    year: "2022",
  },
  {
    id: 12,
    src: "https://picsum.photos/seed/wings12/800/600",
    alt: "Gaming Tournament",
    category: "events",
    year: "2024",
  },
  {
    id: 13,
    src: "https://picsum.photos/seed/wings13/800/600",
    alt: "Design Workshop",
    category: "workshops",
    year: "2024",
  },
  {
    id: 14,
    src: "https://picsum.photos/seed/wings14/800/600",
    alt: "AI Conference",
    category: "technical",
    year: "2023",
  },
  {
    id: 15,
    src: "https://picsum.photos/seed/wings15/800/600",
    alt: "Fashion Show",
    category: "cultural",
    year: "2023",
  },
  {
    id: 16,
    src: "https://picsum.photos/seed/wings16/800/600",
    alt: "Startup Fair",
    category: "exhibition",
    year: "2022",
  },
  {
    id: 17,
    src: "https://picsum.photos/seed/wings17/800/600",
    alt: "Drama Performance",
    category: "cultural",
    year: "2024",
  },
  {
    id: 18,
    src: "https://picsum.photos/seed/wings18/800/600",
    alt: "IoT Workshop",
    category: "workshops",
    year: "2023",
  },
  {
    id: 19,
    src: "https://picsum.photos/seed/wings19/800/600",
    alt: "Science Exhibition",
    category: "exhibition",
    year: "2022",
  },
  {
    id: 20,
    src: "https://picsum.photos/seed/wings20/800/600",
    alt: "Closing Ceremony",
    category: "events",
    year: "2024",
  },
];

export default function GalleryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>("All");

  // Filter images based on selected year
  const filteredImages = galleryImages.filter(
    (image) => selectedYear === "All" || image.year === selectedYear,
  );

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/img/hero-5.JPG"
            alt="Gallery Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-mono text-sm uppercase tracking-wider text-blue-400"
          >
            MORE THAN JUST MEMORIES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="hero-heading text-center"
          >
            WINGS <span className="text-blue-500">GALLERY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 text-white/60 text-center max-w-xl"
          >
            Relive the moments that defined excellence
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section
        ref={containerRef}
        className="relative container mx-auto px-4 py-24"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[4/3] group"
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative size-full overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredImage === image.id ? 1 : 0,
                  }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                >
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-sm text-blue-400 uppercase tracking-wider">
                      {image.category}
                    </p>
                    <p className="text-xl font-bold text-white mt-2">
                      {image.year}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Hover Effects */}
              <motion.div
                initial={false}
                animate={{
                  scale: hoveredImage === image.id ? 1.05 : 1,
                }}
                className="absolute inset-0 rounded-lg border border-white/10 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Image Modal */}
      <motion.div
        initial={false}
        animate={{
          opacity: selectedImage ? 1 : 0,
          pointerEvents: selectedImage ? "auto" : "none",
        }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        onClick={() => setSelectedImage(null)}
      >
        {selectedImage && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-6xl w-full aspect-video p-8"
            onClick={(e: MouseEvent) => e.stopPropagation()}
          >
            <Image
              src={
                galleryImages.find((img) => img.id === selectedImage)?.src || ""
              }
              alt="Selected Image"
              fill
              className="object-contain"
            />
            <button
              className="absolute right-6 top-6 text-white/60 hover:text-white p-2 bg-black/50 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </motion.div>

      {/* Fixed Floating Navigation */}
      <div className="fixed bottom-8 left-0 right-0 z-40 flex justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 pointer-events-auto"
        >
          <div className="flex gap-6">
            {["All", "2024", "2023", "2022"].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`text-sm transition-colors ${
                  selectedYear === year
                    ? "text-blue-500 font-medium"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Filter Indicator */}
      {selectedYear !== "All" && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 left-0 right-0 z-30 flex justify-center"
        >
          <div className="bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-blue-400">
            Showing {selectedYear} Events
          </div>
        </motion.div>
      )}
    </main>
  );
}
