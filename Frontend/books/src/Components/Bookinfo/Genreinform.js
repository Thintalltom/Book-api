import React, {useState, useEffect} from 'react'
import axios from'axios'
import Docsbooks from '../listofbooks/Docsbooks'
const Genreinform = () => {

    const showInfo = (e) => {
        axios.get('https://book-app-mysql.herokuapp.com/maingenres/')
    }
  return (
    <div>
<Docsbooks />
    </div>
  )
}

export default Genreinform