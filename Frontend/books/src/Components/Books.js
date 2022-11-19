import React, {useEffect, useState} from 'react'
import { Button } from '@mui/material'
import {Container, Navbar, Nav} from 'react-bootstrap'
import axios from 'axios'
import { BsFillBookFill } from "react-icons/bs";
import './book.css'
const Books = () => {
const [bookData, setBookdata] = useState([{}])

    useEffect(() => {
    axios.get('http://localhost:4000/books').then((response) => setBookdata(response.data))
     
  }, [])
  
  return (
    
   <Container fluid>
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Book<span className='text-danger'>R</span></Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>helllo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>

   </Container>
    
  )
}

export default Books