"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tabs = ["Itinerary", "Accommodations", "Trip Notes", "What's Included"];

// ─── Accordion item ────────────────────────────────────────────────────────────
function AccordionItem({ item }) {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ borderBottom: "1px solid #E7E6E6" }}>
            <button
                onClick={() => setOpen(!open)}
                className="d-flex justify-between items-center w-100 text-left"
                style={{
                    padding: "20px 0", background: "none", border: "none",
                    cursor: "pointer", width: "100%"
                }}>
                <div>
                    <span className="text-11 fw-600 uppercase text-light-2"
                        style={{ letterSpacing: "2px" }}>{item.day}</span>
                    <p className="text-16 fw-600 uppercase text-dark-1 mt-3"
                        style={{ fontFamily: "var(--font-caslon), serif", letterSpacing: "2px" }}>
                        {item.location}
                    </p>
                </div>
                <span className="text-dark-1 text-20" style={{ flexShrink: 0, marginLeft: 20 }}>
                    {open ? "−" : "+"}
                </span>
            </button>

            {open && (
                <div style={{ paddingBottom: "24px" }}>
                    <p className="text-14 text-light-2 mb-20" style={{ lineHeight: "1.8" }}>
                        {item.body}
                    </p>
                    <p className="text-13 text-dark-1 mb-8">
                        <span className="fw-600">Included Activities: </span>{item.included}
                    </p>
                    <p className="text-13 text-light-2">
                        <span className="fw-600 text-dark-1">Optional Activities: </span>{item.optional}
                    </p>
                </div>
            )}
        </div>
    );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function TripDetail({ trip }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            {/* Hero */}
            <section className="hero -type-1 -min">
                <div className="hero__bg">
                    <Image src={trip.heroImage} alt={trip.title} fill priority className="object-cover" />
                    <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.45)" }} />
                </div>
                <div className="container">
                    <div className="hero__content">
                        <nav className="d-flex items-center justify-center x-gap-10 mb-20 text-13 fw-500 uppercase"
                            style={{ letterSpacing: "2px" }}>
                            <Link href="/" className="text-white" style={{ opacity: 0.6 }}>Home</Link>
                            <span className="text-white" style={{ opacity: 0.3 }}>
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                                    <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <Link href="/trip-registration" className="text-white" style={{ opacity: 0.6 }}>
                                Trips
                            </Link>
                            <span className="text-white" style={{ opacity: 0.3 }}>
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                                    <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="text-white">{trip.title}</span>
                        </nav>

                        <h1 className="hero__title text-white"
                            style={{ fontFamily: "var(--font-caslon), serif", letterSpacing: "4px" }}>
                            {trip.title.split(" ").slice(0, -1).join(" ")}{" "}
                            <span className="italic" style={{ opacity: 0.75 }}>
                                {trip.title.split(" ").slice(-1)}
                            </span>
                        </h1>

                        <div className="d-flex items-center justify-center x-gap-10 mt-20">
                            <span style={{ display: "block", width: 56, height: 1, backgroundColor: "rgba(255,255,255,0.3)" }} />
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
                                style={{ color: "rgba(255,255,255,0.5)" }}>
                                <rect x="6" y="0.5" width="7.78" height="7.78" rx="1.5"
                                    transform="rotate(45 6 0.5)" stroke="currentColor" strokeWidth="1" />
                            </svg>
                            <span style={{ display: "block", width: 56, height: 1, backgroundColor: "rgba(255,255,255,0.3)" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Body: two-column layout */}
            <section className="layout-pt-lg layout-pb-lg" style={{ backgroundColor: "#fef7f4" }}>
                <div className="container">
                    <div className="row x-gap-60">

                        {/* LEFT — scrolling content */}
                        <div className="col-lg-8 col-12">

                            {/* Description */}
                            <div className="d-flex flex-column y-gap-20 mb-40">
                                {trip.description.map((para, i) => (
                                    <p key={i} className="text-15 text-light-2" style={{ lineHeight: "1.85" }}>
                                        {para}
                                    </p>
                                ))}
                            </div>

                            {/* Trip note */}
                            <div style={{
                                backgroundColor: "#fff", border: "1px solid #E7E6E6",
                                padding: "18px 24px", marginBottom: "50px"
                            }}>
                                <p className="text-13 italic text-light-2" style={{ lineHeight: "1.75" }}>
                                    {trip.note}
                                </p>
                            </div>

                            {/* Tabs */}
                            <div className="d-flex x-gap-0 mb-0"
                                style={{ borderBottom: "2px solid #E7E6E6" }}>
                                {tabs.map((tab, i) => (
                                    <button key={i} onClick={() => setActiveTab(i)}
                                        style={{
                                            padding: "12px 20px", background: "none",
                                            border: "none", cursor: "pointer",
                                            borderBottom: activeTab === i
                                                ? "2px solid #1a1715" : "2px solid transparent",
                                            marginBottom: "-2px",
                                        }}>
                                        <span className={`text-13 fw-600 uppercase ${activeTab === i ? "text-dark-1" : "text-light-2"}`}
                                            style={{ letterSpacing: "1.5px" }}>
                                            {tab}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {/* Tab content */}
                            <div className="pt-30">

                                {/* Itinerary */}
                                {activeTab === 0 && (
                                    <div>
                                        {trip.itinerary.map((item, i) => (
                                            <AccordionItem key={i} item={item} />
                                        ))}
                                    </div>
                                )}

                                {/* Accommodations */}
                                {activeTab === 1 && (
                                    <div className="d-flex flex-column y-gap-0">
                                        <p className="text-15 text-light-2 mb-40" style={{ lineHeight: "1.85" }}>
                                            We put a lot of time into finding the perfect accommodation for your trip.
                                            After rigorous Wi-Fi testing, pillow fluffing, and a shower or two,
                                            we've narrowed down our favorites. Here's where you'll be staying:
                                        </p>
                                        {trip.accommodations.map((acc, i) => (
                                            <div key={i} className="d-flex x-gap-30 mb-40"
                                                style={{
                                                    paddingBottom: "40px",
                                                    borderBottom: i < trip.accommodations.length - 1
                                                        ? "1px solid #E7E6E6" : "none"
                                                }}>
                                                <div style={{
                                                    flexShrink: 0, width: 200, height: 150,
                                                    position: "relative", borderRadius: "4px",
                                                    overflow: "hidden"
                                                }}>
                                                    <Image src={acc.image} alt={acc.hotel} fill
                                                        className="object-cover" />
                                                </div>
                                                <div>
                                                    <p className="text-11 fw-600 uppercase text-light-2 mb-5"
                                                        style={{ letterSpacing: "2px" }}>{acc.city}</p>
                                                    <p className="text-16 fw-600 text-dark-1 mb-10"
                                                        style={{
                                                            fontFamily: "var(--font-caslon), serif",
                                                            letterSpacing: "1px"
                                                        }}>
                                                        {acc.hotel}
                                                    </p>
                                                    <p className="text-14 text-light-2" style={{ lineHeight: "1.8" }}>
                                                        {acc.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Trip Notes */}
                                {activeTab === 2 && (
                                    <div className="d-flex flex-column y-gap-0">
                                        {trip.tripNotes.map((note, i) => (
                                            <div key={i} className="d-flex x-gap-20"
                                                style={{
                                                    padding: "18px 0",
                                                    borderBottom: "1px solid #E7E6E6"
                                                }}>
                                                <span style={{
                                                    flexShrink: 0, marginTop: 4,
                                                    width: 6, height: 6, borderRadius: "50%",
                                                    backgroundColor: "#1a1715",
                                                }} />
                                                <p className="text-14 text-light-2" style={{ lineHeight: "1.8" }}>
                                                    <span className="fw-700 text-dark-1">{note.title}: </span>
                                                    {note.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* What's Included */}
                                {activeTab === 3 && (
                                    <div className="row x-gap-40">
                                        <div className="col-md-6 col-12">
                                            <p className="text-13 fw-700 uppercase text-dark-1 mb-20"
                                                style={{ letterSpacing: "3px" }}>
                                                Included
                                            </p>
                                            <div className="d-flex flex-column y-gap-12">
                                                {trip.whatsIncluded.included.map((item, i) => (
                                                    <div key={i} className="d-flex items-start x-gap-12">
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                            style={{ flexShrink: 0, marginTop: 2, color: "#1a1715" }}>
                                                            <path d="M20 6L9 17l-5-5" stroke="currentColor"
                                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="text-14 text-light-2">{item}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <p className="text-13 fw-700 uppercase text-dark-1 mb-20"
                                                style={{ letterSpacing: "3px" }}>
                                                Not Included
                                            </p>
                                            <div className="d-flex flex-column y-gap-12">
                                                {trip.whatsIncluded.notIncluded.map((item, i) => (
                                                    <div key={i} className="d-flex items-start x-gap-12">
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                            style={{
                                                                flexShrink: 0, marginTop: 2,
                                                                color: "rgba(26,23,21,0.3)"
                                                            }}>
                                                            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor"
                                                                strokeWidth="1.5" strokeLinecap="round" />
                                                        </svg>
                                                        <p className="text-14 text-light-2">{item}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                        {/* RIGHT — sticky sidebar */}
                        <div className="col-lg-4 col-12">
                            <div style={{ position: "sticky", top: "100px" }}>

                                {/* Register CTA */}
                                <div style={{
                                    border: "1px solid #E7E6E6", backgroundColor: "#fff",
                                    padding: "28px", marginBottom: "2px"
                                }}>
                                    <p className="text-13 fw-600 uppercase text-dark-1 text-center mb-5"
                                        style={{ letterSpacing: "3px" }}>
                                        Register Now
                                    </p>
                                    <p className="text-12 text-light-2 text-center"
                                        style={{ letterSpacing: "1px" }}>
                                        with a {trip.deposit} deposit
                                    </p>
                                </div>

                                {/* Dates */}
                                <div className="d-flex flex-column y-gap-0 mb-2">
                                    {trip.dates.map((date, i) => (
                                        <Link key={i} href="/contact"
                                            className="d-flex justify-between items-center"
                                            style={{
                                                padding: "14px 20px",
                                                backgroundColor: date.status === "sold_out" ? "#888" : "#1a1715",
                                                textDecoration: "none",
                                                marginBottom: "2px",
                                                transition: "opacity 0.2s",
                                            }}>
                                            <div>
                                                <p className="text-12 fw-600 text-white uppercase"
                                                    style={{ letterSpacing: "1.5px" }}>
                                                    {date.label}
                                                </p>
                                                {date.status === "sold_out" && (
                                                    <p className="text-11 text-white mt-2" style={{ opacity: 0.7 }}>
                                                        Full — Join Waitlist
                                                    </p>
                                                )}
                                            </div>
                                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                                style={{ color: "white", flexShrink: 0 }}>
                                                <path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5"
                                                    strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    ))}
                                </div>

                                {/* Pricing note */}
                                <div style={{
                                    border: "1px solid #E7E6E6", backgroundColor: "#fff",
                                    padding: "20px 24px"
                                }}>
                                    <p className="text-13 text-light-2" style={{ lineHeight: "1.75" }}>
                                        Pricing is per-person, based on two travelers per room. Solo traveler?
                                        We'll pair you with another solo traveler at no cost, or pay just{" "}
                                        <span className="fw-600 text-dark-1">{trip.soloSupplement}</span>{" "}
                                        for a private room.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}           