import React, {useState} from 'react'
import { Waypoint} from 'react-waypoint'
import Header  from './header.js'
import { SectionFeatures } from './section-features'
import SectionMeals from './section-meals'
import SectionSteps from './section-steps'  
import SectionCities from './section-cities'  
import SectionTestimonials from './section-testimonials'
import SectionPlans from './section-plans'
import SectionForm from './section-form'
import Footer from './footer'

export  default function HomePage() {
        const [floatingNav, setFloatingNav] = useState(false)
       return  <div>
                        <Header floatingNav= {floatingNav} />
                        <Waypoint 
                                onEnter={()=> setFloatingNav(false)}
                                onLeave={()=> setFloatingNav(true)} 
                                /> 
                        <SectionFeatures />
                        <SectionMeals />
                        <SectionSteps/>
                        <SectionCities/>
                        <SectionTestimonials  />
                        <SectionPlans />
                        <SectionForm />
                        <Footer />
        
              </div>
            
}


