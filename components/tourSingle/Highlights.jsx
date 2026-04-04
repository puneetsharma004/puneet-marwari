import { highlights } from "@/data/tourSingleContent";
import React from "react";

export default function Highligts() {
  return (
    <div className="row x-gap-130 y-gap-20 pt-20">
      <div className="col-lg-12">
        <div className="y-gap-15">
          {highlights.map((elm, i) => (
            <div key={i} className="d-flex items-center">
              <i className="icon-arrow-right flex-center text-10 size-16 rounded-full text-black-2 bg-success-1 mr-15"></i>
              {elm.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
