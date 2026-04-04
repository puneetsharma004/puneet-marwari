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
        description="Journey Through the Greek Islands"
        imageSrc="/heroimg/greece.png"
      />

      <Single tour={tour} />
    </>
  );
}
