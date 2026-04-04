import HeroBanner from "@/components/common/HeroBanner";
import Team from "@/components/pages/about/Team";
import React from "react";

export default function AboutMawari() {
  return (
    <>
      <HeroBanner
        title="About Mawari"
        description="Explore deals, travel guides and things to do during Travel"
        imageSrc="/heroimg/about-mawari.png"
      />

      <Team />
    </>
  );
}
