import React,{useEffect, useState} from 'react'
import axios from 'axios'
const Genres = () => {
    const [genres, setGenres] = useState([])
const getGenres = async () => {
    const response = await  fetch('http://localhost:4001/genres').then(response => response.json()) 
    setGenres(response)
    console.log(response)
}
    useEffect(() => {
     getGenres()
      }, [])
  return (
    <div>
        {genres.map((gen) => {
            return <div> 
                <h1>{gen.name}</h1>
            <img src={gen.img} />
            </div>
            
})}
        <h1>hello</h1>
    </div>
  )
}

export default Genres