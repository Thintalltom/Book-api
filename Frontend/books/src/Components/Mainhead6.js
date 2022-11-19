import React, {useState} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import book from '../Pictures/bookcover2.jpg'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import './book.css'
const Mainhead6 = () => {  
    const Book = [
        {
            image:'https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg',
            text:'it is a beautiful app that lallows for easy reading by users and makes it easy to study',
            name:'John kelly'
        },
        {
            image:'https://cdn.pixabay.com/photo/2017/11/02/14/36/model-2911363__340.jpg',
            text:'it is a beautiful app that lallows for easy reading by users and makes it easy to study',
            name:'trip'
        },
        {
            image:'https://cdn.pixabay.com/photo/2017/11/02/14/36/model-2911363__340.jpg',
            text:'it is a beautiful app that lallows for easy reading by users and makes it easy to study',
            name:'stone'
        },
        {
            image:'https://cdn.pixabay.com/photo/2017/11/02/14/36/model-2911363__340.jpg',
            text:'it is a beautiful app that lallows for easy reading by users and makes it easy to study',
            name:'kelvin'
        },
        {
            image:'https://cdn.pixabay.com/photo/2017/11/02/14/36/model-2911363__340.jpg',
            text:'it is a beautiful app that lallows for easy reading by users and makes it easy to study',
            name:'dollar'
        },
    ]

    const Footer = [
        {
            header:'About Us', 
            info: 'About us',
            info2: 'About us',
            info3: 'About us',
            info4: 'About us',
            info5: 'About us',
    },
    {
        header:'Information', 
        info: 'About us',
        info2: 'Delivery',
        info3: 'Privacy',
        info4: 'Terms and Condition',
        info5: 'Log in ingo',
    },

    {
        header:'Our Policy', 
        info: 'Gallery',
        info2: 'Brands',
        info3: 'Gift ',
        info4: 'Contribuitions',
        info5: 'Our partners',
    },

    {
        header:'Information', 
        info: 'About us',
        info2: 'About us',
        info3: 'About us',
        info4: 'About us',
        info5: 'About us',
    },
    ]
    const[current, setCurrent] = useState(0)
    const length = Book.length
    const nextSlides = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlides = () => {
        setCurrent(current === length - 1 ? 0 : current - 1)
    }
   
    if(!Array.isArray(Book) || Book.length <= 0)
    {
        return null
    }
  return (
    <Container>
        <div className='float-right'>
        <Button onClick={prevSlides} className='text-white bg-dark border-white'><BsFillArrowLeftCircleFill /></Button>
                <Button onClick={nextSlides} className='text-white bg-dark border-white'><BsFillArrowRightCircleFill /></Button>
        </div>
        
        <div className='d-flex  rotate mt-5 shadow-sm'>
            <div className='outside'>
                <img src={book} width={250} />
            </div>
        <div>
          <h5>Book Reviews</h5>
            <div className='slider'>
            <Row>
                {Book.map((book, index) => (
                    <>
                    {index === current && (
                        <div className=''>
                    <div className='col hodl card' style={{ width: '18rem' }}>
                    <div className='card-body'> 
                        <img src={book.image} className='card-img' /> 
                    <p className='card-text'>{book.text}</p>
                    <h6 className='card-title'> {book.name}</h6>
                    </div>
                    </div>
                    </div>
                    )}
                    </>
                ))}
                </Row>
            </div>
            </div>
        </div>
       

       <div className='d-flex bg-sucess moveup'>
           <h3>Subscribe for <br /> New Books Update </h3>
           <div >
           <input type='text' placeholder='subscribe'/>
            <button className='subbtn'>Subsrcibe</button>
           </div>
       </div>

       <div className='darkt'>
            <Row>
                
                {Footer.map((footer) => (
                    <Col className='text-white'>
                    <h6>{footer.header}</h6>
                    <p>
                        {footer.info}
                    </p>
                    <p>
                        {footer.info2}
                    </p>
                    <p>
                        {footer.info3}
                    </p>
                    <p>
                        {footer.info4}
                    </p>
                    <p>
                        {footer.info5}
                    </p>
                    </Col>
                ))}
                
            </Row>
       </div>
    </Container>
  )
}

export default Mainhead6