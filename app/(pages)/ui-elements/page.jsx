

import UiElements from "@/components/pages/uiElements";
import PageHeader from "@/components/pages/uiElements/PageHeader";
import React from "react";
import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/header/Header";

export const metadata = {
  title: "UI-elements || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header />
        <PageHeader />
        <UiElements />
        <Footer />
      </main>
    </>
  );
}
