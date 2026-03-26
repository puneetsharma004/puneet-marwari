"use client";

import React, { useEffect } from "react";
import Aos from "aos";
<<<<<<< HEAD
=======
import Header from "./header/Header";
import Footer from "./footers/Footer";
>>>>>>> origin/main

export default function Wrapper({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
<<<<<<< HEAD
  return <>{children}</>;
=======
  return <>
  <Header/>
  {children}
  <Footer/>
  </>;
>>>>>>> origin/main
}
