import Square from "@/components/common/icons/Square";

const items = [
  {
    bold: "6+ months (180+ days) prior to departure",
    text: "Deposit is 100% transferable to a future Mawari trip",
  },
  {
    bold: "4 months (120-179 days) prior to departure",
    text: "Deposit is 50% transferable to a future Mawari trip",
  },
  {
    bold: "3 months (90-119 days) prior to departure",
    text: "Deposit is non-transferable",
  },
  {
    bold: "Less than 3 months (0-89 days) prior to departure",
    text: "All payments are non-refundable and non-transferable",
  },
];

const sections = [
  {
    title: "Cancellations",
    content: (
      <>
        <p className=" text-light-2" style={{ lineHeight: "1.85" }}>
          All Mawari trips are <strong>guaranteed departures,</strong> meaning
          we do not require a minimum number of travelers to operate a trip.
          That said, Mawari reserves the right to cancel a departure due to
          circumstances beyond our control, which may include political
          instability, terrorism, natural disasters, travel restrictions,
          pandemics, or similar events.
        </p>
        <p className=" text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          Should a cancellation be necessary, we will always provide as much
          notice as possible. If Mawari must cancel a trip for reasons outside
          of our control, all paid funds (minus any unrecoverable costs) will be
          issued as a credit for future travel with Mawari. This credit will
          have <strong>no expiry date and no destination restrictions.</strong>
        </p>
      </>
    ),
  },
  {
    title: "Payment Schedule",
    content: (
      <div className="d-flex flex-column y-gap-12">
        {[
          {
            label: "$500 deposit per person",
            desc: "Due within 7 days of registration.",
          },
          {
            label: "Remaining balance",
            desc: "Due 90 days prior to trip start date.",
          },
        ].map((item, i) => (
          <div key={i} className="d-flex x-gap-15 ">
            <Square />
            <p className=" text-light-2" style={{ lineHeight: "1.8" }}>
              <span className="fw-700 text-dark-1">{item.label}</span> —{" "}
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Cancelling / Re-Scheduling Your Trip",
    content: (
      <>
        <div className="d-flex flex-column y-gap-12 mb-20">
          {items.map((item, i) => (
            <div key={i} className="d-flex x-gap-15">
              <Square />

              <p className=" text-light-2" style={{ lineHeight: "1.8" }}>
                <strong>{item.bold}</strong> - {item.text}
              </p>
            </div>
          ))}
        </div>
        <p className="text-14 text-light-2 mb-15" style={{ lineHeight: "1.8" }}>
          We strongly recommend purchasing comprehensive travel insurance, which
          may include coverage for trip cancellation, baggage delay, and other
          unforeseen circumstances. Travel insurance options can be found on our
          &nbsp;
          <a
            href="/insurance"
            className="text-dark-1 fw-600"
            style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            Insurance page
          </a>
          .
        </p>
        <p className="" style={{ lineHeight: "1.8" }}>
          <strong>Why do cancellation fees exist?</strong>
        </p>
        <p className="text-14 text-light-2" style={{ lineHeight: "1.85" }}>
          While no one enjoys them, cancellation fees reflect the reality that
          traveler payments are used to secure flights, accommodations, and
          services well in advance. As departure approaches, these commitments
          become increasingly non-recoverable. Comprehensive travel insurance
          remains the most effective way to protect your investment against
          unexpected life events.
        </p>
      </>
    ),
  },
  {
    title: "Rooming",
    content: (
      <>
        <p className=" text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          All published prices are based on{" "}
          <strong> twin-share accommodation</strong> (two travelers per room)
        </p>
        <p className=" text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          Traveling solo? We're happy to offer two options:
        </p>
        <div className="d-flex flex-column y-gap-12">
          {[
            {
              label: "Roommate Matching",
              desc: "We will pair you with another solo traveler in a twin room at no additional cost. While we do our best to ensure compatibility, specific roommate preferences cannot be guaranteed.",
            },
            {
              label: "Private Room",
              desc: "A single-room supplement is available for travelers who prefer their own space. Fees vary by trip; please refer to the individual trip page for details.",
            },
          ].map((item, i) => (
            <div key={i} className="d-flex x-gap-15">
              <Square />
              <p className=" text-light-2" style={{ lineHeight: "1.8" }}>
                <span className="fw-700 text-dark-1">{item.label}: </span>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: "Passports & Visas",
    content: (
      <p className=" text-light-2" style={{ lineHeight: "1.85" }}>
        We are happy to provide guidance on passport and visa requirements for
        the destinations we operate in. However, it is the traveler's
        responsibility to ensure their passport is valid for{" "}
        <strong>at least six months beyond the trip end date,</strong> and that
        all required visas are obtained and valid prior to departure. Mawari
        cannot be held responsible for issues arising from passport or visa
        non-compliance.
      </p>
    ),
  },
  {
    title: "Flights",
    content: (
      <p className=" text-light-2" style={{ lineHeight: "1.85" }}>
        International flights to and from the destination are not included in
        the trip price. As part of your Mawari experience, all flight planning
        and flight searches are handled by Mawari as an all-inclusive service,
        with ticketing arranged directly by Mawari in accordance with applicable
        regulations.
      </p>
    ),
  },
  {
    title: "Group Sizes",
    content: (
      <p className=" text-light-2" style={{ lineHeight: "1.85" }}>
        Mawari trips are intentionally designed to remain intimate. Unless
        otherwise stated on the trip page, group sizes are capped at{" "}
        <strong>12 travelers plus one trip leader.</strong> This allows for a
        more personal experience, meaningful connections, and a lighter
        footprint in the destinations we visit.
        <br />
        <br />
        If you're curious about how many travelers are booked on your upcoming
        trip, feel free to ask.
      </p>
    ),
  },
  {
    title: "Itinerary Changes",
    content: (
      <p className=" text-light-2" style={{ lineHeight: "1.85" }}>
        Occasionally, adjustments to accommodations, transportation, or
        scheduling may be required. Mawari will always communicate any changes
        as soon as they arise. We cannot be held responsible for significant
        alterations caused by circumstances beyond our control, including but
        not limited to natural disasters, political instability, extreme
        weather, or acts of terrorism.
      </p>
    ),
  },
  {
    title: "Your Conduct",
    content: (
      <p className=" text-light-2" style={{ lineHeight: "1.85" }}>
        All travelers are expected to conduct themselves with respect toward
        fellow guests, trip leaders, and third parties. Any racist, abusive,
        offensive, discriminatory behavior, or physical assault will result in
        immediate removal from the tour. In such cases, the traveler will not be
        entitled to a refund for missed services or accommodations. on.
      </p>
    ),
  },
];

export default function BookingConditionsBody() {
  return (
    <section className="layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-9 col-lg-10 col-12">
            {/* Intro */}
            <p className="text-light-2 mb-40 lg:mb-30 lh-18">
              We recommend taking a few moments to review the booking conditions
              below before confirming your Mawari journey. These guidelines are
              designed to ensure clarity, fairness, and peace of mind for all
              travelers.
            </p>

            {/* Sections */}
            <div className="d-flex flex-column y-gap-40 lg:y-gap-30">
              {sections.map((section, i) => (
                <div key={i} className="pb-10 border-bottom-light">
                  <div className="d-flex items-start x-gap-15 mb-15">
                    <div className=" fw-600 lh-1">{i + 1}.</div>
                    <h6 className="fw-600 uppercase">{section.title}</h6>
                  </div>

                  <div className="pl-35 text-light-1 lh-18">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-50 lg:mt-40 pt-10">
              <p className="lh-18 text-light-1 mb-0">
                “Questions about our booking conditions? We’re happy to walk you
                through anything before you register.”{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
