import React,{useEffect} from 'react'
import {Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../book.css'
const Docsbooks = ({docsbooks, getDocs}) => {
  
  useEffect(() => {
  getDocs()
  }, [])
  return (
    <Container>
             <div className='d-flex gap-3  holder'>
    {docsbooks.map((prog) => (
        <div key ={prog.iddocumentary}>
           <img src={prog.image}  className='proimg'/> 
           <p className='fw-normal'> Title: <span className='fw-light'>{prog.title}</span></p>
           <h6 className='fst-italic'> Author: {prog.Author}</h6>
           <Link to={`/Document/${prog.iddocumentary}`}> <Button className='btn-danger'>View</Button></Link>
        </div>
    ))}
    </div>
   
    </Container>
  )
}

export default Docsbooks