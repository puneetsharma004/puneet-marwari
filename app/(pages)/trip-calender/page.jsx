"use client";
import CommonHero from "@/components/common/CommonHero";
import Image from "next/image";

const trips = [
  {
    month: "March 2026",
    items: [
      {
        id: 1,
        title: "10 Days in Japan",
        image: "/calender/calenderCover.jpg",
        startCity: "Tokyo",
        startDate: "March 21, 2026",
        endCity: "Osaka",
        endDate: "March 30, 2026",
        duration: "10 Days",
        status: "sold_out",
      },
      {
        id: 2,
        title: "10 Days in Japan",
        image: "/calender/calenderCover.jpg",
        startCity: "Tokyo",
        startDate: "March 24, 2026",
        endCity: "Osaka",
        endDate: "April 2, 2026",
        duration: "10 Days",
        status: "sold_out",
      },
    ],
  },
  {
    month: "April 2026",
    items: [
      {
        id: 3,
        title: "7 Days in Morocco",
        image: "/calender/calenderCover.jpg",
        startCity: "Marrakech",
        startDate: "April 5, 2026",
        endCity: "Casablanca",
        endDate: "April 12, 2026",
        duration: "7 Days",
        status: "available",
        spots: 4,
      },
      {
        id: 4,
        title: "12 Days in Peru",
        image: "/calender/calenderCover.jpg",
        startCity: "Lima",
        startDate: "April 18, 2026",
        endCity: "Cusco",
        endDate: "April 30, 2026",
        duration: "12 Days",
        status: "available",
        spots: 8,
      },
    ],
  },
  {
    month: "May 2026",
    items: [
      {
        id: 5,
        title: "8 Days in Iceland",
        image: "/calender/calenderCover.jpg",
        startCity: "Reykjavik",
        startDate: "May 2, 2026",
        endCity: "Reykjavik",
        endDate: "May 10, 2026",
        duration: "8 Days",
        status: "available",
        spots: 6,
      },
      {
        id: 6,
        title: "14 Days in East Africa",
        image: "/calender/calenderCover.jpg",
        startCity: "Nairobi",
        startDate: "May 15, 2026",
        endCity: "Zanzibar",
        endDate: "May 29, 2026",
        duration: "14 Days",
        status: "sold_out",
      },
    ],
  },
  {
    month: "June 2026",
    items: [
      {
        id: 7,
        title: "9 Days in Greece",
        image: "/calender/calenderCover.jpg",
        startCity: "Athens",
        startDate: "June 6, 2026",
        endCity: "Santorini",
        endDate: "June 15, 2026",
        duration: "9 Days",
        status: "available",
        spots: 10,
      },
    ],
  },
];

export default function TripCalender() {
  return (
    <>
      {/* Hero */}
      <CommonHero title="Trip Calendar" subtitle="Plan Your Next Adventure" breadcrumb="Trip Calendar" image="/heroimg/trip-calendar.jpg" />

      {/* Calendar */}
      <section className="layout-pt-lg layout-pb-lg" style={{ backgroundColor: "#fef7f4" }}>
        <div className="container">
          {trips.map((group) => (
            <div key={group.month} className="mb-60">

              {/* Month heading */}
              <div className="d-flex items-center x-gap-20 mb-30">
                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
                <h2 className="text-20 fw-600 uppercase text-dark-1"
                  style={{
                    letterSpacing: "6px", whiteSpace: "nowrap",
                    fontFamily: "var(--font-caslon), serif"
                  }}>
                  {group.month}
                </h2>
                <span style={{ flex: 1, height: 1, backgroundColor: "#E7E6E6" }} />
              </div>

              {/* Trip cards */}
              <div className="d-flex flex-column y-gap-20">
                {group.items.map((trip) => (
                  <div key={trip.id} className="tourCard -type-2">

                    {/* Image */}
                    <div className="tourCard__image">
                      <Image
                        src={trip.image}
                        alt={trip.title}
                        fill
                        className="object-cover rounded-12"
                      />
                    </div>

                    {/* Content */}
                    <div className="tourCard__content">
                      <h3 className="tourCard__title text-dark-1 uppercase"
                        style={{
                          fontFamily: "var(--font-caslon), serif",
                          letterSpacing: "3px", fontSize: "20px"
                        }}>
                        {trip.title}
                      </h3>

                      <div className="d-flex flex-column y-gap-8 mt-15">
                        <p className="text-13 text-light-2">
                          <span className="fw-600 text-dark-1">Starts</span> in{" "}
                          <span className="fw-600 text-dark-1">{trip.startCity}</span> on {trip.startDate}
                        </p>
                        <p className="text-13 text-light-2">
                          <span className="fw-600 text-dark-1">Finishes</span> in{" "}
                          <span className="fw-600 text-dark-1">{trip.endCity}</span> on {trip.endDate}
                        </p>
                      </div>

                      <div className="d-flex items-center x-gap-10 mt-20">
                        <span className="text-11 uppercase fw-600 text-light-2"
                          style={{
                            letterSpacing: "2px", border: "1px solid #E7E6E6",
                            padding: "4px 12px"
                          }}>
                          {trip.duration}
                        </span>
                      </div>
                    </div>

                    {/* Status / CTA */}
                    <div className="tourCard__info">
                      <div>
                        {trip.status === "sold_out" ? (
                          <>
                            <p className="text-13 fw-600 uppercase text-center mb-15"
                              style={{ letterSpacing: "2px", color: "#888" }}>
                              Sold Out
                            </p>
                            <a href="#"
                              className="button -sm -outline-black text-dark-1 uppercase fw-600"
                              style={{ letterSpacing: "2px", fontSize: "11px" }}>
                              Join Waitlist
                            </a>
                          </>
                        ) : (
                          <>
                            <p className="text-13 fw-600 uppercase text-center mb-5"
                              style={{ letterSpacing: "2px" }}>
                              {trip.spots} Spots Left
                            </p>
                            <p className="text-11 text-light-2 text-center mb-15"
                              style={{ letterSpacing: "1px" }}>
                              Limited availability
                            </p>
                            <a href="#"
                              className="button -sm -black bg-dark-1 text-white uppercase fw-600"
                              style={{ letterSpacing: "2px", fontSize: "11px" }}>
                              Book Now
                            </a>
                          </>
                        )}
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>
    </>
  );
}