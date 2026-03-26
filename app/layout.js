import localFont from "next/font/local"
import ScrollToTop from "@/components/common/ScrollToTop";
import "../public/css/style.css";
// import { Josefin_Sans, Inter } from "next/font/google";

// const josefin = Josefin_Sans({
//   weight: ["400", "500", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   variable: "--font-heading",
//   display: "swap",
// });

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-body",
//   display: "swap",
// });



import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";
import Wrapper from "@/components/layout/Wrapper";
import BootstrapLoader from "./BootstrapLoader";

const caslon = localFont({
  src: [
    {
      path: "../public/fonts/AdobeCaslonPro/ACaslonPro-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/AdobeCaslonPro/ACaslonPro-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/AdobeCaslonPro/ACaslonPro-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/AdobeCaslonPro/ACaslonPro-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-caslon",
  display: "swap",
});

const euclid = localFont({
  src: [
    {
      path: "../public/fonts/Euclid/EuclidCircularA-Regular.woff",
      weight: "400",
    },
    {
      path: "../public/fonts/Euclid/EuclidCircularA-Medium.woff",
      weight: "500",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${caslon.variable} ${euclid.variable}`}>
        <BootstrapLoader />
        <Wrapper>{children}</Wrapper>
        <ScrollToTop />
        <ScrollTopBehaviour />
      </body>
    </html>
  );
}
