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
    <div className='d-flex'>
    {progbooks.map((prog) => (
        <div key={prog.idbook2}>
           <img src={prog.image} alt='program'  className='proimg'/> 
           <h6 className='pbook'>{prog.Author}</h6>
           <p className='pbook'>{prog.title}</p>
           <Link to={`/program/${prog.idbook2}`}> <Button>View</Button></Link>
        </div>
    ))}
    </div>
    </Container>
  )
}

export default Probooks