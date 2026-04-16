import Link from "next/link";

export default function AccommodationSection() {
  return (
    <>
      <section className="layout-pt-xl layout-pb-xl bg-accent-1-05">
        <div className="container">
          <div className="row y-gap-20 justify-between">
            <div className="col-lg-6">
              <h2 className="uppercase fw-700">Stays, Thoughtfully Curated.</h2>
            </div>

            <div className="col-lg-5">
              <p>
                On a Mawari trip, where you stay is a core part of the
                experience. Every accommodation is selected to meet a true
                5-star standard, with a focus on properties that feel elevated
                in a way that's intentional, not excessive. Think design that's
                considered, service that's seamless, and spaces that give you
                room to slow down and settle in. These aren't just nice hotels,
                they're places that shift how the destination feels.
                <br />
                <br />
                That might look like waking up on a private island at Six Senses
                Krabey Island in Cambodia, where everything is quiet, open, and
                connected to the water. Or staying at Chobe Safari Lodge, set
                right on the edge of the Chobe River, where wildlife, landscape,
                and comfort all come together in a way that feels immersive but
                still refined. Each stay is chosen to balance location,
                atmosphere, and experience, so that throughout the trip, you're
                moving between spaces that feel cohesive, elevated, and
                genuinely worth the stay.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
