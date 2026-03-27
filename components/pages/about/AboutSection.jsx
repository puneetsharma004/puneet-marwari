import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <>
      <section className="cta -type-2" style={{ marginTop: "-88px" }}>
        <div className="cta__bg">
          <Image
            width={1530}
            height={600}
            src="/img/cta/2/bg.png"
            alt="image"
          />

          <div className="cta__image">
            <Image
              width={750}
              height={600}
              src="/heroimg/trip-leader.png"
              alt="image"
            />
            <Image
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
            />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-7">
              <div className="cta__content">
                <h2
                  data-aos="fade-up"
                  data-aos-delay=""
                  className=" md:text-30  lh-13"
                >
                  ABOUT MAWARI
                </h2>

                <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                  Mawari was born from a simple yet powerful idea: luxury travel
                  should feel effortless, personal, and genuinely unforgettable,
                  especially for LGBTQ+ travelers seeking experiences that go
                  beyond traditional group tours or highly segmented vacation
                  packages.
                </p>
                <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                  We noticed something missing in the world of curated travel:
                  journeys that blend thoughtful design, elevated comfort, and
                  shared cultural discovery, without the rigid schedules and
                  impersonal pace that too often define tour travel. What we
                  imagined instead was a type of travel that feels refined yet
                  relaxed, where every destination reveals itself through
                  genuine experiences and connections.
                </p>
                <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                  Mawari exists to bring that imagination to life.{" "}
                </p>

                <div className="mt-30 md:mt-20">
                  <button
                    data-aos="fade-right"
                    data-aos-delay=""
                    className="button -md -dark-1 bg-accent-1 text-white"
                  >
                    <Link href="/contact">
                      Know More
                      <i className="icon-arrow-top-right ml-10 text-16"></i>
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
