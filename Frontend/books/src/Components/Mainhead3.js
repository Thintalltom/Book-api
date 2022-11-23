import React,{useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './book.css'

const Mainhead3 = () => {
  const [books, setBooks] = useState([])
  const [genres, setGenres] = useState([])
  const getBook = async () => {
    const response = await fetch('http://localhost:4001/books').then
    (response => response.json())
    setBooks(response)
    console.log(books)
  }

  const getGenres = async () => {
    const response = await fetch('http://localhost:4001/genres').then
    (response => response.json())
    setGenres(response)
    
  }

  useEffect(() => {
    getBook()
    getGenres()
  }, [])
  
  return (
    <Container>
        <div className='popular'>
        <h1 className='text-center'>Popular Collections</h1>
        <p className='text-center'>
        Bookr brings the perfection to you through free learning and <br />  
            reading of books as said book enlighten a person
        </p>
        </div>


        <div className='container'>
          <h4>Popular Books</h4>
          <div className='d-flex side gap-5'>
            {books.map((book) => (
                 <div>
                 <div className='text-dark' key={book.id}>
                   <img src={book.image} alt='image not present' className='books'/> 
                     <p>{book.title}</p>
                     <h6> Author: {book.Author} </h6>
                 </div>
                 </div>
            ))}
          </div>
        </div>

        <Container>
          <h4>Genres</h4>
          <Row>
            {genres.map((gen) => (
              <Col key={gen.id}>
                <div className='card border-white'>
                <img src={gen.img} className='card-img' />
                <div className='card-body'>
                <p className='card-text'>{gen.name}</p>
                </div>
                </div>
            
              
              </Col>
            ))}

          </Row>
        </Container>
       
    </Container>
  )
}

export default Mainhead3