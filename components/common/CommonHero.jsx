"use client";
import Image from "next/image";
import Link from "next/link";

export default function CommonHero({ title, subtitle, breadcrumb, image }) {
  return (
    <>
      <section className="hero -type-1 -min">
        {/* Background Image + Overlay */}
        <div className="hero__bg">
          <Image
            src={image}
            alt="FAQ Background"
            fill
            priority
            className="object-cover"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.55)",
              height: "100%",
            }}
          />
        </div>

        {/* Content */}
        <div className="container">
          <div className="hero__content">
            {/* Breadcrumb */}
            <nav
              className="d-flex items-center justify-center x-gap-10 mb-20 text-13 fw-500 uppercase"
              style={{ letterSpacing: "2px" }}
            >
              <Link href="/" className="text-white" style={{ opacity: 0.6 }}>
                Home
              </Link>
              <span className="text-white" style={{ opacity: 0.3 }}>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-white">{breadcrumb}</span>
            </nav>

            {/* Subtitle */}
            <p
              className="text-white text-13 uppercase "
              style={{ letterSpacing: "3px", opacity: 0.6 }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
