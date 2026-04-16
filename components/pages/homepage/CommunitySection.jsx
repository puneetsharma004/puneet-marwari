import Image from "next/image";
import React from "react";

export default function CommunitySection() {
  return (
    <section className="relative layout-pt-xl layout-pb-xl lg:pt-0">
      <div className="sectionBg -type-2">
        <div className=""></div>
        <Image
          width={1500}
          height={1500}
          src="/heroimg/community-section.webp"
          alt="image"
          data-aos="fade-up"
          data-aos-delay=""
          style={{
            objectFit: "cover",
            objectPosition: "bottom left",
          }}
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5">
            <h2 data-aos="fade-up" data-aos-delay="" className="uppercase">
              Community, Naturally.
            </h2>

            <h5 data-aos="fade-up" data-aos-delay="" className="mt-10">
              More Than a Group. More Than a Trip.
            </h5>

            <div
              data-aos="fade-up"
              data-aos-delay=""
              className="row y-gap-30 pt-30 sm:pt-30"
            >
              <p>
                Like Detours, community is at the core of Mawari. Our travelers
                often arrive solo but never stay that way for long. Smaller
                group sizes create the perfect space for genuine connection over
                shared meals, conversations, and those unplanned moments that
                end up being the most memorable and the stories we share.
                <br />
                <br />
                There's no pressure to be “on” all the time. Some moments are
                shared, others are yours alone. By the end, you've not only
                experienced an incredible destination but you've shared it with
                people who feel like they belong there with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
