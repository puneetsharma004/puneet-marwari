<<<<<<< HEAD
import { teamData } from "@/data/team";
import Image from "next/image";
import React from "react";

export default function Team() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <h2 className="text-30">Meet The Team</h2>
          </div>
        </div>

        <div className="row y-gap-30 pt-40 sm:pt-20">
          {teamData.map((elm, i) => (
            <div key={i} className="col-lg col-md-4 col-sm-6">
              <div className="ratio ratio-23:26">
                <Image
                  width={345}
                  height={395}
                  src={elm.imgPath}
                  alt="image"
                  className="img-ratio bg-light-1 rounded-12"
                />
              </div>

              <h3 className="text-16 fw-500 mt-20">{elm.name}</h3>
              <p className="text-14 lh-16">{elm.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
=======
// components/about/Team.jsx
"use client";
import { teamData } from "@/data/team";
import Image from "next/image";
import { useState } from "react";

export default function Team() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="layout-pt-lg layout-pb-xl" style={{ backgroundColor: "#fef7f4" }}>
      <div className="container">

        {/* Section heading */}
        <div className="row justify-center mb-50">
          <div className="col-auto text-center">
            <p className="text-13 fw-500 uppercase mb-10"
              style={{ letterSpacing: "4px", color: "#1a1715", opacity: 0.5 }}>
              The People Behind The Trips
            </p>
            <h2 className="text-30 fw-700 uppercase text-dark-1"
              style={{ fontFamily: "var(--font-caslon), serif", letterSpacing: "5px" }}>
              Meet The <span className="italic fw-600" style={{ opacity: 0.75 }}>Team</span>
            </h2>
            <div className="d-flex items-center justify-center x-gap-10 mt-20">
              <span style={{ display: "block", width: 40, height: 1, backgroundColor: "rgba(26,23,21,0.2)" }} />
              <svg width="8" height="8" viewBox="0 0 12 12" fill="none" style={{ color: "#1a1715", opacity: 0.4 }}>
                <rect x="6" y="0.5" width="7.78" height="7.78" rx="1.5"
                  transform="rotate(45 6 0.5)" stroke="currentColor" strokeWidth="1" />
              </svg>
              <span style={{ display: "block", width: 40, height: 1, backgroundColor: "rgba(26,23,21,0.2)" }} />
            </div>
          </div>
        </div>

        {/* Grid — 5 columns on desktop, 3 on tablet, 2 on mobile */}
        <div className="row y-gap-40">
          {teamData.map((member) => (
            <div key={member.id} className="col-lg-2 col-md-4 col-sm-6 col-6">
              <div
                className="relative"
                style={{ cursor: "default" }}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="ratio ratio-23:26"
                  style={{ overflow: "hidden" }}>
                  <Image
                    width={345}
                    height={395}
                    src={member.imgPath}
                    alt={member.name}
                    className="img-ratio bg-light-1"
                    style={{
                      transition: "transform 0.5s ease",
                      transform: hoveredId === member.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />

                  {/* Hover quote overlay */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(26,23,21,0.82)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "24px",
                    opacity: hoveredId === member.id ? 1 : 0,
                    transition: "opacity 0.35s ease",
                  }}>
                    <p className="text-white italic text-center"
                      style={{
                        fontFamily: "var(--font-caslon), serif",
                        fontSize: "12px",
                        lineHeight: "1.7",
                      }}>
                      "{member.quote}"
                    </p>
                  </div>
                </div>

                {/* Name + position */}
                <div className="mt-15">
                  <h3 className="text-15 fw-600 text-dark-1 uppercase"
                    style={{
                      letterSpacing: "2px",
                      fontFamily: "var(--font-caslon), serif"
                    }}>
                    {member.name}
                  </h3>
                  <p className="text-12 text-light-2 mt-5 uppercase"
                    style={{ letterSpacing: "1.5px" }}>
                    {member.position}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
>>>>>>> origin/main
