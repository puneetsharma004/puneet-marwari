"use client";
import Image from "next/image";

export default function ContactForm() {
  return (
    <section className=" layout-pb-lg" style={{ backgroundColor: "#fef7f4" }}>
      <div className="container">
        <div className="row x-gap-0 items-stretch">
          {/* LEFT — Image */}
          <div className="col-lg-6 col-12">
            <div
              style={{
                position: "relative",
                height: "100%",
                minHeight: "600px",
              }}
            >
              <Image
                src="/img/faq-hero-bg.png"
                alt="Contact"
                fill
                className="object-cover"
              />
              {/* Dark overlay with text */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0.45)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "48px",
                }}
              >
                <p className=" fw-500 text-white mb-10">
                  We'd love to hear from you
                </p>
                <h2 className="text-white mb-20">Let's Start a Conversation</h2>
                <div className="d-flex items-center x-gap-10">
                  <span
                    style={{
                      display: "block",
                      width: 40,
                      height: 1,
                      backgroundColor: "rgba(255,255,255,0.3)",
                    }}
                  />
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 12 12"
                    fill="none"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    <rect
                      x="6"
                      y="0.5"
                      width="7.78"
                      height="7.78"
                      rx="1.5"
                      transform="rotate(45 6 0.5)"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </svg>
                  <span
                    style={{
                      display: "block",
                      width: 40,
                      height: 1,
                      backgroundColor: "rgba(255,255,255,0.3)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="col-lg-6 col-12">
            <div
              style={{
                backgroundColor: "#fff",
                padding: "60px 48px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Form heading */}
              <p className=" mb-5">Contact Us</p>
              <h3 className=" mb-5">Leave Us Your Info</h3>
              <div className="d-flex items-center x-gap-10 mb-40">
                <span
                  style={{
                    display: "block",
                    width: 30,
                    height: 1,
                    backgroundColor: "rgba(26,23,21,0.2)",
                  }}
                />
                <svg
                  width="7"
                  height="7"
                  viewBox="0 0 12 12"
                  fill="none"
                  style={{ color: "rgba(26,23,21,0.3)" }}
                >
                  <rect
                    x="6"
                    y="0.5"
                    width="7.78"
                    height="7.78"
                    rx="1.5"
                    transform="rotate(45 6 0.5)"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
                <span
                  style={{
                    display: "block",
                    width: 30,
                    height: 1,
                    backgroundColor: "rgba(26,23,21,0.2)",
                  }}
                />
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="row y-gap-20"
              >
                <div className="col-md-6 col-12">
                  <label className="d-block mb-8">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    required
                    style={{
                      width: "100%",
                      border: "none",
                      borderBottom: "1px solid #E7E6E6",
                      backgroundColor: "transparent",
                      padding: "10px 0",
                      fontSize: "14px",
                      color: "#1a1715",
                      outline: "none",
                    }}
                  />
                </div>

                <div className="col-md-6 col-12">
                  <label
                    className="d-block mb-8"
                    style={{ letterSpacing: "2px" }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    style={{
                      width: "100%",
                      border: "none",
                      borderBottom: "1px solid #E7E6E6",
                      backgroundColor: "transparent",
                      padding: "10px 0",
                      fontSize: "14px",
                      color: "#1a1715",
                      outline: "none",
                    }}
                  />
                </div>

                <div className="col-12">
                  <label
                    className="d-block mb-8"
                    style={{ letterSpacing: "2px" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    style={{
                      width: "100%",
                      border: "none",
                      borderBottom: "1px solid #E7E6E6",
                      backgroundColor: "transparent",
                      padding: "10px 0",
                      fontSize: "14px",
                      color: "#1a1715",
                      outline: "none",
                    }}
                  />
                </div>

                <div className="col-12">
                  <label
                    className="d-block mb-8"
                    style={{ letterSpacing: "2px" }}
                  >
                    Which Trip Are You Interested In?
                  </label>
                  <select
                    style={{
                      width: "100%",
                      border: "none",
                      borderBottom: "1px solid #E7E6E6",
                      backgroundColor: "transparent",
                      padding: "10px 5px",
                      color: "#1a1715",
                      outline: "none",
                      appearance: "none",
                    }}
                  >
                    <option value="">Select a trip</option>
                    <option>Greece</option>
                    <option>Southeast Asia</option>
                    <option>African Safari</option>
                    <option>Antarctica Cruise</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div className="col-12">
                  <label
                    className="d-block mb-8"
                    style={{ letterSpacing: "2px" }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about yourself or ask us anything..."
                    rows="4"
                    required
                    style={{
                      width: "100%",
                      border: "none",
                      borderBottom: "1px solid #E7E6E6",
                      backgroundColor: "transparent",
                      padding: "10px 0",
                      color: "#1a1715",
                      outline: "none",
                      resize: "none",
                    }}
                  />
                </div>

                <div className="col-12 mt-10">
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      backgroundColor: "#1a1715",
                      color: "white",
                      border: "none",
                      padding: "18px 0",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.85")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
