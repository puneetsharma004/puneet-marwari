

import PageHeader from "@/components/tours/PageHeader";
import TourList3 from "@/components/tours/TourList3";
import React from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footers/Footer";

export const metadata = {
  title: "Tour-list-4 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header />
        <PageHeader />
        <TourList3 />
        <Footer />
      </main>
    </>
  );
}
