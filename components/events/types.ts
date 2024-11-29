export interface Category {
  id: CategoryId;
  name: string;
  icon: string;
  description: string;
}

// Valid category IDs
export type CategoryId =
  | "technical"
  | "cultural"
  | "workshops"
  | "competitions";

// Core event interface
export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  prize: string;
  image: string;
  category: CategoryId;
  featured?: boolean;
  highlights?: string[];
  timeline: string[];
  requirements?: string[];
}

// Props for various components
export interface EventsGridProps {
  selectedCategory: CategoryId;
}

export interface EventsCategoriesProps {
  selectedCategory: CategoryId;
  onCategoryChange: (category: CategoryId) => void;
}

export interface EventsDetailsProps {
  eventId: number;
  onClose: () => void;
}

export interface EventsShowcaseProps {
  selectedCategory: CategoryId;
  onCategoryChange: (category: CategoryId) => void;
  onEventSelect: (id: number) => void;
}

// Animation variants (if needed)
export interface MotionVariants {
  initial: object;
  animate: object;
  exit?: object;
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string;
  };
}

// Button props (if needed)
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

// Collections
export type Events = Event[];
export type Categories = Category[];
