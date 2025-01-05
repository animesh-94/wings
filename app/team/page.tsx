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
        name: "DR. N.R. BHASME",
        role: "Faculty Advisor",
        image: "/team/1. CORE TEAM/DR. N.R. BHASME.png",
        links: {
          linkedin: "#",
          email: "mailto:example@example.com",
        },
      },
      {
        id: 2,
        name: "AKASH SAWDE",
        role: "Core Member",
        image: "/team/1. CORE TEAM/AKASH SAWDE.jpeg",
        links: {
          linkedin: "#",
          github: "#",
        },
      },
      {
        id: 3,
        name: "ANUJ ADHAV",
        role: "Core Member",
        image: "/team/1. CORE TEAM/ANUJ ADHAV.jpeg",
        links: {
          linkedin: "#",
          github: "#",
        },
      },
      {
        id: 4,
        name: "SURAJKUMAR NAGE",
        role: "Core Member",
        image: "/team/1. CORE TEAM/new2.jpg",
        links: {
          linkedin: "#",
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
        name: "ARNAV JOSHI",
        role: "Technical Member",
        image: "/team/2. TECHNICAL TEAM/ARNAV JOSHI.jpg",
        links: {
          linkedin: "#",
          github: "#",
        },
      },
      {
        id: 6,
        name: "TEJAS",
        role: "Technical Member",
        image: "/team/2. TECHNICAL TEAM/TEJAS.jpg",
        links: {
          linkedin: "#",
          github: "#",
        },
      },
      {
        id: 7,
        name: "VIRAJ THOTE",
        role: "Technical Member",
        image: "/team/2. TECHNICAL TEAM/VIRAJ THOTE.jpg",
        links: {
          linkedin: "#",
          github: "#",
        },
      },
    ],
  },
  management: {
    title: "Management Team",
    subtitle: "Organizing excellence",
    members: [
      {
        id: 8,
        name: "ANURAG PAWAR",
        role: "Management Member",
        image: "/team/3. MANAGEMENT TEAM/ANURAG PAWAR.jpeg",
        links: {
          linkedin: "#",
          email: "mailto:example@example.com",
        },
      },
      {
        id: 9,
        name: "PALLAVI GIRI",
        role: "Management Member",
        image: "/team/3. MANAGEMENT TEAM/PALLAVI GIRI.jpg",
        links: {
          linkedin: "#",
        },
      },
      {
        id: 10,
        name: "RUSHIKESH MOTE",
        role: "Management Member",
        image: "/team/3. MANAGEMENT TEAM/RUSHIKESH MOTE.jpeg",
        links: {
          linkedin: "#",
        },
      },
    ],
  },
  sponsorship: {
    title: "Sponsorship Team",
    subtitle: "Building partnerships",
    members: [
      {
        id: 11,
        name: "ARJUN MULE",
        role: "Sponsorship Member",
        image: "/team/4. SPONSORSHIP TEAM/ARJUN MULE.jpg",
        links: {
          linkedin: "#",
        },
      },
      {
        id: 12,
        name: "KANAD DORLE",
        role: "Sponsorship Member",
        image: "/team/4. SPONSORSHIP TEAM/KANAD DORLE.jpeg",
        links: {
          linkedin: "#",
        },
      },
      {
        id: 13,
        name: "RAJAT THORAT",
        role: "Sponsorship Member",
        image: "/team/4. SPONSORSHIP TEAM/RAJAT THORAT.jpg",
        links: {
          linkedin: "#",
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
        name: "ABHISHEK JAYBHAY",
        role: "Marketing Member",
        image: "/team/5. MARKETING TEAM/ABHISHEK JAYBHAY.jpg",
        links: {
          linkedin: "#",
          twitter: "#",
        },
      },
      {
        id: 15,
        name: "AKSHAY GAIKWAD",
        role: "Marketing Member",
        image: "/team/5. MARKETING TEAM/AKSHAY GAIKWAD.jpg",
        links: {
          linkedin: "#",
        },
      },
      {
        id: 16,
        name: "PRASNNA INGLE",
        role: "Marketing Member",
        image: "/team/5. MARKETING TEAM/PRASNNA INGLE.jpg",
        links: {
          linkedin: "#",
        },
      },
    ],
  },
  registration: {
    title: "Registration Team",
    subtitle: "Managing participants",
    members: [
      {
        id: 17,
        name: "RASHMI MANDE",
        role: "Registration Member",
        image: "/team/6. REGISTRATION TEAM/RASHMI MANDE.jpg",
        links: {
          linkedin: "#",
        },
      },
      {
        id: 18,
        name: "YOGESHWARI KANDE",
        role: "Registration Member",
        image: "/team/6. REGISTRATION TEAM/YOGESHWARI KANDE.jpg",
        links: {
          linkedin: "#",
        },
      },
    ],
  },
  cultural: {
    title: "Cultural Team",
    subtitle: "Adding life to technology",
    members: [
      {
        id: 19,
        name: "PRATIK DAMDHAR",
        role: "Cultural Member",
        image: "/team/7. CULTURAL TEAM/new1.jpg",
        links: {
          linkedin: "#",
        },
      },
      {
        id: 20,
        name: "YASHSHRI BALI",
        role: "Cultural Member",
        image: "/team/7. CULTURAL TEAM/YASHSHRI BALI.jpg",
        links: {
          linkedin: "#",
        },
      },
    ],
  },
  prize: {
    title: "Prize and Valedictory Team",
    subtitle: "Celebrating achievements",
    members: [
      {
        id: 21,
        name: "SNEHAL JADHAV",
        role: "Prize Team Member",
        image: "/team/8. PRIZE AND VALIDECTORY/SNEHAL JADHAV.jpg",
        links: {
          linkedin: "#",
        },
      },
      {
        id: 22,
        name: "TANMAY WAGH",
        role: "Prize Team Member",
        image: "/team/8. PRIZE AND VALIDECTORY/TANMAY WAGH.JPG",
        links: {
          linkedin: "#",
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
        </div>

        {/* Simple Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
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
      </section>

      {/* Department Sections */}
      {Object.entries(teamData).map(([key, dept], index) => (
        <TeamSection key={key} department={dept} index={index} />
      ))}
    </main>
  );
};

export default TeamPage;
