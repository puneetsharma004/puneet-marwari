import { departureGroups } from "@/data/trips";

export default function TourSingleSidebar() {
  return (
    <div className="tourSingleSidebar">
      <div className="bookingSidebarCard__top">
        <h3 className="bookingSidebarCard__title">Register Now</h3>
        <p className="bookingSidebarCard__subtitle">
          with a <strong>$500 USD</strong> (≈ $627 CAD) deposit
        </p>
      </div>

      <div className="searchForm -type-1 -sidebar pt-20">
        <div className="searchForm__form">
          <div className="d-flex flex-column y-gap-20">
            {departureGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="departureGroup">
                {/* Price Block */}
                <h5 className="d-flex justify-between fw-500 mt-20 px-20">
                  <span>
                    {group.price} {group.currency}
                  </span>
                  <p className="bookingSidebarCard__subtitle">
                    {group.convertedPrice}
                  </p>
                </h5>

                {/* Departures under this price */}
                <div className="d-flex flex-column y-gap-12">
                  {group.departures.map((departure) => {
                    const isAvailable = departure.status === "available";

                    return (
                      <button
                        key={departure.id}
                        className={`departureCard ${
                          isAvailable ? "is-available" : "is-full"
                        }`}
                        type="button"
                      >
                        <div className="departureCard__left">
                          <div className="departureCard__date">
                            {departure.date}
                          </div>

                          <div className="departureCard__meta mt-10">
                            <span
                              className={`departureBadge ${
                                isAvailable ? "is-available" : "is-full"
                              }`}
                            >
                              {isAvailable ? "Available" : "Full"}
                            </span>

                            {!isAvailable && (
                              <span className="departureCard__waitlist">
                                {departure.cta}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="departureCard__right">
                          <i className="icon-chevron-right text-16"></i>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bookingSidebarCard__top">
        <p className="bookingSidebarCard__subtitle">
          Pricing is per-person, based on two travelers per room. Solo traveler?
          We'll pair you up with another solo traveler at no cost, or pay just
          $1160 USD for a private room.
        </p>
      </div>
    </div>
  );
}
