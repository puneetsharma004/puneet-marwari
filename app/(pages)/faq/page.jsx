import CommonHero from '@/components/common/CommonHero'
import Faq from '@/components/pages/destinations/Faq'
import Link from 'next/link'
import React from 'react'


export default function FaqPage() {
  return (
    <>
    <CommonHero title="Frequently Asked" subtitle="We're Here to Help" breadcrumb="FAQ" image="/heroimg/faq.png" italicTitle="Questions"/>
      <div className='container layout-pt-lg'>
        {/* Intro */}
        <p className="text-14 text-light-2" style={{ lineHeight: "1.85" }}>
          Here are some of our most common FAQs. If you still have any questions that aren’t covered below, please contact us{" "}
          <Link href="/contact" className="text-dark-1 fw-600"
            style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
            here
          </Link>
          {" "}(or refer to the governmental sources above) if you have a current
          concern, and be aware of the{" "}
          <Link href="/flights" className="text-dark-1 fw-600"
            style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
            'Flights' page
          </Link>
          {" "}that relate to your travel with us.
        </p>
      </div>
    <Faq/>  
    </>
  )
}
