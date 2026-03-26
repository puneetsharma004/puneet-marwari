import CommonHero from "@/components/common/CommonHero";
import Square from "@/components/common/icons/Square";
import Image from "next/image";

const govLinks = [
    { label: "USA Travel Advice", href: "https://travel.state.gov" },
    { label: "Canada Travel Advice", href: "https://travel.gc.ca" },
    { label: "UK Travel Advice", href: "https://www.gov.uk/foreign-travel-advice" },
    { label: "Australia Travel Advice", href: "https://www.smartraveller.gov.au" },
];

const safetyTips = [
    { title: "Don't flash wealth", desc: "Be discreet with cash and valuables." },
    { title: "Leave unnecessary valuables behind", desc: "No need to bring all of your most prized possessions every time you leave the hotel room." },
    { title: "Transport safely", desc: "Road rules and safety differ greatly around the world. Always wear a seatbelt and use reputable operators." },
    { title: "Keep emergency contacts handy", desc: "If you find yourself without your phone, make sure you know your way back to the hotel and how to contact someone." },
    { title: "Get comprehensive travel insurance", desc: "You never know when you may need a travel insurance policy with more beefed-up coverage." },
    { title: "Learn common local scams", desc: "You're bound to meet friendly locals, but it's smart to know how to spot a local scam." },
    { title: "Blend in", desc: "The less you scream \"tourist\" the less you'll be a target for potential thieves and scammers." },
    { title: "Travel in numbers", desc: "Especially at night, join your fellow group members when exploring rather than hitting the streets solo." },
];

export default function HealthSafety() {
    return (
        <>
            {/* Hero */}
            <CommonHero
                title="Health & Safety"
                subtitle="Your Safety Is Our Priority"
                image="/heroimg/health-safety.jpg"
                breadcrumb="Health & Safety"
            />

            {/* Body */}
            <section className="layout-pt-lg layout-pb-lg" style={{ backgroundColor: "#fef7f4" }}>
                <div className="container">
                    <div className="row justify-center">
                        <div className="">

                            {/* Intro */}
                            <p className="text-14 text-light-2 mb-30" style={{ lineHeight: "1.85" }}>
                                Behind all the fun, we take our travelers' health and safety very seriously.
                                We're constantly monitoring local situations with the assistance of our large
                                network of local partners and friends, in addition to official government
                                information sources. We also work with our local partners in every destination
                                to ensure we've done what we can to provide you a safe and enjoyable experience
                                — but it's also important to prepare yourself before you head out too.
                            </p>

                            <p className="text-14 text-light-2 mb-30" style={{ lineHeight: "1.85" }}>
                                To get past all the dramatic headlines and rumors, we feel the best sources of
                                information for travelers are provided by your own government's travel advice
                                websites. Check out the following helpful links:
                            </p>

                            {/* Gov links */}
                            <div className="d-flex flex-column y-gap-12 mb-50">
                                {govLinks.map((link, i) => (
                                    <div key={i} className="d-flex items-center x-gap-15">
                                        <Square/>
                                        <a href={link.href} target="_blank" rel="noreferrer"
                                            className="text-14 fw-600 text-dark-1"
                                            style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                            {link.label}
                                        </a>
                                    </div>
                                ))}
                            </div>

                            {/* General tips heading */}
                            <div className="d-flex items-center x-gap-20 mb-30">
                                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                                <h2 className="text-13 fw-700 uppercase text-dark-1"
                                    style={{
                                        letterSpacing: "4px", whiteSpace: "nowrap",
                                        fontFamily: "var(--font-caslon), serif"
                                    }}>
                                    General Safety Tips
                                </h2>
                                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                            </div>

                            <p className="text-14 text-light-2 mb-30" style={{ lineHeight: "1.85" }}>
                                Whether you're in Paris, Pittsburgh, Phnom Penh, or some lovely place in
                                between, there are some general tips you should consider when traveling anywhere:
                            </p>

                            {/* Tips list */}
                            <div className="d-flex flex-column y-gap-0 mb-50">
                                {safetyTips.map((tip, i) => (
                                    <div key={i} className="d-flex x-gap-20"
                                        style={{ padding: "16px 0", borderBottom: "1px solid #E7E6E6" }}>
                                        <p className="text-14 text-light-2" style={{ lineHeight: "1.8" }}>
                                            {i + 1}.{" "}<span className="fw-700 text-dark-1">{tip.title}</span>
                                            {" — "}{tip.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Serious situations */}
                            <div className="d-flex items-center x-gap-20 mb-30">
                                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                                <h2 className="text-13 fw-700 uppercase text-dark-1"
                                    style={{
                                        letterSpacing: "4px", whiteSpace: "nowrap",
                                        fontFamily: "var(--font-caslon), serif"
                                    }}>
                                    Serious Situations
                                </h2>
                                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                            </div>

                            <p className="text-14 text-light-2 mb-30" style={{ lineHeight: "1.85" }}>
                                But what if a serious situation occurs in one of our destinations? We make our
                                travel decisions based on the advice of the above governmental sources as well
                                as our local partners and friends. We're committed to making decisions that keep
                                our travelers safe — whether it requires a cancellation prior to departure, or
                                repatriation during a trip.
                            </p>

                            {/* Pull quote */}
                            <div style={{ borderLeft: "3px solid #1a1715", paddingLeft: "24px" }}
                                className="mb-30">
                                <p className="text-14 text-dark-1"
                                    style={{ lineHeight: "1.75", fontFamily: "var(--font-caslon), serif" }}>
                                    "We'll take every opportunity to mention comprehensive travel insurance
                                    if you're concerned a destination may become unsafe to visit."
                                </p>
                            </div>

                            <p className="text-14 text-light-2" style={{ lineHeight: "1.85" }}>
                                As local events and safety are always changing over time, we encourage you
                                to{" "}
                                <a href="/contact" className="text-dark-1 fw-600"
                                    style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                    contact us
                                </a>
                                {" "}(or refer to the governmental sources above) if you have a current
                                concern, and be aware of the{" "}
                                <a href="/booking-conditions" className="text-dark-1 fw-600"
                                    style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                    booking conditions
                                </a>
                                {" "}that relate to your travel with us.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}