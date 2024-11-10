"use client";
import { useState, useEffect } from "react";

interface Slide {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
}

interface SlideshowBannerProps {
  slides: Slide[];
  interval?: number;
}

const SlideshowBanner: React.FC<SlideshowBannerProps> = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [interval, slides.length]); 

  return (
    <div className="relative w-full h-screen overflow-hidden -z-10">
      <div
        className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0 blur-md" : "opacity-100 blur-0"
        }`}
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-start text-left px-10 lg:px-60">
          <h2 className="text-6xl w-full lg:w-2/4 font-bold mb-4 text-orange-400">
            {slides[currentIndex].title}
          </h2>
          <p className="text-white text-xl mb-8 lg:w-2/4">
            {slides[currentIndex].description}
          </p>
          <a
            href={slides[currentIndex].buttonLink}
            className="bg-none text-white px-4 py-2 hover:bg-orange-800 hover:border-orange-800 border"
            rel="noopener noreferrer"
          >
            <p className="text-lg flex items-center justify-center">
              {slides[currentIndex].buttonText}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlideshowBanner;
