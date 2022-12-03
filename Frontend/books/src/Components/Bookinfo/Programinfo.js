import React,{useState, useEffect} from 'react'
import {Container, Button} from 'react-bootstrap'
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom'
const Programinfo = () => {
const [bookinfo, setBookinfo] = useState([])
const location = useLocation()
const navigate = useNavigate()
//.pathname to get the pathname
  const idbook2= location.pathname.split('/')[2]
  
  const getBook = async (idbook2) => {
    try {
       await axios.get('http://localhost:4001/mainbooks/'+idbook2).then((response) => { 
        setBookinfo(response)
        console.log(response)
        console.log(bookinfo) 
        navigate('/dashboard')}) 
    } catch (error) {
        console.log(error)
    }
}
  useEffect(() => {
    getBook()
  }, [])
  

  return (
    <Container>
      <h1>hello</h1>
    </Container>
  )
}

export default Programinfo
