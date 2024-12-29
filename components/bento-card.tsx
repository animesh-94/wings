"use client";
import Image from "next/image";

interface BentoCardProps {
  src?: string;
  title: React.ReactNode;
  description?: string;
}

export default function BentoCard({ src, title, description }: BentoCardProps) {
  return (
    <div className="relative size-full">
      {src && (
        <Image
          src={src}
          alt="title"
          height={1080}
          width={1920}
          className="absolute left-0 top-0 size-full object-cover"
        />
      )}
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div className="max-w-md backdrop-blur-[2px] p-2 rounded-lg">
          <h2 className="font-display text-3xl font-bold md:text-4xl drop-shadow-lg">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base drop-shadow-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
