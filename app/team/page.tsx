"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

import type {
  SocialLinks,
  TeamMember,
  TeamSection,
  TeamData,
} from "@/lib/types";

const teamData: TeamData = {
  core: {
    title: "Core Team",
    subtitle: "The driving force behind WINGS '25",
    members: [
      {
        id: 1,
        name: "Dr. Sarah Johnson",
        role: "Faculty Advisor",
        image: "https://picsum.photos/seed/team1/400/400",
        links: {
          linkedin: "#",
          twitter: "#",
          github: "#",
          email: "mailto:example@example.com",
        },
      },
      {
        id: 2,
        name: "Alex Wright",
        role: "Event Head",
        image: "https://picsum.photos/seed/team2/400/400",
        links: {
          linkedin: "#",
          github: "#",
          email: "mailto:example@example.com",
        },
      },
      {
        id: 3,
        name: "Emma Chen",
        role: "Operations Head",
        image: "https://picsum.photos/seed/team3/400/400",
        links: {
          linkedin: "#",
          twitter: "#",
          email: "mailto:example@example.com",
        },
      },
      {
        id: 4,
        name: "Raj Patel",
        role: "Marketing Head",
        image: "https://picsum.photos/seed/team4/400/400",
        links: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
    ],
  },
  technical: {
    title: "Technical Team",
    subtitle: "Bringing innovations to life",
    members: [
      {
        id: 5,
        name: "David Kim",
        role: "Technical Lead",
        image: "https://picsum.photos/seed/team5/400/400",
        links: {
          linkedin: "#",
          github: "#",
          email: "mailto:example@example.com",
        },
      },
      {
        id: 6,
        name: "Maya Singh",
        role: "Backend Developer",
        image: "https://picsum.photos/seed/team6/400/400",
        links: {
          linkedin: "#",
          github: "#",
        },
      },
      {
        id: 7,
        name: "Lucas Martinez",
        role: "Frontend Developer",
        image: "https://picsum.photos/seed/team7/400/400",
        links: {
          github: "#",
          twitter: "#",
        },
      },
    ],
  },
  creative: {
    title: "Creative Team",
    subtitle: "Designing the future",
    members: [
      {
        id: 8,
        name: "Sofia Rodriguez",
        role: "Design Lead",
        image: "https://picsum.photos/seed/team8/400/400",
        links: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        id: 9,
        name: "Tom Wilson",
        role: "UI/UX Designer",
        image: "https://picsum.photos/seed/team9/400/400",
        links: {
          linkedin: "#",
          github: "#",
        },
      },
      {
        id: 10,
        name: "Aisha Khan",
        role: "Graphic Designer",
        image: "https://picsum.photos/seed/team10/400/400",
        links: {
          linkedin: "#",
          twitter: "#",
        },
      },
    ],
  },
  events: {
    title: "Events Team",
    subtitle: "Crafting unforgettable experiences",
    members: [
      {
        id: 11,
        name: "Jack Thompson",
        role: "Events Coordinator",
        image: "https://picsum.photos/seed/team11/400/400",
        links: {
          linkedin: "#",
          email: "mailto:example@example.com",
        },
      },
      {
        id: 12,
        name: "Nina Patel",
        role: "Logistics Manager",
        image: "https://picsum.photos/seed/team12/400/400",
        links: {
          linkedin: "#",
          twitter: "#",
        },
      },
      {
        id: 13,
        name: "Chris Lee",
        role: "Workshop Coordinator",
        image: "https://picsum.photos/seed/team13/400/400",
        links: {
          linkedin: "#",
          github: "#",
        },
      },
    ],
  },
  marketing: {
    title: "Marketing Team",
    subtitle: "Spreading the word",
    members: [
      {
        id: 14,
        name: "Priya Sharma",
        role: "Marketing Lead",
        image: "https://picsum.photos/seed/team14/400/400",
        links: {
          linkedin: "#",
          twitter: "#",
          email: "mailto:example@example.com",
        },
      },
      {
        id: 15,
        name: "Mark Davis",
        role: "Social Media Manager",
        image: "https://picsum.photos/seed/team15/400/400",
        links: {
          linkedin: "#",
          twitter: "#",
        },
      },
      {
        id: 16,
        name: "Lisa Chen",
        role: "Content Creator",
        image: "https://picsum.photos/seed/team16/400/400",
        links: {
          linkedin: "#",
          twitter: "#",
        },
      },
    ],
  },
  cultural: {
    title: "Cultural Team",
    subtitle: "Adding life to technology",
    members: [
      {
        id: 17,
        name: "Arjun Mehta",
        role: "Cultural Head",
        image: "https://picsum.photos/seed/team17/400/400",
        links: {
          linkedin: "#",
          twitter: "#",
          email: "mailto:example@example.com",
        },
      },
      {
        id: 18,
        name: "Sarah Williams",
        role: "Performance Coordinator",
        image: "https://picsum.photos/seed/team18/400/400",
        links: {
          linkedin: "#",
          twitter: "#",
        },
      },
      {
        id: 19,
        name: "Kevin Zhang",
        role: "Arts Coordinator",
        image: "https://picsum.photos/seed/team19/400/400",
        links: {
          linkedin: "#",
          twitter: "#",
        },
      },
    ],
  },
};

// SVG Shapes for floating elements
const FloatingShapes = () => (
  <>
    {/* Grid Pattern */}
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        animate={{
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>

    {/* Floating Elements */}
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Circles */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 rounded-full border border-white/10"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Geometric Shapes */}
      <motion.div
        className="absolute bottom-40 right-20"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <motion.path
            d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            animate={{
              strokeDasharray: ["0,1000", "1000,0"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </motion.div>
    </motion.div>
  </>
);

const TeamSection = ({
  department,
  index,
}: {
  department: TeamSection;
  index: number;
}) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleX = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-16 sm:py-24 lg:py-32"
    >
      {/* Sticky Department Info */}
      <motion.div
        style={{ opacity }}
        className="sticky top-20 sm:top-24 lg:top-32 w-full lg:w-[30vw] px-4 sm:px-8 lg:pl-20 mb-12 lg:mb-0"
      >
        <motion.div style={{ x: titleX }} className="lg:max-w-sm">
          <span className="text-blue-500 text-xs sm:text-sm uppercase tracking-wider font-mono mb-2 block">
            {department.subtitle}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-8">
            {department.title}
          </h2>
        </motion.div>
      </motion.div>

      {/* Team Members */}
      <div className="relative lg:absolute lg:top-32 lg:right-0 w-full lg:w-[60vw] px-4 sm:px-8 lg:pr-20">
        <motion.div
          style={{ opacity }}
          className="space-y-12 sm:space-y-16 lg:space-y-20"
        >
          {department.members.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 group relative"
            >
              {/* Member Photo */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex-shrink-0">
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              {/* Member Info */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-400 mb-3 sm:mb-4 text-sm sm:text-base">
                  {member.role}
                </p>

                {/* Social Links */}
                <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
                  {Object.entries(member.links).map(([platform, url]) => (
                    <motion.a
                      key={platform}
                      href={url}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      {platform === "linkedin" && (
                        <Linkedin size={16} className="sm:size-18" />
                      )}
                      {platform === "github" && (
                        <Github size={16} className="sm:size-18" />
                      )}
                      {platform === "twitter" && (
                        <Twitter size={16} className="sm:size-18" />
                      )}
                      {platform === "email" && (
                        <Mail size={16} className="sm:size-18" />
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Line Connector - Only visible on larger screens */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                className="hidden lg:block absolute left-48 w-20 h-px bg-white/10"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Update the hero section to be more responsive
const TeamPage = () => {
  return (
    <main className="bg-black">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <FloatingShapes />

        <div className="relative z-10 text-center px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 sm:mb-6"
          >
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-blue-400">
              Meet the Team
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-heading text-4xl sm:text-6xl lg:text-8xl mb-4 sm:mb-8"
          >
            THE <span className="text-blue-500">MINDS</span> BEHIND
            <br />
            WINGS <span className="text-blue-500">'25</span>
          </motion.h1>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-white/50 rotate-45"
            />
          </motion.div>
        </div>
      </section>

      {/* Department Sections */}
      {Object.entries(teamData).map(([key, dept], index) => (
        <TeamSection key={key} department={dept} index={index} />
      ))}
    </main>
  );
};

export default TeamPage;
