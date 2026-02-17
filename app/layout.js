import ScrollToTop from "@/components/common/ScrollToTop";
import "../public/css/style.css";
import { Josefin_Sans, Inter } from "next/font/google";

const josefin = Josefin_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";
import Wrapper from "@/components/layout/Wrapper";

if (typeof window !== "undefined") {
  import("bootstrap");
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${josefin.className} ${inter.className}`}>
        <Wrapper>{children}</Wrapper>
        <ScrollToTop />
        <ScrollTopBehaviour />
      </body>
    </html>
  );
}
