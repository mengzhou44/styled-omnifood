import styled from 'styled-components'

const Wrapper = styled.footer`
       padding: 20px 0; 
       background-color: #333;
       font-size: 80%;
      
      a {
        color: #888;
        text-decoration: none;
        border: 0px; 
        transition: color 0.2s; 

         &:hover {
            color: #ddd;
         }
      }

      ul {
     
          list-style-type: none;
      }

     li {
          display: inline-block;
          margin: 0 10px; 
      }

      li:last-child {
          margin-right: 0px; 
      }

      ul.social-links {
          text-align: right;
      }

     .copyright {
          padding-bottom: 10px;
          color: #888;
          text-align: center; 
          font-size: 80%;
    }

    i {
        transition: color .2s;
        font-size: 140%;
    }
    
    .ion-social-facebook:hover {
        color: #3b5998;
    }

    .ion-social-twitter:hover {
        color: #00aced;
    }

    .ion-social-googleplus:hover {
        color: #dd4b39;
    }

    .ion-social-instagram:hover {
        color: #517fa4;
    }


`


export default function Footer() {
    return <Wrapper>
        <div className='row'>
           <div className='col span-1-of-2'>
              <ul className='nav'>
                  <li>
                      <a href='#'>About Us </a> 
                  </li>
                  <li>
                  <a href='#'>Blog</a> 
                  </li>
                  <li>
                  <a href='#'>Press</a> 
                  </li>
                  <li>
                  <a href='#'>iOS App</a> 
                  </li>
                  <li>
                  <a href='#'>Android App</a> 
                  </li>
              </ul>
           </div>
            <div className='col span-1-of-2'>
                <ul className='social-links'>
                        <li>
                        <a href='#'><i className='ion-social-facebook'></i></a> 
                        </li>
                        <li>
                        <a href='#'><i className='ion-social-twitter'></i></a> 
                        </li>
                        <li>
                        <a href='#'><i className='ion-social-googleplus'></i></a> 
                        </li>
                        <li>
                        <a href='#'><i className='ion-social-instagram'></i></a> 
                        </li>
                  </ul>
           </div>
        </div>
        <div className='copyright'>
             Copyright © 2021   Easy Express Solutions Inc.
        </div>
    </Wrapper>
} 