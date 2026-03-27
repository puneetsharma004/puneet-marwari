"use client";

import { faqData } from "@/data/tourSingleContent";
import React, { useState } from "react";

export default function Faq() {
  const [currentActiveFaq, setCurrentActiveFaq] = useState(0);
  return (
    <section className="layout-pt-md layout-pb-xl">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 className="fw-600">FAQs about Phuket</h2>
          </div>
        </div>

        <div className="row justify-center pt-30">
          <div className="">
            <div className="accordion -simple row y-gap-20 js-accordion">
              {faqData.map((elm, i) => (
                <div key={i} className="col-12">
                  <div
                    className={`accordion__item px-20 py-15 border-1 ${
                      currentActiveFaq == i ? "is-active" : ""
                    } `}
                  >
                    <div
                      className="accordion__button d-flex items-center justify-between"
                      onClick={() =>
                        setCurrentActiveFaq((pre) => (pre == i ? -1 : i))
                      }
                    >
                      <h1 className=" fw-500">{elm.question}</h1>

                      <div className="accordion__icon size-30 flex-center bg-light-2">
                        <i className="icon-plus"></i>
                        <i className="icon-minus"></i>
                      </div>
                    </div>

                    <div
                      className="accordion__content"
                      style={
                        currentActiveFaq == i ? { maxHeight: "150px" } : {}
                      }
                    >
                      <div className="pt-20">
                        <p>{elm.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
