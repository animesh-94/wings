"use client";
import {
  useScroll,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, MouseEvent } from "react";

const Guests = () => {
  return (
    <section className="relative bg-black py-32">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #4F46E5 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <span className="mb-4 block font-mono text-sm uppercase tracking-wider text-blue-500">
            Distinguished Speakers
          </span>
          <h2 className="hero-heading text-5xl md:text-7xl">
            VISIONARY <span className="text-blue-500">MINDS</span>
          </h2>
        </motion.div>

        <div className="text-center text-2xl text-white mb-12">Coming Soon</div>
        {/* Temporarily Disabled
        <HorizontalScrollCarousel />
        */}
      </div>
    </section>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-8">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative h-[400px] w-[300px] rounded-xl bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 p-6 backdrop-blur-xl"
    >
      <div className="relative flex h-full flex-col items-center">
        {/* Image Container */}
        <motion.div
          style={{ transform: "translateZ(50px)" }}
          className="relative mb-6 size-40"
        >
          <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/10">
            <Image
              src={card.url}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ transform: "translateZ(30px)" }}
          className="text-center"
        >
          <h3 className="mb-1 text-xl font-bold text-white">{card.title}</h3>
          <p className="mb-2 text-sm font-medium text-blue-400">{card.role}</p>
          <p className="mb-4 text-xs text-white/60">{card.specialty}</p>
          <p className="text-xs leading-relaxed text-white/40 line-clamp-3">
            {card.description}
          </p>
        </motion.div>

        {/* Interactive elements */}
        <motion.button
          style={{ transform: "translateZ(40px)" }}
          className="mt-auto rounded-full bg-blue-500 px-6 py-2 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Profile
        </motion.button>
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
};

export default Guests;

type CardType = {
  url: string;
  title: string;
  id: number;
  role: string;
  experience: string;
  specialty: string;
  description: string;
};

const cards: CardType[] = [
  {
    url: "https://source.unsplash.com/400x400/?portrait,professional,1",
    title: "Dr. Sarah Johnson",
    id: 1,
    role: "Senior Research Scientist",
    experience: "15+ years",
    specialty: "Quantum Computing",
    description:
      "Leading expert in quantum algorithms and computational physics with groundbreaking research in quantum error correction.",
  },
  {
    url: "https://source.unsplash.com/400x400/?portrait,professional,2",
    title: "Prof. Michael Chen",
    id: 2,
    role: "AI Ethics Consultant",
    experience: "12 years",
    specialty: "Machine Learning Ethics",
    description:
      "Pioneering work in responsible AI development and ethical framework implementation in tech industries.",
  },
  {
    url: "https://source.unsplash.com/400x400/?portrait,professional,3",
    title: "Dr. Emily Rodriguez",
    id: 3,
    role: "Biotechnology Director",
    experience: "18 years",
    specialty: "Gene Therapy",
    description:
      "Renowned for breakthrough discoveries in CRISPR applications and regenerative medicine.",
  },
  {
    url: "https://source.unsplash.com/400x400/?portrait,professional,4",
    title: "Prof. James Wilson",
    id: 4,
    role: "Space Systems Engineer",
    experience: "20 years",
    specialty: "Propulsion Systems",
    description:
      "Leading authority on advanced propulsion technologies for deep space exploration.",
  },
  {
    url: "https://source.unsplash.com/400x400/?portrait,professional,5",
    title: "Dr. Lisa Zhang",
    id: 5,
    role: "Cybersecurity Expert",
    experience: "10 years",
    specialty: "Quantum Cryptography",
    description:
      "Specializes in next-generation security protocols and quantum-resistant encryption systems.",
  },
  {
    url: "https://source.unsplash.com/400x400/?portrait,professional,6",
    title: "Prof. David Kumar",
    id: 6,
    role: "Renewable Energy Researcher",
    experience: "16 years",
    specialty: "Solar Technology",
    description:
      "Pioneer in developing high-efficiency solar cells and sustainable energy solutions.",
  },
  {
    url: "https://source.unsplash.com/400x400/?portrait,professional,7",
    title: "Dr. Maria Torres",
    id: 7,
    role: "Neuroscience Director",
    experience: "14 years",
    specialty: "Brain-Computer Interfaces",
    description:
      "Leading research in neural engineering and cognitive enhancement technologies.",
  },
];
