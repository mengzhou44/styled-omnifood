import styled from 'styled-components'


const Meals = styled.section`
      
      ul {
        list-style: none;
        width: 100%;
      }
      
      .box {
          overflow: hidden;
          display: inline-block;
          width: 25%;
          background-color: #000;
          margin: 0px; 
      }

      img {
          opacity: 0.7;
          width: 100%;
          height:auto;
          cursor: pointer;
          transform: scale(1.15);
          transition: transform 0.5s;
          &:hover {
            transform: scale(1.03);
            opacity: 1; 
          }
      }
`

export default function SectionMeals() {

     return <Meals>
         <ul className='row clearfix'>
                <div className='box'> <figure><img src='./images/1.jpg' alt='Yammy'/></figure> </div>
                <div className='box'> <figure><img src='./images/2.jpg' alt='Yammy'/></figure> </div>
                <div className='box'> <figure><img src='./images/3.jpg' alt='Yammy'/></figure> </div>
                <div className='box'> <figure><img src='./images/4.jpg' alt='Yammy'/></figure> </div>
         </ul>
         <ul className='row clearfix'>
                 <div className='box'> <figure><img src='./images/5.jpg' alt='Yammy'/></figure> </div>
                <div className='box'> <figure><img src='./images/6.jpg' alt='Yammy'/></figure> </div>
                <div className='box'> <figure><img src='./images/7.jpg' alt='Yammy'/></figure> </div>
                <div className='box'> <figure><img src='./images/8.jpg' alt='Yammy'/></figure> </div>

         </ul>
     </Meals>
}
