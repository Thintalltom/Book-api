import React,{useState, useEffect} from 'react'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import background from '..//Pictures/login.png'
import Axios from 'axios'
const Login = () => {
    const navigate = useNavigate()
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const [loginStatus, setLoginstatus] = useState('')
    // making an axios post to the database to post on auth
    Axios.defaults.withCredentials = true;
    const Login = () => {
        Axios.post('http://localhost:4001/auth', {
            username: username,
            password: password
        }).then((response) => {
            if(response.data.message){
                setLoginstatus(response.data.message)
            }
            else
            {
                navigate('/dashboard')
            }
        });
    }

    useEffect(() => {
        Axios.get('http://localhost:4001/auth').then((response) =>{
            if(response.data.loggedIn == true){
                setLoginstatus(response.data.user[0].username)
            }
        })
    }, [])
    
  return (
    <Container fluid>
    <Row className='ddflex'>
   <Col>
   
   <img src={background} className='back' alt='background'/>
   </Col>
        <Col className='aliC p-5'>
            <h5 className='text-center'>Welcome to BookR</h5>
            <h5 className='text-center'>Login</h5>

     <div>
      <h6 className='text-danger text-center'>{loginStatus}</h6>
  </div>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setUsername(e.target.value)}} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" onChange={(e) => {setPassword(e.target.value)}} />
            </Form.Group>

            <p>If already have an account login</p>
            <Button className='btn-warning' onClick={Login}>Login</Button>
            </Form>
        </Col>
    </Row>
  
</Container>
  )
}

export default Login