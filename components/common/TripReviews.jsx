import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { tripReviews } from "@/data/trips";


export default function TripReviews() {
    return (
        <div className="mt-60"
            style={{ backgroundColor: "#1a1715", padding: "50px 40px" }}>

            {/* Heading */}
            <div className="d-flex items-center x-gap-20 mb-40 ">
                <span style={{ flex: 1, height: 1, backgroundColor: "rgba(255,255,255,0.15)" }} />
                <h3 className="text-14 fw-700 uppercase text-white"
                    style={{
                        letterSpacing: "5px", whiteSpace: "nowrap",
                        fontFamily: "var(--font-caslon), serif"
                    }}>
                    Trip Reviews
                </h3>
                <span style={{ flex: 1, height: 1, backgroundColor: "rgba(255,255,255,0.15)" }} />
            </div>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: ".tripReview__prev",
                    nextEl: ".tripReview__next",
                }}
                pagination={{
                    el: ".tripReview__dots",
                    clickable: true,
                    bulletClass: "tripReview__dot",
                    bulletActiveClass: "tripReview__dot--active",
                }}
                slidesPerView={1}
                spaceBetween={0}
    
            >
                {tripReviews.map((review, i) => (
                    <SwiperSlide key={i}>
                        <div className="d-flex items-center x-gap-20">

                            {/* Prev */}
                            <button className="tripReview__prev"
                                style={{
                                    flexShrink: 0, background: "none",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    borderRadius: "50%", width: 40, height: 40,
                                    cursor: "pointer", display: "flex",
                                    alignItems: "center", justifyContent: "center",
                                    color: "rgba(255,255,255,0.5)"
                                }}>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                                    <path d="M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.5"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {/* Content */}
                            <div style={{ flex: 1 }}>
                                <p className="text-13 fw-700 uppercase text-white mb-5"
                                    style={{
                                        letterSpacing: "2px",
                                        fontFamily: "var(--font-caslon), serif"
                                    }}>
                                    {review.name} — {review.country}
                                </p>
                                <p className="text-12 mb-15"
                                    style={{
                                        color: "rgba(255,255,255,0.45)",
                                        letterSpacing: "1.5px", textTransform: "uppercase"
                                    }}>
                                    {review.date}
                                </p>

                                {/* Stars */}
                                <div className="d-flex items-center x-gap-5 mb-20">
                                    {Array.from({ length: review.rating }).map((_, j) => (
                                        <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Body */}
                                <div className="d-flex flex-column y-gap-12 mb-30">
                                    {review.body.split("\n\n").map((para, j) => (
                                        <p key={j} className="text-14"
                                            style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.8" }}>
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Next */}
                            <button className="tripReview__next"
                                style={{
                                    flexShrink: 0, background: "none",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    borderRadius: "50%", width: 40, height: 40,
                                    cursor: "pointer", display: "flex",
                                    alignItems: "center", justifyContent: "center",
                                    color: "rgba(255,255,255,0.5)"
                                }}>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                                    <path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}