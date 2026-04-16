"use client";

import { teamMembers } from "@/data/team";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Team() {
  return (
    <section className="layout-pb-xl">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <h2>Meet The Team</h2>
            <p data-aos="fade-up" data-aos-delay="" className="mt-30 md:mt-10">
              Like Detours, every Mawari journey is led by someone from our own
              team. Our trip leaders are a core part of the experience, chosen
              not just for what they know, but for how they host.
              <br />
              <br />
              They are there to guide, to anticipate, and to create an
              environment where everything flows effortlessly. Because the right
              person leading the journey changes everything.
            </p>
          </div>
        </div>

        <div className="relative pt-40 sm:pt-20">
          <div className="js-section-slider">
            <div data-aos="fade-up" data-aos-delay="" className="">
              <Swiper
                spaceBetween={30}
                className="w-100 overflow-hidden"
                navigation={{
                  prevEl: ".js-slider1-prev",
                  nextEl: ".js-slider1-next",
                }}
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                }}
                loop
                breakpoints={{
                  375: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                  1300: {
                    slidesPerView: 4,
                  },
                  1800: {
                    slidesPerView: 4,
                  },
                }}
              >
                {teamMembers.map((elm, i) => (
                  <SwiperSlide key={i}>
                    <Link
                      href={`/team-details/${elm.slug}`}
                      className="tourCard -type-3 -hover-image-scale"
                    >
                      <div className="tourCard__image ratio ratio-23:30 -hover-image-scale__image">
                        <Image
                          width={421}
                          height={301}
                          src={elm.profileImage}
                          alt="image"
                          className="img-ratio"
                        />
                      </div>

                      <div
                        className="tourCard__wrap"
                        style={{ flexDirection: "column-reverse" }}
                      >
                        <div className="tourCard__content">
                          <div className="text-right text-white">
                            <div className="text-18 fw-500">{elm.name}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="navRegular mt-40 md:mt-30">
            <button className="navRegular__button bg-white js-slider1-prev">
              <i className="icon-arrow-left text-20"></i>
            </button>

            <button className="navRegular__button bg-white js-slider1-next">
              <i className="icon-arrow-right text-20"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
