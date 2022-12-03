import React, {useState, useEffect} from 'react'
import axios from'axios'
const Genreinform = () => {

    const showInfo = (e) => {
        axios.get('http://localhost:4001/maingenres/')
    }
  return (
    <div>
<h1>genre info</h1>
    </div>
  )
}

export default Genreinform