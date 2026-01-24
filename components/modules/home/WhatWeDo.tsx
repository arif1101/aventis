import React from 'react';

export default function WhatWeDo() {
  const pillars = [
    {
      title: "Clarity:",
      description: "We help you define the strategy that guides every decision. From market positioning to growth priorities, your blueprint becomes the foundation for scalable success."
    },
    {
      title: "Capability:",
      description: "We build the driving force that translates clarity into momentum. Through the unity of strategy, creativity and execution, we make growth a repeatable advantage."
    },
    {
      title: "Creativity:",
      description: "We design expressions that go beyond aesthetics with brands that are strategically defined and creatively resonated to move audiences and reinforce purpose."
    }
  ];

  return (
    <div className="bg-[#0E0E0E] text-white py-20 px-8 md:px-16">
      <div className="max-w-[1294px] mx-auto">
        <div className="mb-16">
          <p className="text-xs tracking-widest text-gray-400 mb-6">
            WHAT WE DO
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
            FROM VISION TO VALU
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 max-w-2xl font-light">
            We unify, clarity, capability, and creativity into a single function to unlock strategic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {pillars.map((pillar, index) => (
            <div key={index} className="space-y-6">
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-2xl md:text-3xl font-light mb-4 italic">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <button className="px-8 py-3 border border-white/50 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wider font-light">
            EXPLORE OUR MODEL
          </button>
        </div>
      </div>
    </div>
  );
}