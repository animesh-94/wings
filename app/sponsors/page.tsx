"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Compass, Globe, Building2, Rocket } from "lucide-react";

// Sponsor tiers and their data
const sponsorTiers = [
  {
    name: "TITLE",
    description: "Our prestigious title sponsor",
    sponsors: [
      {
        id: 1,
        name: "SBI",
        logo: "/sponsors/sbi.png",
        website: "https://www.sbi.co.in",
        description: "State Bank of India - India's largest public sector bank",
      },
    ],
  },
  {
    name: "PRIME",
    description: "Our prime sponsor driving innovation",
    sponsors: [
      {
        id: 2,
        name: "Ecosense Appliances Pvt Ltd",
        logo: "/sponsors/ecosense-appliances.png",
        website: "https://ecosenseappliances.com/",
        description: "",
      },
    ],
  },
  {
    name: "DRONIX EVENT",
    description: "Sponsors supporting our drone technology showcase",
    sponsors: [
      {
        id: 3,
        name: "Laxmi Metal Pressing",
        logo: "/sponsors/laxmi-metal-pressing.png",
        website: "#",
        description: "",
      },
      {
        id: 4,
        name: "Luminaz Safety Glass",
        logo: "/sponsors/luminaz-safety-glass.png",
        website: "#",
        description: "",
      },
      {
        id: 5,
        name: "Nahars",
        logo: "/sponsors/nahars.png",
        website: "#",
        description: "",
      },
    ],
  },
  {
    name: "TREASURE HUNT",
    description: "Sponsor for our exciting treasure hunt event",
    sponsors: [
      {
        id: 6,
        name: "Alankar",
        logo: "/sponsors/alankar.png",
        website: "http://www.alankarengineeringcompany.com/",
        description: "",
      },
    ],
  },
  {
    name: "CODING",
    description: "Our technical learning partner",
    sponsors: [
      {
        id: 7,
        name: "GeeksforGeeks",
        logo: "/sponsors/gfg.png",
        website: "https://www.geeksforgeeks.org",
        description: "Premier coding learning platform",
      },
    ],
  },
  {
    name: "AUTO EXPO",
    description: "Automotive exhibition partner",
    sponsors: [
      {
        id: 8,
        name: "Ratnapprabbha Motors",
        logo: "/sponsors/ratnaprabha-motors.png",
        website: "#",
        description: "",
      },
    ],
  },
  {
    name: "OTHER PARTNERS",
    description: "Supporting organizations",
    sponsors: [
      {
        id: 9,
        name: "PMC",
        logo: "/sponsors/pmc.png",
        website: "#",
        description: "Pathak Maths Classes",
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
      className="group relative flex flex-col items-center text-center"
    >
      {/* Logo Container */}
      <div className="relative mb-4 aspect-[2/1] w-64 overflow-hidden rounded-lg">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110"
        />
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
        className="mt-4"
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
      className="py-12"
    >
      <div className="container mx-auto px-4">
        {/* Tier Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-4 font-zentry text-3xl font-bold text-white md:text-4xl"
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
        <div className="flex flex-wrap justify-center gap-12">
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
          {/* <motion.div
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
          </motion.div> */}
        </motion.div>

        {/* Simple Scroll Indicator */}
        <motion.div
          className="absolute bottom-1 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white/40">
              Scroll
            </span>
            <div className="h-10 w-[2px] bg-gradient-to-b from-blue-500 to-transparent" />
          </div>
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
