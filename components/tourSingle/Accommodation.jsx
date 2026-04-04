import Image from "next/image";
import { accommodationData } from "@/data/accommodation";

export default function Accommodation() {
  return (
    <section className=" layout-pb-xl">
      {/* Intro */}
      <div className="row justify-center">
        <div className="col-xl-12 col-lg-12 col-12 text-left">
          <p className="text-light-2 mt-15 ">
            This journey features a collection of premium boutique hotels
            throughout Greece:
          </p>
        </div>
      </div>

      {/* Accommodation List */}
      <div className="row y-gap-50 pt-30 lg:pt-30">
        {accommodationData.map((item, i) => (
          <div key={item.id} className="col-12">
            <div className="accommodationCard">
              <div className="row y-gap-30 items-center">
                <div className="col-lg-5">
                  <div className="accommodationCard__imageWrap">
                    <Image
                      width={700}
                      height={500}
                      src={item.image}
                      alt={`${item.hotel} in ${item.city}`}
                      className="accommodationCard__image"
                    />
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="accommodationCard__content">
                    <h5>
                      <span className="text-accent-1">{item.city}:</span>{" "}
                      <span className="fw-400">{item.hotel}</span>
                    </h5>

                    <p className="text-light-2 mt-20 ">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="row justify-center pt-50 lg:pt-40">
        <div className="col-xl-12 col-12">
          <div className="accommodationNote">
            <p className="mb-0 text-light-2 ">
              <strong>Please note:</strong> Due to availability, the exact
              hotels shown here may not always be the ones used on your trip.
              However, we will always replace them with accommodations of a
              similar standard, style, and overall experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
