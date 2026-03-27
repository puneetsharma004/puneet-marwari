

import Hero1 from "@/components/blogs/Hero1";
import BlogList3 from "@/components/blogs/BlogList3";
import Header from "@/components/layout/header/Header";
import React from "react";
import Footer from "@/components/layout/footers/Footer";

export const metadata = {
  title: "Blog-list-3 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header />
        <Hero1 />
        <BlogList3 />
        <Footer />
      </main>
    </>
  );
}
