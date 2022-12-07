import React,{useState, useEffect} from 'react'
import {Container, Tab, Tabs} from 'react-bootstrap'
import '../book.css'
import Bookinfo from '../Bookinfo'
import Genresinfo from '../Genresinfo'

const Mainhead3 = () => {  
 

  return (
    <Container>
        <div className='popular'>
        <h1 className='text-center'>Popular Collections</h1>
        <p className='text-center'>
        Bookr brings the perfection to you through free learning and <br />  
            reading of books as said book enlighten a person
        </p>
        </div>

    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Books">
        <Bookinfo />
      </Tab>
      <Tab eventKey="profile" title="Genres">
        <Genresinfo />
      </Tab>
    </Tabs>   
     
  
    </Container>
  )
}

export default Mainhead3