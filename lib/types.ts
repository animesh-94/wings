interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  github?: string;
  email?: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  links: SocialLinks;
}

interface TeamSection {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

interface TeamData {
  core: TeamSection;
  technical: TeamSection;
  creative: TeamSection;
  events: TeamSection;
  marketing: TeamSection;
  cultural: TeamSection;
  [key: string]: TeamSection; // For any additional sections that might be added
}

export type { SocialLinks, TeamMember, TeamSection, TeamData };
