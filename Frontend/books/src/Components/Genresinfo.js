import React,{useState, useEffect} from 'react'
import './book.css'
import {Container} from 'react-bootstrap'
const Genresinfo = () => {
    const [genres, setGenres] = useState([])

    const getGenres = async () => {
        const response = await fetch('http://localhost:4001/genres').then
        (response => response.json())
        setGenres(response)
        console.log(response)
      }
    
      useEffect(() => {
        
        getGenres()
      }, [])
  return (
    <Container>

    <div className='d-flex gap-5 side'>
      {genres.map((gen) => (
          <div>
          <div className='text-dark' key={gen.id}>
            <img src={gen.img} alt='image not present' className='books'/> 
              <p>{gen.name}</p>
          </div>
          </div>
      ))}
    </div>
  </Container>
  )
}

export default Genresinfo