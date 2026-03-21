import { featuresFour } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features6() {
  return (
<<<<<<< HEAD
    <section className="relative">
      <div className="sectionBg -type-1">
        <div className="bg-accent-1-05 rounded-24"></div>
        <Image
          width={717}
          height={700}
          src="/home/s16.png"
          alt="image"
          className="rounded-24"
        />
      </div>
=======
    <section className="student-section">
      {/* Abstract Background Layer */}
      <div className="abstract-bg"></div>
      <div className="container student-content">
        {/* Heading */}
        <div className="student-heading">
          <h2 className="text-white">
            Why choose <span className="highlight">MAWARI</span>
          </h2>
>>>>>>> f43e6bc (sqaure mawari)

          <p className="text-white">
            Every trip is thoughtfully designed from start to finish, so the
            logistics are handled and the experience flows seamlessly with
            enough flexibility to follow your heart, linger a little longer, or
            slow things down when the moment calls for it.
          </p>
        </div>

        {/* Cards */}
        <div className="student-grid">
          {whyCards.map((elm, i) => (
            <div key={i} className="student-card">
              <Image
                src={elm.image}
                alt={elm.title}
                fill
                className="card-img"
              />
              <div className="card-overlay"></div>

              <div className="card-title">{elm.title}</div>
              <div className="card-text">{elm.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const whyCards = [
  {
    id: 1,
    image: "/home/why1.png",
    title: "Well-paced itineraries",
    text: "You're in control, with free cancellation and payment.",
  },
  {
    id: 2,
    image: "/home/why2.png",
    title: "Small groups capped at 12 travelers",
    text: "Browse and book tours and activities so incredible.",
  },
  {
    id: 3,
    image: "/home/why3.png",
    title: "Guaranteed departures",
    text: "High quality standards. Millions of reviews.",
  },
];
