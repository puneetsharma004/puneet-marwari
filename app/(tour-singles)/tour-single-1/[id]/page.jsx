

import PageHeader from "@/components/tourSingle/PageHeader";
import TourSlider from "@/components/tourSingle/TourSlider";
import SingleOne from "@/components/tourSingle/pages/SingleOne";
import { allTour } from "@/data/tours";

import React from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footers/Footer";

export const metadata = {
  title: "Tour-single-1 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default async function page(props) {
  const params = await props.params;
  const id = params.id;
  const tour = allTour.find((item) => item.id == id) || allTour[0];

  return (
    <>
      <main>
        <Header />
        <PageHeader />

        <SingleOne tour={tour} />
        <TourSlider />
        <Footer />
      </main>
    </>
  );
}
