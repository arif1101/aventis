export default function GrowthImpactSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/growthImpact.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-[1294px] mx-auto text-center lg:text-left">

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight">
            DESIGN GROWTH. BUILD IMPACT
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 sm:mb-10 font-light">
            Let&apos;s explore how we can help you grow with clarity.
          </p>

          <button className="px-6 sm:px-8 py-3 border border-white/60 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 text-xs sm:text-sm tracking-wider font-light backdrop-blur-sm">
            SEE REPORT
          </button>

        </div>
      </div>
    </div>
  );
}
