import { featuresTwo } from "@/data/features";
import Image from "next/image";
import Link from "next/link";

export default function Philosophy() {
  return (
    <>
      <section className="layout-pt-xl layout-pb-xl relative">
        <div className="container">
          <div className="sectionBg">
            <Image
              width={1920}
              height={690}
              src="/img/about/2/bg-2.jpg"
              alt="image"
              className="img-ratio"
            />
          </div>

          <div className="row y-gap-30 justify-between items-center">
            <div className="col-lg-4 col-md-6">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="lh-13 text-white"
              >
                OUR PHILOSOPHY
                <br className="md:d-none" />
              </h2>

              <p
                data-aos="fade-up"
                data-aos-delay=""
                className="text-white mt-10"
              >
                At the heart of Mawari is a belief that travel should be:
              </p>

              <button
                data-aos="fade-right"
                data-aos-delay=""
                className="button -md -dark-1 bg-white text-accent-1 mt-60 md:mt-30"
              >
                <Link href={"/trip-calendar"}>
                  Explore Our Tours
                  <i className=" ml-10"></i>
                </Link>
              </button>
            </div>

            <div className="col-md-8">
              <div
                data-aos="fade-up"
                data-aos-delay=""
                className="featuresGrid"
              >
                {featuresTwo.map((elm, i) => (
                  <div
                    key={i}
                    className="featuresGrid__item px-15 py-15 text-center bg-white"
                  >
                    <Image
                      width="30"
                      height="30"
                      src={elm.iconSrc}
                      alt="icon"
                      className="mx-auto d-block"
                    />
                    <h6 className=" fw-600 text-accent-1 mb-3 mt-3 lh-10 uppercase">
                      {elm.value}
                    </h6>
                    <div>{elm.label}</div>
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
