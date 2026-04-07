import React from "react";
import States from "./States";
import Activities from "./Activities";
import Statistics from "./Statistics";

export default function DBMain() {
  return (
    <>
      <div className="dashboard__content_content">
        <h1 className="text-30">Welcome to Mawari</h1>
        <p className="">
          You're about to embark upon the adventure of a lifetime. But before
          you can pack your bags and board that plane there are a few important
          things we need from you. Make sure you complete your trip requirements
          at least 90 days prior to your trip, then keep an eye on your inbox
          for your 90-day trip update as well as your final trip documents
          including arrival instructions, emailed 10 days prior to the start of
          your trip. Check out the most commonly asked questions shown below,
          then if we can help with anything else just contact us and we'd be
          happy to heip you out!
        </p>

        <States />

        <div className="row pt-30 y-gap-30">
          <Statistics />

          <div className="col-xl-4 col-lg-12 col-md-6">
            <div className="px-30 py-25 rounded-12 bg-white shadow-2">
              {/* <div className="d-flex items-center justify-between">
                    <div className="text-18 fw-500">Recent Activities</div>
                  </div> */}

              <Activities />

              {/* <div className="pt-40">
                    <button className="button -md -outline-accent-1 col-12 text-accent-1">
                      View More
                      <i className="icon-arrow-top-right text-16 ml-10"></i>
                    </button>
                  </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
