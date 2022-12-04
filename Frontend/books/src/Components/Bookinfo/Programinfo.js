import React,{useState, useEffect} from 'react'
import {Container, Button} from 'react-bootstrap'
import axios from 'axios'
import '../book.css'
import {useLocation} from 'react-router-dom'
const Programinfo = () => {
const [bookinfo, setBookinfo] = useState([])
const [loading, setLoading] = useState(false)

 // by using the readymade uselocation by react router
 const location = useLocation()
 //.pathname to get the pathname
   const bookId= location.pathname.split('/')[2]
  const Getbook = async (e) => {
    try {
       await axios.get('http://localhost:4001/mainbooks/'+bookId).then((response) => { 
        setBookinfo(response.data.result) 
        console.log(response.data.result)
      }) 
    } catch (error) {
        console.log(error)
    }
}
  useEffect(() => {
    Getbook()
  }, [bookId])

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  
  return (
    <Container fluid>
      {loading ? (
        <div className='loader-container'>
          <div className='spinner'></div>
        </div>
      ) : (
      <Container>
       <h5 className='text-center fw-bold'>Book Details </h5>
     <div  className='align-center justify-center '>
     {bookinfo.map((book)=> (
     <div key={book.id}>
     <img src={book.image} className='econimage' alt='bookimage' /> 
     <h6 className='fw-bold'>Title: <span className='fw-light'>{book.title}</span></h6>
     <h6 className='fw-bold'>Description: <span className='fw-light'>{book.description}</span></h6>
     <p className='fst-italic'>-Author: {book.Author}</p>
     </div>
   ))}
   </div>
     </Container>
     )}
    </Container>
  )
}

export default Programinfo
