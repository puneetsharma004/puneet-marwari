import ScrollToTop from "@/components/common/ScrollToTop";
import "../public/css/style.css";
import { Josefin_Sans, Inter } from "next/font/google";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";
import Wrapper from "@/components/layout/Wrapper";
import BootstrapClient from "@/components/common/BootstrapClient";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Avoid empty head tags if not needed, or add metadata here */}
      </head>
      <body className={`${josefin.variable} ${inter.variable}`}>
        <BootstrapClient />
        <Wrapper>{children}</Wrapper>
        <ScrollToTop />
        <ScrollTopBehaviour />
      </body>
    </html>
  );
}