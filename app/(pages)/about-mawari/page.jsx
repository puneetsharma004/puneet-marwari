import CommonHero from "@/components/common/CommonHero";
import HeroBanner from "@/components/common/HeroBanner";
import AboutSection from "@/components/pages/about/AboutSection";
import Adventure from "@/components/pages/about/Adventure";
import Design from "@/components/pages/about/Design";
import Distinctive from "@/components/pages/about/Distinctive";
import Evolution from "@/components/pages/about/Evolution";
import Hero from "@/components/pages/about/Hero";
import Journey from "@/components/pages/about/Journey";
import Philosophy from "@/components/pages/about/Philosophy";
import Team from "@/components/pages/about/Team";
import React from "react";

export default function AboutMawari() {
  return (
    <>
      <HeroBanner
        title="About Mawari"
        description="Explore deals, travel guides and things to do during Travel"
        imageSrc="/heroimg/about-us.jpg"
      />
      <AboutSection />
      <Journey />
      <Philosophy />
      <Team />
      <Distinctive />

      <Adventure />
      <Design />
    </>
  );
}
