"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

// Ensure these are imported somewhere in your project!
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/img/greece/1.webp",
  "/img/greece/2.webp",
  "/img/greece/3.webp",
  "/img/greece/4.webp",
  "/img/greece/5.webp",
  "/img/greece/6.webp",
  "/img/greece/7.webp",
  "/img/greece/8.webp",
  "/img/greece/9.webp",
];

export default function Gallery3() {
  return (
    <div className="row justify-center pt-30">
      <div className="col-12">
        <div className="relative overflow-hidden">
          {/* 1. REMOVED: manual 'swiper-wrapper' div */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: ".js-slider1-prev8",
              nextEl: ".js-slider1-next8",
            }}
            // 2. FIXED: Apply the height directly to the Swiper container
            style={{ height: "610px", width: "100%" }}
            className=""
          >
            {images.map((elm, i) => (
              <SwiperSlide key={i}>
                {/* 3. REMOVED: manual 'swiper-slide' div (SwiperSlide handles this) */}
                <Image
                  width={850}
                  height={510}
                  src={elm}
                  alt={`Trip image ${i + 1}`}
                  className="img-cover w-full h-full"
                  priority={i === 0} // Optimization for LCP
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="navAbsolute -type-2">
            <button className="navAbsolute__button bg-white js-slider1-prev8">
              <i className="icon-arrow-left text-14"></i>
            </button>

            <button className="navAbsolute__button bg-white js-slider1-next8">
              <i className="icon-arrow-right text-14"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
