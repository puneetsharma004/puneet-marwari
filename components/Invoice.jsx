"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
const handlePrintClick = () => {
  window.print();
};
export default function Invoice() {
  return (
    <section className=" layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-10 col-lg-11">
            <div className="d-flex justify-end">
              <button
                onClick={() => handlePrintClick()}
                className="button -md -dark-1 bg-accent-1 text-white"
              >
                Print
                <i className="icon-print text-20 ml-10"></i>
              </button>
            </div>

            <div className="bg-white rounded-4 mt-50">
              <div className="layout-pt-lg layout-pb-lg px-50 md:px-20">
                <div className="row justify-between">
                  <div className="col-auto">
                    <Image
                      width={167}
                      height={32}
                      src="/home/mawari-logo-dark.png"
                      alt="logo icon"
                    />
                  </div>

                  <div className="col-xl-4">
                    <div className="row justify-between items-center">
                      <div className="col-auto">
                        <div className="text-26 fw-600">Invoice #</div>
                      </div>

                      <div className="col-auto">
                        <div className="text-18 fw-500">0043128641</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-between pt-50">
                  <div className="col-auto">
                    <div className="text-15">Invoice date:</div>
                    <div className="text-15 fw-500 lh-15">03/10/2022</div>
                  </div>

                  <div className="col-xl-4">
                    <div className="text-15">Due date:</div>
                    <div className="text-15 fw-500 lh-15">03/10/2022</div>
                  </div>
                </div>

                <div className="row justify-between pt-50">
                  <div className="col-auto">
                    <div className="text-20 fw-500">Supplier</div>
                    <div className="text-15 fw-500 mt-20">Jobio LLC</div>
                    <div className="text-15 mt-10">
                      2301 Ravenswood Rd Madison,
                      <br /> WI 53711
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="text-20 fw-500">Customer</div>
                    <div className="text-15 fw-500 mt-20">John Doe</div>
                    <div className="text-15 mt-10">
                      329 Queensberry Street, North Melbourne VIC 3051,
                      Australia.
                    </div>
                  </div>
                </div>

                <div className="row pt-50">
                  <div className="col-12">
                    <table className="table col-12">
                      <thead className="bg-light-1">
                        <tr>
                          <th className="fw-500">Description</th>
                          <th className="fw-500">Price</th>
                          <th className="fw-500">VAT (20%)</th>
                          <th className="fw-500">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Standard Plan</td>

                          <td>$443.00</td>

                          <td>$921.80</td>

                          <td>$9243</td>
                        </tr>

                        <tr>
                          <td>Extra Plan </td>

                          <td>$413.00</td>

                          <td>$912.80</td>

                          <td>$5943</td>
                        </tr>

                        <tr>
                          <td className="text-18 fw-500">Total Due</td>
                          <td></td>
                          <td></td>
                          <td className="text-18 fw-500">$9,750</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="border-1-top py-40">
                <div className="row x-gap-60 y-gap-10 justify-center">
                  <div className="col-auto">
                    <a href="#" className="text-14">
                      www.mawari.com
                    </a>
                  </div>
                  <div className="col-auto">
                    <a href="#" className="text-14">
                      invoice@mawari.com
                    </a>
                  </div>
                  <div className="col-auto">
                    <a href="#" className="text-14">
                      (123) 123-456
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
