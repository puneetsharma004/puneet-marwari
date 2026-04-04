"use client";
import { bgcolor } from "@mui/system";
import React from "react";

export default function Map() {
  return (
    <section className="layout-pb-lg" style={{ backgroundColor: "#fef7f4" }}>
      <div className="container">
        <div className="row x-gap-0 items-stretch">
          {/* LEFT SIDE — Heading & Paragraph */}
          <div className="col-lg-6 col-12">
            <div
              style={{
                backgroundColor: "#fff",
                padding: "80px 60px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p className="letter-1 mb-10" style={{ color: "#1a1715" }}>
                Our Location
              </p>
              <h2 className="fw-700 uppercase mb-20">Find Us In Vancouver</h2>

              <div className="d-flex items-center x-gap-10 mb-30">
                <span
                  style={{
                    display: "block",
                    width: 40,
                    height: 1,
                    backgroundColor: "rgba(26,23,21,0.2)",
                  }}
                />
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 12 12"
                  fill="none"
                  style={{ color: "rgba(26,23,21,0.4)" }}
                >
                  <rect
                    x="6"
                    y="0.5"
                    width="7.78"
                    height="7.78"
                    rx="1.5"
                    transform="rotate(45 6 0.5)"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
                <span
                  style={{
                    display: "block",
                    width: 40,
                    height: 1,
                    backgroundColor: "rgba(26,23,21,0.2)",
                  }}
                />
              </div>

              <div>
                {/* Introductory Paragraph */}
                <p className="text-dark-1 lh-16">
                  If you would like to speak to a Mawari representative about
                  our trips, please do not hesitate to call or send us a
                  message.
                </p>

                {/* Contact Details Row */}
                <div className="row y-gap-40 x-gap-20 pt-80 justify-center">
                  {/* Address Item */}
                  <div className="col-md-4 col-sm-6 col-12">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=400-601+W+Broadway+Vancouver+BC+V5Z+4C2+Canada"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex flex-column items-left text-left transition-all hover:opacity-70"
                    >
                      <div className="size-50 flex-center bg-light-6 rounded-full mb-20">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1a1715"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div>
                        <h6 className="fw-500 uppercase letter-2 mb-10">
                          Address
                        </h6>
                        <div className=" lh-15 text-dark-1">
                          400-601 W Broadway <br /> Vancouver, BC V5Z 4C2
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Phone Item */}
                  <div className="col-md-4 col-sm-6 col-12">
                    <a
                      href="tel:8006808066"
                      className="d-flex flex-column items-left text-left transition-all hover:opacity-70"
                    >
                      <div className="size-50 flex-center bg-light-6 rounded-full mb-20">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1a1715"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.19-2.19a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div>
                        <h6 className=" fw-500 uppercase letter-2 mb-10">
                          Phone
                        </h6>
                        <div className="lh-15 text-dark-1">(800) 680-8066</div>
                      </div>
                    </a>
                  </div>

                  {/* Email Item */}
                  <div className="col-md-4 col-sm-6 col-12">
                    <a
                      href="mailto:travel@mawaritravel.com"
                      className="d-flex flex-column items-left text-left transition-all hover:opacity-70"
                    >
                      <div className="size-50 flex-center bg-light-6 rounded-full mb-20">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1a1715"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h6 className=" fw-500 uppercase letter-2 mb-10">
                          Email
                        </h6>
                        <div className=" lh-15 text-dark-1">
                          travel@mawaritravel.com
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Iframe Map */}
          <div className="col-lg-6 col-12">
            <div
              style={{
                position: "relative",
                height: "100%",
                minHeight: "500px",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166655.308275135!2d-123.26398677764516!3d49.25782631971504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94803%3A0xab019105c3b125a6!2sVancouver%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sus!4v1711585000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
