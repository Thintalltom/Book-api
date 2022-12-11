import React, {useState, useEffect} from 'react'
import { Container} from 'react-bootstrap'
import Probooks from './listofbooks/Probooks'
import Kidsbooks from './listofbooks/Kidsbooks'
import Ecobooks from './listofbooks/Ecobooks'
import Docsbooks from './listofbooks/Docsbooks'

const Bookss = ({kidsbooks, progbooks, getProg, getKids, ecobooks, getEco, getDocs, visited, setVisited, copy, setCopy, docsbooks}) => {
 
  return (
    <Container fluid>
        <h5>List of Books</h5>

        <Container fluid>
          <h6 className='fst-italic mt-5'>Programming Books</h6>
          <div className='mt-3'>
          <Probooks getProg={getProg} progbooks={progbooks}  visited={visited} setVisited={setVisited} copy={copy} setCopy={setCopy} />
          </div>
          
          <h6 className='fst-italic mt-5'>Kids Books</h6>
          <div className='mt-3'>
          <Kidsbooks kidsbooks={kidsbooks} getKids={getKids} />
          </div>

          <h6 className='fst-italic mt-5'>Economics Books</h6>
          <div className='mt-3'>
          <Ecobooks ecobooks={ecobooks} getEco={getEco} />
          </div>

          <h6 className='fst-italic mt-5'>Documentary Books</h6>
          <div className='mt-3'>
          <Docsbooks docsbooks={docsbooks} getDocs={getDocs}  />
          </div>

        </Container>
    </Container>
  )
}

export default Bookss