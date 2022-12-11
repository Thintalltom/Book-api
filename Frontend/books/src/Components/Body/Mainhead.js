import React from 'react'
import { Container, Button } from 'react-bootstrap'
import bookcover from '../../Pictures/bookcover2.jpg'
import {Link} from 'react-router-dom'
import '../book.css'
const Mainhead = () => {
  return (
    <Container className='mainheadCont' >
        <div className='d-flex gap-5 mainhead'>
            <div>
                    <h1 className='change'>
                    A <span>Book</span> <br /> Can Change <br /> Your Life
                    </h1> 
                    <p className='fw-light'>
                        Bookr brings the perfection to you through free learning and <br />  reading of books as said book enlighten a person
                    </p>
                    <div>
                      <Link to='/signup'>
                      <Button className='me-3 signBtn border-none'>Register </Button>
                      </Link>
                       
                        <Button className='text-dark btn-white border-dark bg-white loginbtn'>Log in </Button>
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