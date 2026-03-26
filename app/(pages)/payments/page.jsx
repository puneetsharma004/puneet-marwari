import CommonHero from "@/components/common/CommonHero";
import Image from "next/image";

const paymentOptions = [
    {
        id: 1,
        title: "Credit Card",
        content: (
            <>
                <p className="text-14 text-light-2" style={{ lineHeight: "1.85" }}>
                    Easy! The remaining balance on your account will be automatically charged to your
                    credit card on file 90 days prior to your trip's start.
                </p>
                <p className="text-14 text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
                    You can also log into your{" "}
                    <a href="/login" className="text-dark-1 fw-600"
                        style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
                        Your Trip
                    </a>{" "}
                    account any time and click the "Make Payment" button. Your payment will be
                    automatically posted to your account. We don't charge any additional fees
                    for credit card payments.
                </p>
            </>
        ),
    },
    {
        id: 2,
        title: "Cheque or Money Order",
        content: (
            <>
                <p className="text-14 text-light-2" style={{ lineHeight: "1.85" }}>
                    Cheques (personal or registered) or money orders can be sent to the following
                    address. We will send you a confirmation of receipt as soon as it arrives.
                </p>
                <p className="text-14 fw-600 text-dark-1 mt-20 mb-5">
                    Please allow up to 3 weeks for confirmation of receipt for regular-paced mail.
                </p>
                <div className="mt-15"
                    style={{ borderLeft: "3px solid #1a1715", paddingLeft: "20px" }}>
                    <p className="text-15 fw-600 text-dark-1"
                        style={{ fontFamily: "var(--font-caslon), serif", letterSpacing: "1px" }}>
                        Detours Travel
                    </p>
                    <p className="text-14 text-light-2 mt-8" style={{ lineHeight: "1.8" }}>
                        15388 24th Avenue, Unit 202<br />
                        Surrey, BC V4A 2J2<br />
                        Canada
                    </p>
                </div>
            </>
        ),
    },
    {
        id: 3,
        title: "ACH Bank Payment",
        subtitle: "USA or UK Travelers",
        content: (
            <p className="text-14 text-light-2" style={{ lineHeight: "1.85" }}>
                ACH bank transfer is an easy way to pay for your trip directly from your bank
                account. Simply select this option during your trip registration and follow the
                prompts. It's as easy as using your credit card — and it comes with a{" "}
                <span className="fw-600 text-dark-1">$50 USD discount</span> if you make your
                full payment at the time of booking.
            </p>
        ),
    },
    {
        id: 4,
        title: "Interac E-Transfer",
        subtitle: "Canada Only",
        content: (
            <p className="text-14 text-light-2" style={{ lineHeight: "1.85" }}>
                Just log in to your online banking and send an Interac E-transfer to{" "}
                <a href="mailto:travel@detourstravel.com" className="text-dark-1 fw-600"
                    style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
                    travel@detourstravel.com
                </a>
                . The official day's exchange rate at{" "}
                <a href="https://www.xe.com" target="_blank" rel="noreferrer"
                    className="text-dark-1 fw-600"
                    style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
                    xe.com
                </a>{" "}
                will be used to credit your account.
            </p>
        ),
    },
];

export default function MakingPayments() {
    return (
        <>
            {/* Hero */}
            <CommonHero
                title="Making Payments"
                subtitle="Flexible & Convenient"
                image="/heroimg/payments.jpg"
                breadcrumb="Making Payments"
            />

            {/* Body */}
            <section className="layout-pt-lg layout-pb-lg" style={{ backgroundColor: "#fef7f4" }}>
                <div className="container">
                    <div className="row justify-center">
                        <div className="">

                            {/* Payment Schedule */}
                            <div className="d-flex items-center x-gap-20 mb-30">
                                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                                <h2 className="text-14 fw-700 uppercase text-dark-1"
                                    style={{
                                        letterSpacing: "5px", whiteSpace: "nowrap",
                                        fontFamily: "var(--font-caslon), serif"
                                    }}>
                                    Payment Schedule
                                </h2>
                                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                            </div>

                            <p className="text-14 text-light-2 mb-30" style={{ lineHeight: "1.85" }}>
                                There's no need to pay for the entire trip all at once! Below is a simple
                                schedule of payments required prior to your adventure. Keep in mind, these
                                are minimum payments — if you'd like to fast-track your way to "fully paid"
                                you're completely welcome to. We also offer several payment options for
                                your convenience.
                            </p>

                            <p className="text-14 fw-600 text-dark-1 mb-25">
                                First,{" "}
                                <a href="/trip-registration"
                                    className="text-dark-1 fw-700 uppercase"
                                    style={{
                                        textDecoration: "underline", textUnderlineOffset: "3px",
                                        letterSpacing: "1px"
                                    }}>
                                    Register
                                </a>{" "}
                                for your adventure, then:
                            </p>

                            {/* Schedule steps */}
                            <div className="d-flex flex-column y-gap-0 mb-40">
                                {[
                                    {
                                        step: "Within 7 Days",
                                        desc: "$500 USD deposit due.",
                                    },
                                    {
                                        step: "90 Days Prior to Trip Start",
                                        desc: "Balance due. Automatically charged to your credit card on file on this date for all bookings made after September 23, 2025. Registrations received before this date must make payments on your Your Trip page.",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="d-flex x-gap-20"
                                        style={{
                                            padding: "20px 0",
                                            borderBottom: "1px solid #E7E6E6"
                                        }}>
                                        <div style={{
                                            flexShrink: 0, width: 20, height: 20,
                                            borderRadius: "0%", backgroundColor: "#1a1715",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            marginTop: 2,
                                        }}>
                                            <span className="text-white text-12 fw-600">{i + 1}</span>
                                        </div>
                                        <div>
                                            <p className="text-14 fw-700 text-dark-1 uppercase mb-5"
                                                style={{
                                                    letterSpacing: "1.5px",
                                                    fontFamily: "var(--font-caslon), serif"
                                                }}>
                                                {item.step}
                                            </p>
                                            <p className="text-13 text-light-2" style={{ lineHeight: "1.8" }}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Currency note */}
                            <div style={{
                                backgroundColor: "#fff", border: "1px solid #E7E6E6",
                                padding: "18px 24px", marginBottom: "60px"
                            }}>
                                <p className="text-13 italic text-light-2" style={{ lineHeight: "1.75" }}>
                                    Please note: payments received in non-USD currency will be converted to
                                    USD using current market rates available at{" "}
                                    <a href="https://www.xe.com" target="_blank" rel="noreferrer"
                                        className="text-dark-1 fw-500"
                                        style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                        xe.com
                                    </a>{" "}
                                    on date of receipt.
                                </p>
                            </div>

                            {/* Payment Options heading */}
                            <div className="d-flex items-center x-gap-20 mb-30">
                                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                                <h2 className="text-14 fw-700 uppercase text-dark-1"
                                    style={{
                                        letterSpacing: "5px", whiteSpace: "nowrap",
                                        fontFamily: "var(--font-caslon), serif"
                                    }}>
                                    Payment Options
                                </h2>
                                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                            </div>

                            {/* Options quick list */}
                            <div className="d-flex flex-column y-gap-10 mb-50">
                                {paymentOptions.map((opt) => (
                                    <div key={opt.id} className="d-flex items-center x-gap-15">
                                        <span style={{
                                            flexShrink: 0, width: 24, height: 24,
                                            border: "1px solid #1a1715", borderRadius: "0%",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                        }}>
                                            <span className="text-11 fw-600 text-dark-1">{opt.id}</span>
                                        </span>
                                        <p className="text-14 fw-600 text-dark-1 uppercase"
                                            style={{ letterSpacing: "1.5px" }}>
                                            {opt.title}
                                            {opt.subtitle && (
                                                <span className="text-light-2 fw-400 ml-5"
                                                    style={{
                                                        textTransform: "none", letterSpacing: "0px",
                                                        fontSize: "12px"
                                                    }}>
                                                    — {opt.subtitle}
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Individual option sections */}
                            <div className="d-flex flex-column y-gap-50">
                                {paymentOptions.map((opt) => (
                                    <div key={opt.id}>
                                        <div className="d-flex items-center py-20 mt-30 x-gap-20 mb-15">
                                            <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                                            <h3 className="text-13 fw-700 uppercase text-dark-1 text-center"
                                                style={{
                                                    letterSpacing: "3px", whiteSpace: "nowrap",
                                                    fontFamily: "var(--font-caslon), serif"
                                                }}>
                                                {opt.id}) {opt.title}
                                                {opt.subtitle && ` (${opt.subtitle})`}
                                            </h3>
                                            <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                                        </div>
                                        <p className="text-14">
                                            {opt.content}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Footer note */}
                            <div className="mt-60" style={{ borderLeft: "3px solid #1a1715", paddingLeft: "24px" }}>
                                <p className="text-15 text-dark-1"
                                    style={{ lineHeight: "1.75", fontFamily: "var(--font-caslon), serif" }}>
                                    If none of these options work for you, or for more information on any
                                    of the above payment methods —{" "}
                                    <a href="/contact" className="text-dark-1 fw-600"
                                        style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                        please contact us here
                                    </a>
                                    .
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}