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
      <div className="registration-page">
        {/* 1. TOP STEPPER - 5px Radius applied to active state */}
        <nav className="form-steps">
          <div className="step-item active">1. Your Details</div>
          <div className="step-item">2. Additional Guest</div>
          <div className="step-item">3. Pay Deposit</div>
          <div className="step-item">4. Confirmation</div>
        </nav>

        <div className="main-layout">
          <div className="form-column">
            <h1 className="page-title">Trip Registration</h1>

            {/* URGENCY ALERTS */}
            <div className="alert-container">
              <div className="alert-item warning">
                <strong>
                  Only 1 available space remains on this departure.
                </strong>
              </div>
              <div className="alert-item info">
                This trip begins in less than 90 days and, as a result, cannot
                be immediately confirmed. Please contact us directly to confirm
                availability.
              </div>
            </div>

            <form className="structured-form">
              {/* CONTACT DETAILS */}
              <fieldset className="form-group">
                <legend>Contact Details</legend>
                <div className="row">
                  <div className="field full">
                    <label>Email Address</label>
                    <input type="email" placeholder="example@mail.com" />
                  </div>
                </div>
                <div className="row two-col">
                  <div className="field">
                    <label>Primary Phone Number</label>
                    <input type="tel" />
                  </div>
                  <div className="field">
                    <label>Secondary Phone Number</label>
                    <input type="tel" />
                  </div>
                </div>
                <div className="row two-col">
                  <div className="field">
                    <label>Travel Agent Email</label>
                    <input type="email" />
                    <span className="helper">
                      Registered travel agents, enter your email here.
                    </span>
                  </div>
                  <div className="field">
                    <label>Referral Code</label>
                    <input type="text" />
                    <span className="helper">
                      If you received a referral code, enter it here.
                    </span>
                  </div>
                </div>
              </fieldset>

              {/* YOUR DETAILS */}
              <fieldset className="form-group">
                <legend>Your Details</legend>
                <div className="row two-col">
                  <div className="field">
                    <label>First Name</label>
                    <input type="text" />
                  </div>
                  <div className="field">
                    <label>Middle Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="row two-col">
                  <div className="field">
                    <label>Last Name</label>
                    <input type="text" />
                  </div>
                  <div className="field">
                    <label>Preferred First Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="row three-col">
                  <div className="field">
                    <label>Citizenship</label>
                    <select>
                      <option>Select...</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Date of Birth</label>
                    <input type="date" />
                  </div>
                  <div className="field">
                    <label>Gender</label>
                    <div className="radio-set">
                      <label>
                        <input type="radio" name="gender" /> Male
                      </label>
                      <label>
                        <input type="radio" name="gender" /> Female
                      </label>
                      <label>
                        <input type="radio" name="gender" /> X / Other
                      </label>
                    </div>
                  </div>
                </div>
                <div className="field full mt-10">
                  <label>Street Address</label>
                  <input type="text" className="mb-10" />
                  <input type="text" />
                </div>
                <div className="row three-col mt-10">
                  <div className="field">
                    <label>City</label>
                    <input type="text" />
                  </div>
                  <div className="field">
                    <label>Zip/Postal</label>
                    <input type="text" />
                  </div>
                  <div className="field">
                    <label>Country</label>
                    <select>
                      <option>Select...</option>
                    </select>
                  </div>
                </div>
              </fieldset>

              {/* PREFERENCES */}
              <fieldset className="form-group">
                <legend>Rooming & Travel Preferences</legend>
                <div className="radio-list">
                  <label className="radio-box">
                    <input type="radio" name="room" /> One bed. Traveling with
                    my partner.
                  </label>
                  <label className="radio-box">
                    <input type="radio" name="room" /> One bed. Traveling solo.
                    (private room upgrade applicable)
                  </label>
                  <label className="radio-box">
                    <input type="radio" name="room" /> Two beds. Traveling with
                    a friend.
                  </label>
                  <label className="radio-box">
                    <input type="radio" name="room" /> Two beds. Please pair me
                    with another solo traveler.
                  </label>
                </div>

                <div className="checkbox-area mt-20">
                  <label className="check-label">
                    <input type="checkbox" /> <strong>Book Flight</strong>
                  </label>
                  <p className="helper-text">
                    Check this box if you would like Detours to book your flight
                    for an additional $50 fee...
                  </p>
                </div>

                <div className="field full mt-20">
                  <label>Traveling Partners</label>
                  <input type="text" />
                  <span className="helper">
                    Names of traveler(s) you would like to be grouped with.
                  </span>
                </div>

                <div className="field full mt-20">
                  <label>Dietary Requirements</label>
                  <input type="text" />
                  <span className="helper">
                    We'll communicate these, but it's a good idea to chat with
                    your leader.
                  </span>
                </div>
              </fieldset>

              {/* ADDITIONAL DETAILS */}
              <fieldset className="form-group">
                <legend>Additional Details</legend>
                <div className="field full">
                  <label>Where did you FIRST hear about Detours?</label>
                  <textarea rows="3"></textarea>
                  <span className="helper">
                    On a search engine? Social media?
                  </span>
                </div>
                <div className="field full mt-20">
                  <label>Comments</label>
                  <textarea rows="4"></textarea>
                </div>
              </fieldset>

              <div className="form-footer">
                <label className="terms">
                  <input type="checkbox" /> I agree to the{" "}
                  <a href="#">Terms & Conditions</a>
                </label>
                <div className="button-row">
                  <button type="button" className="btn-back">
                    BACK
                  </button>
                  <button type="submit" className="btn-continue">
                    CONTINUE
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* 2. STICKY SIDEBAR */}
          <aside className="sticky-sidebar">
            <div className="summary-card">
              <h3 className="summary-title">Booking Details</h3>
              <img
                src="/images/greece.jpg"
                alt="Greece"
                className="summary-img"
              />
              <div className="summary-content">
                <h4>11 Days In Greece</h4>
                <ul className="trip-specs">
                  <li>
                    <strong>From:</strong> May 31, 2026 Athens
                  </li>
                  <li>
                    <strong>To:</strong> June 10, 2026 Mykonos
                  </li>
                </ul>
                <div className="price-box">
                  <span className="label">Total:</span>
                  <span className="usd">$4,380 USD</span>
                  <span className="inr">( ≈ ₹4,08,450 INR )</span>
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
