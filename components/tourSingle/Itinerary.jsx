"use client";

import { itinerary } from "@/data/tourSingleContent";
import React, { useState } from "react";

export default function Itinerary() {
  const [currentActiveFaq, setCurrentActiveFaq] = useState(0);
  return (
    <>
      {itinerary.map((elm, i) => (
        <div key={i} className="col-12">
          <div
            className={`accordion__item px-20 py-15 border-1 ${
              currentActiveFaq == i ? "is-active" : ""
            } `}
          >
            <div
              className="accordion__button d-flex items-center justify-between"
              onClick={() => setCurrentActiveFaq((pre) => (pre == i ? -1 : i))}
            >
              <h6 className=" text-dark-1 uppercase">{elm.question}</h6>

              <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                <i className="icon-plus"></i>
                <i className="icon-minus"></i>
              </div>
            </div>

            <div
              className="accordion__content"
              style={{
                maxHeight: currentActiveFaq == i ? "1000px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="pt-20">
                {elm.answer.split("<br/>").map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-dark-1 lh-16 ${index > 0 ? "mt-15" : ""}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
