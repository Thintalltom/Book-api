import React from 'react'
import { Container, Button } from 'react-bootstrap'
import bookcover from '../Pictures/bookcover2.jpg'
import './book.css'
const Mainhead = () => {
  return (
    <Container className='mainheadCont' >
        <div className='d-flex gap-5 mainhead'>
            <div>
                    <h1>
                    A <span>Book</span> <br /> Can Change <br /> Your Life
                    </h1> 
                    <p>
                        Bookr brings the perfection to you through free learning and <br />  reading of books as said book enlighten a person
                    </p>
                    <div>
                        <Button className='me-3 signBtn border-none'>Sign Up </Button>
                        <Button className='text-dark btn-white border-dark bg-white'>Log in </Button>
                    </div>
            </div>
            <div className='bookCont'>
          <div className='book-img'>
          
          <img src={bookcover}  className=" bookimg"/>
          </div>
            </div>
            
        </div>
    </Container>
  )
}

export default Mainhead