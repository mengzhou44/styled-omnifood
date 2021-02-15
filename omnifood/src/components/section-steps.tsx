import { useState } from 'react';
import styled from 'styled-components'
import {primaryColor} from '../styles/variables';
import {Waypoint} from 'react-waypoint'

const Steps = styled.section`

      .steps-box:nth-child(1) {
          text-align: right;
          padding-right: 3%;
          margin-top: 30px;
          img {
              width: 40%;
          }
      }

      .steps-box:nth-child(2){
          padding-left: 3%;
          margin-top: 60px; 
      }

      .step:last-of-type {
         margin-bottom: 80px; 
      }
      
      .step {
          margin-bottom: 30px; 
      }

      .step div {
          color: ${primaryColor};
          border: 2px solid ${primaryColor};
          height: 40px;
          width: 40px; 
          border-radius: 50%;
          text-align:center;
          display: inline-block;
          padding: 5px; 
          float: left;
          margin-right: 10px; 
      }

      .steps-box a img {
          height: 45px; 
          width: auto;
      }

      @media only screen and (max-width: 1023px) {
        
         .steps-box:nth-child(1) {
             text-align: center;
             img {
                width: 50%;
            }
          }

         .steps-box:nth-child(2){
            padding-left: 0;
            margin-top: 40px; 
         }
         .step:last-of-type {
            margin-bottom: 60px; 
        }

        .steps-box a img {
            height: 35px; 
            width: auto;
         }

         .step div {
            padding: 10px;
         }

     }

     .waypoint {
         opacity: 0;
     }

     .waypoint.animated {
         opacity: 1;
         animation-duration:1s; 
     }
`

export default function  SectionSteps() {
    const [enterZone, setEnterZone] = useState(false)

    function getImageClass() {
         if (enterZone === true) {
             return 'waypoint animated fadeInUp'
         }
    
         return 'waypoint'
    }
    
     return  <Steps id='works'>
           
          <div className='row'>
              <h2>How it works  &mdash; Simple as 1, 2, 3</h2>
          </div>
          <div className='row'>
              <div className='col span-1-of-2 steps-box'>
              <Waypoint topOffset={100} onEnter={()=> setEnterZone(true)}
               />

                  <img  className={getImageClass()} src='./images/app-iPhone.png' alt='download' />
              </div>
              <div className='col span-1-of-2 steps-box'>
                  <div className='step'>
                     <div>1</div>
                      <p>Choose the subscription plan that best fits your needs and sign up today.
                      </p>
                  </div>
                  <div className='step'>
                  <div>2</div>
                      <p>Order your delicious meal using our mobile app. Or you can even call us!
                      </p>
                  </div>
                  <div className='step'>
                  <div>3</div>
                      <p>Enjoy your meal after less than 20 minutes. See you the next time!
                      </p>
                  </div>
                  <a href='#'><img src='./images/download-app.svg' alt='app store'></img></a>
                  <a href='#'><img src='./images/download-app-android.png' alt='android store'></img></a>
              </div>
          </div>
     </Steps>
}