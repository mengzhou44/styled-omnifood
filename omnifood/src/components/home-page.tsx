import React from 'react'
import Header from './header'
import { SectionFeatures } from './section-features'
import SectionMeals from './section-meals'
import SectionSteps from './section-steps'  
import SectionCities from './section-cities'  
import SectionTestimonials from './section-testimonials'
import SectionPlans from './section-plans'
export  default function HomePage() {
       return  <div>
               <Header />
               <SectionFeatures />
               <SectionMeals />
               <SectionSteps/>
               <SectionCities/>
               <SectionTestimonials  />
               <SectionPlans />
              </div>
            
}

 