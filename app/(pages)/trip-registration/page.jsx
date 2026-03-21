import CommonHero from "@/components/common/CommonHero";
import Image from "next/image";
import Link from "next/link";

const trips = [
    {
        id: 1,
        title: "12 Days in Peru",
        imgSrc: "/home/trip11.webp",
        location: "Lima → Cusco → Machu Picchu",
        duration: "12 Days",
        dates: "Apr 18 – Apr 30, 2026",
        price: "$4,360 USD",
        priceLocal: "≈ ₹4,05,765 INR",
        rating: 5.0,
        reviews: 38,
        status: "available",
        spots: 6,
        slug: "12-days-peru",
    },
    {
        id: 2,
        title: "8 Days in Peru",
        imgSrc: "/home/trip21.webp",
        location: "Lima → Sacred Valley → Cusco",
        duration: "8 Days",
        dates: "May 10 – May 18, 2026",
        price: "$3,990 USD",
        priceLocal: "≈ ₹3,71,331 INR",
        rating: 5.0,
        reviews: 24,
        status: "available",
        spots: 8,
        slug: "8-days-peru",
    },
    {
        id: 3,
        title: "12 Days in Spain",
        imgSrc: "/home/trip31.webp",
        location: "Madrid → Seville → Barcelona",
        duration: "12 Days",
        dates: "Jun 6 – Jun 18, 2026",
        price: "$4,470 USD",
        priceLocal: "≈ ₹4,16,002 INR",
        rating: 5.0,
        reviews: 31,
        status: "available",
        spots: 4,
        slug: "12-days-spain",
    },
    {
        id: 4,
        title: "10 Days in Japan",
        imgSrc: "/home/trip42.webp",
        location: "Tokyo → Kyoto → Osaka",
        duration: "10 Days",
        dates: "Mar 21 – Mar 30, 2026",
        price: "$4,100 USD",
        priceLocal: "≈ ₹3,81,800 INR",
        rating: 5.0,
        reviews: 57,
        status: "sold_out",
        spots: 0,
        slug: "10-days-japan",
    },
    {
        id: 5,
        title: "9 Days in Greece",
        imgSrc: "/home/trip41.webp",
        location: "Athens → Mykonos → Santorini",
        duration: "9 Days",
        dates: "Jul 4 – Jul 13, 2026",
        price: "$3,850 USD",
        priceLocal: "≈ ₹3,58,200 INR",
        rating: 5.0,
        reviews: 19,
        status: "available",
        spots: 10,
        slug: "9-days-greece",
    },
];

export default function TripRegistration() {
    return (
        <>
            {/* Hero */}
            <CommonHero
                title="Registration"
                subtitle="Reserve Your Spot"
                image="/heroimg/registration.jpg"
                breadcrumb="Trip Registration"
            />

            {/* Trip listing */}
            <section className="layout-pt-lg layout-pb-lg" style={{ backgroundColor: "#fef7f4" }}>
                <div className="container">

                    {/* Section label */}
                    <div className="d-flex items-center  x-gap-20 mb-50">
                        <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                        <p className="text-13 fw-600 uppercase text-dark-1"
                            style={{ letterSpacing: "4px", whiteSpace: "nowrap" }}>
                            Available Trips
                        </p>
                        <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                    </div>

                    {/* Cards grid */}
                    <div className="row y-gap-40">
                        {trips.map((trip) => (
                            <div key={trip.id} className="col-xl-3 col-lg-4 col-md-6 col-12">
                                <div style={{ opacity: trip.status === "sold_out" ? 0.6 : 1 }}>
                                    <Link href={`/trips/${trip.slug}`}
                                        className="-hover-image-scale d-block"
                                        style={{ textDecoration: "none" }}>

                                        {/* Image */}
                                        <div className="ratio ratio-3:4 -hover-image-scale__image"
                                            style={{ position: "relative" }}>
                                            <Image
                                                width={600}
                                                height={800}
                                                src={trip.imgSrc}
                                                alt={trip.title}
                                                className="img-ratio"
                                                style={{ borderRadius: "4px" }}
                                            />
                                            {/* Sold out badge */}
                                            {trip.status === "sold_out" && (
                                                <div style={{
                                                    position: "absolute", top: 16, left: 16,
                                                    backgroundColor: "#1a1715", color: "white",
                                                    fontSize: "10px", fontWeight: 600,
                                                    letterSpacing: "2px", padding: "5px 12px",
                                                    textTransform: "uppercase",
                                                }}>
                                                    Sold Out
                                                </div>
                                            )}
                                            {/* Spots left badge */}
                                            {trip.status === "available" && trip.spots <= 6 && (
                                                <div style={{
                                                    position: "absolute", top: 16, left: 16,
                                                    backgroundColor: "#fef7f4", color: "#1a1715",
                                                    fontSize: "10px", fontWeight: 600,
                                                    letterSpacing: "2px", padding: "5px 12px",
                                                    textTransform: "uppercase",
                                                    border: "1px solid #1a1715",
                                                }}>
                                                    {trip.spots} Spots Left
                                                </div>
                                            )}
                                        </div>

                                        {/* Rating */}
                                        <div className="d-flex items-center mt-15 x-gap-5">
                                            {Array.from({ length: trip.rating }).map((_, i) => (
                                                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#1a1715">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                            ))}
                                            <span className="text-12 text-light-2 ml-5">({trip.reviews})</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-16 fw-600 mt-10 uppercase text-dark-1 trip__title"
                                            style={{ fontFamily: "var(--font-caslon), serif", letterSpacing: "2px" }}>
                                            {trip.title}
                                        </h3>

                                        {/* Location */}
                                        <div className="d-flex items-start sub-caps mt-5 trip__location text-light-2">
                                            <i className="icon-pin mr-5 mt-1" />
                                            <span>{trip.location}</span>
                                        </div>

                                        {/* Duration + dates */}
                                        <div className="d-flex items-center sub-caps mt-5 text-light-2">
                                            <i className="icon-calendar mr-5" />
                                            {trip.duration} · {trip.dates}
                                        </div>

                                        {/* Divider */}
                                        <div className="mt-15 pt-15"
                                            style={{ borderTop: "1px solid #E7E6E6" }} />

                                        {/* Price + CTA */}
                                        <div className="d-flex justify-between items-center">
                                            <div>
                                                <p className="text-11 text-light-2 uppercase"
                                                    style={{ letterSpacing: "1px" }}>Starting at</p>
                                                <p className="text-15 fw-700 text-dark-1 mt-2">{trip.price}</p>
                                                <p className="text-11 text-light-2">{trip.priceLocal}</p>
                                            </div>

                                            {trip.status === "sold_out" ? (
                                                <span className="button -sm -outline-black text-dark-1 text-11 uppercase fw-600"
                                                    style={{ letterSpacing: "1.5px", pointerEvents: "none" }}>
                                                    Waitlist
                                                </span>
                                            ) : (
                                                <span className="button -sm bg-dark-1 text-white text-11 uppercase fw-600"
                                                    style={{
                                                        letterSpacing: "1.5px",
                                                        backgroundColor: "#1a1715", padding: "10px 16px"
                                                    }}>
                                                    Learn More
                                                </span>
                                            )}
                                        </div>

                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}