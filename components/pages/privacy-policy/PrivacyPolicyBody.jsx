import Square from "@/components/common/icons/Square";

const sections = [
  {
    title: "MAWARI — PRIVACY POLICY",
    content: (
      <>
        <p className="text-light-2" style={{ lineHeight: "1.85" }}>
          Our privacy policy below is intended to help you understand how we use
          and protect the personal information you provide, or we receive and
          collect when you use our services.
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          This includes how it is collected, used, and shared when you visit or
          make a purchase from <strong>www.mawaritravel.com</strong> (the
          “Site”), as well as some of the steps we take to safeguard your
          personal information.
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          This policy may be updated to adhere to changing legal requirements
          and the changing way we operate our business and applies to all online
          activity on <strong>www.mawaritravel.com</strong> as well as
          interactions with Mawari representatives and use of the Mawari mobile
          app.
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          Mawari Travel Inc. will be the primary controller of the data that is
          collected on this website.
        </p>
      </>
    ),
  },

  {
    title: "PERSONAL INFORMATION WE COLLECT",
    content: (
      <>
        <p className="text-light-2" style={{ lineHeight: "1.85" }}>
          When you visit the Site or the App, we automatically collect certain
          information about your device, including information about your web
          browser, IP address, time zone, and some of the cookies that are
          installed on your device.
        </p>

        <p className="text-light-2 mt-15" style={{ lineHeight: "1.85" }}>
          Additionally, as you browse the Site, we collect information about the
          individual web pages or products that you view, what websites or
          search terms referred you to the Site, and information about how you
          interact with the Site. We refer to this automatically-collected
          information as <strong>“Device Information.”</strong>
        </p>

        <p className="text-light-2 mt-20 mb-15" style={{ lineHeight: "1.85" }}>
          We collect Device Information using the following technologies:
        </p>

        <p className="text-light-2 fw-600 mb-15">“Cookies”</p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          Cookies are data files that are placed on your device or computer and
          often include an anonymous unique identifier. Cookies that we use
          include:
        </p>

        <div className="d-flex flex-column y-gap-12 mb-20">
          {[
            "Session Cookies (needed for logging in, strictly necessary)",
            "Cross Site Request Forgery Cookies (needed for security on the website, strictly necessary)",
            "Zopim Live Chat Cookie (needed for support chat widget)",
            "Google Tag Manager / Analytics (needed for tracking traffic)",
          ].map((item, i) => (
            <div key={i} className="d-flex x-gap-15">
              <Square />
              <p className="text-light-2" style={{ lineHeight: "1.8" }}>
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          For more information about cookies, and how to disable cookies, visit{" "}
          <a
            href="http://www.allaboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-1 fw-600"
            style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            http://www.allaboutcookies.org
          </a>
          .
        </p>

        <p className="text-light-2 mb-15" style={{ lineHeight: "1.85" }}>
          <strong>“Log files”</strong> track actions occurring on the Site, and
          collect data including your IP address, browser type, Internet service
          provider, referring/exit pages, and date/time stamps.
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          <strong>“Web beacons,” “tags,” and “pixels”</strong> are electronic
          files used to record information about how you browse the Site.
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          When registering for a trip, Mawari may collect some personal
          information from you in order to properly provide our services and
          products. Depending on the product or service required, we may collect
          your full name, address, birth date, travel insurance details,
          emergency contact details, gender, phone number, email address,
          passport details, and allergy information in addition to any other
          comments you provide during trip registration and email
          communications.
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          We may also collect your personal data from other sources including
          travel agents and independent third parties. This information may also
          be used for follow-up post-trip communication including feedback
          requests. We refer to this information as{" "}
          <strong>“Order Information.”</strong>
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          When you initiate communication via our live-chat feature or{" "}
          <strong>"Contact Us"</strong> page, we may also collect information
          which may include your name, email address, and phone number. We refer
          to this information as <strong>“Contact Information.”</strong>
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          When you make payments on the Site or the App, these are processed
          using a third-party payment processor, <strong>Stripe</strong>, which
          is PCI DSS compliant and processes all payments on our behalf. Mawari
          does not directly record or save any financial information of our
          customers.
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          While the majority of payments are made directly in your traveler
          account, we may accept payments via phone or via the PayNow app. We
          are not responsible for the privacy practices of third-party vendors
          and providers, including payment providers, and encourage you to
          review these practices to learn more about how they handle and protect
          your personal information. We refer to this information as{" "}
          <strong>“Financial Information.”</strong>
        </p>

        <p className="text-light-2" style={{ lineHeight: "1.85" }}>
          When we talk about <strong>“Personal Information”</strong> in this
          Privacy Policy, we are talking about Device Information, Order
          Information, Contact Information, and Financial Information.
        </p>
      </>
    ),
  },

  {
    title: "HOW DO WE USE YOUR PERSONAL INFORMATION?",
    content: (
      <>
        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          We use the Order Information that we collect generally to fulfill any
          trip bookings placed through the Site and the App (including
          processing your payment information, making accommodation and activity
          bookings on your behalf, and providing you with invoices and/or
          booking confirmations).
        </p>

        <p className="text-light-2 mb-15" style={{ lineHeight: "1.85" }}>
          Additionally, we use this Order Information to:
        </p>

        <div className="d-flex flex-column y-gap-12 mb-20">
          {[
            "Communicate with you;",
            "Screen our bookings for potential risk or fraud; and",
            "When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.",
          ].map((item, i) => (
            <div key={i} className="d-flex x-gap-15">
              <Square />
              <p className="text-light-2" style={{ lineHeight: "1.8" }}>
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          We use the Device Information that we collect to help us screen for
          potential risk and fraud (in particular, your IP address), and more
          generally to improve and optimize our Site (for example, by generating
          analytics about how our customers browse and interact with the Site
          and the App, and to assess the success of our marketing and
          advertising campaigns).
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          Device Information may also be used for the purposes of retargeting
          advertising via Google Remarketing services.
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          We use the Contact Information that we collect in order to respond to
          inquiries, provide newsletters, and facilitate pre-trip, on-trip, and
          post-trip communication.
        </p>

        <p className="text-light-2" style={{ lineHeight: "1.85" }}>
          We use the Financial Information that we collect to process payments
          for your trip and any additional services or products you have
          requested from us. This information is processed on the Site or the
          App by Stripe, Inc. and not stored in full by Mawari. View Stripe’s
          privacy policy at{" "}
          <a
            href="https://stripe.com/en-ca/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-1 fw-600"
            style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            https://stripe.com/en-ca/privacy
          </a>
          .
        </p>
      </>
    ),
  },

  {
    title: "SHARING YOUR PERSONAL INFORMATION",
    content: (
      <>
        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          We share your Personal Information with third parties to help us use
          your Personal Information, as described above.
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          For example, we use Checkfront to power some of our booking processes
          — you can read more about how Checkfront uses your Personal
          Information here:{" "}
          <a
            href="https://www.checkfront.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-1 fw-600"
            style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            https://www.checkfront.com/privacy
          </a>
          .
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          We also use Google Analytics to help us understand how our customers
          use the Site — you can read more about how Google uses your Personal
          Information here:{" "}
          <a
            href="https://www.google.com/intl/en/policies/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-1 fw-600"
            style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            https://www.google.com/intl/en/policies/privacy/
          </a>
          .
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          You can also opt out of Google Analytics here:{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-1 fw-600"
            style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            https://tools.google.com/dlpage/gaoptout
          </a>
          .
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          We share information with <strong>Stripe, Inc.</strong> in order to
          pay for your requested services and products.
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          We also provide some of your personal information to our third-party
          suppliers and vendors in order to administer your accommodation,
          activities, and tours.
        </p>

        <p className="text-light-2" style={{ lineHeight: "1.85" }}>
          Finally, we may also share your Personal Information to comply with
          applicable laws and regulations, to respond to a subpoena, search
          warrant or other lawful request for information we receive, or to
          otherwise protect our rights.
        </p>
      </>
    ),
  },

  {
    title: "BEHAVIOURAL ADVERTISING",
    content: (
      <>
        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          As described above, we use your Personal Information to provide you
          with targeted advertisements or marketing communications we believe
          may be of interest to you.
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          For more information about how targeted advertising works, you can
          visit the Network Advertising Initiative’s (“NAI”) educational page at{" "}
          <a
            href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-1 fw-600"
            style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
          </a>
          .
        </p>

        <p className="text-light-2 mb-15" style={{ lineHeight: "1.85" }}>
          You can opt out of targeted advertising by visiting the following
          pages:
        </p>

        <div className="d-flex flex-column y-gap-12 mb-20">
          {[
            {
              label: "FACEBOOK",
              desc: "https://www.facebook.com/settings/?tab=ads",
            },
            {
              label: "GOOGLE",
              desc: "https://www.google.com/settings/ads/anonymous",
            },
            {
              label: "BING",
              desc: "https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads",
            },
          ].map((item, i) => (
            <div key={i} className="d-flex x-gap-15">
              <Square />
              <p className="text-light-2" style={{ lineHeight: "1.8" }}>
                <span className="fw-700 text-dark-1">{item.label} – </span>
                <a
                  href={item.desc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-1 fw-600"
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    wordBreak: "break-word",
                  }}
                >
                  {item.desc}
                </a>
              </p>
            </div>
          ))}
        </div>

        <p className="text-light-2" style={{ lineHeight: "1.85" }}>
          Additionally, you can opt out of some of these services by visiting
          the Digital Advertising Alliance’s opt-out portal at{" "}
          <a
            href="http://optout.aboutads.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-1 fw-600"
            style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            http://optout.aboutads.info/
          </a>
          .
        </p>
      </>
    ),
  },

  {
    title: "DO NOT TRACK",
    content: (
      <p className="text-light-2" style={{ lineHeight: "1.85" }}>
        Please note that we do not alter our Site’s data collection and use
        practices when we see a Do Not Track signal from your browser.
      </p>
    ),
  },

  {
    title: "YOUR RIGHTS",
    content: (
      <>
        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          If you are a European resident, you have the right to access personal
          information we hold about you and to ask that your personal
          information be corrected, updated, or deleted.
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          If you would like to exercise this right, please contact us through
          the contact information below.
        </p>

        <p className="text-light-2" style={{ lineHeight: "1.85" }}>
          Additionally, if you are a European resident we note that we are
          processing your information in order to fulfill contracts we might
          have with you (for example if you make an order through the Site), or
          otherwise to pursue our legitimate business interests listed above.
          Additionally, please note that your information will be transferred
          outside of Europe, including to Canada and the United States.
        </p>
      </>
    ),
  },

  {
    title: "DATA RETENTION",
    content: (
      <p className="text-light-2" style={{ lineHeight: "1.85" }}>
        When you place an order through the Site, we will maintain your Order
        Information for our records unless and until you ask us to delete this
        information.
      </p>
    ),
  },

  {
    title: "MINORS",
    content: (
      <p className="text-light-2" style={{ lineHeight: "1.85" }}>
        The Site is not intended for individuals under the age of 18.
      </p>
    ),
  },

  {
    title: "PHOTOS AND VIDEOS",
    content: (
      <p className="text-light-2" style={{ lineHeight: "1.85" }}>
        During your trip, photos or videos may be taken of you by your fellow
        travelers, your trip leader, Mawari representatives, or third-party
        activity operators. These images and videos may be used by Mawari to
        share with your travel group or for marketing purposes. However, if you
        do not wish to be included in photos or videos please advise your trip
        leader. While your agreement to be a part of photos and videos is
        included in your Mawari booking conditions, we will make every effort to
        exclude you from these at your request.
      </p>
    ),
  },

  {
    title: "THIRD-PARTY WIDGETS",
    content: (
      <p className="text-light-2" style={{ lineHeight: "1.85" }}>
        The Site and the App contain widgets and social media features,
        including our live-chat feature, our contact form, and the Facebook
        “like” button. These widgets and features collect your IP address, which
        page you are visiting, and may set a cookie to enable the feature to
        function properly. Widgets and social media features are either hosted
        by a third party or hosted directly. Your interactions with these
        features are governed by the privacy policy of the company providing it.
      </p>
    ),
  },

  {
    title: "HOW WE KEEP YOUR INFORMATION SECURE",
    content: (
      <>
        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          We have implemented various physical, electronic and managerial
          security procedures in order to protect your information and reduce
          the risk of loss and misuse, and from unauthorized access,
          modification, disclosure and interference.
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          The Site security is managed by <strong>Verisign, Inc.</strong> The
          privacy policy of Verisign can be found at{" "}
          <a
            href="https://www.verisign.com/en_US/privacy-center/index.xhtml"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-1 fw-600"
            style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            https://www.verisign.com/en_US/privacy-center/index.xhtml
          </a>
          .
        </p>

        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          We have put in place adequate procedures to deal with any actual or
          suspected personal information breach and will notify you and any
          applicable regulator of any data breach where we are legally required
          to do so.
        </p>

        <p className="text-light-2" style={{ lineHeight: "1.85" }}>
          Whilst we take all reasonable steps to ensure that your personal
          information is secure, we would ask you to be aware that the internet
          is inherently insecure, so please take precautions when disclosing any
          personal information online to us.
        </p>
      </>
    ),
  },

  {
    title: "CHANGES",
    content: (
      <p className="text-light-2" style={{ lineHeight: "1.85" }}>
        We may update this privacy policy from time to time in order to reflect,
        for example, changes to our practices or for other operational, legal or
        regulatory reasons.
      </p>
    ),
  },

  {
    title: "CONTACT US",
    content: (
      <>
        <p className="text-light-2 mb-20" style={{ lineHeight: "1.85" }}>
          For more information about our privacy practices, if you have
          questions, or if you would like to make a complaint, please contact us
          by e-mail at{" "}
          <strong>
            <a
              href="mailto:travel@mawaritravel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-1 fw-600"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              travel@mawaritravel.com
            </a>
          </strong>{" "}
          or by mail using the details provided below:
        </p>

        <p className="text-light-2" style={{ lineHeight: "1.85" }}>
          <strong>#400 - 601 W Broadway Vancouver, BC V5C 4Z2</strong>
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyBody() {
  return (
    <section className="layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-9 col-lg-10 col-12">
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
          </div>
        </div>
      </div>
    </section>
  );
}
