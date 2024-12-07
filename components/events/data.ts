import { Event, Category } from "./types";

export const categories: Category[] = [
  {
    id: "technical",
    name: "Technical",
    icon: "💻",
    description: "Challenge your technical skills",
  },
  {
    id: "competitions",
    name: "Competitions",
    icon: "🏆",
    description: "Compete to win",
  },
  {
    id: "cultural",
    name: "Cultural",
    icon: "🎭",
    description: "Experience the arts",
  },
];

export const events: Event[] = [
  {
    id: 1,
    title: "E-Sports",
    description:
      "Game On, Glory Awaits! Compete in BGMI and Valorant tournaments.",
    date: "January 23, 2025",
    prize: "₹45,000",
    image: "https://picsum.photos/seed/esports/800/600",
    category: "competitions",
    fees: {
      "BGMI Duo": "₹100",
      "BGMI Squad (4)": "₹200",
      "Valorant Squad (5)": "₹500",
    },
    building: "Auditorium Block",
    venue: "Gaming Arena",
    highlights: [
      "BGMI and Valorant tournaments",
      "Professional gaming setups",
      "20 teams limit",
      "Multiple team size options",
    ],
    timeline: ["9:00 AM - Registration & Start"],
    requirements: ["Team registration required", "Valid ID proof"],
    rules: [
      "Team size as per category",
      "Game-specific rules apply",
      "Fair play mandatory",
    ],
    coordinators: [
      {
        name: "Shantanu Karande",
        phone: "8624060301",
      },
      {
        name: "Pratik Khandare",
        phone: "9763183191",
      },
    ],
    qrCode: "/images/payment-qr/esports.png",
  },
  {
    id: 2,
    title: "Dronix",
    description: "Game On, Glory Awaits! Show off your drone piloting skills.",
    date: "January 23, 2025",
    prize: "₹45,000",
    image: "https://picsum.photos/seed/dronix/800/600",
    category: "technical",
    fees: "₹300 per team",
    building: "Aeronautics Block",
    venue: "Drone Field",
    highlights: ["20 teams limit", "Precision challenges", "Live audience"],
    timeline: ["9:00 AM - Registration & Start"],
    requirements: ["Drone specifications compliance", "Safety equipment"],
    rules: ["Safety guidelines must be followed", "Maximum 20 teams"],
    coordinators: [
      {
        name: "Mandar Kulkarni",
        phone: "8010074064",
      },
      {
        name: "Sujit Mote",
        phone: "9359377160",
      },
    ],
    qrCode: "/images/payment-qr/dronix.png",
  },
  {
    id: 3,
    title: "Robo Olympics",
    description:
      "Rise of the Machines: Let the Games Begin! A three-event robotics competition.",
    date: "January 23, 2025",
    prize: "More than ₹1,00,000",
    image: "https://picsum.photos/seed/robo/800/600",
    category: "technical",
    fees: {
      "Robo Race": "₹300",
      "Line Follower": "₹200",
      "Robo Soccer": "₹200",
    },
    building: "Robotics Lab",
    venue: "Arena 101",
    highlights: [
      "Three unique competitions",
      "45 teams limit",
      "Multiple categories",
      "Large prize pool",
    ],
    timeline: ["9:00 AM - Registration & Start"],
    requirements: [
      "Custom-built robots",
      "Technical specifications compliance",
    ],
    rules: ["Category-specific rules apply", "Safety guidelines mandatory"],
    coordinators: [
      {
        name: "Apurva Kudhekar",
        phone: "7410036632",
      },
      {
        name: "Akhtar Tadvi",
        phone: "9579949550",
      },
      {
        name: "Jai Bhosle",
        phone: "9370589022",
      },
    ],
    qrCode: "/images/payment-qr/robo.png",
  },
  {
    id: 4,
    title: "Bridge Mania",
    description:
      "Engineering Fun, One Stick at a Time! Test your structural engineering skills.",
    date: "January 23, 2025",
    prize: "₹22,500",
    image: "https://picsum.photos/seed/bridge/800/600",
    category: "technical",
    fees: "₹150 per team",
    building: "Civil Engineering Block",
    venue: "Structures Lab",
    highlights: [
      "60 teams limit",
      "Hands-on construction",
      "Load testing challenge",
    ],
    timeline: ["9:00 AM - Registration & Start"],
    requirements: ["Basic construction tools", "Team registration"],
    rules: ["Materials provided must be used", "Time limit for construction"],
    coordinators: [
      {
        name: "Vedprakash Varma",
        phone: "9764860870",
      },
      {
        name: "Vishal Chandile",
        phone: "8010816252",
      },
    ],
    qrCode: "/images/payment-qr/bridge-mania.png",
  },
  {
    id: 5,
    title: "India Innovates",
    description:
      "Unleash Ideas, Ignite Innovation: The Future of Technology Starts Here!",
    date: "January 23, 2025",
    prize: "₹22,500",
    image: "https://picsum.photos/seed/innovates/800/600",
    category: "technical",
    fees: "₹100 per team",
    building: "Innovation Block",
    venue: "Exhibition Hall",
    highlights: ["30 teams limit", "Innovation showcase", "Expert judging"],
    timeline: ["9:00 AM - Registration & Start"],
    coordinators: [
      {
        name: "Sakshi Vaidya",
        phone: "7559483927",
      },
      {
        name: "Prajakta Jagdale",
        phone: "8237715730",
      },
    ],
    qrCode: "/images/payment-qr/india-innovates.png",
  },
  {
    id: 6,
    title: "Hackathon",
    description: "Hack For Future, Win the Challenge! 24-hour coding marathon.",
    date: "January 23, 2025",
    prize: "₹32,500",
    image: "https://picsum.photos/seed/hackathon/800/600",
    category: "technical",
    fees: "₹300 per team",
    building: "Computer Science Block",
    venue: "Lab Complex",
    highlights: ["25 teams limit", "24-hour coding", "Mentorship available"],
    timeline: ["9:00 AM - Registration & Start"],
    coordinators: [
      {
        name: "Prachi Bhonde",
        phone: "8055459528",
      },
      {
        name: "Dnyanesh Deshmukh",
        phone: "7822965368",
      },
    ],
    qrCode: "/images/payment-qr/hackathon.png",
  },
  {
    id: 7,
    title: "Ode to Code",
    description:
      "Code Like a Pro, Compete Like a Legend! Programming competition.",
    date: "January 23, 2025",
    prize: "₹22,500",
    image: "https://picsum.photos/seed/code/800/600",
    category: "technical",
    fees: "₹100 per participant",
    building: "Computer Science Block",
    venue: "Programming Lab",
    highlights: [
      "300 participant limit",
      "Multiple rounds",
      "Individual competition",
    ],
    timeline: ["9:00 AM - Registration & Start"],
    coordinators: [
      {
        name: "Animesh Yadav",
        phone: "8452068978",
      },
      {
        name: "Aniket Rangari",
        phone: "9529072277",
      },
    ],
    qrCode: "/images/payment-qr/ode-to-code.png",
  },
  {
    id: 8,
    title: "CAD War",
    description: "Design, Draft, Dominate: Unleash Your Creativity with CAD!",
    date: "January 23, 2025",
    prize: "₹22,500",
    image: "https://picsum.photos/seed/cadwar/800/600",
    category: "technical",
    fees: "₹100 per team",
    building: "Mechanical Block",
    venue: "CAD Lab",
    highlights: [
      "20 teams limit",
      "Design challenges",
      "Professional software",
    ],
    timeline: ["9:00 AM - Registration & Start"],
    coordinators: [
      {
        name: "Sarthak Bramhe",
        phone: "7249426592",
      },
      {
        name: "Ayush Shelke",
        phone: "8530263409",
      },
    ],
    qrCode: "/images/payment-qr/cadwar.png",
  },
  {
    id: 9,
    title: "Bike and Car Expo",
    description: "Drive the Future, Ride the Adventure!",
    date: "January 23, 2025",
    prize: "Exhibition Event",
    image: "https://picsum.photos/seed/bikeandcar/800/600",
    category: "competitions",
    building: "Open Ground",
    venue: "Exhibition Area",
    highlights: [
      "Custom vehicles showcase",
      "Live demonstrations",
      "Networking opportunity",
    ],
    timeline: ["9:00 AM - Exhibition Start"],
    coordinators: [
      {
        name: "Event Coordinator",
        phone: "Contact Main Desk",
      },
    ],
  },
  {
    id: 10,
    title: "Music Concert",
    description: "Experience the Magic of Live Music!",
    date: "January 23, 2025",
    prize: "NaN",
    image: "https://picsum.photos/seed/concert/800/600",
    category: "cultural",
    building: "Auditorium",
    venue: "Main Stage",
    timeline: ["6:00 PM - Concert Start", "8:00 PM - Concert End"],
    coordinators: [
      {
        name: "Varad Tripure",
        phone: "9112836379",
      },
      {
        name: "Ritesh Deshmane",
        phone: "9307546730",
      },
    ],
    highlights: [
      "Live performances",
      "Professional sound system",
      "Evening entertainment",
    ],
  },
];
