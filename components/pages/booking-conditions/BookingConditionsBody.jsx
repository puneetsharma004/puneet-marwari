import Square from "@/components/common/icons/Square";

const sections = [
    {
        title: "Cancellations",
        content: (
            <>
                <p className="text-13 text-light-2" style={{ lineHeight: "1.85" }}>
                    All of our trips are "guaranteed departures" which means we do not have a minimum
                    number of travelers required to confirm a departure. That said, we reserve the right
                    to cancel a trip based on situations out of our control — political instability,
                    terrorism, natural disasters, travel restrictions, pandemics, etc. We will always
                    give our travelers as much notice as possible if any situation arises that forces
                    a trip cancellation.
                </p>
                <p className="text-13 text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
                    If we must cancel a trip for reasons outside of our control, booked travelers will
                    retain all paid funds, minus unrecoverable costs, as credit for future travel with
                    no expiry date or destination restrictions.
                </p>
            </>
        ),
    },
    {
        title: "Payment Schedule",
        content: (
            <div className="d-flex flex-column y-gap-12">
                {[
                    { label: "$500 deposit per person", desc: "Due within 7 days of registration." },
                    { label: "Remaining balance", desc: "Due 90 days prior to trip start date." },
                ].map((item, i) => (
                    <div key={i} className="d-flex x-gap-15 text-13">
                        <Square/>
                        <p className="text-13 text-light-2" style={{ lineHeight: "1.8" }}>
                            <span className="fw-700 text-dark-1">{item.label}</span> — {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        ),
    },
    {
        title: "Cancelling / Re-Scheduling Your Trip",
        content: (
            <>
                <div className="d-flex flex-column y-gap-12 mb-20">
                    {[
                        "Cancel/reschedule at least 6 months (180+ days) prior to trip start — deposit is 100% transferable to a future trip.",
                        "Cancel/reschedule at least 4 months (120–179 days) prior to trip start — deposit is 50% transferable to a future trip.",
                        "Cancel/reschedule at least 3 months (90–119 days) prior to trip start — deposit is not transferable.",
                        "Cancel/reschedule less than 3 months (0–89 days) prior to trip start date — all payments non-refundable, non-transferable.",
                    ].map((item, i) => (
                        <div key={i} className="d-flex x-gap-15">
                            <Square/>
                            <p className="text-13 text-light-2" style={{ lineHeight: "1.8" }}>{item}</p>
                        </div>
                    ))}
                </div>
                <p className="text-14 text-light-2 mb-15" style={{ lineHeight: "1.8" }}>
                    It's optional, but we always suggest taking out comprehensive travel insurance
                    which can include trip cancellation, baggage delay, etc. Travel insurance can
                    be purchased through our{" "}
                    <a href="/insurance" className="text-dark-1 fw-600"
                        style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
                        Insurance page
                    </a>.
                </p>
                <p className="text-14 text-light-2" style={{ lineHeight: "1.85" }}>
                    Why do we have cancellation fees? Nobody likes them, we get it, and we don't
                    either. However, traveler payments are used to confirm flights, hotel bookings,
                    and other services on their behalf in the destination country. As the trip
                    approaches, those payments are subject to increasing costs — this is why
                    comprehensive travel insurance is the best way to protect your payments against
                    unpredictable life events.
                </p>
            </>
        ),
    },
    {
        title: "Rooming",
        content: (
            <>
                <p className="text-13 text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
                    All published prices are based on twin-share (2 travelers per room). Solo
                    traveler? No problem! We offer two options:
                </p>
                <div className="d-flex flex-column y-gap-12">
                    {[
                        { label: "Roommate Matching", desc: "We will match you up with another solo traveler to share a room (two separate beds) at no additional cost. Please note that we cannot guarantee any specific roommate features (ie: non-snorers, non-smokers, etc)." },
                        { label: "Private Room", desc: "We charge a very reasonable private room cost to give you your own room for the duration of the trip. This fee is different for each trip — please check the specific trip page for details." },
                    ].map((item, i) => (
                        <div key={i} className="d-flex x-gap-15">
                            <Square/>
                            <p className="text-13 text-light-2" style={{ lineHeight: "1.8" }}>
                                <span className="fw-700 text-dark-1">{item.label}: </span>{item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </>
        ),
    },
    {
        title: "Passports & Visas",
        content: (
            <p className="text-13 text-light-2" style={{ lineHeight: "1.85" }}>
                We are here to help with any information you require regarding passport and visa
                requirements in each of the countries we operate in. The responsibility, however,
                relies on the traveler to ensure the passport is valid for 6 months beyond the
                trip end date, and that visas are obtained and valid (if required). We cannot be
                held responsible for individual passport or visa problems that may arise.
            </p>
        ),
    },
    {
        title: "Flights",
        content: (
            <p className="text-13 text-light-2" style={{ lineHeight: "1.85" }}>
                International flights to and from the destination are not included in the trip
                cost. As we are a tour operator and not a travel agency, if you would like
                assistance with booking your flights beyond the suggestions we provide in your
                welcome email, we suggest connecting with a travel agent who can help.
            </p>
        ),
    },
    {
        title: "Group Sizes",
        content: (
            <p className="text-13 text-light-2" style={{ lineHeight: "1.85" }}>
                We definitely aren't the "big 50-person tour bus" kind of company. We believe
                the best way to experience a new place is with a more intimate group. That's why,
                unless otherwise stated on the trip's info page, our groups range in size up to
                16 members plus one trip leader. This gives everyone plenty of opportunities to
                meet new people while not overwhelming our destinations. Wondering how many
                people are booked on your upcoming trip? Just ask!
            </p>
        ),
    },
    {
        title: "Itinerary Changes",
        content: (
            <p className="text-13 text-light-2" style={{ lineHeight: "1.85" }}>
                Occasionally, situations arise that require a change of accommodation, itinerary,
                mode of transport, schedule, etc. We will always inform our travelers of these
                changes as soon as possible as they arise. We cannot be held responsible for
                major changes forced by circumstances beyond our control (natural disaster,
                political instability, extreme weather, terrorism, etc.).
            </p>
        ),
    },
    {
        title: "Your Conduct",
        content: (
            <p className="text-13 text-light-2" style={{ lineHeight: "1.85" }}>
                Any traveler who makes racist, abusive, offensive or any other form of
                discriminatory actions or physical assault against any group members, trip
                leaders or any third party will be removed from the tour and will not be
                entitled to a refund for any missed services or accommodation.
            </p>
        ),
    },
];

export default function BookingConditionsBody() {
    return (
        <section className="layout-pt-lg layout-pb-lg" style={{ backgroundColor: "#fef7f4" }}>
            <div className="container">
                <div className="row justify-center">
                    <div className="">

                        {/* Intro */}
                        <p className="text-13 text-light-2 mb-50" style={{ lineHeight: "1.85" }}>
                            It's always a good idea to spend a few minutes getting acquainted with our
                            booking conditions prior to signing up for a trip.
                        </p>

                        {/* Sections */}
                        <div className="d-flex flex-column y-gap-0">
                            {sections.map((section, i) => (
                                <div key={i} style={{
                                    paddingTop: "36px", paddingBottom: "36px",
                                    borderBottom: "1px solid #E7E6E6",
                                }}>
                                    <div className="d-flex items-center x-gap-15 mb-20">
                                        <span style={{
                                            flexShrink: 0, width: 24, height: 24,
                                            border: "1px solid #1a1715", borderRadius: "0%",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            fontSize: "10px", fontWeight: 700, color: "#1a1715",
                                        }}>
                                            {i + 1}
                                        </span>
                                        <h2 className="text-12 fw-700 uppercase text-dark-1"
                                            style={{
                                                letterSpacing: "4px", margin: 0,
                                                fontFamily: "var(--font-caslon), serif"
                                            }}>
                                            {section.title}
                                        </h2>
                                    </div>
                                    {section.content}
                                </div>
                            ))}
                        </div>

                        {/* Footer note */}
                        <div style={{ borderLeft: "3px solid #1a1715", paddingLeft: "24px" }}
                            className="mt-50">
                            <p className="text-13 text-dark-1"
                                style={{ lineHeight: "1.75", fontFamily: "var(--font-caslon), serif" }}>
                                "Questions about our booking conditions? We're happy to walk you through
                                anything before you register."{" "}
                                <a href="/contact" className="text-dark-1 fw-600"
                                    style={{
                                        textDecoration: "underline", textUnderlineOffset: "3px",
                                        fontStyle: "normal"
                                    }}>
                                    Contact us here.
                                </a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}