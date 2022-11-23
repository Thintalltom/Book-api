import React,{useState, useEffect} from 'react'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
const Login = () => {
    const navigate = useNavigate()
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const [loginStatus, setLoginstatus] = useState('')
    const Login = () => {
        Axios.post('http://localhost:4001/auth', {
            username: username,
            password: password
        }).then((response) => {
            //function for login
           if(response.data.message) {
               setLoginstatus('wrong user')
           } else {
               navigate('/dashboard')
           }});
    }

    
  return (
    <Container fluid>
    <Row className='ddflex'>

        <Col className='aliC p-5'>
            <h5 className='text-center'>Welcome to BookR</h5>
            <h5 className='text-center'>Login</h5>
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
            <Button onClick={Login}>Login</Button>
            </Form>
        </Col>
    </Row>
  <div>
      <h1>{loginStatus}</h1>
  </div>
</Container>
  )
}

export default Login