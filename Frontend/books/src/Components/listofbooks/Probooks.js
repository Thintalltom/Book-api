import React, {useState, useEffect} from 'react'
import { Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../book.css'
const Probooks = () => {
    const [progbooks, setProgbooks] = useState([])

    const getProg = async () => {
      const response = await  fetch('http://localhost:4001/mainbooks').then((response) =>  response.json())
      setProgbooks(response)
    }
    useEffect(() => {
    getProg()
    }, [])
    
  return (
    <Container>
    <div className='d-flex gap-4'>
    {progbooks.map((prog) => (
        <div key={prog.idbook2}>
           <img src={prog.image} alt='program'  className='proimg'/> 
           <p className='fw-normal'>Title: <span className='fw-light'>{prog.title}</span></p>
           <h6 className='fst-italic'>Author: {prog.Author}</h6>
           <Link to={`/program/${prog.idbook2}`}> <Button className='btn-danger'>View</Button></Link>
        </div>
    ))}
    </div>
    </Container>
  )
}

export default Probooks