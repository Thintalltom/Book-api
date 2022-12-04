import React,{useState, useEffect} from 'react'
import {Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Docsbooks = () => {
  const [docsbooks, setDocbooks] = useState([])


  const getDocs = async () => {
    const response = await  fetch('http://localhost:4001/documentary').then((response) =>  response.json())
    setDocbooks(response)
    console.log(response)
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
           <p className='fw-normal'> Title: <span className='fw-light'>{prog.title}</span></p>
           <h6 className='fst-italic'> Author: {prog.Author}</h6>
           <Link to={`/Document/${prog.iddocumentary}`}> <Button className='btn-danger'>View</Button></Link>
        </div>
    ))}
    </div>
    </Container>
  )
}

export default Docsbooks