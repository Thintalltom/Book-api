import React, {useState, useEffect} from 'react'
import './book.css'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import background from '..//Pictures/signup.png'
import {Link, useNavigate} from 'react-router-dom'
import Axios from'axios'
const Signup = () => {
    const[usernameReg, setusernameReg] = useState('')
    const[passwordReg, setpasswordReg] = useState('')
    const [loading, setLoading] = useState(false)
  
    const navigate = useNavigate()
    const Register = () => {
        Axios.post('http://localhost:4001/login', {
            username: usernameReg,
            password: passwordReg
        }).then((response) => {
          console.log(response)
          navigate('/login')
        });
    };

  
         useEffect(() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false)
          }, 2000)
        }, [])


  return (
    <Container fluid>
          {loading ? (
      <div className='loader-container'>
        <div className='spinner'></div>
      </div>
    ) : (
        <Row className='ddflex'>
            <Col>
            <img src={background} className='back' alt='background'/>
            </Col>

            <Col className='aliC p-5'>
                <h5 className='text-center'>Welcome to BookR</h5>
                <h5 className='text-center'>Register</h5>
                <Form>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setusernameReg(e.target.value)}} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={(e) => {setpasswordReg(e.target.value)}} />
                </Form.Group>

                <p>If already have an account 
                    <Link to='/login'>
                    login
                    </Link></p>
                <Button onClick={Register}>Sign up</Button>
                </Form>
            </Col>
        </Row>
    )
}
      
    </Container>
  )
}

export default Signup