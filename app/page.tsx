import Hero from "@/components/hero/Hero";
import AventisIQ from "@/components/modules/home/AventisIQ";
import GrowthSection from "@/components/modules/home/GrothSection";
import GrowthImpactSection from "@/components/modules/home/GrowthImpactSection";
import NewsletterSection from "@/components/modules/home/NewsletterSection";
import WhatWeDo from "@/components/modules/home/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mb-24">
      <Hero/>
      <AventisIQ/>
      <GrowthSection/>
      <WhatWeDo/>
      <GrowthImpactSection/>
      <NewsletterSection/>
    </div>
  );
}
