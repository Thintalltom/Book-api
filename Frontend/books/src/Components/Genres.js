import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import './book.css'
const Genres = () => {
    const [genres, setGenres] = useState([])
const getGenres = async () => {
    const response = await  fetch('http://localhost:4001/maingenres').then(response => response.json()) 
    setGenres(response)
  
}
    useEffect(() => {
     getGenres()
      }, [])
  return (
<Container fluid>
<h5 className='pbook'>Genres</h5>
<div className='d-flex gap-3 mt-3'>
        {genres.map((gen) => {
            return <div> 
            <img src={gen.Image} className='genimg' />
            <h6 className='pbook'>{gen.Name}</h6>
            </div>
})}
    </div>
</Container>

  )
}

export default Genres