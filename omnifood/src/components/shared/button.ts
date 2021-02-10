import styled from 'styled-components'

import {primaryColor} from '../../styles/variables'

const Button = styled.a`

     display: inline-block;
     padding: 10px 30px; 
     font-weight: 300; 
     text-decoration: none; 
     border-radius: 200px; 
     margin-right: 10px; 
     cursor: pointer;

     ${(props: any) => {

         switch( props.type) {
              case 'full':
                   return `
                         background-color: ${primaryColor};
                         border: 1px solid ${primaryColor};
                         color: #fff;
                         &:hover, &:active {
                              background-color: #cf6d17;
                         }
                   `
               default: 
                  return `
                         border: 1px solid ${primaryColor};
                         color: #e67e22;
                         transition: background-color 0.2s;

                         &:hover, &:active {
                              background-color: #cf6d17;
                              color: #fff;
                          }
                  
                  `
         }

     }}

     &:link, &:visited {
         
     }       
`

export default Button 