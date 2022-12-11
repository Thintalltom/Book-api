import React,{useState, useContext, useEffect} from 'react'
import {BookContext} from './Context/BookContext'
import Axios from 'axios'
import axios from 'axios'

const Review = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4001/comment').then(response => {
            setReview(response)
            console.log(response)
        })
    }, [])
    
  return (
    <div>Review</div>
  )
}

export default Review