import React from 'react'
import './book.css'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import background from '..//Pictures/signup.png'
const Signup = () => {
  return (
    <Container fluid>
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
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>

                <p>If already have an account login</p>
                <Button>Sign up</Button>
                </Form>
            </Col>
        </Row>
      
    </Container>
  )
}

export default Signup