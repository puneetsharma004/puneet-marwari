import { teamData } from "@/data/team";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Team() {
  return (
    <section className="layout-pb-xl">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <h2>Meet The Team</h2>
          </div>
        </div>

        <div className="row y-gap-30 pt-40 sm:pt-20">
          {teamData.map((elm, i) => (
            <div key={i} className="col-lg col-md-4 col-sm-6">
              <Link href={`/team-details/${elm.id}`} className="d-block">
                <div className="ratio ratio-23:26 overflow-hidden rounded-12">
                  <Image
                    width={2000}
                    height={2000}
                    src={elm.imgPath}
                    alt={elm.name}
                    className="img-ratio bg-light-1"
                  />
                </div>

                <h6 className="fw-600 mt-20">{elm.name}</h6>
                <p className="lh-16">{elm.position}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
