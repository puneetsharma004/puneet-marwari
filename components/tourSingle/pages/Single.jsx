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
import Highligts from "../Highlights";
import Accommodation from "../Accommodation";
import TripStyle from "../TripStyle";

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
        <h5 className="lh-13 uppercase letter-1">{title}</h5>

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

const tabButtons = [
  "Overview",
  "Highlights",
  "Included",
  "Itinerary",
  "Accommodation",
  // "calendar",
  "Trip Notes",
  "Trip Style",
  // "Reviews",
];

export default function Single({ tour }) {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="layout-pb-lg js-pin-container">
      <div className="container">
        <div className="row y-gap-30 justify-between">
          <div className="col-lg-8">
            <MainInformation2 tour={tour} />
            <Gallery3 />

            <div className="row y-gap-20 justify-start items-center layout-pb-md pt-60 md:pt-30">
              <OthersInformation />
            </div>
            <div className="tabs -tourSingle js-tabs">
              <div className="tabs__controls row x-gap-30 y-gap-10 js-tabs-controls">
                {tabButtons.map((elm, i) => (
                  <div
                    onClick={() => setActiveTab(elm)}
                    key={i}
                    className="col-auto"
                  >
                    <button
                      className={`tabs__button text-24 md:text-20 fw-700 js-tabs-button ${
                        elm == activeTab ? "is-tab-el-active" : ""
                      }`}
                      data-tab-target=".-tab-item-1"
                    >
                      {elm}
                    </button>
                  </div>
                ))}
              </div>

              <div className="tabs__content pt-40 js-tabs-content">
                <div
                  className={`tabs__pane ${
                    activeTab == "Overview" ? "is-tab-el-active" : ""
                  }`}
                >
                  <Overview />
                </div>

                <div
                  className={`tabs__pane ${
                    activeTab == "Highlights" ? "is-tab-el-active" : ""
                  }`}
                >
                  <Highligts />
                </div>

                <div
                  className={`tabs__pane ${
                    activeTab == "Included" ? "is-tab-el-active" : ""
                  }`}
                >
                  <h4>What's Included</h4>

                  <Included />
                </div>

                <div
                  className={`tabs__pane ${
                    activeTab == "Itinerary" ? "is-tab-el-active" : ""
                  }`}
                >
                  <h4>Itinerary</h4>

                  <div className="mt-30">
                    <RoadMap />
                  </div>
                </div>

                <div
                  className={`tabs__pane ${
                    activeTab == "Accommodation" ? "is-tab-el-active" : ""
                  }`}
                >
                  <h4>Accommodation</h4>

                  <div className="mt-30">
                    <Accommodation />
                  </div>
                </div>

                {/* <div
                  className={`tabs__pane ${
                    activeTab == "calendar" ? "is-tab-el-active" : ""
                  }`}
                >
                  <h2>Availability Calendar</h2>

                  <DateCalender />
                </div> */}

                <div
                  className={`tabs__pane ${
                    activeTab == "Trip Notes" ? "is-tab-el-active" : ""
                  }`}
                >
                  <h4>Trip Notes</h4>

                  <div className="accordion -simple row y-gap-20 mt-30 js-accordion">
                    <Faq />
                  </div>
                </div>

                <div
                  className={`tabs__pane ${
                    activeTab == "Trip Style" ? "is-tab-el-active" : ""
                  }`}
                >
                  <TripStyle />
                </div>

                {/* <div
                  className={`tabs__pane ${
                    activeTab == "Reviews" ? "is-tab-el-active" : ""
                  }`}
                >
                  <h2>Customer Reviews</h2>

                  <div className="mt-30">
                    <Rating />
                  </div>

                  <Reviews />

                  <button className="button -md -outline-accent-1 text-accent-1 mt-30">
                    See more reviews
                    <i className="icon-arrow-top-right text-16 ml-10"></i>
                  </button>

                  <CommentBox />
                </div> */}
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
