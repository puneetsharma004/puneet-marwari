"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { teamMembers, tripLeaders } from "@/data/team";

export default function LeadersSection() {
  return (
    <>
      <section className="cta -type-2 bg-accent-1-05">
        <div className="container">
          <div className="row justify-between">
            <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6">
              <div>
                <h2
                  data-aos="fade-up"
                  data-aos-delay=""
                  className="uppercase fw-700 mt-30 md:mt-20"
                >
                  Our Trip Leaders
                </h2>

                <h5 data-aos="fade-up" data-aos-delay="" className="mt-10">
                  Experienced, Attentive, and Genuinely Human.
                </h5>

                <p data-aos="fade-up" data-aos-delay="" className="mt-30">
                  Mawari trips are led by seasoned Detours Trip Leaders,
                  selected not just for their experience, but for their ability
                  to read a room, anticipate needs, and elevate the journey
                  through thoughtful service.
                </p>
                <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                  With groups limited to just 16 travelers, our leaders are able
                  to offer a higher level of personal attention by handling the
                  details behind the scenes while remaining present,
                  approachable, and tuned in to the group dynamic.
                </p>
                <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                  They’re not tour guides reciting scripts. They’re your point
                  person, your advocate, and the steady hand that ensures
                  everything runs smoothly so you can fully relax into the
                  experience.
                </p>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-5">
              {/* <TourSlider5 /> */}
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
                          slidesPerView: 1,
                        },
                        1024: {
                          slidesPerView: 2,
                        },
                        1300: {
                          slidesPerView: 3,
                        },
                        1800: {
                          slidesPerView: 4,
                        },
                      }}
                    >
                      {tripLeaders.map((elm, i) => (
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
                                  <div className="text-18 fw-500">
                                    {elm.name}
                                  </div>
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
          </div>
        </div>
      </section>
    </>
  );
}
