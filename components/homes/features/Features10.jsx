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
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
