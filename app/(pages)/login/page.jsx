import Login from "@/components/pages/Login";
import React from "react";
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
        imageSrc="/heroimg/login.webp"
      />
      <Login />
    </>
  );
}
