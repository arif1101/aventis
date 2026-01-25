
export default function GrowthSection() {
  return (
    <div className="relative bg-black text-white overflow-hidden">

      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/post-details.png')",
          opacity: 0.6
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
      

      <div className="relative z-10 flex flex-col items-center justify-center text-center my-[208px]">

        <div className="mb-8">
          <div className="inline-block border-white/30 rounded-full backdrop-blur-sm">
            <span className="text-[32px] font-light tracking-wider">AIQ</span>
          </div>
        </div>
        

        <h1 className="text-4xl md:text-[48px] lg:text-[64px] font-normal leading-tight">
          MOST GROWTH IS IMPROVISED, THE <br></br> BEST GROWTH IS DESIGNED
        </h1>
        

        <p className="text-sm md:text-base text-gray-300 max-w-2xl font-light mt-6">
          As artificial intelligence systems become more sophisticated, governments worldwide are racing to establish governance structures that balance innovation with protection.
        </p>
        
      </div>

    </div>
  );
}