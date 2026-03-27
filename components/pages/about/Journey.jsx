import Link from "next/link";

export default function Journey() {
  return (
    <>
      <section className="layout-pt-xl layout-pb-xl">
        <div className="container">
          <div className="row y-gap-20 justify-between">
            <div className="col-lg-6">
              <h2 className=" fw-700">A JOURNEY BEGINS WITH TRUST</h2>
            </div>

            <div className="col-lg-5">
              <p>
                Mawari was built on a belief that travel is more than seeing
                places—it's about feeling them. Whether it's the glow of a
                sunset over a historic rooftop, an impromptu laugh with new
                friends on a quiet street, or the quiet satisfaction of a
                perfectly chosen experience, those moments are what stay with
                you.
                <br />
                <br />
                We are dedicated to crafting journeys that deliver those moments
                again and again.
                <br />
                <br />
                Many of our travelers return to explore with us multiple
                times—not because they have to, but because the experience feels
                worthwhile, enriching, and truly theirs.
              </p>
              <Link href={"/community"}>
                <button className="button -md -dark-1 bg-accent-1 text-white mt-30">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
