import { createGlobalStyle } from 'styled-components'

import {fontFamily} from './variables'
 
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

  .row {
    max-width: 1140px;
    margin: 0px auto;
  }
  
  h1 {
     margin: 0px; 
     color: #fff;
     font-size: 200%;
     font-weight: 300; 
     text-transform: uppercase;
     letter-spacing: 1px;
     word-spacing: 3px; 
  }

`

export default GlobalStyle