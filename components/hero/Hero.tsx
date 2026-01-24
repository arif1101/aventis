"use client";

import React from "react";

export default function Hero() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Start:: Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      {/* End:: Video Background */}

      {/* Start:: Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* End:: Overlay */}

      {/* Start:: Content */}
      <div className="container mx-auto relative z-10 px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
            Fusing Strategy With
            <br />
            Creativity for
            <br />
            Transformative Growth
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl font-light leading-relaxed">
            Aventis is a consultancy built on deep institutional knowledge,
            creative clarity, and the intelligence that drives meaningful change.
          </p>

          <button className="px-8 py-4 border border-white rounded-full text-sm font-light tracking-wider uppercase hover:bg-white hover:text-black transition">
            See How
          </button>
        </div>
      </div>
      {/* End:: Content */}
    </div>
  );
}
