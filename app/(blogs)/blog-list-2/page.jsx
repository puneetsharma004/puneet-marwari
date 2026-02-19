

import Hero1 from "@/components/blogs/Hero1";
import BlogList2 from "@/components/blogs/BlogList2";
import Footer from "@/components/layout/footers/Footer";
import React from "react";
import Header from "@/components/layout/header/Header";

export const metadata = {
  title: "Blog-list-2 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header />
        <Hero1 />
        <BlogList2 />
        <Footer />
      </main>
    </>
  );
}
