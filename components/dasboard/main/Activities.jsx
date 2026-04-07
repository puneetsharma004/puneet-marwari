"use client";

import { faqData4 } from "@/data/tourSingleContent";
import React, { useState } from "react";

export default function Activities() {
  const [currentActiveFaq, setCurrentActiveFaq] = useState(0);
  return (
    // <div className="row y-gap-30 pt-30">
    //   {notificationData.map((elm, i) => (
    //     <div key={i} className="col-12">
    //       <div className="d-flex items-center">
    //         <div className="flex-center size-40 bg-accent-1-05 rounded-full">
    //           <i className={`${elm.icon} text-16`}></i>
    //         </div>

    //         <div className="lh-14 ml-10">{elm.message}</div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="row justify-center pt-30">
      <div className="">
        <div className="accordion -simple row y-gap-20 js-accordion">
          {faqData4.map((elm, i) => (
            <div key={i} className="col-12">
              <div
                className={`accordion__item px-20 py-15 border-1 ${
                  currentActiveFaq == i ? "is-active" : ""
                } `}
              >
                <div
                  className="accordion__button d-flex items-start justify-between"
                  onClick={() =>
                    setCurrentActiveFaq((pre) => (pre == i ? -1 : i))
                  }
                >
                  <h6 className=" fw-500">{elm.question}</h6>

                  <div className="accordion__icon size-30 flex-center bg-light-2">
                    <i className="icon-plus"></i>
                    <i className="icon-minus"></i>
                  </div>
                </div>

                <div
                  className="accordion__content"
                  style={currentActiveFaq == i ? { maxHeight: "150px" } : {}}
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
  );
}
