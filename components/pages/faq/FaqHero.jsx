"use client";
import Image from "next/image";
import Link from "next/link";

export default function FaqHero() {
    return (
        <section className="hero -type-1 -min">

            {/* Background Image + Overlay */}
            <div className="hero__bg">
                <Image
                    src="/img/faq-hero-bg.png"
                    alt="FAQ Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.55)"
                }} />
            </div>

            {/* Content */}
            <div className="container">
                <div className="hero__content">

                    {/* Breadcrumb */}
                    <nav className="d-flex items-center justify-center x-gap-10 mb-20 text-13 fw-500 uppercase"
                        style={{ letterSpacing: "2px" }}>
                        <Link href="/" className="text-white" style={{ opacity: 0.6 }}>Home</Link>
                        <span className="text-white" style={{ opacity: 0.3 }}>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                                <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span className="text-white">FAQ</span>
                    </nav>

                    {/* Subtitle */}
                    <p className="text-white text-13 uppercase mb-10"
                        style={{ letterSpacing: "3px", opacity: 0.6 }}>
                        We're Here to Help
                    </p>

                    {/* Title */}
                    <h1 className="hero__title text-white"
                        style={{ fontFamily: "var(--font-caslon), serif", letterSpacing: "4px" }}>
                        Frequently Asked
                        <br />
                        <span className="text-white italic" style={{ opacity: 0.75 }}>Questions</span>
                    </h1>

                    {/* Divider */}
                    <div className="d-flex items-center x-gap-10 mt-20">
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
    );
}