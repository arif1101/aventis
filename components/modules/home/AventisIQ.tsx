import React from "react";

export default function AventisIQ() {
  const cards = [
    {
      image: "/iq-img-1.png",
      title: "Lorem ipsum, dolor sit elit. Id consectetur quam ducimus aut et iusto!",
    },
    {
      image: "/iq-img-2.png",
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id consectetur",
    },
    {
      image: "/iq-img-3.png",
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ducimus aut et iusto!",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white py-20 md:py-28 lg:py-[140px] px-6 md:px-8">
      <div className="max-w-[1294px] mx-auto">
        
        {/* Header */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light mb-3">
            Aventis IQ
          </h1>
          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-[20px] text-[#CED4DA]">
            The intelligence behind how we think, advise, and deliver.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-12 md:mt-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden relative"
            >
              <div className="aspect-square">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-lg">
                <p className="text-black text-sm sm:text-base md:text-[18px] font-normal">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
