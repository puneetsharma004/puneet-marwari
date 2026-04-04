import { featuresFour } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features10() {
  return (
    <section className="relative layout-pt-xl layout-pb-xl lg:pt-0">
      <div className="sectionBg -type-2">
        <div className=""></div>
        <Image
          width={717}
          height={700}
          src="/heroimg/the-travel-concept.png"
          alt="image"
          data-aos="fade-up"
          data-aos-delay=""
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5">
            <h2 data-aos="fade-up" data-aos-delay="" className="">
              THE MAWARI EXPERIENCE
            </h2>

            <div
              data-aos="fade-up"
              data-aos-delay=""
              className="row y-gap-30 pt-30 sm:pt-30"
            >
              {/* {featuresFour.map((elm, i) => (
                <div key={i} className="col-12">
                  <div className="featureIcon -type-1 d-flex">
                    <div className="featureIcon__icon size-50">
                      <Image
                        width="25"
                        height="25"
                        src={elm.iconSrc}
                        alt="icon"
                      />
                    </div>

                    <div className="ml-30">
                      <h3 className="featureIcon__title text-18 fw-500">
                        {elm.title}
                      </h3>
                      <p className="featureIcon__text mt-10">{elm.text}</p>
                    </div>
                  </div>
                </div>
              ))} */}
              <p>
                Mawari journeys are designed for travelers who value exceptional
                places, thoughtful pacing, and shared moments that feel
                effortless rather than orchestrated. This is travel that invites
                you to experience the world deeply—through beautiful settings,
                considered design, and meaningful connection with the people you
                travel alongside.
                <br />
                <br />
                Mawari is not about rushing from highlight to highlight or
                following rigid schedules. It is about staying in remarkable
                places, lingering where it matters, and enjoying experiences
                that feel natural, unforced, and elevated. From refined city
                hotels to tranquil resorts and distinctive boutique stays, every
                detail is chosen with intention.
                <br />
                <br />
                After years of exploring the world, we recognized a gap for
                LGBTQ+ travelers seeking something more considered than mass
                tourism and more refined than traditional group travel. We
                wanted journeys that felt relaxed yet polished, where luxury was
                felt in the flow of the experience, not announced through excess
                or formality.
                <br />
                <br />
                Our itineraries are thoughtfully structured, setting the
                essential framework where we stay, how we move, and the
                experiences that truly define each destination, while leaving
                room for flexibility and personal choice. Some days invite
                guided exploration with expert local insight; others leave space
                to wander, rest, or indulge as you see fit.
                <br />
                <br />
                Mawari travelers share a desire for quality over quantity.
                Whether that means a private cultural visit, a beautifully
                prepared meal, a scenic transfer, or simply time to enjoy a
                place without rushing, our journeys prioritize moments that feel
                memorable rather than programmed.
                <br />
                <br />
                Our trip leaders are experienced, discreet, and deeply
                knowledgeable. They manage the details seamlessly, allowing you
                to relax into the experience, confident that everything is taken
                care of, while still feeling personal, human, and warm.
                <br />
                <br />
                The result is a growing community of Mawari travelers who return
                home feeling enriched: by the places they’ve seen, the
                experiences they’ve shared, and the connections they’ve made
                along the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
