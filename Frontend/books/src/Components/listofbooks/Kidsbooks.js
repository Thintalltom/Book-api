import React, {useState, useEffect} from 'react'
import { Container} from 'react-bootstrap'
import '../book.css'

const Kidsbooks = () => {
    const [kidsbooks, setKidbooks] = useState([])


    const getKids = async () => {
      const response = await  fetch('http://localhost:4001/mainbooks/kids').then((response) =>  response.json())
      setKidbooks(response)
      console.log(response)
     
    }
    useEffect(() => {
    getKids()
    }, [])
  return (
    <Container>
         <div className='d-flex'>
    {kidsbooks.map((prog) => (
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

export default Kidsbooks