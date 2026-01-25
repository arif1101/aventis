/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

export default function Paper({ card }: { card: any }) {

  
  return (
    <Link
      href={`/aiq/${card.id}`}
      className="block rounded-2xl overflow-hidden relative w-[306px] h-[381px] cursor-pointer transition-transform hover:scale-[1.02]"
    >
      <div className="aspect-square h-full">
        <img
          src={card.urlToImage || "/iq-img-1.png"}
          alt={card.title}
          className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      <span className="px-4 py-1 rounded-full absolute top-2 left-2 bg-[rgba(20,20,20,0.75)] text-white text-xs">
        {card.source?.name || "News"}
      </span>

      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-lg">
        <p className="text-black text-sm sm:text-base md:text-[18px] font-normal line-clamp-3">
          {card.title}
        </p>
      </div>
    </Link>
  );
}
