import Hero1 from "@/components/homes/heros/Hero1";
import TourSlderOne from "@/components/homes/tours/TourSlderOne";


import Destinations from "@/components/tours/Destinations";
import TourList4 from "@/components/tours/TourList4";
import TourSlder from "@/components/tours/TourSlider";
import React from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footers/Footer";

export const metadata = {
  title: "Tour-list-7 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header />
        <Hero1 />

        <Destinations />
        <TourSlder />

        <TourList4 />

        <Footer />
      </main>
    </>
  );
}
