"use client";
import HeroBanner from "@/components/common/HeroBanner";
import { useState } from "react";

const REVIEWS_PER_PAGE = 6;

const reviews = [
  {
    id: 1,
    name: "Dave F.",
    country: "USA",
    trip: "11 Days in South Africa 2025",
    date: "February 3, 2026",
    rating: 5,
    pullQuote:
      "We will be planning future trips and highly recommend them to others for a fun adventure.",
    body: "My husband and I just finished the January '26 trip to South Africa. Both of us have been on trips before, so we were really looking forward to this one. The trip was absolutely amazing with a wide variety of included and optional activities. Our favorite was the sunset cruise in Cape Town where everyone was relaxed and laughing the entire excursion. And of course the highlight of the trip were the safari adventures where we saw so many animals up close and personal. Three aspects of the trip stand out. First, everything was very well planned, from hotels, meals and activities. Second, the group of fellow travelers from multiple countries and US states made it very special. We felt like a new group of friends by the end. Third, and probably the most impactful, was our trip leader — having grown up in South Africa, he had a very special passion for sharing his knowledge and experience with the group.",
  },
  {
    id: 2,
    name: "Keith T.",
    country: "USA",
    trip: "10 Days in Egypt",
    date: "October 20, 2025",
    rating: 5,
    pullQuote:
      "I've taken 4 trips with Detours Travel. I've introduced friends and referred clients.",
    body: "I've taken 4 trips. I trust that each person I refer will experience the excellence in service and knowledge that I've come to expect. During our various trips we experienced transit strikes in Greece, Covid protocols in the Caribbean and mud slides in South Africa. With each occurrence the trip leader shifted and solved each issue without any disruption to our trip. The trips are designed to be whatever you personally are looking for. You can lay back with minimal participation or opt to join your trip leader daily for an unexpected adventure or cultural experience.",
  },
  {
    id: 3,
    name: "Maria L.",
    country: "Canada",
    trip: "12 Days in Peru",
    date: "September 5, 2025",
    rating: 5,
    pullQuote: "An experience that changed my perspective on travel entirely.",
    body: "From the moment we landed in Lima to our final farewell in Cusco, every detail was taken care of. The Machu Picchu sunrise was indescribable — standing there with a group of 14 strangers who had become friends over 12 days, I genuinely felt moved. Our guide's knowledge of Incan history brought every ruin to life. I've traveled extensively but this was something truly special.",
  },
  {
    id: 4,
    name: "James R.",
    country: "UK",
    trip: "9 Days in Greece",
    date: "August 12, 2025",
    rating: 5,
    pullQuote: "The best holiday I've ever taken — and I've taken many.",
    body: "Greece exceeded every expectation. Santorini, Athens, and Thessaloniki each had their own character and our leader made sure we experienced all of it — not just the tourist spots but the local tavernas, the back streets, the hidden beaches. The group dynamic was fantastic from day one. I came home with a full camera roll and at least five new friendships I intend to keep.",
  },
  {
    id: 5,
    name: "Priya S.",
    country: "Australia",
    trip: "8 Days in Iceland",
    date: "July 2, 2025",
    rating: 5,
    pullQuote:
      "Iceland in summer is magical — this trip made it unforgettable.",
    body: "I was a solo traveler joining a group of complete strangers, and within 24 hours it felt like a family trip. The midnight sun, the geysers, the waterfalls — Iceland delivers on every front. What set this apart was the flexibility. There was never any pressure. You could join the optional hikes or simply sit by a waterfall with a coffee. Our trip leader had an infectious enthusiasm that set the tone from the very first evening.",
  },
  {
    id: 6,
    name: "Tom & André",
    country: "USA",
    trip: "7 Days in Morocco",
    date: "May 18, 2025",
    rating: 5,
    pullQuote:
      "Morocco is overwhelming on your own — with a great group, it's pure magic.",
    body: "Neither of us had been to Africa before and Morocco felt like the perfect introduction. The medinas, the desert camp, the food — all extraordinary. Having a knowledgeable guide to navigate Marrakech's souks meant we could actually enjoy it rather than stress about getting lost. The group was warm and welcoming from the first dinner. We've already looked at the next trip.",
  },
  {
    id: 7,
    name: "Carlos M.",
    country: "Spain",
    trip: "14 Days in East Africa",
    date: "April 3, 2025",
    rating: 5,
    pullQuote:
      "The safari on day six — I will never forget it for the rest of my life.",
    body: "Fourteen days sounds long until you're living it, and then it's never enough. Kenya and Tanzania back to back is the kind of itinerary that sounds ambitious on paper but flows beautifully in practice. The wildlife encounters were extraordinary but what surprised me most was how much I loved the evenings — the group conversations, the shared meals, the stories. This is travel at its absolute best.",
  },
  {
    id: 8,
    name: "Rachel & Dan",
    country: "USA",
    trip: "10 Days in Japan",
    date: "March 30, 2025",
    rating: 5,
    pullQuote:
      "Japan is already incredible — having the right people with you makes it perfect.",
    body: "We almost didn't book because we'd heard Japan is easy to do independently. We're so glad we did. The group experience added a layer of fun and spontaneity we never would have found on our own. Tokyo, Kyoto, and Osaka each deserve a week on their own — somehow this trip made ten days feel like a complete, satisfying experience. Our trip leader's love for Japan was absolutely contagious.",
  },
];

function StarRating({ count }) {
  return (
    <div className="d-flex items-center x-gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#1a1715">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TripReviews() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const paginated = reviews.slice(
    (page - 1) * REVIEWS_PER_PAGE,
    page * REVIEWS_PER_PAGE,
  );

  const handlePage = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HeroBanner
        title="Trip Reviews"
        description="Real People, Real Experiences"
        imageSrc="/heroimg/trip-reviews.jpg"
      />

      {/* Body */}
      <section className="layout-pb-lg" style={{ backgroundColor: "#fef7f4" }}>
        <div className="container">
          <div className="">
            <div className="">
              {/* Intro */}
              <p
                className=" text-light-2 text-center mb-10"
                style={{ lineHeight: "1.8" }}
              >
                Still have questions about our trips? Hear first-hand feedback
                from past travelers. We're proud of our growing list of
                testimonials from people who wanted to share what their
                experience meant to them.
              </p>

              {/* Overall rating */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-y-10 md:gap-x-20 mt-20 mb-30 md:mb-50">
                {/* Stars - Centered automatically by the parent flex-col */}
                <div className="flex-center">
                  <StarRating count={5} />
                </div>

                <h5 className="fw-500 uppercase text-dark-1 text-center sm:text-center mt-10">
                  4.8 out of 5.0 <span className="hidden sm:inline">—</span>
                  <br className="sm:hidden" />
                  {reviews.length}+ verified reviews
                </h5>
              </div>

              {/* Divider */}
              <div className="d-flex items-center x-gap-20 mb-50">
                <span
                  style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }}
                />
                <span
                  className="fw-600 uppercase text-light-2"
                  style={{ letterSpacing: "3px", whiteSpace: "nowrap" }}
                >
                  Page {page} of {totalPages}
                </span>
                <span
                  style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }}
                />
              </div>

              {/* Review list */}
              <div className="d-flex flex-column y-gap-50">
                {paginated.map((review) => (
                  <div key={review.id}>
                    {/* Reviewer name + meta */}
                    <h4 className="fw-500 uppercase text-dark-1 mb-5">
                      {review.name} — {review.country}
                    </h4>

                    <div className="d-flex items-start x-gap-15 mb-15">
                      <StarRating count={review.rating} />
                      <span
                        className="text-12 fw-500 text-dark-1"
                        style={{ letterSpacing: "1px" }}
                      >
                        {review.trip}
                      </span>
                      <span className="text-12 text-light-2">
                        — {review.date}
                      </span>
                    </div>

                    {/* Body + pull quote side by side */}
                    <div className="row x-gap-30">
                      <div className="col-lg-8 col-12">
                        <p className=" text-light-2">{review.body}</p>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div
                          style={{
                            borderLeft: "3px solid #1a1715",
                            paddingLeft: "20px",
                            marginTop: "4px",
                          }}
                        >
                          <p
                            className="text-14 text-dark-1"
                            style={{
                              lineHeight: "1.75",
                              fontFamily: "var(--font-caslon), serif",
                            }}
                          >
                            "{review.pullQuote}"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Separator */}
                    <span
                      className="mb-50"
                      style={{
                        display: "block",
                        height: 1,
                        backgroundColor: "#E7E6E6",
                        marginTop: "40px",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="d-flex justify-center mt-50">
                <div className="pagination">
                  {/* Prev */}
                  <button
                    onClick={() => handlePage(page - 1)}
                    disabled={page === 1}
                    className="pagination__button button -outline-black text-dark-1"
                    style={{
                      opacity: page === 1 ? 0.3 : 1,
                      marginRight: "10px",
                      cursor: page === 1 ? "not-allowed" : "pointer",
                    }}
                  >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                      <path
                        d="M6 1L1 6L6 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Page numbers */}
                  <div className="pagination__count">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handlePage(i + 1)}
                        className={`text-13 fw-500 ${page === i + 1 ? "is-active" : "text-dark-1"}`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  {/* Next */}
                  <button
                    onClick={() => handlePage(page + 1)}
                    disabled={page === totalPages}
                    className="pagination__button button -outline-black text-dark-1"
                    style={{
                      opacity: page === totalPages ? 0.3 : 1,
                      marginLeft: "10px",
                      cursor: page === totalPages ? "not-allowed" : "pointer",
                    }}
                  >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                      <path
                        d="M1 1L6 6L1 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
