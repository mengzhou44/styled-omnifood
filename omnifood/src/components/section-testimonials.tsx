import styled from 'styled-components'
import { primaryColor } from '../styles/variables'



interface  TestimonialsProps {
    background: string
}


const Testimonials = styled.section<TestimonialsProps>`
      padding: 80px 0; 
      background-image: linear-gradient(rgba(0,0,0, 0.8), rgba(0,0,0,0.8)), url(${(props: any)=> props.background});
      background-size: cover; 
      background-position: center; 
      background-attachment: fixed; 
      color: white; 

      blockquote  {
          padding: 2%; 
          line-height: 145%;
          font-style: italic;
          position: relative;
      }

      blockquote:before {
        
        font-size: 500%;
        display: block;
        position: absolute;
        top: -5px;
        left: -5px;
     }

      cite {
         margin-top: 30px; 
         font-size: 80%;
         img {
             height: 45px; 
             width: auto; 
             margin-right: 10px; 
             border-radius: 50%;
             vertical-align: middle;
         }
      }

`


export default function SectionTestimonials() {
     return  <Testimonials background='./images/back-customers.jpg'>
             <div className='row'>
                <h2>Our customers can't live without us</h2>
           </div>

           <div className='row'>
                <div className='col span-1-of-3 box'>
                     <blockquote>
                     Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                     </blockquote>
                     <cite> 
                         <img src='./images/customer-1.jpg' alt='customer1' />
                        Alberto Duncan
                     </cite>
                </div>
                <div className='col span-1-of-3 box'>
                     <blockquote>
                     Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
                     </blockquote>
                     <cite>
                     <img src='./images/customer-2.jpg' alt='customer2' />
                       Joana Silva
                     </cite>
                </div>

                <div className='col span-1-of-3 box'>
                     <blockquote>
                     I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!  
                     </blockquote>
                       <cite>
                       <img src='./images/customer-3.jpg' alt='customer3' />
                       Milton Chapman
                       </cite>
                </div>
            </div>
     </Testimonials>
}