import React,{useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Visited from './Visited'
import Genres from './Genres'
import Bookss from './bookss'
import Pbooks from './Pbooks'
import './book.css'
import Topbar from './Topbar'
import Comment from './Comment'

const Dashboard = ({visited, setVisited, copy, setCopy}) => {
    const navigate = useNavigate()
    const [genre, setGenre] = useState('')
    const [loading, setLoading] = useState(false)
   
  


    const getGenres = async () => {
      const response = await fetch('http://localhost:4001/maingenres').then
      (response => response.json())
      setGenre(response)   
    }
  useEffect(() => {
      getGenres()
       }, [])

       useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      }, [])

      const [docsbooks, setDocbooks] = useState([])

      const getDocs = async () => {
        const response = await  fetch('https://book-app-mysql.herokuapp.com/documentary').then((response) =>  response.json())
        setDocbooks(response)
      }

      const [ecobooks, setEcobooks] = useState([])


      const getEco = async () => {
        try{
        const response = await  fetch('https://book-app-mysql.herokuapp.com/economic').then((response) =>  response.json())
        setEcobooks(response)
        }catch(error){
          console.log(error)
        }
      }


      const [kidsbooks, setKidbooks] = useState([])


      const getKids = async () => {
        const response = await  fetch('https://book-app-mysql.herokuapp.com/kidsbook').then((response) =>  response.json())
        setKidbooks(response)
       
       
      }


      const [progbooks, setProgbooks] = useState([])

      const getProg = async () => {
        const response = await  fetch('https://book-app-mysql.herokuapp.com/mainbooks').then((response) =>  response.json())
        setProgbooks(response)
      }

 


  return (
  <>
    {loading ? (
      <div className='loader-container'>
        <div className='spinner'></div>
      </div>
    ) : (
   <div className='d-flex'>

    <Visited />

     <Container fluid>

     <div  className='d-lg-none d-xl-none'>
     <Topbar />
     </div>

       <div>
        <Genres />
       </div>

  
       <div>
      <Bookss  getProg={getProg} progbooks={progbooks} kidsbooks={kidsbooks} getKids={getKids} ecobooks={ecobooks} getEco={getEco} docsbooks={docsbooks} getDocs={getDocs} vsited={visited} setVisited={setVisited} copy={copy} setCopy={setCopy} />
       </div>

       <div>
         <Pbooks />
       </div>

     </Container> 
   </div>
    )}
   </>
  )
}

export default Dashboard