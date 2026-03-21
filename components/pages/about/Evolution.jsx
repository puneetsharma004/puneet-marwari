export default function Evolution() {
    return (
        <section className="layout-pb-xl" style={{ backgroundColor: "#fef7f4" }}>
            <div className="container">
                <div className="row justify-center">
                    <div className="">

                        {/* Section heading */}
                        <div className="d-flex items-center x-gap-20 mb-40">
                            <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                            <h2 className="text-14 fw-700 uppercase text-dark-1"
                                style={{
                                    letterSpacing: "6px", whiteSpace: "nowrap",
                                    fontFamily: "var(--font-caslon), serif"
                                }}>
                                Our Evolution
                            </h2>
                            <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                        </div>

                        {/* Paragraphs */}
                        <div className="d-flex flex-column y-gap-25">

                            <p className="text-14 text-light-2" style={{ lineHeight: "1.85" }}>
                                Detours was born before it ever had a name. In the fall of 2003, our Co-founder
                                and Adventure Director decided to embark on a "quick" working-holiday in New
                                Zealand. The "quick" 4-month trip transformed into five years of exploration all
                                over the world — New Zealand turned into an incredible year-long adventure of
                                cross-country hitch-hiking, picking up stray beach and mountainside jobs to get
                                by, SCUBA diving off the Great Barrier Reef in Australia, scaling the Mt. Everest
                                trail in Nepal, and exploring the underground cathedrals of Colombia.
                            </p>

                            <p className="text-14 text-light-2" style={{ lineHeight: "1.85" }}>
                                In the winter of 2004, on a brief visit home to Canada, a chance meeting with a
                                distant cousin changed everything. Stemming from one original tour with a
                                backpacking group in Thailand, our founder ended up leading 13 forty-day tour
                                groups full of young students through Thailand and all of its adventures. He fell
                                in love with the country — and despite attempting to return to a "grown-up" life,
                                it only took a couple of years to realize that wasn't the life for him.
                            </p>

                            {/* Pull quote */}
                            <div style={{ borderLeft: "3px solid #1a1715", paddingLeft: "24px" }}
                                className="mt-20 mb-20">
                                <p className="text-15 italic text-dark-1"
                                    style={{ lineHeight: "1.75", fontFamily: "var(--font-caslon), serif" }}>
                                    "With a dream and a few bucks, Detours was created in the summer of 2012 —
                                    and within a short time became one of the world's leading international
                                    tour operators, while still retaining its genuine small-town,
                                    people-first culture."
                                </p>
                            </div>

                            <p className="text-14 text-light-2" style={{ lineHeight: "1.85" }}>
                                Detours is the result of a family of passionate travelers with a dream and a
                                common interest in opening eyes and minds to all the incredible people, places,
                                and experiences our world has to offer. We're very fortunate to have so many
                                incredible travelers who join our trips all over the world and add to our
                                diverse and ever-growing family.
                            </p>

                            {/* CTA line */}
                            <p className="text-14 text-light-2 mt-20" style={{ lineHeight: "1.85" }}>
                                Want to join us?{" "}
                                <a href="/reviews" className="text-dark-1 fw-600"
                                    style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                    Read past traveler feedback
                                </a>
                                , then{" "}
                                <a href="/contact" className="text-dark-1 fw-600"
                                    style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                    contact us
                                </a>
                                {" "}to chat more about our trips.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}