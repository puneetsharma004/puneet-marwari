"use client";
import CommonHero from "@/components/common/CommonHero";
import Square from "@/components/common/icons/Square";
import { FaSquareFull } from "react-icons/fa6";
const advantages = [
    "Exceptional service is our trademark — fast, friendly, reliable, and always going the extra mile.",
    "Over half our guests in 2024 were returning travelers. Once you join us, you'll see why.",
    "Affordable trips without cutting quality — we skip the middlemen, not the magic.",
    "100% hands-on. We run every trip ourselves to guarantee top-notch leaders, service, and experiences.",
    "Activities tailored to your interests — no wasting time on things you don't want to do.",
    "More time in the places you love, less time on the road. Many trips even include regional flights.",
];

export default function OurTravelConcept() {
    return (
        <>
            {/* Hero */}
            <CommonHero title="Our Travel Concept" subtitle="Travel Differently" image="/heroimg/the-travel-concept.png" breadcrumb="Our Travel Concept" />

            {/* Body Content */}
            <section className="layout-pt-lg layout-pb-lg" style={{ backgroundColor: "#fef7f4" }}>
                <div className="container">
                    <div className="">
                        <div className="">

                            {/* Intro paragraphs */}
                            <div className="d-flex flex-column y-gap-20 mb-60 ">
                                {[
                                    "Get ready to check off your bucket list while discovering incredible people, places, and experiences. We aren't just \"travel\" — it's a laid-back, unforgettable adventure that feels more like exploring the world with friends than joining a typical group tour. You won't find a clipboard-wielding guide herding you onto a 50-person bus here.",
                                    "After years of exploring the globe, we saw a gap: there weren't many opportunities for travelers to experience the world beyond a cruise ship or tour bus window. We also knew traditional rigid itineraries weren't our style. We wanted something that left guests grinning ear to ear, with memories of incredible sights, shared laughs, and lasting friendships.",
                                    "So we created a flexible, fun-filled travel style designed to capture the very best of each destination. Our trips are about truly getting to know a place, connecting with locals, and trying things you never imagined — whether that's zipping through the jungle, exploring ancient ruins, or lounging on perfect beaches.",
                                    "We don't believe in cookie-cutter itineraries. Instead, we set only the essentials — when and where we move between destinations — and fill the rest as we go. This means you can choose what you want to do, when you want to do it, with plenty of fellow travelers ready to join in. No mandatory 8 a.m. quilt-making class — unless that's your thing!",
                                    "Our easy-going leaders know each destination inside out, ensuring every traveler has an experience beyond expectations. They're right there with you, adding fun and inspiration to every step of the journey.",
                                    "The result? A fast-growing family of travelers who return home raving about the adventure, the friendships, and the countless moments that made them smile.",
                                    "With us, the potential for good times is limitless — and the memories will last a lifetime.",
                                ].map((para, i) => (
                                    <p key={i} className="text-14 text-light-2" style={{ lineHeight: "1.8" }}>
                                        {para}
                                    </p>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="d-flex items-center x-gap-20 mb-40">
                                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                                <h2 className="text-16 fw-600 uppercase text-dark-1 text-center"
                                    style={{
                                        letterSpacing: "5px", whiteSpace: "nowrap",
                                        fontFamily: "var(--font-caslon), serif"
                                    }}>
                                    The Advantage
                                </h2>
                                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                            </div>

                            {/* Advantage intro */}
                            <p className="text-14 text-light-2 mb-30" style={{ lineHeight: "1.8" }}>
                                We really encourage you to do your research before you make a decision, shop around,
                                compare — and as you do, remember what makes us different:
                            </p>

                            {/* Advantage list */}
                            <div className="d-flex flex-column y-gap-15">
                                {advantages.map((item, i) => (
                                    <div key={i} className="d-flex items-start x-gap-15">
                                        <Square />
                                        <p className="text-14 text-light-2" style={{ lineHeight: "1.8" }}>
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}