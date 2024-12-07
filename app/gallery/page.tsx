"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import type { GalleryItem } from "@/lib/gallery";
import YouTube from "react-youtube";
import Masonry from "react-masonry-css";

export default function GalleryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [years, setYears] = useState<string[]>(["All"]);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((items: GalleryItem[]) => {
        setGalleryItems(items);
        const uniqueYears = [...new Set(items.map((item) => item.year))];
        setYears(["All", ...uniqueYears.sort().reverse()]);
      });
  }, []);

  const filteredItems = galleryItems.filter(
    (item) => selectedYear === "All" || item.year === selectedYear,
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
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-8" // Add margin bottom for spacing
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => setSelectedItem(item.id)}
            >
              <div className="relative overflow-hidden rounded-lg">
                {item.type === "image" ? (
                  <div className="relative">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video">
                    <Image
                      src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/30 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition-all shadow-xl border border-white/40">
                        <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2" />
                      </div>
                    </div>
                  </div>
                )}

                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredItem === item.id ? 1 : 0,
                  }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                >
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-sm text-blue-400 uppercase tracking-wider">
                      {item.category}
                    </p>
                    <p className="text-xl font-bold text-white mt-2">
                      {item.year}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </section>

      {/* Modal */}
      <motion.div
        initial={false}
        animate={{
          opacity: selectedItem ? 1 : 0,
          pointerEvents: selectedItem ? "auto" : "none",
        }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        onClick={() => setSelectedItem(null)}
      >
        {selectedItem && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-6xl w-full aspect-video p-8"
            onClick={(e: MouseEvent) => e.stopPropagation()}
          >
            {(() => {
              const item = galleryItems.find((i) => i.id === selectedItem);
              if (!item) return null;

              return item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              ) : (
                <YouTube
                  videoId={item.youtubeId}
                  className="w-full h-full"
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                />
              );
            })()}

            <button
              className="absolute right-6 top-6 text-white/60 hover:text-white p-2 bg-black/50 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(null);
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
