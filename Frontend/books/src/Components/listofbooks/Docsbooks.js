import React,{useState, useEffect} from 'react'
import {Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Docsbooks = () => {
  const [docsbooks, setDocbooks] = useState([])


  const getDocs = async () => {
    const response = await  fetch('http://localhost:4001/mainbooks/documentary').then((response) =>  response.json())
    setDocbooks(response)
   
   
  }
  useEffect(() => {
  getDocs()
  }, [])
  return (
    <Container>
             <div className='d-flex'>
    {docsbooks.map((prog) => (
        <div key ={prog.iddocumentary}>
           <img src={prog.image}  className='proimg'/> 
           <h6 className='pbook'>{prog.Author}</h6>
           <p className='pbook'>{prog.title}</p>
           <Link to={`/Docs/${prog.iddocumentary}`}> <Button>View</Button></Link>
        </div>
    ))}
    </div>
    </Container>
  )
}

export default Docsbooks