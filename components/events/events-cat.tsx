"use client";
import { motion } from "framer-motion";

const categories = [
  { id: "technical", name: "Technical Events" },
  { id: "cultural", name: "Cultural Events" },
  { id: "workshops", name: "Workshops" },
  { id: "competitions", name: "Competitions" },
];

interface EventsCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function EventsCategories({
  selectedCategory,
  onCategoryChange,
}: EventsCategoriesProps) {
  return (
    <section className="sticky top-16 sm:top-20 z-20 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          className="flex justify-start sm:justify-center gap-4 sm:gap-8 overflow-x-auto py-3 sm:py-6 scrollbar-hide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`relative whitespace-nowrap px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm uppercase tracking-wider transition-colors
                ${
                  selectedCategory === category.id
                    ? "text-blue-500"
                    : "text-white/70 hover:text-white"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500"
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
