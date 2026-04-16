"use client";

import Link from "next/link";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { clients } from "@/data/clients";
import HeroBanner from "@/components/common/HeroBanner";

const partners = [
  "Out In Schools",
  "Atrius Health Foundation",
  "Travelers Against Plastic",
  "Memorial Sloan Kettering Cancer Center",
  "National Multiple Sclerosis Society",
  "Food For The Poor (Caribbean / Latin America)",
  "Rainbow Railroad",
  "Camillus House — Miami",
];

export default function Community() {
  return (
    <>
      <HeroBanner
        title="Our Community"
        description="Giving Back"
        imageSrc="/heroimg/community-hero.webp"
      />

      <section className="cta -type-2">
        <div className="cta__bg" style={{ marginTop: "-88px" }}>
          {/* <Image
            src="/img/cta/7/bg.png"
            width={1093}
            height={600}
            alt="image"
          /> */}

          <div className="cta__image">
            <Image
              src="/img/community/community.webp"
              width={750}
              height={600}
              alt="image"
              style={{
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            {/* <Image
              src="/img/cta/7/shape.svg"
              width="40"
              height="600"
              alt="image"
            />
            <Image
              src="/img/cta/7/shape2.svg"
              width="600"
              height="40"
              alt="image"
            /> */}
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-7">
              <div className="cta__content">
                {/* <h3 data-aos="fade-up" data-aos-delay="" className="lh-13">
                  <span>Community, Naturally.</span>
                  <br className="lg:d-none" />
                  More Than a Group.
                  <br className="lg:d-none" />
                  More Than a Trip.
                </h3> */}

                <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                  Mawari was created with the same foundation that has shaped
                  Detours Travel since day one: community matters.
                  <br />
                  <br />
                  As an extension of that ethos, Mawari carries it forward
                  through a more elevated lens. We believe travel should not
                  only be exceptional, but also meaningful, with a
                  responsibility to support the people and places we encounter
                  along the way. From early grassroots contributions to local
                  initiatives to ongoing support of global organizations, giving
                  back has always been part of how we operate.
                  <br />
                  <br />
                  Through Mawari, that commitment continues, woven into the
                  experiences we create and the communities we engage with.
                  <br />
                  <br />
                  For registered non-profit donation requests please contact us.
                </p>

                <div
                  data-aos="fade-right"
                  data-aos-delay=""
                  className="mt-30 md:mt-20"
                >
                  <button className="button -md -dark-1 bg-accent-2 text-white">
                    <Link href="/contact">
                      Contact Us
                      <i className=" ml-10 text-16"></i>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-xl layout-pb-xl">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <h2 data-aos="fade-up" data-aos-delay="">
                NON-PROFIT COMMUNITY PARTNERS
              </h2>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="" className="pt-40 sm:pt-20">
            <Swiper
              spaceBetween={30}
              className="w-100"
              modules={[Autoplay]}
              autoplay
              loop={true}
              breakpoints={{
                300: {
                  slidesPerView: 2,
                },
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}
            >
              {clients.map((elm, i) => (
                <SwiperSlide key={i}>
                  <div key={i} className=" d-flex justify-center items-center ">
                    <Image width={100} height={30} src={elm} alt="image" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
