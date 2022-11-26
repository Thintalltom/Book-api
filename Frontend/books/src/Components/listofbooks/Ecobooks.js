import React, {useState, useEffect}  from 'react'
import { Container} from 'react-bootstrap'
import '../book.css'

const Ecobooks = () => {
    const [ecobooks, setEcobooks] = useState([])


    const getEco = async () => {
      const response = await  fetch('http://localhost:4001/mainbooks/economics').then((response) =>  response.json())
      setEcobooks(response)
      console.log(response)
     
    }
    useEffect(() => {
    getEco()
    }, [])
  return (
    <Container>
              <div className='d-flex'>
    {ecobooks.map((prog) => (
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

export default Ecobooks