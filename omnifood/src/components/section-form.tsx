import React from 'react'
import Button from './shared/button'
import styled from 'styled-components'
 


const Form = styled.section`
    h2 {
        margin-bottom: 30px; 
    }

    form {
        width: 60%;
        margin: 0 auto;
        padding: 15px;
    }

    input[type=email], 
    input[type=text], 
    select,
    textArea {
        width: 100%;
        padding: 7px; 
        border-radius: 3px; 
        border: 1px solid  #ccc;
    
    }

    input[type=checkbox] {
        margin: 10px 5px 10px 0 !important;
    }

    .button {
        display: block; 
        text-align: center; 
        margin-right: 0px;
    }
  
 

   @media only screen and (max-width: 1023px) {
        form {
            width: 70%;
        }
     }

    @media only screen and (max-width: 767px) {
        form {
            width: 90%;
        }
        
     }

`


export default function SectionForm() {
      return <Form>
          <div className='row'>
              <h2>We're happy to hear from you</h2>
          </div>
         
            <form method='post' action='/'>
            <div className='row'>
               <div className='col span-1-of-3'>
                   <label htmlFor='name' >Name:</label>
               </div>
                <div className='col span-2-of-3'>
                   <input type='text' name='name' id='name' placeholder='Your name' required></input>
               </div>
               </div>

            <div className='row'>
               <div className='col span-1-of-3'>
                   <label htmlFor='email'>Email</label>
               </div>
                <div className='col span-2-of-3'>
                   <input type='email' name='email'  id ='email' placeholder='Your email' required></input>
               </div>
               </div>

            <div className='row'>
               <div className='col span-1-of-3'>
                   <label htmlFor='findUs'>How did you find us?</label>
               </div>
                <div className='col span-2-of-3'>
                    <select name='findUs' id='findUs'>
                        <option value='friends'>Friends</option>
                        <option value='search' >Search Engine</option>
                        <option value='ad'>Advertisements</option>
                        <option value='other'>Other</option>
                    </select>
               </div>
               </div>
               <div className='row'>
               <div className='col span-1-of-3'>
                   <label>Newsletter?</label>
               </div>
                <div className='col span-2-of-3'>
                     <input type='checkbox' name='newsletter' /> Yes,  Please 
               </div>
               </div>

               <div className='row'>
               <div className='col span-1-of-3'>
                   <label htmlFor='message'>Drop us a line</label>
               </div>
                <div className='col span-2-of-3'>
                     <textarea   name='message' id='message' placeholder='Your Message'></textarea>
               </div>
               </div>
               <div className='row'>
               <div className='col span-1-of-3'>
                  
               </div>
                <div className='col span-2-of-3'>
                      <Button size='small' kind='ghost' className='button' >Send</Button> 
               </div>
               </div>
             </form>
         
      </Form>
}