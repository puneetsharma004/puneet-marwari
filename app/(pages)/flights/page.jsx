"use client";

import HeroBanner from "@/components/common/HeroBanner";
import { faqData } from "@/data/tourSingleContent";
import Image from "next/image";
import React, { useState } from "react";

export default function FlightsPage() {
  const [currentActiveFaq, setCurrentActiveFaq] = useState(0);
  return (
    <>
      <HeroBanner
        title="Flights"
        description="Explore deals, travel guides and things to do during Travel"
        imageSrc="/heroimg/the-travel-concept.png"
      />

      <section className=" layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-lg-6">
              <Image
                width={717}
                height={700}
                src="/heroimg/flights-2.jpg"
                alt="image"
                data-aos="fade-up"
                data-aos-delay=""
              />
            </div>
            <div
              className="col-xl-6 col-lg-5"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2 data-aos="fade-up" data-aos-delay="" className="fw-700">
                MAWARI — FLIGHT DETAILS
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay=""
                className="mt-30 md:mt-10"
              >
                Planning your international travel is one of the most important
                parts of your journey. To make this process as seamless as
                possible, we have prepared answers to common questions about
                flights and what you can expect as part of your Mawari
                experience.
              </p>

              <div
                data-aos="fade-up"
                data-aos-delay=""
                className="row y-gap-30 pt-30 sm:pt-30"
              >
                <div className="col-lg-12">
                  <div className="accordion -simple row y-gap-20 js-accordion">
                    {faqData.map((elm, i) => (
                      <div key={i} className="col-12">
                        <div
                          className={`accordion__item px-20 py-15 border-1 ${
                            currentActiveFaq == i ? "is-active" : ""
                          } `}
                        >
                          <div
                            className="accordion__button d-flex items-center justify-between"
                            onClick={() =>
                              setCurrentActiveFaq((pre) => (pre == i ? -1 : i))
                            }
                          >
                            <h5 className=" fw-500 text-dark-1">
                              {elm.question}
                            </h5>

                            <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                              <i className="icon-plus"></i>
                              <i className="icon-minus"></i>
                            </div>
                          </div>

                          <div
                            className="accordion__content"
                            style={
                              currentActiveFaq == i
                                ? { maxHeight: "150px" }
                                : {}
                            }
                          >
                            <div className="pt-20">
                              <p>{elm.answer}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
