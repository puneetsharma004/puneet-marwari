import { sections } from "@/data/help";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Activity() {
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end font-heading">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="font-heading">
              Why Travel with Us
            </h2>
          </div>
        </div>
        <div className="row y-gap-30 pt-40 sm:pt-20">
          {sections.map((elm, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="px-50 py-45 border-1 bg-white">
                <Image
                  width="30"
                  height="30"
                  src={elm.imgSrc}
                  alt="image"
                  className="mb-20"
                />

                <h5 className="uppercase fw-500">{elm.title}</h5>

                <div className="mt-10">{elm.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
