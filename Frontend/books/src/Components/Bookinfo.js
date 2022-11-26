import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import './book.css'
const Bookinfo = () => {
    const [books, setBooks] = useState([])

    const getBook = async () => {
        const response = await fetch('http://localhost:4001/books').then
        (response => response.json())
        setBooks(response)
      }

      useEffect(() => {
        getBook()
      }, [])
      
  return (
    <div className='mt-4'>
          <div className='container'>
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
    </div>
  )
}

export default Bookinfo