

import ContactForm from "@/components/pages/contact/ContactForm";
import Locations from "@/components/pages/contact/Locations";
import Map from "@/components/pages/contact/Map";
import React from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footers/Footer";
<<<<<<< HEAD

export const metadata = {
  title: "Contact || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
=======
import CommonHero from "@/components/common/CommonHero";
import Image from "next/image";

export const metadata = {
  title: "Contact || Mawari - Luxury Gay Travel",
  description: "Get in touch with Mawari for luxury gay travel experiences",
>>>>>>> origin/main
};

export default function page() {
  return (
    <>
<<<<<<< HEAD
      <main>
        <Header />
        <Map />
        <Locations />
        <ContactForm />

        <Footer />
      </main>
=======
        <CommonHero title="Contact" subtitle="Let's Start a Conversation" breadcrumb="Contact" image="/heroimg/contact.jpg" italicTitle="Us"/>
        <Locations />

        <ContactForm />

          <Map />
>>>>>>> origin/main
    </>
  );
}
