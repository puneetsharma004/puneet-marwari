import { states } from "@/data/dashboard";
import Link from "next/link";
import React from "react";

export default function States() {
  return (
    <div className="row y-gap-30 pt-60 md:pt-30">
      {states.map((elm, i) => (
        <div key={i} className="col-xl-6 col-sm-6">
          <Link key={i} href={elm.link}>
            <div className="rounded-12 bg-white shadow-2 px-30 py-30 h-full">
              <div className="row y-gap-20 items-center justify-between">
                <div className="col-auto">
                  <div>{elm.title}</div>
                  <h4 className="fw-600 mt-5" style={{ color: "#4A3F39" }}>
                    {elm.amount}
                  </h4>

                  <div>
                    <span className="text-accent-1 underline">{elm.today}</span>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="size-40 flex-center bg-accent-1-05 rounded-full">
                    <i className={`text-30 ${elm.iconClass}`}></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
