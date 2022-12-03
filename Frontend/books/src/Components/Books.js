import React, {useEffect, useState} from 'react'
import { Button } from '@mui/material'
import {Container, Navbar, Nav} from 'react-bootstrap'
import axios from 'axios'
import { BsFillBookFill } from "react-icons/bs";
import './book.css'
import Mainhead from './Body/Mainhead';
import Mainhead2 from './Body/Mainhead2';
import Mainhead3 from './Body/Mainhead3';
import Mainhead4 from './Body/Mainhead4';
import Mainhead5 from './Body/Mainhead5';
import Mainhead6 from './Body/Mainhead6';
const Books = ({slides}) => {
const [bookData, setBookdata] = useState([{}])

    useEffect(() => {
    axios.get('http://localhost:4000/books').then((response) => setBookdata(response.data))
     
  }, [])
  
  return (
    
   <Container fluid>
    <>
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">bookR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className='border-white'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-5 navtext">
            <Nav.Link href="#home" className='navtext'>Home</Nav.Link>
            <Nav.Link href="#link" className='navtext'>About Us</Nav.Link>
            <Nav.Link href="#link"className='navtext'>Shop </Nav.Link>
            <Nav.Link href="#link"className='navtext'>Blog </Nav.Link>
            <Nav.Link href="#link" className='navtext'>Contact Us</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    <Container>
    <Mainhead />
    <Mainhead2 />
    <Mainhead3 />
    <Mainhead4 />
    <Mainhead5 />
    <Mainhead6 slides={slides}/>
    </Container>
   </Container>
    
  )
}

export default Books