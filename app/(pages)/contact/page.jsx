import ContactForm from "@/components/pages/contact/ContactForm";
import Locations from "@/components/pages/contact/Locations";
import Map from "@/components/pages/contact/Map";
import React from "react";
import HeroBanner from "@/components/common/HeroBanner";

export const metadata = {
  title: "Contact || Mawari - Luxury Gay Travel",
  description: "Get in touch with Mawari for luxury gay travel experiences",
};

export default function page() {
  return (
    <>
      <HeroBanner
        title="Contact"
        description="Let's Start a Conversation"
        imageSrc="/heroimg/contact-hero.png"
      />

      {/* <Locations /> */}

      <ContactForm />

      <Map />
    </>
  );
}
