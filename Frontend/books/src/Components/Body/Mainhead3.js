import React,{useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import '../book.css'
import Bookinfo from '../Bookinfo'
import Genresinfo from '../Genresinfo'

const Mainhead3 = () => {  
 const[tabstate,setTabstate] = useState(1)

 const action = (index) => {
   setTabstate(index)
   
 }
 

  return (
    <Container>
        <div className='popular'>
        <h1 className='text-center'>Popular Collections</h1>
        <p className='text-center fw-light'>
        Bookr brings the perfection to you through free learning and <br />  
            reading of books as said book enlighten a person
        </p>
        </div>

    <div className='box' >
      <div className='tabsbtn d-flex justify-content-around'>
        <div onClick={() => action(1)} className={`${tabstate === 1 ? 'tab active-tab fw-light' : 'tab fw-light'}`}>
      Books
        </div>


        <div onClick={() => action(2)}  className={`${tabstate === 2 ? 'tab active-tab fw-light' : 'tab fw-light'}`}>
       Genres
        </div>
      </div>


      <div className='contents'>
      <div className={`${tabstate===1 ? 'content active-content fw-light': 'content fw-light'}`}> 
      <Bookinfo />
      </div>


      <div className={`${tabstate===2 ? 'content active-content': 'content'}`}> 
      <Genresinfo />
      </div>

      </div>

    </div>
     
  
    </Container>
  )
}

export default Mainhead3