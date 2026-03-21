"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import Header from "./header/Header";
import Footer from "./footers/Footer";

export default function Wrapper({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  return <>
  <Header/>
  {children}
  <Footer/>
  </>;
}
