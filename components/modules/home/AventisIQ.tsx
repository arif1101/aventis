import React from 'react';

export default function AventisIQ() {
  const cards = [
    {
      image: "/iq-img-1.png",
      title: "Lorem ipsum, dolor sit elit. Id consectetur quam ducimus aut et iusto!",
    },
    {
      image: "/iq-img-2.png",
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id consectetur ",
    },
    {
      image: "/iq-img-3.png",
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ducimus aut et iusto!",
    }
  ];

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white py-[140px]">
      <div className="max-w-[1294px] mx-auto">
        {/* Header */}
        <div className="">
          <h1 className="text-5xl md:text-6xl font-light mb-3">Aventis IQ</h1>
          <div className="mt-6">
            <p className="text-[20px] tracking-[1%] text-[#CED4DA]">
              The intelligence behind how we think, advise, and deliver.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
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
              <div className="absolute h-[98px] bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-5 rounded-lg">
                <p className="text-black text-[18px] font-normal tracking-[1.5%]">
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