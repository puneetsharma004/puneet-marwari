"use client";

import { homes, pages, tours, tripMenu, whyMawari } from "@/data/menu";
import { tripsData } from "@/data/trips";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Menu() {
  const pathname = usePathname();
  return (
    <>
      <div className="xl:d-none ml-30">
        <div className="desktopNav">
          <div className="desktopNav__item">
            <Link href="/">Home</Link>
          </div>

          <div className="desktopNav__item">
            <Link href="#">
              Tours <i className="icon-chevron-down"></i>
            </Link>

            <div className="desktopNavSubnav">
              <div className="desktopNavSubnav__content">
                {/* ✅ Section Title */}
                <div className="desktopNavSubnav__item text-dark-1 fw-600">
                  General Information
                </div>

                {/* ✅ Static Link */}
                <div className="desktopNavSubnav__item text-dark-1">
                  <Link href="/trip-calender">Trip Calendar</Link>
                </div>

                {/* ✅ Section Title */}
                <div className="desktopNavSubnav__item text-dark-1 fw-600 mt-10">
                  Our Tours
                </div>

                {/* ✅ Dynamic Trips */}
                {tripsData.map((trip, i) => (
                  <div key={i} className="desktopNavSubnav__item text-dark-1">
                    <Link href={`/trip-details/9`}>{trip.title}</Link>
                    {/* <Link href={`/trips/${trip.slug}`}>{trip.title}</Link> */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="desktopNav__item">
            <Link href="#">
              Why Mawari <i className="icon-chevron-down"></i>
            </Link>

            <div className="desktopNavSubnav">
              <div className="desktopNavSubnav__content">
                {whyMawari.map((elm, i) => (
                  <div key={i} className="desktopNavSubnav__item text-dark-1">
                    {elm.href ? (
                      <Link href={elm.href}>{elm.title}</Link>
                    ) : (
                      <Link href="#">
                        {elm.title} <i className="icon-chevron-right"></i>
                      </Link>
                    )}

                    {elm.subnav && (
                      <div className="desktopNavSubnav">
                        <div className="desktopNavSubnav__content">
                          {elm.subnav.map((elm2, i2) => (
                            <div key={i2} className="desktopNavSubnav__item">
                              <Link href={elm2.href}>{elm2.title}</Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="desktopNav__item">
            <Link href="#">
              Trip Registration <i className="icon-chevron-down"></i>
            </Link>

            <div className="desktopNavSubnav">
              <div className="desktopNavSubnav__content">
                {tripMenu.map((elm, i) => (
                  <div key={i} className="desktopNavSubnav__item text-dark-1">
                    {elm.href ? (
                      <Link href={elm.href}>{elm.title}</Link>
                    ) : (
                      <Link href="#">
                        {elm.title} <i className="icon-chevron-right"></i>
                      </Link>
                    )}

                    {elm.subnav && (
                      <div className="desktopNavSubnav">
                        <div className="desktopNavSubnav__content">
                          {elm.subnav.map((elm2, i2) => (
                            <div key={i2} className="desktopNavSubnav__item">
                              <Link href={elm2.href}>{elm2.title}</Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="desktopNav__item">
            <Link href="/faq">FAQ</Link>
          </div>

          <div className="desktopNav__item">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}
