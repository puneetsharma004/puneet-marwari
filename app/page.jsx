import BannerTwo from "@/components/homes/banners/BannerTwo";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import DestinationsTwo from "@/components/homes/destinations/DestinationsTwo";
import Features6 from "@/components/homes/features/Features6";
import Hero7 from "@/components/homes/heros/Hero7";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import PopularTourSlider from "@/components/homes/tours/PopulerTourSlider";
import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/header/Header";
import TourSlider5 from "@/components/homes/tours/TourSlider5";
import React from "react";
import Banner12 from "@/components/homes/banners/Banner12";
import Features5 from "@/components/homes/features/Features5";

export const metadata = {
  title: "Mawari - Travel & Tour",
  description: "Mawari - Travel & Tour",
};

export default function page() {
  return (
    <>
      <Header />
      <Hero7 />
      {/*<PopularTourSlider />*/}
      <DestinationsTwo />
      <Features5 />
      {/* <Features6 /> */}
      {/* <TourSlider5 /> */}
      {/*<BannerTwo />*/}
      {/* <Banner12 /> */}
      <div className="bg-accent-1-05">
        <TestimonialOne />
      </div>
      {/* <BrandsOne /> */}
      <Footer />
    </>
  );
}
