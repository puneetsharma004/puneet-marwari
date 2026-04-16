import Image from "next/image";
import Link from "next/link";

export default function HomeAboutSection() {
  return (
    <>
      <section className="cta -type-2 bg-accent-1-05">
        <div>
          {/* <Image
            width={1530}
            height={600}
            src="/img/cta/2/bg.png"
            alt="image"
          /> */}

          <div className="cta__image">
            <Image
              width={750}
              height={600}
              src="/img/travelConcept/travel-concept.webp"
              alt="image"
            />
            {/* <Image
              width="40"
              height="600"
              src="/img/cta/2/shape.svg"
              alt="image"
            />
            <Image
              width="390"
              height="35"
              src="/img/cta/2/shape2.svg"
              alt="image"
            /> */}
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-4 col-lg-5 col-md-6">
              <div>
                <h2
                  data-aos="fade-up"
                  data-aos-delay=""
                  className="uppercase fw-700 mt-30 md:mt-20"
                >
                  Mawari: Luxury Gay Travel by Detours
                </h2>

                <h5 data-aos="fade-up" data-aos-delay="" className="mt-10">
                  Luxury Travel, Thoughtfully Done. For Our Community.
                </h5>

                <p data-aos="fade-up" data-aos-delay="" className="mt-30">
                  Built by Detours, Mawari was created for travelers who value
                  beautiful places, well-paced journeys, and experiences that
                  feel considered rather than rushed. The name Mawari comes from
                  the idea of movement with intention, travel that flows
                  naturally, allowing space for discovery, connection, and
                  community in an elevated space.
                </p>
                <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                  Mawari carries the same trusted foundation of expertly
                  designed itineraries and community-driven travel, but under a
                  more refined lens. With smaller group sizes, higher-touch
                  service, and premium experiences chosen for their depth at its
                  core.
                </p>

                <div className="mt-30 md:mt-20">
                  <button
                    data-aos="fade-right"
                    data-aos-delay=""
                    className="button -md -dark-1 bg-accent-1 text-white"
                  >
                    <Link href="/contact">
                      Learn More
                      <i className=" ml-10 text-16"></i>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
