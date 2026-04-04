"use client";
import "/node_modules/swiper/swiper-bundle.min.css";
import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  EffectCoverflow,
  EffectCreative,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
const slides = [
  {
    id: 1,
    imageSrc: "/img/hero/7/hero1n.webp",
    subtitle: "",
    title: "",
  },
  {
    id: 2,
    imageSrc: "/img/hero/7/hero2n.webp",
    subtitle:
      "At the heart of Mawari is what we like to call structured spontaneity.",
    title: "Structure Where It Matters. Freedom Where It Counts.",
  },
  {
    id: 3,
    imageSrc: "/img/hero/7/hero3n.webp",
    subtitle:
      "Our travelers often arrive solo but never stay that way for long.",
    title: "More Than a Group. More Than a Trip.",
  },
  {
    id: 4,
    imageSrc: "/img/hero/7/hero4n.webp",
    subtitle: "Mawari trips are led by seasoned Detours Trip Leaders.",
    title: "Experienced, Attentive, and Genuinely Human.",
  },
];

export default function Hero7() {
  const router = useRouter();
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const [location, setLocation] = useState("");
  const [calender, setCalender] = useState("");
  const [tourType, setTourType] = useState("");
  useEffect(() => {
    setCurrentActiveDD("");
  }, [location, calender, tourType, setCurrentActiveDD]);
  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentActiveDD("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <section className="hero -type-7">
        <div className="hero__slider js-section-slider">
          <div className="swiper-wrapper">
            <Swiper
              className="w-100"
              modules={[Navigation, Autoplay, Pagination, EffectFade]}
              effect={"fade"}
              autoplay={{
                delay: 6000,
                disableOnInteraction: true,
              }}
              speed={1000}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                500: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
                1200: {
                  slidesPerView: 1,
                },
              }}
            >
              {slides.map((elm, i) => (
                <SwiperSlide key={i}>
                  <div className="hero__bg hero-overlay">
                    <Image
                      width={1920}
                      height={960}
                      src={elm.imageSrc}
                      alt="background"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "rgba(0,0,0,0.6)" }}
                    ></div>
                  </div>

                  <div className="container">
                    <div className="row justify-center">
                      <div className="col-lg-8 col-md-10">
                        <div className="hero__content text-center">
                          <h1
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="hero__title text-white"
                          >
                            {(() => {
                              const parts = elm.title.split(",");
                              return (
                                <>
                                  {parts[0]}
                                  {parts[1] && (
                                    <>
                                      <br className="md:d-none" />
                                      {parts.slice(1).join(",")}
                                    </>
                                  )}
                                </>
                              );
                            })()}
                          </h1>
                          <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="hero__subtitle text-white mt-20 md:mt-10"
                          >
                            {elm.subtitle}
                          </div>
                        </div>
                      </div>
                    </div>
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
