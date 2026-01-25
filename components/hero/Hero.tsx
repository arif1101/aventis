

export default function Hero() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Video Background */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center px-6 sm:px-8 lg:px-12 pt-24 sm:pt-32 pb-16 max-w-[1294px] mx-auto">
        <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-thin mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#FFC4D4] bg-clip-text text-transparent">
              Fusing Strategy With
            </span>
            <br />
            Creativity for
            <br />
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#FFC4D4] bg-clip-text text-transparent">
              Transformative Growth
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            Aventis is a consultancy built on deep institutional knowledge,
            creative clarity, and the intelligence that drives meaningful change.
          </p>

          <button className="px-6 sm:px-8 py-3 sm:py-4 border border-white rounded-full text-xs sm:text-sm font-light tracking-wider uppercase hover:bg-white hover:text-black transition">
            See How
          </button>

        </div>
      </div>
    </div>
  );
}
