import React,{useState, useEffect} from 'react'
import {Container, Alert} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import './book.css'

const Creator = () => {
const[title, setTitle] = useState('')
const[author, setAuthor] = useState('')
const[file, setFile] = useState()
const[filename, setFileName] = useState('')
const navigate = useNavigate()


const getTiltle = (e) => {
  setTitle(e.target.value ) 

}

const getAuthor = (e) => {
  setAuthor(e.target.value ) 

}


const getImage = (e) => {
  setFile(e.target.files[0])
  setFileName(e.target.files[0].name)
}


const addInfo = (e) => {
  let formData=new FormData();
  formData.append("file",file)
  formData.append("filename",filename)
  formData.append("title",title)
  formData.append("author",author)
  Axios.post('http://localhost:4001/addbook',formData,{
      headers: {'Content-Type': 'multipart/form-data'}
    }).then(response =>{
      console.log(response)
    navigate('/dashboard')
    }) 
 

}




  return (
   <Container>
       <div className='gap-5 titleform'>

         <h4 className='text-center'>Add New Book</h4>
         
        

         <div>
           <label>Title of book</label> <br />
           <input type='text' placeholder='Name of the book' value={title} className='titleblock'  onChange={getTiltle}/> <br />
          </div>

          <div>
           <label>Author</label><br />
           <input type='text' placeholder='Author of the book' value={author} onChange={getAuthor} className='titleblock'  /> <br />
          </div>

          <div className='f1box'>
           <label>Image of book</label> <br />
           <button className='file1'>
           <input type='file'   placeholder='Name of the book' onChange={getImage} multiple/> <br />
           </button>
          </div>

            <button onClick={addInfo} className='addbnn text-center'>ADD BOOK</button>
       </div>
    
   </Container>
  )
}

export default Creator