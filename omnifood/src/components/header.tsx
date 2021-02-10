import React from 'react'
import styled from 'styled-components'
import Button  from './shared/button'
import {primaryColor} from '../styles/variables'

interface HeaderProps {
    background: string
}

const Wrapper = styled.header<HeaderProps>`
     background-image: linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0,0.7)), url(${(props: any)=> props.background});
     background-size: cover;
     background-position: center;
     height: 100vh;

     .text-box {
        position: absolute; 
        width: 1140px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
     }

    h1 {
        margin-bottom: 20px; 
    }

    ul {
        float: right;
        list-style: none;
        margin-top: 55px;
    }
   
    .logo {
        height: 100px;
        width: auto;
        float: left;
        margin-top: 20px;
    }

    li {
        display: inline-block;
        margin-left: 40px;
        
     }

     li a { 
         text-decoration: none; 
         margin-left:20px; 
         color: #fff;
         text-transform: uppercase;
         font-size: 90%;
         transition: border-bottom 0.2s; 
         border-bottom: 2px solid transparent;
         padding: 8px 0px; 
         &:link, &:visited {
         }  

         &:hover, &:active{
           border-bottom: 2px solid ${primaryColor} 
        } 
     } 
`

 
export  default function Header() {
       return  <Wrapper background ='./images/hero.jpg'>
                
                 <div className='row'>
                        <img className='logo' src='./images/logo-white.png' alt='logo' />
                        <ul>
                                <li><a href='#'>Food delivery</a></li>
                                <li><a href='#'>How it works</a></li>
                                <li><a href='#'>Our cities</a></li>
                                <li><a href='#'>Sign up</a></li>
                        </ul>
                 </div>
                 

                <div className='text-box'>
                    <h1>Goodbye junk food. <br/> Hello super healthy meals.</h1>
                    <Button type='full'>I’m hungry </Button>
                    <Button type='ghost'>Show me more </Button>
                </div>
  </Wrapper>
        
}

 