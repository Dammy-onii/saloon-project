"use client"

import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-screen  overflow-hidden -z-10 ">
      <div
        className="h-full bg-cover bg-center transition-all duration-500 flex items-center justify-center"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      >
        <div className=" w-full h-full flex flex-col justify-center items-start text-left px-10 lg:px-60">
          <h2 className="text-6xl w-full lg:w-2/4 font-bold mb-4 text-orange-400">{slides[currentIndex].title}</h2>
          <p className="text-white text-xl mb-8 lg:w-2/4">{slides[currentIndex].description}</p>
          <button
            // href={slides[currentIndex].buttonLink}
            className="bg-none text-white px-4 py-2 hover:bg-orange-800 hover:border-orange-800 border"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <p className=' text-lg flex items-center justify-center '>{slides[currentIndex].buttonText}</p>
          </button>
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          onClick={handleNext}
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default SlideshowBanner;
