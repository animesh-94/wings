export interface GalleryVideo {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  year: string;
  thumbnail?: string;
}

export const galleryVideos: GalleryVideo[] = [
  {
    id: "2023_Geca_Campus",
    youtubeId: "93EFs6KStWQ",
    title: "GECA Campus Tour",
    category: "events",
    year: "2023",
  },
  {
    id: "2023_inauguration",
    youtubeId: "jZc71oYs0aw",
    title: "WINGS 2023 Inauguration",
    category: "cultural",
    year: "2023",
  },
  {
    id: "2023_geca_dronix",
    youtubeId: "t-L9CscWvcM",
    title: "WINGS 2023 Dronix",
    category: "technical",
    year: "2023",
  },
  {
    id: "2024_wings_logo",
    youtubeId: "WeZP3YN_s98",
    title: "WINGS 2024 Logo Reveal",
    category: "technical",
    year: "2024",
  },
];

export const videoCategories = {
  events: "College Events",
  workshops: "Technical Workshops",
  technical: "Technical Showcases",
  cultural: "Cultural Programs",
  exhibition: "Exhibitions",
};

export const videoYears = ["2024", "2023", "2022"];
