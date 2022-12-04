import React, {useState, useEffect}  from 'react'
import { Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../book.css'

const Ecobooks = () => {
    const [ecobooks, setEcobooks] = useState([])


    const getEco = async () => {
      try{
      const response = await  fetch('http://localhost:4001/economic').then((response) =>  response.json())
      setEcobooks(response)
      }catch(error){
        console.log(error)
      }
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