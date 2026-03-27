import { distinctive } from "@/data/features";
import Image from "next/image";

export default function Distinctive() {
  return (
    <>
      <section className="relative">
        <div className="sectionBg -type-1">
          <div className="bg-accent-1-05 " style={{ right: "0px" }}></div>
          <Image
            width={717}
            height={1000}
            src="/img/about/3/2.jpg"
            alt="image"
            className=""
          />
        </div>

        <div className="container">
          <div className="aboutSection -type-1">
            <div className="row">
              <div className="col-xl offset-xl-5 col-lg-7 offset-lg-5">
                <div className="aboutSection__text">
                  <h2 data-aos="fade-up" data-aos-delay="" className="fw-700">
                    WHAT MAKES MAWARI DISTINCTIVE
                  </h2>
                  <p data-aos="fade-up" data-aos-delay="">
                    We design each journey with care and attention to detail,
                    and that shows in every aspect of the experience:{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl offset-xl-2 col-lg-7 offset-lg-5">
                <div
                  data-aos="fade-up"
                  data-aos-delay=""
                  className="row y-gap-30"
                >
                  {distinctive.map((elm, i) => (
                    <div key={i} className="col-xl-4 col-lg-6 col-sm-6">
                      <div className="featureIcon -type-1 px-40 py-40 bg-white shadow-1">
                        <div className="featureIcon__icon">
                          <Image
                            width="25"
                            height="25"
                            src={elm.iconSrc}
                            alt="icon"
                          />
                        </div>

                        <h3 className="featureIcon__title fw-500 mt-30">
                          {elm.title}
                        </h3>
                        <p className="featureIcon__text mt-10">{elm.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
