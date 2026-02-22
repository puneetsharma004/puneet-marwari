import BannerTwo from "@/components/homes/banners/BannerTwo";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import DestinationsTwo from "@/components/homes/destinations/DestinationsTwo";
import Features6 from "@/components/homes/features/Features6";
import Hero8 from "@/components/homes/heros/Hero8";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import PopularTourSlider from "@/components/homes/tours/PopulerTourSlider";
import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/header/Header";
import React from "react";



export const metadata = {
  title: "Mawari - Travel & Tour",
};

export default function page() {
  return (
    <>
      <Header />
      <Hero8 />
      <PopularTourSlider />
      <Features6 />
      <DestinationsTwo />
      <BannerTwo />
      <div className="bg-accent-1-05">
        <TestimonialOne />
      </div>
      <BrandsOne />
      <Footer />
    </>
  );
}
