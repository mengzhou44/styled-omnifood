import {memo} from 'react'
import styled from 'styled-components'

import  {primaryColor} from '../styles/variables'
 
const Cities = styled.section`
     h2 {
         margin-bottom: 30px; 
     }

     h3 {
         margin-bottom: 20px; 
     }

     img {
         width: 100%;
         height: auto;
         margin-bottom: 15px;
     }

     .box {     
         padding: 1%;
      }

     .box div  {
        margin-bottom: 5px; 
        display: flex; 
        align-items: center;
        justify-content: flex-start;
     }


     a:link, a:visited {
         color: ${primaryColor};
         text-decoration: none;
         border-bottom: 1px solid ${primaryColor};
         transition: border-bottom .2s, color .2s;
     }

     a:active, a:hover {
            color: #555;
            border-bottom: transparent;
     }

     @media only screen and (max-width: 1023px) {
        .icon-small {
            width: 17px; 
            margin-right: 5px; 
        }
     }

`

const SectionCities = function () {
      return <Cities   id='cities' >
           <div className='row'>
                <h2>We're currently in these cities</h2>
           </div>
   
           <div className='row'>
            <div className='col span-1-of-4 box'>
                <img src='./images/lisbon-3.jpg' alt=''/>
                <h3>Lisbon</h3>
                <div>
                   <i className='ion-ios-person icon-small'></i>
                    1600+ happy eaters
                </div>
                 <div>
                    <i className='ion-ios-star icon-small'></i>
                        60+ top chefs
                 </div>
                <div>
                    <i className='ion-social-twitter icon-small'></i>
                     <a href='#'>@omnifood_lx</a>
                </div>
            </div>

            <div className='col span-1-of-4 box'>
                <img src='./images/san-francisco.jpg' alt=''/>
                <h3> San Francisco</h3>
                <div>
                   <i className='ion-ios-person icon-small'></i>
                   3700+ happy eaters
                </div>
                 <div>
                    <i className='ion-ios-star icon-small'></i>
                    160+ top chefs
                 </div>
                <div>
                        <i className='ion-social-twitter icon-small'></i>
                        <a href='#'>@omnifood_sf</a>
                </div>
            </div>

            <div className='col span-1-of-4 box'>
                <img src='./images/berlin.jpg' alt=''/>
                <h3>Berlin</h3>
                <div>
                   <i className='ion-ios-person icon-small'></i>
                   2300+ happy eaters
                </div>
                 <div>
                    <i className='ion-ios-star icon-small'></i>
                        110+ top chefs
                   </div>
                <div>
                    <i className='ion-social-twitter icon-small'></i>
                     <a href='#'>@omnifood_berlin</a>
                </div>
            </div>

            <div className='col span-1-of-4 box'>
                <img src='./images/london.jpg' alt=''/>
                <h3>London</h3>
                <div>
                   <i className='ion-ios-person icon-small'></i>
                   1200+ happy eaters
                </div>
                 <div>
                    <i className='ion-ios-star icon-small'></i>
                    50+ top chefs
                 </div>
                <div>
                        <i className='ion-social-twitter icon-small'></i>
                        <a href='#'>@omnifood_london</a>
                </div>
            </div>
           </div>

      </Cities>
}

export default memo(SectionCities)