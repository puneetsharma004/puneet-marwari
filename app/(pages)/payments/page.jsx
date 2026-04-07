"use client";

import HeroBanner from "@/components/common/HeroBanner";
import { faqData3 } from "@/data/tourSingleContent";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MakingPayments() {
  const [currentActiveFaq, setCurrentActiveFaq] = useState(0);

  return (
    <>
      <HeroBanner
        title="Making Payments"
        description="Flexible & Convenient"
        imageSrc="/heroimg/payments-hero.webp"
      />

      <section className=" layout-pb-xl">
        <div className="container">
          <div className="row y-gap-20 justify-between">
            <div className="col-lg-6">
              <h2 className=" fw-700"> PAYMENT OPTIONS</h2>
            </div>

            <div className="col-lg-5">
              <p>
                At Mawari, we aim to make the administrative aspects of booking
                as seamless and transparent as the journey itself.
                <br />
                <br />
                Below you will find our standard payment schedule and the
                available methods for settling your balance.
              </p>
              <Link href={"/contact"}>
                <button className="button -md -dark-1 bg-accent-1 text-white mt-30">
                  Consult Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className=" relative"
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
              src="/heroimg/pay-schedule.webp"
              alt="image"
              className="img-ratio"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              priority
            />
          </div>

          <div className="row y-gap-30 justify-between items-center">
            <div className="col-lg-4 col-md-6">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="font-heading lh-13 text-white"
              >
                PAYMENT SCHEDULE
                <br className="md:d-none" />
              </h2>

              <p
                data-aos="fade-up"
                data-aos-delay=""
                className="text-white mt-10"
              >
                To confirm your participation on a Mawari journey, a deposit of
                $500 USD per person is due within 7 days of registration. Your
                remaining trip balance is then due 90 days prior to departure.
                <br />
                <br />
                This schedule allows you to secure your place early while
                managing your investment with clarity and simplicity. Should you
                choose to complete your balance earlier, you are welcome to do
                so.
              </p>

              <button
                data-aos="fade-right"
                data-aos-delay=""
                className="button -md -dark-1 bg-white text-accent-1 mt-60 md:mt-30"
              >
                <Link href={"/faq"}>
                  Know More
                  <i className=" ml-10"></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-xl layout-pb-xl">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-8">
              <h2 className="fw-600 uppercase letter-1">METHODS OF PAYMENT</h2>
              <p
                data-aos="fade-up"
                data-aos-delay=""
                className="mt-20 md:mt-10"
              >
                We offer a range of convenient payment options to suit your
                preferences. All amounts are processed in U.S. dollars, with
                foreign currency receipts converted at prevailing market rates
                at the time of processing.
              </p>
            </div>
          </div>

          <div className="row justify-center pt-40">
            <div className="col-xl-8 col-lg-10">
              <div className="accordion -simple row y-gap-20 js-accordion">
                {faqData3.map((elm, i) => (
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
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay=""
                className="mt-30 md:mt-10 fw-600 text-center"
              >
                If you require alternative arrangements, please contact us so we
                can assist in finding a suitable solution
              </p>
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
                  NEXT STEPS
                </h2>

                <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                  Once your deposit is received, our team will begin
                  coordinating your complete travel arrangements, including
                  flights, accommodations, and destination logistics. In the
                  weeks leading up to departure, you will receive detailed
                  communications to guide you through every remaining step of
                  your journey preparation.
                  <br />
                  <br />
                  For any questions about payment timing or methods, the Mawari
                  team is here to help. Please reach out to us at your
                  convenience.
                </p>
              </div>

              <div className="col-lg-6">
                <div className="cta__image">
                  <Image
                    src="/heroimg/next-steps.webp"
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
