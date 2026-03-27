

import Hero1 from "@/components/blogs/Hero1";
import BlogSingle from "@/components/blogs/BlogSingle";
import { blogs } from "@/data/blogs";
import Footer from "@/components/layout/footers/Footer";
import React from "react";
import Header from "@/components/layout/header/Header";

export const metadata = {
  title: "Blog-single || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default async function page(props) {
  const params = await props.params;
  const id = params.id;
  const blog = blogs.find((item) => item.id == id) || blogs[0];

  return (
    <>
      <main>
        <Header />
        <Hero1 blog={blog} />
        <BlogSingle />
        <Footer />
      </main>
    </>
  );
}
