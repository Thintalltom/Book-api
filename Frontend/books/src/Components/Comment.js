import React,{useState, useEffect, useContext} from 'react'
import Axios from 'axios'

import {Button} from 'react-bootstrap'
const Comment = () => {

    const[header, setHeader] = useState('')
    const[title, setTitle] = useState('')

    const getTitle = (e) => {
        setTitle(e.target.value) 
      }
      
      const getHeader = (e) => {
        setHeader(e.target.value) 

      }

    const addData = (e) => {
        e.preventDefault()

        let formData = new FormData();
        formData.append("header", header)
        formData.append("title", title)
        Axios.post('http://localhost:4001/comment', formData).then(response =>{
          response.json()
        }) 
      }

   
      

  return (
    <div>
          <h6>Comment</h6>
          <div>
          <div>
           <label>Title of book</label> <br />
           <input type='text' placeholder='Name of the book' value={header} onChange={ getHeader} className='titleblock' /> <br />
          </div>

          <div>
           <label>Comment</label><br />
           <input type='text' placeholder='Comment' value={title} onChange={getTitle} className='titleblock'  /> <br />
          </div>
          <div className='mt-4 p-4'>
          <button className='btn-dark' onClick={addData}>Add Comment</button>
          </div>
         
          </div>
       </div>
  )
}

export default Comment