import CommonHero from '@/components/common/CommonHero'
import FlightsFaq from '@/components/pages/flights/FlightsFaq'
import React from 'react'

export default function FlightsPage() {
  return (
    <>
    <CommonHero
    title="Flights"
    subtitle="Best Deals on Flights"
    image="/heroimg/flights.jpg"
    breadcrumb="Flights"
    />
    <FlightsFaq/>
    </>
  )
}
