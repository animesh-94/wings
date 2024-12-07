import fs from "fs";
import path from "path";
import { galleryVideos, GalleryVideo } from "./gallery-videos";

export interface GalleryImage {
  id: string;
  type: "image";
  src: string;
  alt: string;
  category: string;
  year: string;
}

export interface GalleryVideoItem extends GalleryVideo {
  type: "video";
}

export type GalleryItem = GalleryImage | GalleryVideoItem;

export function getGalleryItems(): GalleryItem[] {
  const galleryPath = path.join(process.cwd(), "public/gallery");
  const years = fs.readdirSync(galleryPath);

  const items: GalleryItem[] = [];

  // Get images from filesystem
  years.forEach((year) => {
    const yearPath = path.join(galleryPath, year);
    if (fs.statSync(yearPath).isDirectory()) {
      const files = fs.readdirSync(yearPath);

      files.forEach((file) => {
        if (file.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
          const category = file.split("_")[0].toLowerCase();

          items.push({
            id: `${year}_${file}`,
            type: "image",
            src: `/gallery/${year}/${file}`,
            alt: file.split("_")[1]?.split(".")[0] || file,
            category,
            year,
          });
        }
      });
    }
  });

  // Add videos with type property
  const videosWithType: GalleryVideoItem[] = galleryVideos.map((video) => ({
    ...video,
    type: "video",
  }));

  // Combine and sort by year (newest first)
  return [...items, ...videosWithType].sort(
    (a, b) => parseInt(b.year) - parseInt(a.year),
  );
}
