import React, {useState, useEffect} from 'react'
import { Container} from 'react-bootstrap'
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
        <div>
           <img src={prog.image}  className='proimg'/> 
           <h6 className='pbook'>{prog.Author}</h6>
           <p className='pbook'>{prog.title}</p>
        </div>
    ))}
    </div>
    </Container>
  )
}

export default Probooks