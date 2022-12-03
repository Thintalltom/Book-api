import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import './book.css'
import {Link} from 'react-router-dom'
const Genres = () => {
    const [genres, setGenres] = useState([])
const getGenres = async () => {
    const response = await  fetch('http://localhost:4001/maingenres').then(response => response.json()) 
    setGenres(response)
  
}
    useEffect(() => {
     getGenres()
      }, [])

      const showInfo = (id) => {
        axios.get('http://localhost:4001/maingenres/'+id)
    }
  return (
<Container fluid>
<h5 className='pbook'>Genres</h5>
<div className='d-flex gap-3 mt-3'>
        {genres.map((gen) => {
            return <div key={gen.id}> 
            <img src={gen.Image} className='genimg' />
            <h6 className='pbook'>{gen.Name}</h6>
            <Link to={`/inform/${gen.id}`}><button>View</button></Link>
            </div>
})}
    </div>
</Container>

  )
}

export default Genres