import CommonHero from '@/components/common/CommonHero'
import Evolution from '@/components/pages/about/Evolution'
import Hero from '@/components/pages/about/Hero'
import Team from '@/components/pages/about/Team'
import React from 'react'

export default function AboutMawari() {
  return (
    <>
    
          <CommonHero title="About Mawari" subtitle="Our Story" image="/heroimg/about-us.jpg" breadcrumb="About Mawari" />
          <Team />
          <Evolution />
    </>
  )
}
