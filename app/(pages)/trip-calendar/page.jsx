"use client";
import HeroBanner from "@/components/common/HeroBanner";
import TourList1 from "@/components/tours/TourList1";

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

export default function TripCalendar() {
  return (
    <>
      {/* Hero */}
      {/* <CommonHero
        title="Trip Calendar"
        subtitle="Plan Your Next Adventure"
        breadcrumb="Trip Calendar"
        image="/heroimg/trip-calendar.jpg"
      /> */}
      <HeroBanner
        title="Phuket"
        description="Explore deals, travel guides and things to do in Phuket"
        imageSrc="/heroimg/trip-calendar.jpg"
      />
      <TourList1 />
    </>
  );
}
