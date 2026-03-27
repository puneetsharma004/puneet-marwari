import SingleFour from "@/components/tourSingle/pages/SingleFour";
import { allTour } from "@/data/tours";
import React from "react";
import HeroBanner from "@/components/common/HeroBanner";
import Single from "@/components/tourSingle/pages/Single";

export const metadata = {
  title: "Tour-Details || Mawari",
  description: "Mawari - Luxury Gay Travel",
};

export default async function page(props) {
  const params = await props.params;
  const id = params.id;
  const tour = allTour.find((item) => item.id == id) || allTour[0];

  return (
    <>
      <HeroBanner
        title="GREECE"
        description="Explore deals, travel guides and things to do in Greece"
        imageSrc="/heroimg/about-us.jpg"
      />

      <Single tour={tour} />
    </>
  );
}
