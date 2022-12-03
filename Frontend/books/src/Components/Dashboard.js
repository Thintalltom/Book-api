import React,{useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {Container, Button, Col, Row} from 'react-bootstrap'
import Genres from './Genres'
import Bookss from './bookss'
import Pbooks from './Pbooks'
import './book.css'
const Dashboard = () => {
    const navigate = useNavigate()
    const [genre, setGenre] = useState('')

    const getGenres = async () => {
      const response = await fetch('http://localhost:4001/maingenres').then
      (response => response.json())
      setGenre(response)
 
      
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
           <Link to='/creator'>
           Creator
           </Link> 
         </li>

         <li>
           <a>
             <Link to='/login'>
             <Button className='btn-danger'>
                Log out
             </Button>
             </Link>
           </a>
         </li>
       </ul>
     </div>

     <Container fluid>
       <div>
        <Genres />
       </div>
       <div className='mt-3 mb-3'>
         <input type='text' placeholder='Search for book' className='w-50 ' />
         <button>Search</button>
       </div>
       <div>
      <Bookss />
       </div>
       <div>
         <Pbooks />
       </div>
     </Container>
     

   </div>
  )
}

export default Dashboard