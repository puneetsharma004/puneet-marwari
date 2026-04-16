import { featuresTwo, travelConceptFeatures } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Features5() {
  return (
    <section
      className="layout-pt-xl layout-pb-xl relative"
      style={{ minHeight: "800px", display: "flex", alignItems: "center" }}
    >
      <div className="container">
        <div className="sectionBg">
          <Image
            width={1920}
            height={690}
            src="/home/features.webp"
            alt="image"
            className="img-ratio"
          />
        </div>

        <div className="row y-gap-30 justify-between items-center">
          <div className="col-lg-4 col-md-6">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="uppercase lh-13 text-white"
            >
              Our Travel Concept
            </h2>

            <h5
              data-aos="fade-up"
              data-aos-delay=""
              className="text-white mt-10"
            >
              Structure Where It Matters. Freedom Where It Counts.
            </h5>

            <p
              data-aos="fade-up"
              data-aos-delay=""
              className="text-white mt-10"
            >
              At the heart of Mawari is what we like to call structured
              spontaneity. Every trip is thoughtfully designed from start to
              finish, so the logistics are handled and the experience flows
              seamlessly with enough flexibility to follow your heart, linger a
              little longer, or slow things down when the moment calls for it.
            </p>

            <button
              data-aos="fade-right"
              data-aos-delay=""
              className="button -md -dark-1 bg-white text-accent-1 mt-60 md:mt-30"
            >
              <Link href={"/our-travel-concept"}>
                Learn More
                <i className="icon-arrow-top-right ml-10"></i>
              </Link>
            </button>
          </div>

          <div className="col-md-6">
            <div data-aos="fade-up" data-aos-delay="" className="featuresGrid2">
              {travelConceptFeatures.map((elm, i) => (
                <div
                  key={i}
                  className="featuresGrid__item px-40 py-20 text-center bg-white"
                >
                  <Image
                    width="40"
                    height="40"
                    src={elm.iconSrc}
                    alt="icon"
                    className="mx-auto d-block"
                  />
                  <h6 className=" fw-600 text-accent-1 mb-3 mt-3 lh-10 uppercase">
                    {elm.value}
                  </h6>
                  <div>{elm.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
