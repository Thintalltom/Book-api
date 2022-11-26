import React from 'react'
import {Container} from 'react-bootstrap'

const Creator = () => {
  return (
   <Container>
       <form className='gap-5 p-5' >
           <label>Title of book</label> <br />
           <input type='text' placeholder='Name of the book' /> <br />

           <label>Author</label><br />
           <input type='text' placeholder='Author of the book' /> <br />


           <label>image of book</label> <br />
           <input type='file' placeholder='Name of the book' /> 


       </form>
   </Container>
  )
}

export default Creator