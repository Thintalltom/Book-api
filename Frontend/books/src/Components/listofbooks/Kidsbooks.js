import React, {useState, useEffect} from 'react'
import { Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../book.css'

const Kidsbooks = ({kidsbooks, getKids}) => {

    useEffect(() => {
    getKids()
    }, [])
  return (
    <Container>
         <div className='d-flex gap-3  holder'>
    {kidsbooks.map((prog) => (
        <div key ={prog.idkid}>
           <img src={prog.image} alt='book'  className='proimg'/> 
           <p className='fw-normal'>Title: <span className='fw-light'>{prog.title}</span></p>
           <h6 className='fst-italic'>Author: <span>{prog.Author}</span></h6>
           <Link to={`/kid/${prog.idkid}`}> <Button className='btn-danger'>View</Button></Link>
        </div>
    ))}
    </div>
    </Container>
  )
}

export default Kidsbooks