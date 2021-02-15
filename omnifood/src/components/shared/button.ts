import styled from 'styled-components'

import {primaryColor} from '../../styles/variables'

interface ButtonProps {
     size?: string
     kind: string
}

const Button = styled.button<ButtonProps>`

     display: inline-block;
     font-weight: 300; 
     text-decoration: none; 
     border-radius: 200px; 
     margin-right: 10px; 
     cursor: pointer;
     
     padding: ${(props: ButtonProps)=> {
           switch( props.size) {
                case 'small':
                   return '5px 30px' 
                default: 
                   return '10px 30px'
           }
     }};


     ${(props: ButtonProps)=> {
         switch( props.kind) {
              case 'full':
                   return `
                         background-color: ${primaryColor};
                         border: 1px solid ${primaryColor};
                         color: #fff;
                   `
               default: 
                  return `
                         border: 1px solid ${primaryColor};
                         color: #e67e22;
                         background-color: transparent;
                         transition: background-color 0.2s;

                         &:hover {
                              background-color: ${primaryColor};
                              color: #fefefe;

                         }
                  `
         }

     }}

      
`

export default Button 