import HeroBanner from "@/components/common/HeroBanner";
import React from "react";

const JoinWaitlist = () => {
  return (
    <>
      <HeroBanner
        title="Join Waitlist"
        description="Journey Through the Greek Islands"
        imageSrc="/heroimg/greece.png"
      />
      <div className="tr-wrapper">
        <div className="tr-main-grid">
          {/* LEFT COLUMN: FORM */}
          <div className="tr-content">
            <div className="tr-page-header">
              <h2 className="">Join Waitlist</h2>
              <div className="tr-alert-stack">
                <div className="tr-alert info">
                  This trip is currently full, but you can join our waitlist!
                  We'll notify you immediately when a spot becomes available or
                  new trip opens in this tour.
                </div>
                <div className="tr-alert warning">
                  <strong>What happens next?</strong>
                  <br />
                  <br />
                  You'll be added to our waitlist for this trip <br />
                  We'll email you immediately when a spot becomes available{" "}
                  <br />
                  You'll have priority access to register for the trip <br />
                  Spots are filled on a first-come, first-served basis
                </div>
              </div>
            </div>

            <form className="tr-form">
              {/* PREFERENCES */}
              <div className="tr-card">
                <h2 className="tr-card-title">Rooming & Flights</h2>
                <div className="tr-field full mb-20">
                  <label className="tr-label">Email Address</label>
                  <input
                    type="email"
                    className="tr-input"
                    placeholder="e.g., travel@example.com"
                  />
                  <p className="tr-helper">
                    We will notify you when this trip becomes available
                  </p>
                </div>

                <div className="tr-radio-stack">
                  <label className="tr-label">Bed Type Preference *</label>
                  <label className="tr-radio-box">
                    <input
                      type="radio"
                      name="room"
                      style={{ width: "auto", marginRight: "20px" }}
                    />
                    <span>One bed - traveling solo.</span>
                  </label>
                  <label className="tr-radio-box">
                    <input
                      type="radio"
                      name="room"
                      style={{ width: "auto", marginRight: "20px" }}
                    />
                    <span>One bed. Traveling with my partner.</span>
                  </label>
                  <label className="tr-radio-box">
                    <input
                      type="radio"
                      name="room"
                      style={{ width: "auto", marginRight: "20px" }}
                    />
                    <span>Two beds. Traveling with a friend.</span>
                  </label>
                  {/* <label className="tr-radio-box">
                    <input
                      type="radio"
                      name="room"
                      style={{ width: "auto", marginRight: "20px" }}
                    />
                    <span>Two beds. Pair me with a solo traveler.</span>
                  </label> */}
                </div>

                <div className="tr-field mt-30">
                  <label className="tr-label">
                    Additional Notes (Optional)
                  </label>
                  <textarea className="tr-input" rows="3"></textarea>
                  <p className="tr-helper">
                    Any additional information you would like us to know
                  </p>
                </div>
              </div>

              <div className="tr-footer">
                <label className="tr-terms">
                  <input
                    type="checkbox"
                    style={{
                      width: "auto",
                      marginRight: "20px",
                      marginBottom: "20px",
                    }}
                  />{" "}
                  I agree to the <a href="#">Terms & Conditions</a>
                </label>
                <div className="tr-btn-row d-flex justify-between">
                  <button type="button" className="tr-btn secondary">
                    CANCEL
                  </button>
                  <button type="submit" className="tr-btn primary">
                    JOIN WAITLIST
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: STICKY SIDEBAR */}
          <aside className="tr-sidebar">
            <div className="tr-sidebar-card">
              <h4 className="tr-sidebar-title">
                Trip Summary <span className="text-red-1">(SOLD OUT)</span>{" "}
              </h4>
              <img
                src="/img/greece/6.webp"
                alt="Greece"
                className="tr-sidebar-img"
              />
              <div className="tr-sidebar-body">
                <h5>11 Days In Greece</h5>
                <div className="tr-spec">
                  <h6>
                    <strong>From:</strong> May 31, 2026
                  </h6>
                  <h6>Athens</h6>
                </div>
                <div className="tr-spec">
                  <h6>
                    <strong>To:</strong> June 10, 2026
                  </h6>
                  <h6>Mykonos</h6>
                </div>
                <div className="tr-price d-flex justify-between">
                  <h4>Total Amount:</h4>
                  <div>
                    <h5 className="tr-currfrom">$4,380 USD</h5>
                    <span className="tr-currto">≈ $8,450 CAD</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default JoinWaitlist;
