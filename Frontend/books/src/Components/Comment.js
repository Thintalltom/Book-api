import React,{useState, useEffect} from 'react'
import Axios from 'axios'

import {Button} from 'react-bootstrap'
const Comment = () => {

  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
   fetch(`http://localhost:4001/mainbooks/search?q=${query}`)
   .then(response => console.log(response.json()))
  }, [])
  

      

  return (
    <div>
          <input type='text' value={query} onChange={e => setQuery(e.target.value)} />
       </div>
  )
}

export default Comment