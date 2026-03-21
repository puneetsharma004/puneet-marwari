import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section className="hero -type-1 -min">
        <div className="hero__bg">
          <Image
            src="/img/pageHeader/1.jpg"
            alt="About Us"
            fill
            priority
            className="object-cover"
          />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.52)" }} />
        </div>

        <div className="container">
          <div className="hero__content">
            <nav className="d-flex items-center justify-center x-gap-10 mb-20 text-13 fw-500 uppercase"
              style={{ letterSpacing: "2px" }}>
              <a href="/" className="text-white" style={{ opacity: 0.6 }}>Home</a>
              <span className="text-white" style={{ opacity: 0.3 }}>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                  <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-white">About Us</span>
            </nav>

            <p className="text-white text-13 uppercase mb-10"
              style={{ letterSpacing: "3px", opacity: 0.6 }}>
              Our Story
            </p>

            <h1 className="hero__title text-white"
              style={{ fontFamily: "var(--font-caslon), serif", letterSpacing: "4px" }}>
              About{" "}
              <span className="text-white italic" style={{ opacity: 0.75 }}>Us</span>
            </h1>

            <div className="d-flex items-center justify-center x-gap-10 mt-20">
              <span style={{ display: "block", width: 56, height: 1, backgroundColor: "rgba(255,255,255,0.3)" }} />
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
                style={{ color: "rgba(255,255,255,0.5)" }}>
                <rect x="6" y="0.5" width="7.78" height="7.78" rx="1.5"
                  transform="rotate(45 6 0.5)" stroke="currentColor" strokeWidth="1" />
              </svg>
              <span style={{ display: "block", width: 56, height: 1, backgroundColor: "rgba(255,255,255,0.3)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* About text */}
      <section className="layout-pt-lg layout-pb-lg" style={{ backgroundColor: "#fef7f4" }}>
        <div className="container">
          <div className="row justify-center">
            <div className="col-lg-8 col-12">

              <div className="d-flex flex-column y-gap-20">
                <p className="text-15 text-light-2" style={{ lineHeight: "1.85" }}>
                  Detours is a group of family and friends who all share a passion for traveling.
                  We have each spent many years immersed in cultures around the world, developing
                  the passion that eventually led to the creation of Detours in the summer of 2012.
                  Although each of us calls either Canada or the US home, our travel bugs won't
                  let us stop exploring.
                </p>

                <p className="text-15 text-light-2" style={{ lineHeight: "1.85" }}>
                  We love being travelers, not tourists — traveling in a relaxed and unhurried
                  fashion, allowing for plenty of spontaneity and opportunities to meet new people
                  and take part in new adventures. Because we believe that's what travel is all
                  about: stepping outside the norms of home to truly experience different cultures,
                  meet great new people, get out of our comfort zones, and have as much fun as
                  possible along the way.
                </p>

                {/* Pull quote */}
                <div className="my-10" style={{
                  borderLeft: "3px solid #1a1715",
                  paddingLeft: "24px",
                }}>
                  <p className="text-18 italic text-dark-1"
                    style={{ lineHeight: "1.75", fontFamily: "var(--font-caslon), serif" }}>
                    "This is how we love to travel — and this is the foundation of Detours."
                  </p>
                </div>

                <p className="text-15 text-light-2" style={{ lineHeight: "1.85" }}>
                  Come join us as we introduce more fun groups to our favorite places and people
                  in the world! Want to chat with us? We'd love to hear from you.{" "}
                  <a href="/contact"
                    className="text-dark-1 fw-600"
                    style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
                    Check out our Contact Us page
                  </a>{" "}
                  for lots of ways to get in touch.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}