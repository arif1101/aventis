'use client'
import React, { useState } from "react";

export default function Featured() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const insights = [
    {
      id: 1,
      title: "Designing Creative Capability for Long-Term Impact",
      image: "/iq-img-1.png",
    },
    {
      id: 2,
      title: "Building Operational Maturity in Modern SMEs",
      image: "/iq-img-2.png",
    },
    {
      id: 3,
      title: "The Patterns Behind High-Growth Business Momentum",
      image: "/iq-img-3.png",
    },
    {
      id: 4,
      title: "Designing Creative Capability for Long-Term Impact",
      image: "/iq-img-1.png",
    },
    {
      id: 5,
      title: "Building Operational Maturity in Modern SMEs",
      image: "/iq-img-2.png",
    },
    {
      id: 6,
      title: "The Patterns Behind High-Growth Business Momentum",
      image: "/iq-img-3.png",
    },
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleNext = () => {
    if (currentSlide < insights.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section className="min-h-screen bg-black py-20 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <h2 className="text-5xl md:text-6xl font-light mb-16 ">
          Featured insights
        </h2>

        {/* Scrollable Cards Container */}
        <div className="relative mb-12">
          {/* Cards Wrapper - Always show 3 cards */}
          <div className="flex items-center justify-center gap-6 px-20">
            {/* Left Card */}
            {currentSlide > 0 && (
              <div
                onClick={() => handleSlideChange(currentSlide - 1)}
                className="flex-shrink-0 w-[350px] transition-all duration-700 ease-out cursor-pointer"
                style={{
                  transform: 'scale(0.9)',
                  opacity: 0.7,
                  zIndex: 10
                }}
              >
                <div className="relative rounded-3xl overflow-hidden w-full aspect-[3/4] bg-gray-200 shadow-xl transition-shadow duration-300">
                  <img
                    src={insights[currentSlide - 1].image}
                    alt={insights[currentSlide - 1].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-opacity duration-700" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                      <h3 className="text-gray-900 text-base font-normal leading-snug">
                        {insights[currentSlide - 1].title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Center Card (Active) */}
            <div
              className="flex-shrink-0 w-[400px] transition-all duration-700 ease-out"
              style={{
                transform: 'scale(1.1)',
                opacity: 1,
                zIndex: 20
              }}
            >
              <div className="relative rounded-3xl overflow-hidden w-full aspect-[3/4] bg-gray-200 shadow-2xl">
                <img
                  src={insights[currentSlide].image}
                  alt={insights[currentSlide].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <h3 className="text-gray-900 text-lg font-normal leading-snug">
                      {insights[currentSlide].title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card */}
            {currentSlide < insights.length - 1 && (
              <div
                onClick={() => handleSlideChange(currentSlide + 1)}
                className="flex-shrink-0 w-[350px] transition-all duration-700 ease-out cursor-pointer"
                style={{
                  transform: 'scale(0.9)',
                  opacity: 0.7,
                  zIndex: 10
                }}
              >
                <div className="relative rounded-3xl overflow-hidden w-full aspect-[3/4] bg-gray-200 shadow-xl transition-shadow duration-300">
                  <img
                    src={insights[currentSlide + 1].image}
                    alt={insights[currentSlide + 1].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-opacity duration-700" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                      <h3 className="text-gray-900 text-base font-normal leading-snug">
                        {insights[currentSlide + 1].title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          {currentSlide > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 z-30"
              aria-label="Previous slide"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          )}

          {currentSlide < insights.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 z-30"
              aria-label="Next slide"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          )}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2">
          {insights.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "w-8 h-2 bg-gray-800"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}