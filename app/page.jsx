
import DestinationsTwo from "@/components/homes/destinations/DestinationsTwo";

import Hero7 from "@/components/homes/heros/Hero7";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";


import React from "react";

import Features5 from "@/components/homes/features/Features5";
import Activity from "@/components/pages/helpCenter/Activity";
import FeaturesVideo from "@/components/homes/features/FeaturesVideo";


export const metadata = {
  title: "Mawari - Travel & Tour",
  description: "Mawari - Travel & Tour",
};

export default function page() {
  return (
    <>
      <Hero7 />
      <DestinationsTwo />
      <Features5 />
      <Activity />
      <FeaturesVideo />
      <div className="bg-accent-1-05">
        <TestimonialOne />
      </div>
    </>
  );
}