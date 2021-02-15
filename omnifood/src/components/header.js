import React, {useState}  from 'react'
import {withRouter} from 'react-router'
import $ from 'jquery'

import styled from 'styled-components'
import Button  from './shared/button'
import {primaryColor} from '../styles/variables'
 

const Wrapper = styled.header`
     background-image: linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0,0.7)), url(${ props => props.background});
     background-size: cover;
     background-position: center;
     background-attachment: fixed; 
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

        height: 80px;
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

     .floating {
         position: fixed;
         top: 0;
         left:0; 
         right: 0;
         width: 100%;
         background-color:  rgba(255,255,255,.98);
         z-index: 1;
         box-shadow: 0 2px 2px #ccc;
         padding: 10px; 
         display: flex ;
         align-items: center; 
         justify-content: space-between;

         ul {
             margin: 0; 
         }

         .mobile-nav-icon { 
              margin-top: 0px; 
              color:  #333;
         }

         .mobile-nav-close { 
              margin-top: 0px; 
              color:  #333;
         }

         li a {
             color: #333;
         }

         .logo {
             height: 40px; 
             margin: 0px; 
         }
     }
     
     .mobile-nav-icon {
             display: none; 
             float:right; 
             margin-top: 40px; 
             color:  #fff;
             font-size: 150%;
             cursor: pointer; 
             padding: 5px; 
             font-weight: 100;
      }

      .mobile-nav-close {
                display: none; 
                float:right; 
                margin-top: 40px; 
                color:  #fff;
                font-size: 150%;
                cursor: pointer; 
                padding: 5px; 
                font-weight: 100;
      }

     @media only screen and (max-width: 1200px) {
        .text-box  {
            width: 100%;
            padding: 0 2%;
        }
     }

     @media only screen and (max-width: 1023px) {
        .text-box  {
            margin-top: 50px;
            text-align: center;
        }
     }

     @media only screen and (max-width: 767px) {
         .nav {
             ul{ 
                display: none;
             }
             .mobile-nav-icon { 
               display: block;
             }
         }

         .mobile-nav {
             ul {
                 margin-right:20px; 
             }
             li {
                 display:  block;
                 margin-bottom: 15px; 
             }
             .mobile-nav-close { 
                 display: block;
             }
            
         }

     }
`
 
const Header = function ({history, floatingNav}) {
     
      function renderLogoImage() {
            if (floatingNav === false) {
                return <img className='logo' src='./images/logo-white.png' alt='logo' />
            }
            return <img className='logo' src='./images/logo.png' alt='logo' />
       }

       function getFloatingClassName() {
           if (floatingNav === false)  return 'row'
           return 'floating'
       }

       return  <Wrapper background ='./images/hero.jpg'>
                 <div className={getFloatingClassName()}>
                        {renderLogoImage()}
                        <Navigator  history={history} />
                 </div>
                 
                <div className='text-box'>
                    <h1>Goodbye junk food. <br/> Hello super healthy meals.</h1>
                    <Button  kind='full' onClick={()=> {
                            navigateToSection('plans', history)
                    }}>I’m hungry </Button>
                    <Button kind='ghost' 
                     onClick={()=> {
                        navigateToSection('features', history)
                    }}
                    >          
                        Show me more </Button>
                </div>
                              
     </Wrapper>
        
}

function navigateToSection(section, history) {
    $('html, body').animate(
        {
            scrollTop: $(`#${section}`)?.offset()?.top
        },
        1000
    )
    history.push(`/#${section}`)
}


function  Navigator({history}) {
    const [showMobileNav, setShowMobileNav]  = useState(false)
    
    function getNavList() {
        return <>
                <li><a href='#' onClick={()=> navigateToSection('features', history)}>Food delivery</a></li>
                <li><a href='#works' onClick={()=> navigateToSection('works', history)}>How it works</a></li>
                <li><a href='#cities' onClick={()=> navigateToSection('cities', history)}>Our cities</a></li>
                <li><a href='#plans' onClick={()=> navigateToSection('plans', history)}>Sign up</a></li>
        </>
    }

    if (showMobileNav === false)  {
        return <nav className='nav'>
                <ul>
                    {getNavList()}
                    </ul>
                    <a className='mobile-nav-icon' onClick= {()=> setShowMobileNav(true)}><i className='ion-navicon-round'></i></a>
            </nav>
    }
    
return   <nav className='mobile-nav'>
             <a  className='mobile-nav-close' onClick= {()=> {
                 setShowMobileNav(false)
             }
                 
             }><i className='ion-close-round'></i></a>
             <ul>
                  {getNavList()}
             </ul>
      </nav>    
}


export default withRouter(Header)