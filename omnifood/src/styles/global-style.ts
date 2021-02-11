import { createGlobalStyle } from 'styled-components'

import {fontFamily, primaryColor} from './variables'
 
const GlobalStyle = createGlobalStyle`
  *{
      padding: 0px; 
      margin: 0px; 
      box-sizing: border-box;
  }
  html{
     color: #555; 
     font-family: ${fontFamily};
     font-size: 20px; 
     font-weight:300;
     text-rendering: optimizeLegibility;
  }

  section {
     padding: 80px 0; 
  }

  .row {
    max-width: 1140px;
    margin: 0px auto;
  }
  
  h1, h2, h3 { 
     font-weight: 300; 
     text-transform: uppercase; 
  }

  h1 {
     color: #fff;
     font-size: 200%;
     letter-spacing: 1px;
     word-spacing: 3px; 
  }

  h2 {
     font-size: 160%;
     letter-spacing: 1px;
     word-spacing: 2px; 
     text-align: center;
  }

  h2:after {
        display: block;
        height: 2px; 
        background-color: ${primaryColor};
        content: '';
        width: 100px;
        margin: 0 auto;
        margin-top: 30px; 
  }

  h3 {
    font-size: 110%large;
  }

  .icon-small {
        margin-right: 3px; 
        display: inline-block;
        width: 30px; 
        text-align:center;
        color: ${primaryColor};
        font-size: 120%;
   }

  .clearfix {zoom: 1;}
  .clearfix:after {
    content: '.';
    clear: both;
    display: block;
    height: 0;
    visibility: hidden;
  }

`

export default GlobalStyle