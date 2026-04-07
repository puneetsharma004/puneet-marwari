import DestinationsTwo from "@/components/homes/destinations/DestinationsTwo";
import Features5 from "@/components/homes/features/Features5";
import Hero7 from "@/components/homes/heros/Hero7";
import Activity from "../helpCenter/Activity";
import FeaturesVideo from "@/components/homes/features/FeaturesVideo";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footers/Footer";

export default function HomeComponent() {
  return (
    <>
      <Header />
      <Hero7 />
      <DestinationsTwo />
      <Features5 />
      <Activity />
      <FeaturesVideo />
      <div className="bg-accent-1-05">
        <TestimonialOne />
      </div>
      <Footer />
    </>
  );
}
