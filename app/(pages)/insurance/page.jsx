"use client";

import { featureCards2 } from "@/data/destinations";
import { faqData2 } from "@/data/tourSingleContent";
import Image from "next/image";
import HeroBanner from "@/components/common/HeroBanner";
import Link from "next/link";
import React, { useState } from "react";

export default function InsurancePage() {
  const [currentActiveFaq, setCurrentActiveFaq] = useState(0);

  return (
    <>
      <HeroBanner
        title="Travel Insurance"
        description="Travel With confidence"
        imageSrc="/heroimg/insurance-hero.webp"
      />

      <section className=" layout-pb-xl">
        <div className="container">
          <div className="row y-gap-20 justify-between">
            <div className="col-lg-6">
              <h2 className=" fw-700"> TRAVEL MEDICAL INSURANCE</h2>
            </div>

            <div className="col-lg-5">
              <p>
                At Mawari, your wellbeing is a priority. For every journey we
                offer, travel medical insurance is mandatory for all travelers.
                <br />
                <br />
                In addition to this essential coverage, we strongly recommend
                purchasing a more comprehensive travel policy that includes
                protections such as trip cancellation, baggage delay, and other
                unforeseen events.
              </p>
              <Link href={"https://www.visitorscoverage.com/"}>
                <button className="button -md -dark-1 bg-accent-1 text-white mt-30">
                  Get a Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="layout-pt-xl layout-pb-xl relative"
        style={{
          minHeight: "800px",
          display: "flex",
          alignItems: "center",
          //   marginTop: "100px",
        }}
      >
        <div className="container">
          <div className="sectionBg hero-overlay">
            <Image
              width={1920}
              height={890}
              src="/heroimg/why-insurance.webp"
              alt="image"
              className="img-ratio"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              priority
            />
          </div>
          <div className="row y-gap-30 items-center justify-between">
            <div className="col-xl-4 col-lg-5 text-white">
              <h2 data-aos="fade-up" data-aos-delay="">
                WHY TRAVEL INSURANCE MATTERS
              </h2>

              <p
                data-aos="fade-up"
                data-aos-delay=""
                className="mt-30 md:mt-10 text-white"
              >
                Travel insurance offers peace of mind by helping protect you
                against unexpected costs that can arise while abroad.
                <br />
                <br />
                These protections help ensure that your experience is both
                secure and enjoyable, even when the unexpected occurs.
              </p>
            </div>

            <div className="col-xl-6 col-lg-7">
              <div
                data-aos="fade-up"
                data-aos-delay=""
                className="row y-gap-30"
              >
                {featureCards2.map((elm, i) => (
                  <div key={i} className="col-md-6 col-12 lg:col-6 md:col-6">
                    <div className="featureCard -type-5 -hover-accent-1">
                      <div className="featureCard__icon">
                        <Image
                          width="40"
                          height="40"
                          src={elm.imgSrc}
                          alt="image"
                        />
                      </div>

                      <h6 className=" fw-600 mt-20 uppercase">{elm.title}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-xl layout-pb-xl">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <h2 className="fw-600 uppercase letter-1">
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="row justify-center pt-40">
            <div className="col-xl-8 col-lg-10">
              <div className="accordion -simple row y-gap-20 js-accordion">
                {faqData2.map((elm, i) => (
                  <div key={i} className="col-12">
                    <div
                      className={`accordion__item px-20 py-15 border-1 ${
                        currentActiveFaq === i ? "is-active" : ""
                      }`}
                    >
                      {/* --- THE QUESTION BUTTON --- */}
                      <div
                        className="accordion__button d-flex items-center justify-between cursor-pointer"
                        onClick={() =>
                          setCurrentActiveFaq((pre) => (pre === i ? -1 : i))
                        }
                      >
                        <h5 className="text-dark-1 fw-500">{elm.question}</h5>

                        <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                          <i className="icon-plus"></i>
                          <i className="icon-minus"></i>
                        </div>
                      </div>

                      {/* --- THE ANSWER CONTENT --- */}
                      <div
                        className="accordion__content"
                        style={{
                          maxHeight: currentActiveFaq === i ? "800px" : "0px",
                          overflow: "hidden",
                          transition:
                            "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <div className="pt-20 pb-10">
                          {/* Main Answer */}
                          <p className="">{elm.answer}</p>

                          {/* Conditional List Header */}
                          {elm.listHeader && (
                            <p className="mt-15 fw-500 ">{elm.listHeader}</p>
                          )}

                          {/* Conditional Bullet Points */}
                          {elm.points && elm.points.length > 0 && (
                            <ul
                              className="ulList mt-10 pl-20"
                              style={{ listStyleType: "disc" }}
                            >
                              {elm.points.map((point, index) => (
                                <li key={index} className=" mb-5">
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Conditional Footer */}
                          {elm.footer && (
                            <p className="mt-15 border-1-top pt-10">
                              {elm.footer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta -type-4 layout-pb-xl">
        <div className="container">
          <div className="cta__content">
            <div className="row justify-between">
              <div className="col-xl-6 col-lg-8">
                <h2 data-aos="fade-up" data-aos-delay="" className=" lh-13">
                  FINAL NOTE
                </h2>

                <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                  Insurance requirements are designed to support your safety and
                  to protect your investment in travel. We encourage all
                  travelers to explore coverage options early in their planning
                  process to ensure adequate protection is in place well before
                  departure.
                </p>
              </div>

              <div className="col-lg-6">
                <div className="cta__image">
                  <Image
                    src="/img/cta/11/2.jpg"
                    width={730}
                    height={375}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
