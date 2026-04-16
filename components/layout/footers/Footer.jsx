import Paymentcards from "../components/Paymentcards";
import Socials from "../components/Socials";
import FooterLinksTwo from "../components/FooterLinksTwo";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer -type-1 -light bg-accent-2 footer-bg-overlay">
      <div className="footer__main">
        <div className="container">
          <div className="footer__info">
            <div className="row y-gap-20 justify-between items-center">
              <div className="col-auto">
                <div className="row y-gap-20 items-center">
                  <div className="header__left">
                    <div className="header__logo d-flex">
                      <Link href="/" className="header__logo">
                        <Image
                          width="125"
                          height="32"
                          src="/home/mawari-logo-final.png"
                          alt="logo icon"
                        />
                      </Link>
                      <p className="text-white pl-10">by Detours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="footerSocials">
                  <div className="footerSocials__title text-white">
                    Follow Us
                  </div>

                  <div className="footerSocials__icons text-white">
                    <Socials />
                  </div>
                  <Image
                    width="125"
                    height="32"
                    src="/heroimg/iglta-new.png"
                    alt="IGLTA icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-white-15-top">
          <div className="container">
            <div className="footer__content">
              <div className="row y-gap-40 justify-between">
                <div className="col-lg-4 col-md-6">
                  <div className="y-gap-10 text-white">
                    <a className="d-block">
                      Mawari is a more refined way to travel, built on the same
                      community, expertise, and small-group spirit that define
                      Detours. With thoughtfully designed itineraries, elevated
                      accommodations, and a more seamless pace, Mawari is about
                      experiencing the world with intention, comfort, and
                      connection. It is a natural evolution of Detours, created
                      for travelers who want the same sense of community and
                      discovery, just with a different rhythm of travel.
                    </a>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <h4 className="fw-500 text-white">Contact</h4>

                  <div className="y-gap-10 mt-20 text-white">
                    <a className="d-block" href="#">
                      400-601 W Broadway, Vancouver, BC V5Z 4C2 Canada
                    </a>
                    <a
                      className="d-block"
                      href="mailto:travel@detourstravel.com"
                    >
                      travel@detourstravel.com
                    </a>
                    <a className="d-block" href="tel:+18006808066">
                      800-680-8066
                    </a>
                  </div>
                </div>

                {/* <FooterLinksTwo /> */}

                <div className="col-lg-3 col-md-6">
                  <h4 className="fw-500 text-white">Newsletter</h4>
                  <p className="text-white mt-20">
                    Subscribe to the free newsletter and stay up to date
                  </p>

                  <div className="footer__newsletter">
                    <input type="Email" placeholder="Your email address" />
                    <button>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-white-15-top">
        <div className="container">
          <div className="footer__bottom">
            <div className="row y-gap-5 justify-between items-center">
              <div className="col-auto text-white">
                <div>© Copyright Mawari {new Date().getFullYear()}</div>
              </div>

              <div className="col-auto">
                <div className="footer__images d-flex items-center x-gap-10">
                  <a className="d-block text-white mr-20" href="/terms">
                    Terms & Conditions
                  </a>
                  <a className="d-block text-white" href="/privacy">
                    Privacy Policy
                  </a>
                  {/* <Paymentcards /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
