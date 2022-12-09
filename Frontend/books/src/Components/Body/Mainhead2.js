import React from 'react'
import {Container, Button} from 'react-bootstrap'
import BOOK from '../../Pictures/bookcover2.jpg'
import '../book.css'
const Mainhead2 = () => {
  return (
   <Container>
       <div className='d-flex world gap-5 container'>
         <div>
           <img src={BOOK} alt='photo' className='poto1' />
           <img src={BOOK} alt='photo' className='poto' />
           <div className='d-flex gap-5 moleft'>
           <div className=' bsucc'> 
            <h1> 50+ </h1>
            <p>Years <br /> experience</p>
           </div>
           <p>Comics and drama</p>
           </div>
         
         </div>
        <div className='best'>
            <h1>Book World is Best <br /> 
            Choice For Learners
            </h1>
            <p className='fw-light'>
            Bookr brings the perfection to you through free learning and <br />  
            reading of books as said book enlighten a person
            </p>
            <Button className='contact'>Contact Us</Button>
        </div>
       </div>
   </Container>
  )
}

export default Mainhead2