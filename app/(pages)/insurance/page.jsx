import CommonHero from '@/components/common/CommonHero'
import Link from 'next/link'
import React from 'react'

export default function InsurancePage() {
  return (
    <>
    <CommonHero
    title="Travel Insurance"
    subtitle="Travel With confidence"
    image="/heroimg/insurance.jpg"
    breadcrumb="Insurance"
    />

      {/* Body */}
      <section className="layout-pt-lg layout-pb-lg" style={{ backgroundColor: "#fef7f4" }}>
        <div className="container">
          <div className="row justify-center">
            <div className="">

              {/* Section heading */}
              <div className="d-flex items-center x-gap-20 mb-40">
                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                <h2 className="text-14 fw-700 uppercase text-dark-1"
                  style={{
                    letterSpacing: "5px", whiteSpace: "nowrap",
                    fontFamily: "var(--font-caslon), serif"
                  }}>
                  Travel Medical Insurance
                </h2>
                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
              </div>

              {/* Info paragraphs */}
              <div className="d-flex flex-column y-gap-20 mb-40">
                <p className="text-14 text-light-2" style={{ lineHeight: "1.85" }}>
                  Basic travel medical insurance is mandatory for all travelers on any of our
                  trips. A more comprehensive policy — covering things like baggage delay,
                  flight cancellation, and trip interruption — is strongly suggested, though
                  optional.
                </p>
                <p className="text-14 text-light-2" style={{ lineHeight: "1.85" }}>
                  First, check to see if you are already covered under a plan from work or
                  through a credit card. If not, you can use the banner below to get a quote
                  within seconds of filling out the form.
                </p>
              </div>

              {/* What's covered */}
              <div className="d-flex items-center x-gap-20 mb-30">
                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                <p className="text-12 fw-600 uppercase text-dark-1"
                  style={{ letterSpacing: "3px", whiteSpace: "nowrap" }}>
                  What To Look For
                </p>
                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
              </div>

              <div className="row y-gap-15 mb-50">
                {[
                  { label: "Emergency Medical", desc: "Covers hospital and doctor costs abroad." },
                  { label: "Medical Evacuation", desc: "Transport to the nearest adequate facility." },
                  { label: "Trip Cancellation", desc: "Reimbursement if you need to cancel." },
                  { label: "Baggage Delay", desc: "Compensation for delayed or lost luggage." },
                  { label: "Flight Cancellation", desc: "Coverage for disrupted flights." },
                  { label: "24/7 Assistance", desc: "Round-the-clock emergency support line." },
                ].map((item, i) => (
                  <div key={i} className="col-md-6 col-12">
                    <div className="d-flex items-start x-gap-15"
                      style={{
                        padding: "16px 20px", border: "1px solid #E7E6E6",
                        backgroundColor: "#fff"
                      }}>
                      <div>
                        <p className="text-12 fw-600 uppercase text-dark-1"
                          style={{ letterSpacing: "1.5px" }}>
                          {item.label}
                        </p>
                        <p className="text-12 text-light-2 mt-3">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pull quote */}
              <div style={{ borderLeft: "3px solid #1a1715", paddingLeft: "24px" }}
                className="mb-50">
                <p className="text-18 italic text-dark-1"
                  style={{ lineHeight: "1.75", fontFamily: "var(--font-caslon), serif" }}>
                  "Travel well, travel protected — peace of mind is the best thing
                  you can pack."
                </p>
              </div>

              {/* CTA banner */}
              <Link href="#get-quote"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  backgroundColor: "#1a1715", padding: "28px 36px",
                  textDecoration: "none",
                }}>
                <div>
                  <p className="text-white fw-700 uppercase"
                    style={{
                      fontFamily: "var(--font-caslon), serif",
                      fontSize: "14px", letterSpacing: "3px"
                    }}>
                    Get Your Insurance Quote
                  </p>
                  <p className="text-white text-11 mt-5" style={{ opacity: 0.6 }}>
                    Takes less than 60 seconds to fill out
                  </p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  style={{ color: "white", flexShrink: 0 }}>
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}
