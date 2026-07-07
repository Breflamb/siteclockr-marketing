import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Compliance } from "@/components/sections/Compliance";
import { MoreFeatures } from "@/components/sections/MoreFeatures";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Compliance />
      <MoreFeatures />
      <Pricing />
      <Faq />
      <CtaBand />
    </>
  );
}
