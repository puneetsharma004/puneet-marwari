"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import { Josefin_Sans, Lato, Montserrat } from "next/font/google";
import ScrollToTop from "@/components/common/ScrollToTop";
import "../public/css/style.css";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";
import BootstrapLoader from "./BootstrapLoader";



// Define Josefin Sans for Headers
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-josefin",
  display: "swap",
});

// Define Lato for Body and Small Headers
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Add the weights you need
  variable: "--font-montserrat", // This creates a CSS variable
});

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <html lang="en">
      <head></head>
      <body className={`${josefin.variable} ${lato.variable} ${montserrat.variable} custom-theme`}>
        <BootstrapLoader />
        {children}
        <ScrollToTop />
        <ScrollTopBehaviour />
      </body>
    </html>
  );
}
