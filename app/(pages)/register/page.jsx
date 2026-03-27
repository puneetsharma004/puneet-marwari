import Register from "@/components/pages/Register";
import React from "react";
import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/header/Header";
import HeroBanner from "@/components/common/HeroBanner";

export const metadata = {
  title: "Register || Register Now",
  description: "Mawari - Travel & Tour Registration",
};

export default function page() {
  return (
    <>
      <HeroBanner
        title="Register Now"
        description="Let's create your account!"
        imageSrc="/heroimg/registration.jpg"
      />
      <Register />
    </>
  );
}
