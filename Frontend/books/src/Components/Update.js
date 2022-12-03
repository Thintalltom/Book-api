import React, { useState } from 'react'
import {Container} from 'react-bootstrap'
import {useLocation, useNavigate} from 'react-router-dom'
import Axios from'axios'
const Update = () => {
    const[title, setTitle] = useState('')
    const[author, setAuthor] = useState('')
    const[file, setFile] = useState()
    const[filename, setFileName] = useState('')
    
    
    // split to get the location of the id 
    // by using the readymade uselocation by react router
    const location = useLocation()
  //.pathname to get the pathname
    const bookId= location.pathname.split('/')[2]
    
    const navigate = useNavigate()
    
    const getTiltle = (e) => {
      setTitle(e.target.value ) 
      console.log(title)
    }
    
    const getAuthor = (e) => {
      setAuthor(e.target.value ) 
      console.log(author)
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
      Axios.put('http://localhost:4001/addbook/' +bookId,formData,{
          headers: {'Content-Type': 'multipart/form-data'}
        }).then(response =>{
          console.log(response)
          navigate('/dashboard')
        })
    }
    
    
    
    
      return (
       <Container>
           <div className='gap-5 titleform'>
             <h4 className='text-center'>Update New Book</h4>
      
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

export default Update