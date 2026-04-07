import Image from "next/image";
import Link from "next/link";

export default function Adventure() {
  return (
    <>
      <section
        className="layout-pt-xl layout-pb-xl relative"
        style={{
          minHeight: "800px",
          display: "flex",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <div className="container">
          <div className="sectionBg">
            <Image
              width={1920}
              height={690}
              src="/img/about/3/3.jpg"
              alt="image"
              className="img-ratio"
              style={{
                objectFit: "cover",
                objectPosition: "top",
              }}
              priority
            />
          </div>

          <div className="row y-gap-30 justify-between items-center">
            <div className="col-lg-4 col-md-6">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="font-heading lh-13 text-white"
              >
                YOUR NEXT ADVENTURE
                <br className="md:d-none" />
                STARTS HERE
              </h2>

              <p
                data-aos="fade-up"
                data-aos-delay=""
                className="text-white mt-10"
              >
                If you are drawn to meaningful travel experiences that feel
                refined, relaxed, and deeply memorable, Mawari was created with
                you in mind.
                <br />
                <br />
                Contact us with any questions, or register now to begin your
                journey.
              </p>

              <button
                data-aos="fade-right"
                data-aos-delay=""
                className="button -md -dark-1 bg-white text-accent-1 mt-60 md:mt-30"
              >
                <Link href={"/contact"}>
                  Contact Us
                  <i className=" ml-10"></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
