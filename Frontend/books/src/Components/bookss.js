import React, {useState, useEffect} from 'react'
import { Container} from 'react-bootstrap'
import Probooks from './listofbooks/Probooks'
import Kidsbooks from './listofbooks/Kidsbooks'
import Ecobooks from './listofbooks/Ecobooks'
import Docsbooks from './listofbooks/Docsbooks'

const Bookss = () => {
 
  return (
    <Container fluid>
        <h5>List of Books</h5>

        <Container fluid>
          <h6 className='fst-italic mt-5'>Programming Books</h6>
          <div className='mt-3'>
          <Probooks />
          </div>
          
          <h6 className='fst-italic mt-5'>Kids Books</h6>
          <div className='mt-3'>
          <Kidsbooks />
          </div>

          <h6 className='fst-italic mt-5'>Economics Books</h6>
          <div className='mt-3'>
          <Ecobooks />
          </div>

          <h6 className='fst-italic mt-5'>Documentary Books</h6>
          <div className='mt-3'>
          <Docsbooks />
          </div>

        </Container>
    </Container>
  )
}

export default Bookss