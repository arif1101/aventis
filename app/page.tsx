import Hero from "@/components/hero/Hero";
import AventisIQ from "@/components/modules/home/AventisIQ";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-24">
      <Hero/>
      <AventisIQ/>
    </div>
  );
}
