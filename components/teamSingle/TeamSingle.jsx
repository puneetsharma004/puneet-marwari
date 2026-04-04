import Image from "next/image";
import Link from "next/link";

export default function TeamSingle({ member }) {
  return (
    <>
      <section className="cta -type-2" style={{ marginTop: "-88px" }}>
        <div className="cta__bg">
          <Image
            width={1530}
            height={600}
            src={member.ctaBg}
            alt="background image"
          />

          <div className="cta__image">
            <Image
              width={1000}
              height={1000}
              src={member.profileImage}
              alt={member.name}
            />
            {/* <Image
              width={40}
              height={600}
              src="/img/cta/2/shape.svg"
              alt="shape"
            />
            <Image
              width={390}
              height={35}
              src="/img/cta/2/shape2.svg"
              alt="shape"
            /> */}
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-7">
              <div className="cta__content">
                <h2 data-aos="fade-up" className="md:text-30 lh-13">
                  {member.name?.toUpperCase()}
                </h2>

                {member.role && (
                  <p data-aos="fade-up" className="mt-10 fw-600 text-accent-1">
                    {member.role}
                  </p>
                )}

                {member.description?.map((paragraph, index) => (
                  <p key={index} data-aos="fade-up" className="mt-10">
                    {paragraph}
                  </p>
                ))}

                {/* <div className="mt-30 md:mt-20">
                  <Link
                    href={member.buttonLink}
                    className="button -md -dark-1 bg-accent-1 text-white"
                    data-aos="fade-right"
                  >
                    {member.buttonText}
                    <i className="icon-arrow-top-right ml-10 text-16"></i>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
