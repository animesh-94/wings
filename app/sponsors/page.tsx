"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Compass, Globe, Building2, Rocket } from "lucide-react";

// Sponsor tiers and their data
const sponsorTiers = [
  {
    name: "TITLE",
    description: "Our prestigious title sponsors who make WINGS '25 possible",
    sponsors: [
      {
        id: 1,
        name: "TechCorp International",
        logo: "https://picsum.photos/seed/sponsor1/400/200",
        website: "https://example.com",
        description: "Global leader in technology innovation",
      },
      {
        id: 2,
        name: "Quantum Systems",
        logo: "https://picsum.photos/seed/sponsor2/400/200",
        website: "https://example.com",
        description: "Pioneering quantum computing solutions",
      },
    ],
  },
  {
    name: "PLATINUM",
    description: "Key partners driving innovation",
    sponsors: [
      {
        id: 3,
        name: "Future Labs",
        logo: "https://picsum.photos/seed/sponsor3/400/200",
        website: "https://example.com",
        description: "Research and development powerhouse",
      },
      {
        id: 4,
        name: "Digital Dynamics",
        logo: "https://picsum.photos/seed/sponsor4/400/200",
        website: "https://example.com",
        description: "Digital transformation experts",
      },
      {
        id: 5,
        name: "Neural Networks Inc",
        logo: "https://picsum.photos/seed/sponsor5/400/200",
        website: "https://example.com",
        description: "AI and machine learning solutions",
      },
    ],
  },
  {
    name: "GOLD",
    description: "Valued supporters of technological advancement",
    sponsors: [
      {
        id: 6,
        name: "Cyber Solutions",
        logo: "https://picsum.photos/seed/sponsor6/400/200",
        website: "https://example.com",
        description: "Cybersecurity excellence",
      },
      {
        id: 7,
        name: "Cloud Dynamics",
        logo: "https://picsum.photos/seed/sponsor7/400/200",
        website: "https://example.com",
        description: "Cloud computing pioneers",
      },
      {
        id: 8,
        name: "Tech Ventures",
        logo: "https://picsum.photos/seed/sponsor8/400/200",
        website: "https://example.com",
        description: "Technology investment firm",
      },
      {
        id: 9,
        name: "Innovation Hub",
        logo: "https://picsum.photos/seed/sponsor9/400/200",
        website: "https://example.com",
        description: "Startup accelerator and incubator",
      },
    ],
  },
];

const SponsorCard = ({
  sponsor,
  index,
}: {
  sponsor: {
    id: number;
    name: string;
    logo: string;
    website: string;
    description: string;
  };
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
    >
      {/* Logo Container */}
      <div className="relative mb-4 aspect-[2/1] overflow-hidden rounded-lg">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <h3 className="mb-2 text-xl font-bold text-white">{sponsor.name}</h3>
      <p className="text-sm text-white/60">{sponsor.description}</p>

      {/* Hover Effects */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
        }}
        className="absolute bottom-6 right-6 flex gap-3"
      >
        <motion.a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm text-white"
        >
          <Globe size={16} />
          Visit Website
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

const SponsorTier = ({ tier, index }: { tier: any; index: number }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.2 }}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        {/* Tier Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-4 font-zentry text-4xl font-bold text-white md:text-5xl"
          >
            {tier.name} <span className="text-blue-500">SPONSORS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60"
          >
            {tier.description}
          </motion.p>
        </div>

        {/* Sponsors Grid */}
        <div
          className={`grid gap-8 ${
            tier.name === "TITLE"
              ? "md:grid-cols-2"
              : tier.name === "PLATINUM"
                ? "md:grid-cols-3"
                : "md:grid-cols-4"
          }`}
        >
          {tier.sponsors.map((sponsor: any, idx: number) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} index={idx} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const SponsorsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <motion.section
        ref={containerRef}
        className="relative h-screen overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at center, #4F46E5 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          style={{ y, opacity }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-mono text-sm uppercase tracking-wider text-blue-400"
          >
            Our Partners in Innovation
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-heading"
          >
            POWERING THE <br />
            <span className="text-blue-500">FUTURE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-white/60"
          >
            Meet the visionary organizations making WINGS '25 possible through
            their unwavering support and commitment to innovation.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {[
              { icon: Building2, value: "20+", label: "Organizations" },
              { icon: Globe, value: "10+", label: "Countries" },
              { icon: Rocket, value: "₹50L+", label: "Sponsorship" },
              { icon: Compass, value: "5+", label: "Industries" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mb-2 flex justify-center"
                >
                  <stat.icon size={24} className="text-blue-500" />
                </motion.div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-6 w-6 rotate-45 border-b-2 border-r-2 border-white/50"
          />
        </motion.div>
      </motion.section>

      {/* Sponsor Tiers */}
      {sponsorTiers.map((tier, index) => (
        <SponsorTier key={tier.name} tier={tier} index={index} />
      ))}
    </main>
  );
};

export default SponsorsPage;
