

import Register from "@/components/pages/Register";
import React from "react";
import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/header/Header";

export const metadata = {
  title: "Register || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
          <Header />
        <Register />
          <Footer />
      </main>
    </>
  );
}
