"use client";

interface BentoCardProps {
  src?: string;
  title: React.ReactNode;
  description?: string;
}

export default function BentoCard({ src, title, description }: BentoCardProps) {
  return (
    <div className="relative size-full">
      {src && (
        <video
          src={src}
          loop
          muted
          autoPlay
          playsInline
          className="absolute left-0 top-0 size-full object-cover"
        />
      )}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
