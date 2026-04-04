import { Josefin_Sans, Lato } from "next/font/google";
import ScrollToTop from "@/components/common/ScrollToTop";
import "../public/css/style.css";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";
import Wrapper from "@/components/layout/Wrapper";
import BootstrapLoader from "./BootstrapLoader";

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


// const caslon = localFont({
//   src: [
//     {
//       path: "../public/fonts/AdobeCaslonPro/ACaslonPro-Regular.woff",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/AdobeCaslonPro/ACaslonPro-Italic.woff",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "../public/fonts/AdobeCaslonPro/ACaslonPro-Semibold.woff",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/AdobeCaslonPro/ACaslonPro-Bold.woff",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-caslon",
//   display: "swap",
// });

// const euclid = localFont({
//   src: [
//     {
//       path: "../public/fonts/Euclid/EuclidCircularA-Regular.woff",
//       weight: "400",
//     },
//     {
//       path: "../public/fonts/Euclid/EuclidCircularA-Medium.woff",
//       weight: "500",
//     },
//   ],
//   variable: "--font-body",
//   display: "swap",
// });

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${josefin.variable} ${lato.variable} custom-theme`}>
        <BootstrapLoader />
        <Wrapper>{children}</Wrapper>
        <ScrollToTop />
        <ScrollTopBehaviour />
      </body>
    </html>
  );
}
