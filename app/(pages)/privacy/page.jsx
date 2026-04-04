import HeroBanner from "@/components/common/HeroBanner";
import PrivacyPolicyBody from "@/components/pages/privacy-policy/PrivacyPolicyBody";
import React from "react";

export const metadata = {
  title: "Terms || Mawari - A more refined way to travel",
  description: "Mawari - Privacy Policy",
};

export default function page() {
  return (
    <>
      <HeroBanner
        title="Privacy Policy"
        description="Privacy Policy"
        imageSrc="/heroimg/registration.jpg"
      />

      <PrivacyPolicyBody />
    </>
  );
}
