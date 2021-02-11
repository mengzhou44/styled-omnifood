import React from 'react'
import Button from './shared/button'
import styled from 'styled-components'
import { primaryColor } from '../styles/variables'

const Plans = styled.section`
     background-color: #f4f4f4;

     .plan-box {
        background-color: #fff;
        border-radius: 5px; 
       
        width: 90%;
        margin-left: 5%;
    }

    .plan-box div{
        padding: 15px; 
        border-bottom: 1px solid #eaeaea;
    }

    .plan-box div:last-child {
        text-align:center;
    }

    .plan-price {
        font-size: 200%;
        font-weight: 100; 
        margin-bottom: 10px; 
        color: ${primaryColor};
        span {
            font-size: 30%;
            font-weight: 300; 
        }
    }

    .plan-price-meal {
        font-size: 80%;
    }


     h2 {
         margin-bottom: 30px;
     }
     h3 {
        margin-bottom: 20px;
     }

    ul {
        list-style-type: none; 
    }

    li {
        padding: 5px 0;
        font-size: 80%;
    }
  
`

export default function SectionPlans() {
     return <Plans>
         <div className='row'>
             <h2>Start eating healthy today</h2>
         </div>
         <div className='row'>
              <div className='col span-1-of-3'>
              <div className='plan-box'>
                        <div>
                            <h3>Premium</h3>
                            <p className='plan-price'>$399 <span> / month</span></p>
                            <p className='plan-price-meal'>That's only $13.30 per meal</p>
                        </div>
                        <div>
                            <ul>
                                <li><i className='ion-ios-checkmark-empty icon-small'></i>1 meal every day</li>
                                <li><i className='ion-ios-checkmark-empty icon-small'></i>Order 24/7</li>
                                <li><i className='ion-ios-checkmark-empty icon-small'></i>Access to newest creations</li>
                                <li><i className='ion-ios-checkmark-empty icon-small'></i>Free delivery</li>
                            </ul>
                        </div>
                        <div>
                        <Button type='full'>Sign up now</Button>
                        </div>
              </div>
              </div>
              <div className='col span-1-of-3'>
              <div className='plan-box'>
                        <div>
                            <h3>Pro</h3>
                            <p className='plan-price'>$149 <span> / month</span></p>
                            <p className='plan-price-meal'>That’s only $14.90 per meal</p>
                        </div>
                        <div>
                            <ul>
                                <li><i className='ion-ios-checkmark-empty icon-small'></i>10 meals per month</li>
                                <li><i className='ion-ios-checkmark-empty icon-small'></i>Order 24/7</li>
                                <li><i className='ion-ios-checkmark-empty icon-small'></i>Access to newest creations</li>
                                <li><i className='ion-ios-checkmark-empty icon-small'></i>Free delivery</li>
                            </ul>
                        </div>
                        <div>
                             <Button type='ghost'>Sign up now</Button>
                        </div>
              </div>
              </div>
              <div className='col span-1-of-3'>
              <div className='plan-box'>
                        <div>
                            <h3>Starter</h3>
                            <p className='plan-price'>$19 <span>/ month</span></p>
                            <p className='plan-price-meal'>&nbsp;</p>
                        </div>
                        <div>
                            <ul>
                                <li><i className='ion-ios-checkmark-empty icon-small'></i>1 meal</li>
                                <li><i className='ion-ios-checkmark-empty icon-small'></i>Order from 8 am to 12 pm</li>
                                <li><i className='ion-ios-close-empty icon-small'></i></li>
                                <li><i className='ion-ios-checkmark-empty icon-small'></i>Free delivery</li>
                            </ul>
                        </div>
                        <div>
                            <Button type='ghost'>Sign up now</Button>
                        </div>
              </div>
              </div>
      </div>
     </Plans>
}