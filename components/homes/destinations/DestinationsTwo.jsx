import { destinationsTwo } from "@/data/destinations";
<<<<<<< HEAD
=======
import { tripsData } from "@/data/trips";
>>>>>>> origin/main
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DestinationsTwo() {
<<<<<<< HEAD
=======
  console.log("trips data:", tripsData);
>>>>>>> origin/main
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end font-heading">
          <div className="col-auto">
            <h2 data-aos="fade-up" className="font-heading">
              Featured Trips
            </h2>
          </div>

          <div className="col-auto">
            <Link
<<<<<<< HEAD
              href={"/tour-list-1"}
=======
              href={"trip-registration"}
>>>>>>> origin/main
              data-aos="fade-right"
              className="buttonArrow d-flex items-center "
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="row y-gap-30 justify-around xl:justify-start sm:justify-start pt-40 sm:pt-20 mobile-css-slider -w-160"
        >
<<<<<<< HEAD
          {destinationsTwo.map((elm, i) => (
            <div key={i} className="col-xl-3 col-lg-3 col-md-4 col-6">
              <Link href="/tour-list-1" className="-hover-image-scale d-block">
                {/* Image */}
=======
          {tripsData.map((trip, i) => (
            <div key={i} className="col-xl-3 col-lg-3 col-md-4 col-6">
              <Link href={`/trips/${trip.slug}`} className="-hover-image-scale d-block">
                {/* Image */}
                {console.log("trip slug:", trip.slug)}
>>>>>>> origin/main
                <div className="ratio ratio-3:4 -hover-image-scale__image">
                  <Image
                    width={2000}
                    height={2000}
<<<<<<< HEAD
                    src={elm.imgSrc}
=======
                    src={trip.heroImage}
>>>>>>> origin/main
                    alt="image"
                    className="img-ratio"
                  />
                </div>

                {/* Review Section */}
                <div className="d-flex items-center mt-15">
                  <i className="icon-star text-yellow-1 mr-5 mb-1"></i>
                  <span className="fw-500">4.9</span>
                  <span className=" ml-5">(42 reviews)</span>
                </div>

                {/* Title */}
                <h3 className="fw-600 mt-10 font-heading trip__title">
<<<<<<< HEAD
                  {elm.title}
=======
                  {trip.title}
>>>>>>> origin/main
                </h3>

                {/* Location */}
                <div className="d-flex items-start sub-caps mt-5 trip__location">
                  <i className="icon-pin mr-5 mt-1"></i>
<<<<<<< HEAD
                  <span>{elm.tours}</span>
=======
                  <span>{trip.tours}</span>
>>>>>>> origin/main
                </div>

                {/* Dates */}
                <div className="d-flex items-start mt-5">
                  <i className="icon-calendar mr-5 mt-1"></i>
                  10 Days · Jun 15 – Jun 25, 2026
                </div>

                {/* Divider */}
                <div
                  className="mt-15 pt-15"
                  style={{ borderTop: "1px solid #666" }}
                ></div>

                {/* Price */}
                <div className="d-flex justify-between items-start">
                  <div>Starting at</div>

                  <div className="text-right">
                    <div className="fw-600">$3,200 USD</div>
                    <div>(≈ €2,950 EUR)</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
