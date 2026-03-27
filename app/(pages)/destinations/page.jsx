import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import SpacialOffer from "@/components/homes/others/SpacialOffer";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import Hero from "@/components/pages/destinations/Hero";
import Information from "@/components/pages/destinations/Information";
import TourList1 from "@/components/pages/destinations/TourList";
import TourSlider from "@/components/pages/destinations/TourSlider";
import React from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footers/Footer";

export const metadata = {
  title: "Destinations || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <SpacialOffer />
        <TourSlider />
        <TourList1 />
        <TestimonialOne />
        <Information />
        <ArticlesOne />
        <Footer />
      </main>
    </>
  );
}
