"use client";

import { useEffect, useState } from "react";

import Currency from "../components/Currency";
import MobileMenu from "../components/MobileMenu";
import Menu from "../components/Menu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const pageNavigate = (pageName) => {
    router.push(pageName);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [addClass, setAddClass] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setAddClass(true);
    } else {
      setAddClass(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Sticky mode state
  const isSticky = addClass;

  // Dynamic classes
  const textColorClass = isSticky ? "text-dark-2" : "text-white";
  const iconColorClass = isSticky ? "text-dark-2" : "text-white";

  const loginBtnClass = isSticky
    ? "button -sm bg-accent-1 text-white ml-30"
    : "button -sm -outline-white text-white ml-30";

  const signupClass = isSticky ? "text-dark-2 ml-10" : "text-white ml-10";

  const logoSrc = isSticky
    ? "/home/mawari-logo-dark.png" // <-- your sticky logo
    : "/home/mawari-logo-final.png"; // <-- your default logo

  return (
    <>
      <header
        className={`header -type-8 js-header font-heading sub-caps ${
          addClass ? "-is-sticky" : ""
        }`}
      >
        <div className="header__container container">
          {/* Mobile Left */}
          <div className="headerMobile__left">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="header__menuBtn js-menu-button"
            >
              <i className={`icon-main-menu ${iconColorClass}`}></i>
            </button>
          </div>

          {/* Left */}
          <div className="header__left">
            <div className="header__logo">
              <Link href="/" className="header__logo">
                <Image width={125} height={32} src={logoSrc} alt="logo icon" />
              </Link>

              <div className={textColorClass}>
                <Menu isSticky={isSticky} />
              </div>
            </div>
          </div>

          {/* Mobile Right */}
          <div className="headerMobile__right">
            <button
              onClick={() => pageNavigate("/tour-list-1")}
              className="d-flex"
            >
              <i className={`icon-search text-18 ${iconColorClass}`}></i>
            </button>

            <button
              onClick={() => pageNavigate("/login")}
              className="d-flex ml-20"
            >
              <i className={`icon-person text-18 ${iconColorClass}`}></i>
            </button>
          </div>

          {/* Right */}
          <div className="header__right">
            <div className={textColorClass}>
              <Currency
                parentClass={`headerDropdown -hover-light js-form-dd ${textColorClass}`}
              />
            </div>

            <Link href="/register" className={signupClass}>
              Sign up
            </Link>

            <Link href="/login" className={loginBtnClass}>
              Log in
            </Link>
          </div>
        </div>
      </header>

      <MobileMenu
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
    </>
  );
}
