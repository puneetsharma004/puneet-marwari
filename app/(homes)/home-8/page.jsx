import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import Banner12 from "@/components/homes/banners/Banner12";
import Banner13 from "@/components/homes/banners/Banner13";
import BannerTwo from "@/components/homes/banners/BannerTwo";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import Destinations6 from "@/components/homes/destinations/Destinations6";
import Destinations7 from "@/components/homes/destinations/Destinations7";
import DestinationsTwo from "@/components/homes/destinations/DestinationsTwo";
import Features6 from "@/components/homes/features/Features6";
import Hero8 from "@/components/homes/heros/Hero8";
import SpacialOffer from "@/components/homes/others/SpacialOffer";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import CityTour from "@/components/homes/tours/CityTour";
import CruiseTour from "@/components/homes/tours/CruiseTour";
import CulturalTour from "@/components/homes/tours/CulturalTour";
import PopularTourSlider from "@/components/homes/tours/PopulerTourSlider";
import FooterSix from "@/components/layout/footers/FooterSix";
import Header7 from "@/components/layout/header/Header7";
import React from "react";

export const metadata = {
  title: "Home-8 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header7 />
        <Hero8 />
        {/* <SpacialOffer /> */}
        <PopularTourSlider />
        {/* <Destinations6 /> */}
        {/* <Destinations7 /> */}
        {/* <CityTour /> */}
        {/* <CulturalTour /> */}
        {/* <Banner12 /> */}
        {/* <CruiseTour /> */}
        {/* <Banner13 /> */}
        <Features6 />
        <DestinationsTwo />
        <BannerTwo />
        <div className="bg-accent-1-05">
          <TestimonialOne />
        </div>
        <BrandsOne />
        {/* <ArticlesOne /> */}
        <FooterSix />
      </main>
    </>
  );
}
