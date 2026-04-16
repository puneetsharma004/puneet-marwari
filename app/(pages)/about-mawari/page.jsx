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
      <div className="container">
        <div className="layout-pb-md">
          <p data-aos="fade-up" data-aos-delay="" className="mt-30 md:mt-10">
            Mawari was created for travelers who want more from the experience.
            Born from the foundation of Detours Travel, Mawari takes the spirit
            of connection and exploration and elevates it.
          </p>
          <p data-aos="fade-up" data-aos-delay="" className="mt-30 md:mt-10">
            Our team has spent years immersed in destinations around the world,
            building relationships, understanding culture beyond the surface,
            and learning what makes a journey truly memorable. Mawari is the
            result of that experience, designed for those who value depth,
            comfort, and a sense of ease while traveling.
          </p>
        </div>
      </div>
      <Team />
    </>
  );
}
