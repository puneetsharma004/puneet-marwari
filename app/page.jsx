import React from "react";
import Home from "./(homes)/page";
import Header from "@/components/dasboard/Header";
import Hero8 from "@/components/homes/heros/Hero8";
import PopularTourSlider from "@/components/homes/tours/PopulerTourSlider";
import Features6 from "@/components/homes/features/Features6";
import DestinationsTwo from "@/components/homes/destinations/DestinationsTwo";
import BannerTwo from "@/components/homes/banners/BannerTwo";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";

export const metadata = {
  title: "Home-1 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
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
