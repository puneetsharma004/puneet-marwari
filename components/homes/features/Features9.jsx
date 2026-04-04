import { featureCards } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Features9() {
  return (
    <section className="layout-pt-md layout-pb-xl">
      <div className="container">
        <div className="row y-gap-30 items-center justify-between">
          <div className="col-xl-12 col-lg-5">
            <h2 data-aos="fade-up" data-aos-delay="" className="">
              THE MAWARI DIFFERENCE
            </h2>

            <p data-aos="fade-up" data-aos-delay="" className="mt-30 md:mt-10">
              We encourage you to explore your options and compare thoughtfully.
              As you do, here’s what defines a Mawari journey
            </p>
          </div>

          <div className="col-xl-12 col-lg-7">
            <div data-aos="fade-up" data-aos-delay="" className="row y-gap-30">
              {featureCards.map((elm, i) => (
                <div key={i} className="col-md-3 col-12 lg:col-6 md:col-6">
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
                    <div className="lh-13 mt-20">{elm.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-xl-12 col-lg-5">
            <p data-aos="fade-up" data-aos-delay="" className="mt-30 md:mt-10">
              We are confident that Mawari offers a distinctive approach to
              luxury LGBTQ+ travel, one rooted in quality, care, and genuine
              enjoyment.
              <br />
              <br />
              If you have questions or would like help choosing the right
              journey, we'd be happy to assist. You're also welcome to register
              now and begin planning your Mawari experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
