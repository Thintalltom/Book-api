import React,{useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './book.css'
const Mainhead3 = () => {
  const [books, setBooks] = useState([])

  const getBook = async () => {
    const response = await fetch('http://localhost:4001/books').then
    (response => response.json())
    console.log(response)
    setBooks(response)
  }

  useEffect(() => {
    getBook()
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
          <Row>
            {books.map((book) => (
                 <div className='col-4 '>
                 <div className='card border-white'>
                   <img src={book.img}  className=' cardimmg'/> 
                   <div className='card-body'>
                     <p className='card-text'>{book.title}</p>
                     <h6 className='card-text'> Author: {book.Author} </h6>
                   </div>
                 </div>
                 </div>
            ))}
          </Row>
        </div>
       
    </Container>
  )
}

export default Mainhead3