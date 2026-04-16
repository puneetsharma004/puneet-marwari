"use client";
import "/node_modules/swiper/swiper-bundle.min.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default function TeamSingle({ member }) {
  const images = member.sliderImages || [member.profileImage];
  return (
    <>
      <section className="cta -type-2" style={{ marginTop: "-88px" }}>
        {/* <div className="cta__bg">
          <Image
            width={1530}
            height={600}
            src={member.ctaBg}
            alt="background image"
          />
        </div> */}

        <div className="container">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="col-12 col-xxl-4 col-xl-5 col-lg-6 col-md-7">
              <div className="cta__content">
                <h2 data-aos="fade-up" className="md:text-30 lh-13">
                  {member.name?.toUpperCase()}
                </h2>

                {member.role && (
                  <p data-aos="fade-up" className="mt-10 fw-600 text-accent-1">
                    {member.role}
                  </p>
                )}

                {member.description?.map((paragraph, index) => (
                  <p key={index} data-aos="fade-up" className="mt-10">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="col-12 col-xxl-7 col-xl-6 col-lg-5 col-md-4">
              <Swiper
                modules={[Navigation, Autoplay, Pagination, EffectFade]}
                navigation
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-theme-color": "#fff",
                }}
                effect={"fade"}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                }}
                speed={1000}
                loop={true}
                className="h-full"
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={img}
                      alt="slider"
                      fill
                      className="object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
