import Hero1 from "@/components/homes/heros/Hero1";


import TourList4 from "@/components/tours/TourList4";
import React from "react";
import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/header/Header";

export const metadata = {
  title: "Tour-list-5 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header />
        <Hero1 />

        <div className="mt-50">
          <TourList4 />
        </div>

        <Footer />
      </main>
    </>
  );
}
