import React, {useEffect, useState} from 'react'
import { Button } from '@mui/material'
import {Container} from 'react-bootstrap'
import axios from 'axios'
import { BsFillBookFill } from "react-icons/bs";
import './book.css'
import Mainhead from './Body/Mainhead';
import Mainhead2 from './Body/Mainhead2';
import Mainhead3 from './Body/Mainhead3';
import Mainhead4 from './Body/Mainhead4';
import Mainhead5 from './Body/Mainhead5';
import Mainhead6 from './Body/Mainhead6';
import Navbar from './Body/Navbar';
const Books = ({slides}) => {
const [bookData, setBookdata] = useState([{}])

    useEffect(() => {
    axios.get('http://localhost:4000/books').then((response) => setBookdata(response.data))
     
  }, [])
  
  return (
    <> 
   <Navbar />
    <Mainhead />
    <Mainhead2 />
    <Mainhead3 />
    <Mainhead4 />
    <Mainhead6 slides={slides}/>
    </>
    
  )
}

export default Books