"use client";
import { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "@/components/button";
import AnimatedTitle from "@/components/animated-title";

const FloatingImage = () => {
  const frameRef = useRef<HTMLImageElement>(null);
  const controls = useAnimation();

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    controls.start({
      rotateX,
      rotateY,
      transformPerspective: 500,
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  };

  const handleMouseLeave = () => {
    controls.start({
      rotateX: 0,
      rotateY: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  };

  return (
    <section id="story" className="min-h-screen w-full bg-black text-blue-50">
      <div className="flex min-h-screen w-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase tracking-wider md:text-[10px]">
          the multiversal ip world
        </p>

        <div className="relative w-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container mx-auto max-w-4xl px-4">
            <div className="story-img-mask overflow-hidden rounded-2xl">
              <div className="story-img-content">
                <motion.img
                  ref={frameRef}
                  animate={controls}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="w-full object-cover"
                  draggable={false}
                />
              </div>
            </div>

            <svg
              className="invisible absolute h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="mt-[-20rem] flex w-full justify-center px-4 md:mt-[-16rem] md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingImage;
