"use client";

import React, { useState, useRef, useEffect } from "react";
import MainInformation2 from "./MainInformation2";
import Gallery3 from "../Galleries/Gallery3";
import OthersInformation from "../OthersInformation";
import Overview from "../Overview";
import Included from "../Included";
import RoadMap from "../RoadMap";
import DateCalender from "../DateCalender";
import Faq from "../Faq";
import Rating from "../Rating";
import Reviews from "../Reviews";
import CommentBox from "../CommentBox";
import TourSingleSidebar from "../TourSingleSidebar";

/**
 * Reusable Accordion Item
 */
const AccordionItem = ({ title, id, activeId, toggleAccordion, children }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");
  const isOpen = activeId === id;

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div
      className={`accordion__item py-20 border-1-top ${isOpen ? "is-active" : ""}`}
    >
      <div
        onClick={() => toggleAccordion(id)}
        className="accordion__button d-flex items-center justify-between cursor-pointer"
      >
        <h1 className="lh-13 fw-600 uppercase letter-1">{title}</h1>

        {/* IMPROVED ICON: Explicit color and transition for visibility */}
        <div className=" size-30 flex-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1A1A1A" /* Solid dark color ensures visibility */
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transition: "transform 0.4s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              display: "block",
            }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      <div
        ref={contentRef}
        className="accordion__content"
        style={{
          maxHeight: height,
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="pt-20">{children}</div>
      </div>
    </div>
  );
};

export default function Single({ tour }) {
  // FIXED: Set to null so all accordions are closed on page load
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    // Single-open logic: closes previous when a new one is opened
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-30 js-pin-container">
      <div className="container">
        <div className="row y-gap-30 justify-between">
          <div className="col-lg-8">
            <MainInformation2 tour={tour} />
            <Gallery3 />

            <div className="row y-gap-20 justify-between items-center layout-pb-md pt-60 md:pt-30">
              <OthersInformation />
            </div>

            <Overview />

            <div className="accordion -tour-single row y-gap-20 pt-60 md:pt-30">
              <div className="col-12">
                <AccordionItem
                  title="What's included"
                  id="included"
                  activeId={activeId}
                  toggleAccordion={toggleAccordion}
                >
                  <Included />
                </AccordionItem>

                <AccordionItem
                  title="Itinerary"
                  id="roadmap"
                  activeId={activeId}
                  toggleAccordion={toggleAccordion}
                >
                  <RoadMap />
                </AccordionItem>

                <AccordionItem
                  title="Availability Calendar"
                  id="calender"
                  activeId={activeId}
                  toggleAccordion={toggleAccordion}
                >
                  <DateCalender />
                </AccordionItem>

                <AccordionItem
                  title="FAQ"
                  id="faq"
                  activeId={activeId}
                  toggleAccordion={toggleAccordion}
                >
                  <div className="accordion -simple row y-gap-20">
                    <Faq />
                  </div>
                </AccordionItem>

                <AccordionItem
                  title="Customer Reviews"
                  id="review"
                  activeId={activeId}
                  toggleAccordion={toggleAccordion}
                >
                  <Rating />
                  <Reviews />
                  <button className="button -md -outline-accent-1 text-accent-1 mt-30">
                    See more reviews
                    <i className="icon-arrow-top-right text-16 ml-10"></i>
                  </button>
                  <CommentBox />
                </AccordionItem>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              style={{ position: "sticky", top: "100px" }}
              className="d-flex justify-end"
            >
              <TourSingleSidebar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
