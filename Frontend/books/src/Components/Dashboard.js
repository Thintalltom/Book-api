import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {Container, Button, Col, Row} from 'react-bootstrap'
import Genres from './Genres'
import Bookss from './bookss'
import './book.css'
const Dashboard = () => {
    const navigate = useNavigate()
    const [genre, setGenre] = useState('')

    const getGenres = async () => {
      const response = await fetch('http://localhost:4001/maingenres').then
      (response => response.json())
      setGenre(response)
      console.log(response)
      
    }
  useEffect(() => {
      getGenres()
       }, [])
  return (
   < div className='d-flex'>
     <div className='topbar'>
       <div className='p-3 bookr shadow-sm'>
         <h5>Book<span className='text-danger'> R</span></h5>
       </div>
       <ul className='gap-5 text-dark'>
         <li>
           <a href='#'>
              Genres
           </a>
         </li>

         <li>
           <a href='#'>
             Books
           </a>
         </li>


         <li>
           <a href='#'>
             Creator Mode
           </a>
         </li>

         <li>
           <a>
             <Button className='btn-danger'>
                Log out
             </Button>
           </a>
         </li>
       </ul>
     </div>

     <Container fluid>
       <div>
        <Genres />
       </div>
       <div>
      <Bookss />
       </div>
     </Container>
     

   </div>
  )
}

export default Dashboard