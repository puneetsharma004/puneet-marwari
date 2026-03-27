import { featuresTwo } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturesVideo() {
  return (
    <section
      className="layout-pt-xl layout-pb-xl relative text-center"
      style={{ minHeight: "1000px", display: "flex", alignItems: "end" }}
    >
      <div className="container">
        <div className="sectionBg">
          <video className="img-ratio" autoPlay muted loop playsInline>
            <source src="/home/vid.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="row y-gap-30 justify-center items-center">
          <div className="col-lg-6 col-md-6">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="font-heading lh-13 text-white"
            >
              Where Adventure Meets Belonging
              {/* <br className="md:d-none" /> */}
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay=""
              className="text-white mt-10"
            >
              Traveling under your own power and at your own pace, you'll
              connect more meaningfully with your destination and have more fun!
            </p>

            {/* <button
              data-aos="fade-right"
              data-aos-delay=""
              className="button -md -dark-1 bg-white text-accent-1 mt-60 md:mt-30"
            >
              <Link href={"/tour-list-1"}>
                Explore Our Tours
                <i className="icon-arrow-top-right ml-10"></i>
              </Link>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
