import CommonHero from "@/components/common/CommonHero";
import Square from "@/components/common/icons/Square";
import SquareFaded from "@/components/common/icons/SquareFaded";
import Image from "next/image";

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
            {/* Hero */}
            <CommonHero
                title="Our Community"
                subtitle="Giving Back"
                image="/heroimg/community.jpg"
                breadcrumb="Community"
            />

            {/* Body */}
            <section className="layout-pt-lg layout-pb-lg" style={{ backgroundColor: "#fef7f4" }}>
                <div className="container">
                    <div className="row justify-center">
                        <div className="">

                            {/* Intro */}
                            <p className="text-14 text-light-2" style={{ lineHeight: "1.85" }}>
                                Ever since we opened our doors to the world in 2012, we've made community a
                                priority. We believe it's all of our responsibility to give back and leave the
                                world a better place. Starting with funding local charities when Detours was
                                just two weeks old, then expanding our reach to assist international non-profit
                                organizations — we are proud to have donated thousands of dollars, several group
                                trips, and many hours of time into helping our local and global community.
                            </p>

                            {/* Pull quote */}
                            <div style={{ borderLeft: "3px solid #1a1715", paddingLeft: "24px" }}
                                className="mt-30 mb-40">
                                <p className="text-18 italic text-dark-1"
                                    style={{ lineHeight: "1.75", fontFamily: "var(--font-caslon), serif" }}>
                                    "We hope you'll join us in continuing our community endeavors."
                                </p>
                            </div>

                            {/* Partners heading */}
                            <div className="d-flex items-center x-gap-20 mt-30 mb-30">
                                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                                <h2 className="text-13 fw-700 uppercase text-dark-1"
                                    style={{
                                        letterSpacing: "4px", whiteSpace: "nowrap",
                                        fontFamily: "var(--font-caslon), serif"
                                    }}>
                                    Non-Profit Community Partners
                                </h2>
                                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                            </div>

                            {/* Partners list */}
                            <div className="d-flex flex-column y-gap-12 mb-30">
                                {partners.map((partner, i) => (
                                    <div key={i} className="d-flex items-center x-gap-15">
                                        <Square/>
                                        <p className="text-14 text-dark-1 fw-500">{partner}</p>
                                    </div>
                                ))}
                                <div className="d-flex items-center x-gap-15">
                                    <SquareFaded/>
                                    <p className="text-14 text-light-2 italic">and more...</p>
                                </div>
                            </div>

                            {/* Footer note */}
                            <p className="text-14 text-light-2" style={{ lineHeight: "1.8" }}>
                                For registered non-profit donation requests please{" "}
                                <a href="/contact" className="text-dark-1 fw-600"
                                    style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                    contact us
                                </a>
                                .
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}