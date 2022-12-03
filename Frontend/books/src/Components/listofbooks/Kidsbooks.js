import React, {useState, useEffect} from 'react'
import { Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../book.css'

const Kidsbooks = () => {
    const [kidsbooks, setKidbooks] = useState([])


    const getKids = async () => {
      const response = await  fetch('http://localhost:4001/mainbooks/kids').then((response) =>  response.json())
      setKidbooks(response)
     
     
    }
    useEffect(() => {
    getKids()
    }, [])
  return (
    <Container>
         <div className='d-flex'>
    {kidsbooks.map((prog) => (
        <div key ={prog.idkid}>
           <img src={prog.image} alt='book'  className='proimg'/> 
           <h6 className='pbook'>{prog.Author}</h6>
           <p className='pbook'>{prog.title}</p>
           <Link to={`/kid/${prog.idkid}`}> <Button>View</Button></Link>
        </div>
    ))}
    </div>
    </Container>
  )
}

export default Kidsbooks