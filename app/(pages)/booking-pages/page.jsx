

import BookingPages from "@/components/pages/BookingPages";
import React from "react";
import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/header/Header";

export const metadata = {
  title: "Booking-page || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
          <Header />
        <BookingPages />
          <Footer />
      </main>
    </>
  );
}
