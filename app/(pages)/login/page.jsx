import Login from "@/components/pages/Login";
import React from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footers/Footer";
import HeroBanner from "@/components/common/HeroBanner";

export const metadata = {
  title: "Login || Login Now",
  description: "Mawari - Travel & Tour Login",
};

export default function page() {
  return (
    <>
      <HeroBanner
        title="Login Now"
        description="We're glad to see you again!"
        imageSrc="/heroimg/contact.jpg"
      />
      <Login />
    </>
  );
}
