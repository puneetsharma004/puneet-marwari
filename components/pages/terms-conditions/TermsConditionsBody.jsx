import Square from "@/components/common/icons/Square";

const sections = [
  {
    title: "MAWARI — TERMS AND CONDITIONS",
    content: (
      <>
        <p className="text-light-2" style={{ lineHeight: "1.85" }}>
          By completing a booking, the traveler acknowledges that the following
          terms and conditions have been read, understood, and agreed to as a
          full and complete agreement between{" "}
          <strong>Mawari Travel, Inc.</strong> (hereinafter “Mawari”) and the
          traveler (hereinafter “Participant”). Collectively both Mawari and
          Participant are hereinafter referred to as “The Parties.”
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          WHEREAS Mawari carries on business worldwide with a headquarters in
          Canada, as an organizer and provider of group travel services; and
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          WHEREAS Participant has requested that Mawari organize and provide
          group travel services for the Participant;
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          NOW THEREFORE in consideration of the mutual covenants and agreements
          herein contained and other good and valuable consideration it is
          hereby agreed as follows:
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          Participant is aware of the nature of the group tours offered by
          Mawari and voluntarily wishes to participate in the tour offering.
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          Participant acknowledges that he / she has reviewed relevant
          information on{" "}
          <a
            href="/"
            rel="noopener noreferrer"
            className="text-dark-1 fw-600"
            style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            www.mawaritravel.com
          </a>{" "}
          which fully describes the services and inclusions provided by Mawari
          and third parties.
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          Participant has been made aware of all rules established by Mawari,
          including booking conditions at{" "}
          <a
            href="/booking-conditions"
            rel="noopener noreferrer"
            className="text-dark-1 fw-600"
            style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            www.mawaritravel.com/booking-conditions
          </a>{" "}
          and further agrees to abide by all rules of Mawari, its officers,
          employees, agents, and tour guides while on the tour.
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          Participant acknowledges his / her understanding that tours of this
          nature always pose risks and hazards. Possible risks and hazards
          include, but are not limited to: failure of equipment, sudden change
          in conditions, error in judgment of other participants, contraction of
          disease, sickness or infection, falling, and other hazards associated
          with the regulated activities of the tour.
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          Participant agrees to assume the risks and indemnify, save and hold
          harmless Mawari, its officers, contractors, employees, agents, and all
          other representatives of Mawari from all personal liability directly
          resulting from acts voluntarily undertaken while on the tour.
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          Participant further agrees to assume the risks and indemnify, save and
          hold harmless Mawari, its officers, employees, agents, and all other
          representatives of Mawari from all liability for any property damage
          or loss incurred as a result of Participant&apos;s voluntary actions
          while on the tour.
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          Participant agrees to obtain adequate{" "}
          <strong>travel medical insurance</strong> for the time he / she is on
          the tour. Participant further agrees to provide Mawari with adequate
          and sufficient proof of travel medical insurance prior to the
          beginning of the tour. Mawari accepts provided information as correct,
          valid and sufficient, and cannot be held liable for omissions or
          coverage limits related to the Participant’s chosen insurance
          coverage.
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          Participant understands that in an emergency while on the tour,
          medical care or surgical treatment may be necessary. Should an
          emergency occur and Participant is unable to give any instructions to
          medical personnel, Participant hereby consents to emergency medical
          treatment. In the event that Mawari is unable to contact
          Participant&apos;s emergency contact person, Mawari may make any
          reasonable decisions necessary in a medical emergency.
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          Participant agrees and acknowledges that to the best of his / her
          knowledge, he / she is in good physical condition and have no special
          medical needs, and if special medical needs do exist, that Mawari will
          be provided notice of same in a timely manner.
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          Mawari shall not be liable in any way to Participant for death, bodily
          injury, illness, damage, delay or other loss or detriment to person or
          property, or financial costs both direct and indirect incurred, or for
          Mawari&apos;s failure to commence, perform and/or complete any duty
          (the “Harm”) if such Harm is caused by act of nature, war or war like
          operations, terrorist activities or threat thereof, civil commotions,
          labor difficulties, whether or not Mawari is a party thereto,
          interference by authorities, political disturbance, howsoever and
          where so ever any of the same may arise or be caused, riot,
          insurrection and government restraint, fire, extreme weather or any
          other cause whatsoever beyond the reasonable control of Mawari.
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          The Parties agree that each party will have certain obligations in
          relation to the tours offered by Mawari as more fully described below:
        </p>
      </>
    ),
  },
  {
    title: "SERVICES PROVIDED BY MAWARI:",
    content: (
      <div className="d-flex flex-column y-gap-12">
        {[
          "Accommodations for the duration of the tour in such accommodation as are available and appropriate as determined by Mawari and may differ from those shown on www.mawaritravel.com;",
          "Air, sea, and/or land transportation as described in each specific tour details;",
          "Organization of travel and accommodations;",
          "All international flight bookings, searches and ticketing for travelers on our tours;",
          "Act as a liaison with the Participant's family in the event of a medical emergency or similar circumstance.",
        ].map((item, i) => (
          <div key={i} className="d-flex x-gap-15">
            <Square />
            <p className="text-light-2" style={{ lineHeight: "1.8" }}>
              {item}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "PARTICIPANT AGREES TO THE FOLLOWING:",
    content: (
      <>
        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          Participant will be solely responsible for obtaining:
        </p>

        <div className="d-flex flex-column y-gap-12 mb-20">
          {[
            "(1) a valid passport;",
            "(2) appropriate travel medical insurance;",
            "(3) any required travel visas or documents required depending on destination; and",
            "(4) appropriate medical vaccinations, as determined by a registered medical doctor before leaving on the tour.",
          ].map((item, i) => (
            <div key={i} className="d-flex x-gap-15">
              <Square />
              <p className="text-light-2" style={{ lineHeight: "1.8" }}>
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="d-flex flex-column y-gap-12">
          {[
            "Participant has read and understood the trip-specific information provided to him / her by Mawari in addition to trip-specific information available on www.mawaritravel.com.",
            "Participant is solely responsible for any criminal and / or civil liability incurred by himself / herself arising from their voluntary and involuntary actions while on the tour.",
            "Participant is solely responsible for any damage or loss suffered as a result of consumption of alcohol or drugs, failure to follow Mawari's instructions, or departure from the group itinerary of the tour.",
            "Participant is solely responsible for the cost of meals, beverages, and other consumables outside of inclusions described in trip-specific details at www.mawaritravel.com.",
            "Participant is solely responsible for any travel expenses incurred beyond the group travel itinerary of the tour.",
            "Participant is solely responsible for catching all airline flights associated with the tour whether this be during the tour or upon extension of the Participant's stay in destination beyond the scheduled completion of the tour.",
            "Participant will be solely responsible for the payment of any medical assistance required to treat Participant's illness or injury (inclusive of mental disorders or breakdowns) sustained during the tour.",
            "Participant releases Mawari from any and all liability for any actions undertaken by Participant when the Participant departs from the group itinerary, fails to follow the legal instructions of a duly qualified Mawari representative, or for any period of time falling outside the contracted duration of the tour.",
            "Participant agrees to conduct themselves in a manner that does not negatively impact their travel companions, trip leader, or any third party as a result of making racist, abusive, offensive, or any other form of discriminatory actions, physical assault or verbal assault. Such actions will result in the Participant being removed from the tour by way of written notice from Mawari and not entitled to a refund for any missed services or accommodation. Once removed from the group, Participant releases Mawari from any and all liability for any actions undertaken by Participant.",
            "Participant agrees to have his / her image (either photograph or video) used by Mawari in its advertising and promotional material both online and in print media.",
          ].map((item, i) => (
            <div key={i} className="d-flex x-gap-15">
              <Square />
              <p className="text-light-2" style={{ lineHeight: "1.8" }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: "PRIVACY POLICY:",
    content: (
      <p className="text-light-2" style={{ lineHeight: "1.85" }}>
        Our privacy policy can be found at{" "}
        <a
          href="/privacy"
          rel="noopener noreferrer"
          className="text-dark-1 fw-600"
          style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          www.mawaritravel.com/privacy
        </a>
        .
      </p>
    ),
  },
  {
    title: "PAYMENT POLICY:",
    content: (
      <p className="text-light-2" style={{ lineHeight: "1.85" }}>
        Participant agrees to follow the payment schedule for the tour as set
        out by Mawari as indicated on Mawari&apos;s website at{" "}
        <a
          href="https://www.mawaritravel.com/payment-options"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark-1 fw-600"
          style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          www.mawaritravel.com/payment-options
        </a>
        .
      </p>
    ),
  },
  {
    title: "GOVERNING LAW",
    content: (
      <p className="text-light-2" style={{ lineHeight: "1.85" }}>
        This agreement is governed by the laws of the{" "}
        <strong>Province of British Columbia.</strong> The parties agree that
        any litigation that may commence must occur within the Province of
        British Columbia.
      </p>
    ),
  },
  {
    title: "HEADINGS AND CONSTRUCTION",
    content: (
      <p className="text-light-2" style={{ lineHeight: "1.85" }}>
        Headings of the Articles and Sections hereof are inserted for
        convenience of reference only and shall not affect the construction or
        interpretation of this Agreement. Words importing singular number only
        shall include the plural and vice versa and words importing the
        masculine gender shall include the feminine and neuter genders and words
        importing persons shall include Alberta companies, corporations,
        partnerships, syndicates, trusts and any number or aggregate of persons.
      </p>
    ),
  },
];

export default function TermsConditionsBody() {
  return (
    <section className="layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-9 col-lg-10 col-12">
            {/* Intro */}
            <p className="text-light-2 mb-40 lg:mb-30 lh-18">
              We recommend taking a few moments to review the terms below before
              confirming your Mawari journey.
            </p>

            {/* Sections */}
            <div className="d-flex flex-column y-gap-40 lg:y-gap-30">
              {sections.map((section, i) => (
                <div key={i} className="pb-10 border-bottom-light">
                  <div className="d-flex items-start x-gap-15 mb-15">
                    <div className="fw-600 lh-1">{i + 1}.</div>
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
                “Questions about our terms and conditions? We’re happy to walk
                you through anything before you register.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
