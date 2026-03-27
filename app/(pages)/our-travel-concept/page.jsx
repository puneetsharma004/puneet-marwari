"use client";
import CommonHero from "@/components/common/CommonHero";
import HeroBanner from "@/components/common/HeroBanner";
import Square from "@/components/common/icons/Square";
import Features10 from "@/components/homes/features/Features10";
import Features9 from "@/components/homes/features/Features9";
const advantages = [
  "Exceptional service is our trademark — fast, friendly, reliable, and always going the extra mile.",
  "Over half our guests in 2024 were returning travelers. Once you join us, you'll see why.",
  "Affordable trips without cutting quality — we skip the middlemen, not the magic.",
  "100% hands-on. We run every trip ourselves to guarantee top-notch leaders, service, and experiences.",
  "Activities tailored to your interests — no wasting time on things you don't want to do.",
  "More time in the places you love, less time on the road. Many trips even include regional flights.",
];

export default function OurTravelConcept() {
  return (
    <>
      <HeroBanner
        title="Our Travel Concept"
        description="Explore deals, travel guides and things to do during Travel"
        imageSrc="/heroimg/the-travel-concept.png"
      />

      <Features10 />

      <Features9 />
    </>
  );
}
