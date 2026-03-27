import { featuresFour } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features10() {
  return (
    <section className="relative layout-pt-xl layout-pb-xl lg:pt-0">
      <div className="sectionBg -type-2">
        <div className=""></div>
        <Image
          width={717}
          height={700}
          src="/heroimg/travel-concept-2.jpg"
          alt="image"
          data-aos="fade-up"
          data-aos-delay=""
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5">
            <h2 data-aos="fade-up" data-aos-delay="" className="">
              THE MAWARI EXPERIENCE
            </h2>

            <div
              data-aos="fade-up"
              data-aos-delay=""
              className="row y-gap-30 pt-60 sm:pt-30"
            >
              {featuresFour.map((elm, i) => (
                <div key={i} className="col-12">
                  <div className="featureIcon -type-1 d-flex">
                    <div className="featureIcon__icon size-50">
                      <Image
                        width="25"
                        height="25"
                        src={elm.iconSrc}
                        alt="icon"
                      />
                    </div>

                    <div className="ml-30">
                      <h3 className="featureIcon__title text-18 fw-500">
                        {elm.title}
                      </h3>
                      <p className="featureIcon__text mt-10">{elm.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
