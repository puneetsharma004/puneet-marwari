"use client";

import { featureCards3, featureCards4 } from "@/data/destinations";
import { featureCards } from "@/data/destinations";
import HeroBanner from "@/components/common/HeroBanner";
import Image from "next/image";

export default function HealthSafety() {
  return (
    <>
      <HeroBanner
        title="Health & Safety"
        description="Your Safety Is Our Priority"
        imageSrc="/heroimg/health-safety.jpg"
      />

      <section
        className="layout-pt-xl layout-pb-xl"
        style={{ marginTop: "-88px" }}
      >
        <div className="container">
          <div className="row y-gap-30 items-center justify-between">
            <div className="col-xl-4 col-lg-5">
              <h2 data-aos="fade-up" data-aos-delay="">
                MAWARI — HEALTH & SAFETY
              </h2>

              <p
                data-aos="fade-up"
                data-aos-delay=""
                className="mt-30 md:mt-10"
              >
                Behind every Mawari journey is a strong commitment to traveler
                health and safety. We continuously monitor local conditions
                through our trusted network of destination partners and friends,
                alongside official government information sources. In every
                location we operate, we work closely with on-the-ground experts
                to ensure we have taken all reasonable steps to create a safe
                and rewarding travel experience.
                <br />
                <br />
                That said, thoughtful preparation on your part is equally
                important. To move beyond headlines and speculation, we
                recommend consulting your own government’s official travel
                advisory websites, which provide the most reliable, up-to-date
                guidance for travelers:
              </p>
            </div>

            <div className="col-xl-6 col-lg-7">
              <div
                data-aos="fade-up"
                data-aos-delay=""
                className="row y-gap-30"
              >
                {featureCards3.map((elm, i) => (
                  <a
                    href={elm.url}
                    target="_blank"
                    key={i}
                    className="col-md-6 col-12 lg:col-6 md:col-6"
                  >
                    <div className="featureCard -type-5 -hover-accent-1">
                      <div className="featureCard__icon">
                        <Image
                          width="60"
                          height="60"
                          src={elm.imgSrc}
                          alt="image"
                        />
                      </div>

                      <h6 className=" fw-600 mt-20 uppercase">{elm.title}</h6>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-lg-6">
              <Image
                width={717}
                height={700}
                src="/heroimg/emergency.jpg"
                alt="image"
                data-aos="fade-up"
                data-aos-delay=""
              />
            </div>
            <div
              className="col-xl-6 col-lg-5"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2 data-aos="fade-up" data-aos-delay="" className="fw-700">
                IN THE EVENT OF A SERIOUS SITUATION
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay=""
                className="mt-30 md:mt-10"
              >
                Should a significant safety concern arise in one of our
                destinations, Mawari makes decisions based on guidance from
                official government advisories and our local partners. Our
                priority is always traveler wellbeing—whether that requires a
                cancellation prior to departure or repatriation during a trip.
                <br />
                <br />
                Once again, comprehensive travel insurance is strongly
                recommended, particularly if you are concerned about the
                possibility of changing conditions at your destination.
                <br />
                <br />
                As local circumstances can evolve, we encourage you to reach out
                to us directly with any current concerns or to consult the
                official travel advisories listed above. We also recommend
                familiarizing yourself with the booking conditions that apply to
                your journey with Mawari.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-xl">
        <div className="container">
          <div className="row y-gap-30 items-center justify-between">
            <div className="col-xl-12 col-lg-5">
              <h2 data-aos="fade-up" data-aos-delay="" className="">
                GENERAL TRAVEL GUIDANCE
              </h2>

              <p
                data-aos="fade-up"
                data-aos-delay=""
                className="mt-30 md:mt-10"
              >
                Whether you find yourself in Paris, Pittsburgh, Phnom Penh, or
                anywhere in between, the following principles are worth keeping
                in mind wherever you travel:
              </p>
            </div>

            <div className="col-xl-12 col-lg-7">
              <div
                data-aos="fade-up"
                data-aos-delay=""
                className="row y-gap-30"
              >
                {featureCards4.map((elm, i) => (
                  <div key={i} className="col-md-3 col-12 lg:col-6 md:col-6">
                    <div className="featureCard -type-5 -hover-accent-1">
                      <div className="featureCard__icon">
                        <Image
                          width="40"
                          height="40"
                          src={elm.imgSrc}
                          alt="image"
                        />
                      </div>

                      <h6 className=" fw-600 mt-20 uppercase">{elm.title}</h6>
                      <div className="lh-13 mt-20">{elm.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
