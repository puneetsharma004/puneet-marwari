import HeroBanner from "@/components/common/HeroBanner";
import TermsConditionsBody from "@/components/pages/terms-conditions/TermsConditionsBody";
import React from "react";

export const metadata = {
  title: "Terms || Mawari - A more refined way to travel",
  description: "Mawari - Terms & Conditions",
};

export default function page() {
  return (
    <>
      <HeroBanner
        title="Terms & Conditions"
        description="Terms & Conditions"
        imageSrc="/heroimg/registration.jpg"
      />

      <TermsConditionsBody />
    </>
  );
}
