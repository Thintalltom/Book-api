import React, {useState, useEffect, useContext}  from 'react'
import { Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {BookContext} from '../Context/BookContext'
import '../book.css'

const Ecobooks = ({ecobooks, getEco}) => {

    useEffect(() => {
    getEco()
    }, [])
  return (
    <Container>
              <div className='d-flex gap-3 holder'>
    {ecobooks.map((prog) => (
        <div key={prog.ideconomic}>
           <img src={prog.image}  className='proimg'/> 
           <p className='fw-normal'> Title: <span className='fw-light'>{prog.title}</span></p>
           <h6 className='fst-italic'> Author: {prog.Author}</h6>
           <Link to={`/Docs/${prog.ideconomic}`}> <Button className='btn-danger'>View</Button></Link>
        </div>
    ))}
    </div>
    </Container>
  )
}

export default Ecobooks