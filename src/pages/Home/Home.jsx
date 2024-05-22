import React from 'react'
import IntroSection from './IntroSection'
import StatisticsSection from './StatisticSection'
import Service from './Service'
import MapSection from './MapSection'
import AboutUs from './AboutUs'
import Partners from './Partners'
import Dashbord from './Dashbord'
import WorkProcess from './WorkProcess'
import Testimonials from './Testimonials'


function Home() {
  return (
    <div>
        <IntroSection />
        <StatisticsSection />
        <Service />
        <MapSection />
        <AboutUs />
        <Partners />
        <Dashbord />
        <WorkProcess />
        <Testimonials />
        
    </div>
  )
}

export default Home