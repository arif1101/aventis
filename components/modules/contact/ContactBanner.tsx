import React from 'react';

export default function ContactBanner() {
  return (
    <div className="relative text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/contact-banner.jpg')"
        }}
      />
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="max-w-323.5 mx-auto relative z-10 flex flex-col justify-center mt-[274px] mb-[160px]">
        <div className="px-5 md:px-0">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
            Contact Us
          </h1>
          
          {/* Description */}
          <p className="text-[20px] md:text-lg text-white/90 leading-relaxed font-light max-w-3xl mt-6 tracking-[1%]">
            Aventis was created to bring clarity, structure, and disciplined thinking to organisations operating in complex environments. Our approach is built on the belief that growth comes from coherence: when strategy, capability, and creativity work together as part of one system.
          </p>
        </div>
      </div>
    </div>
  );
}