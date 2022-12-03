import React,{useState, useEffect} from 'react'
import {Container, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './book.css'
const Pbooks = () => {
const [book, setBook] = useState([])
    
    const getBooks = async () => {
        const response = await  fetch('http://localhost:4001/addbook').then((response) =>  response.json())
        setBook(response)
       
      }
    useEffect(() => {
    getBooks()
    }, [])

    const handleDelete = async (addbookid) => {
        try {
           await axios.delete('http://localhost:4001/addbook/'+addbookid)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
  return (
      <Container>
        <h5>Your Own Publications</h5>
        {book == null &&  <h6>No book added yet</h6>}
        <div className='d-flex gap-4'>
        {book.map((book) => (
        <div key={book.idaddbook}>
            <img src={book.image} className='proimg'/>
            <h6 className='pbook'>{book.Author}</h6>
            <h6 className='pbook'>{book.title}</h6>
            <div className='d-flex gap-4 p-2'>
            <Button className='btn-danger' onClick={() => handleDelete(book.idaddbook)}>Remove</Button>
            <Link to={`/update/${book.idaddbook}`}> <Button>Edit</Button></Link>
            </div>
        </div>
         ))}
        </div>
  
    </Container>
  )
}

export default Pbooks