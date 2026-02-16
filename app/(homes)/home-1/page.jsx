import ArticlesThree from "@/components/homes/articles/ArticlesThree";
import Banner from "@/components/homes/banners/Banner";
import BannerOne from "@/components/homes/banners/BannerOne";
import DestinationsOne from "@/components/homes/destinations/DestinationsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import Hero8 from "@/components/homes/heros/Hero8";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import TourTypeOne from "@/components/homes/tourTypes/TourTypeOne";
import PopularTourSlider from "@/components/homes/tours/PopulerTourSlider";
import TourSlderOne from "@/components/homes/tours/TourSlderOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header7 from "@/components/layout/header/Header7";

export default function Home() {
  return (
    <main>
      <Header7 />
      <Hero8 />
      <FeaturesOne />
      <DestinationsOne />
      <PopularTourSlider />
      <Banner />
      <TourTypeOne />
      <TourSlderOne />
      <TestimonialOne />
      <BannerOne />
      <ArticlesThree />
      <FooterOne />
    </main>
  );
}
