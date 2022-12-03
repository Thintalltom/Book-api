import React, {useState, useEffect}  from 'react'
import { Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../book.css'

const Ecobooks = () => {
    const [ecobooks, setEcobooks] = useState([])


    const getEco = async () => {
      const response = await  fetch('http://localhost:4001/mainbooks/economics').then((response) =>  response.json())
      setEcobooks(response)
   
     
    }
    useEffect(() => {
    getEco()
    }, [])
  return (
    <Container>
              <div className='d-flex'>
    {ecobooks.map((prog) => (
        <div key={prog.ideconomic}>
           <img src={prog.image}  className='proimg'/> 
           <h6 className='pbook'>{prog.Author}</h6>
           <p className='pbook'>{prog.title}</p>
           <Link to={`/Document/${prog.ideconomic}`}> <Button>View</Button></Link>
        </div>
    ))}
    </div>
    </Container>
  )
}

export default Ecobooks