import HeroBanner from "@/components/common/HeroBanner";
import React from "react";

const TripRegistration = () => {
  return (
    <>
      <HeroBanner
        title="Trip Registration"
        description="Journey Through the Greek Islands"
        imageSrc="/heroimg/greece.png"
      />
      <div className="tr-wrapper">
        {/* 1. TOP STEPPER (TABS) */}
        <nav className="tr-stepper">
          <div className="tr-step active">
            <span className="tr-step-dot"></span>
            <div className="tr-step-text">
              <span className="tr-step-num">STEP 01</span>
              <span className="tr-step-label">Your Details</span>
            </div>
          </div>
          <div className="tr-step">
            <span className="tr-step-dot"></span>
            <div className="tr-step-text">
              <span className="tr-step-num">STEP 02</span>
              <span className="tr-step-label">Guest Info</span>
            </div>
          </div>
          <div className="tr-step">
            <span className="tr-step-dot"></span>
            <div className="tr-step-text">
              <span className="tr-step-num">STEP 03</span>
              <span className="tr-step-label">Payment</span>
            </div>
          </div>
          <div className="tr-step">
            <span className="tr-step-dot"></span>
            <div className="tr-step-text">
              <span className="tr-step-num">STEP 04</span>
              <span className="tr-step-label">Success</span>
            </div>
          </div>
        </nav>

        <div className="tr-main-grid">
          {/* LEFT COLUMN: FORM */}
          <div className="tr-content">
            <div className="tr-page-header">
              <h2 className="">Trip Registration</h2>
              <div className="tr-alert-stack">
                <div className="tr-alert warning">
                  <strong>Only 1 available space</strong> remains on this
                  departure.
                </div>
                <div className="tr-alert info">
                  This trip begins in less than 90 days and requires manual
                  confirmation.
                </div>
              </div>
            </div>

            <form className="tr-form">
              {/* CONTACT DETAILS */}
              <div className="tr-card">
                <h2 className="tr-card-title">Contact Details</h2>
                <div className="tr-grid">
                  <div className="tr-field full">
                    <label className="tr-label">Email Address</label>
                    <input
                      type="email"
                      className="tr-input"
                      placeholder="e.g., travel@example.com"
                    />
                  </div>
                  <div className="tr-field">
                    <label className="tr-label">Primary Phone Number</label>
                    <input type="tel" className="tr-input" />
                  </div>
                  <div className="tr-field">
                    <label className="tr-label">Secondary Phone Number</label>
                    <input
                      type="tel"
                      className="tr-input"
                      placeholder="Optional"
                    />
                  </div>
                  <div className="tr-field">
                    <label className="tr-label">Travel Agent Email</label>
                    <input type="email" className="tr-input" />
                    <p className="tr-helper">
                      Registered travel agents, enter your email here.
                    </p>
                  </div>
                  <div className="tr-field">
                    <label className="tr-label">Referral Code</label>
                    <input type="text" className="tr-input" />
                    <p className="tr-helper">
                      If you received a referral code, enter it here.
                    </p>
                  </div>
                </div>
              </div>

              {/* PERSONAL DETAILS */}
              <div className="tr-card">
                <h2 className="tr-card-title">Your Details</h2>
                <div className="tr-grid">
                  <div className="tr-field">
                    <label className="tr-label">First Name</label>
                    <input type="text" className="tr-input" />
                    <p className="tr-helper">
                      Please ensure this matches your passport info.
                    </p>
                  </div>
                  <div className="tr-field">
                    <label className="tr-label">Middle Name</label>
                    <input type="text" className="tr-input" />
                  </div>
                  <div className="tr-field">
                    <label className="tr-label">Last Name</label>
                    <input type="text" className="tr-input" />
                    <p className="tr-helper">
                      Please ensure this matches your passport info.
                    </p>
                  </div>
                  <div className="tr-field">
                    <label className="tr-label">Preferred First Name</label>
                    <input type="text" className="tr-input" />
                    <p className="tr-helper">Name you'd prefer to be called.</p>
                  </div>
                  <div className="tr-field">
                    <label className="tr-label">Gender</label>
                    <select className="tr-input">
                      <option>Select...</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option> X / Other</option>
                    </select>
                  </div>
                  <div className="tr-field">
                    <label className="tr-label">Date of Birth</label>
                    <input type="date" className="tr-input" />
                  </div>

                  <div className="tr-field full">
                    <label className="tr-label">Street Address</label>
                    <input type="text" className="tr-input mb-10" />
                    <input type="text" className="tr-input" />
                  </div>
                  <div className="tr-field">
                    <label className="tr-label">City</label>
                    <input type="text" className="tr-input" />
                  </div>
                  <div className="tr-field">
                    <label className="tr-label">Zip/Postal</label>
                    <input type="text" className="tr-input" />
                  </div>
                  <div className="tr-field">
                    <label className="tr-label">Country</label>
                    <select className="tr-input">
                      <option>Select...</option>
                    </select>
                  </div>
                  <div className="tr-field">
                    <label className="tr-label">Citizenship</label>
                    <select className="tr-input">
                      <option>Select...</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* PREFERENCES */}
              <div className="tr-card">
                <h2 className="tr-card-title">Rooming & Flights</h2>

                <div className="tr-radio-stack">
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
                    <span>One bed. Traveling solo. (private upgrade)</span>
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

                {/* FIXED CHECKBOX WRAPPER */}
                {/* <div className="tr-checkbox-group">
                  <label className="tr-check-label">
                    <input
                      type="checkbox"
                      className="tr-checkbox"
                      style={{ width: "auto" }}
                    />
                    <div className="tr-check-text">
                      <span className="tr-check-title">Book Flight</span>
                      <p className="tr-helper-text">
                        (Check this box if you would like Mawari to book your
                        flight for an additional $50 fee. One of us will follow
                        up with an email to review potential flights with you,
                        and then will collect credit card information by phone.
                        Changes and cancelations will be your responsibility
                        once the ticket is issued by the airline.)
                      </p>
                    </div>
                  </label>
                </div> */}

                <div className="tr-field mt-30">
                  <label className="tr-label">Traveling Partners</label>
                  <input type="text" className="tr-input" />
                  <p className="tr-helper">
                    Name(s) of the traveler(s) you would like to be grouped
                    with, or "solo" if you are traveling by yourself.
                  </p>
                </div>

                <div className="tr-field mt-30">
                  <label className="tr-label">Dietary Requirements</label>
                  <textarea className="tr-input" rows="3"></textarea>
                  <p className="tr-helper">
                    We'll communicate these, but it's a good idea to chat with
                    your trip leader in person as well.
                  </p>
                </div>
              </div>

              {/* FINAL DETAILS */}
              <div className="tr-card">
                <h2 className="tr-card-title">Additional Details</h2>
                <div className="tr-field full">
                  <label className="tr-label">
                    Where did you FIRST hear about Mawari?
                  </label>
                  <textarea className="tr-input" rows="3"></textarea>
                </div>
                <div className="tr-field full mt-20">
                  <label className="tr-label">Comments</label>
                  <textarea className="tr-input" rows="3"></textarea>
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
                    BACK
                  </button>
                  <button type="submit" className="tr-btn primary">
                    CONTINUE
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: STICKY SIDEBAR */}
          <aside className="tr-sidebar">
            <div className="tr-sidebar-card">
              <h4 className="tr-sidebar-title">Trip Summary</h4>
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

export default TripRegistration;
