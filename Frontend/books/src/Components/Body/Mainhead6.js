import React, {useState} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import book from '../../Pictures/bookcover2.jpg'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import '../book.css'
const Mainhead6 = () => {  
    const Book = [
        {
            image:'https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg',
            text:'it is a beautiful app that lallows for easy reading by users and makes it easy to study',
            name:'John kelly'
        },
        {
            image:'https://cdn.pixabay.com/photo/2017/11/02/14/36/model-2911363__340.jpg',
            text:'it is a beautiful app that lallows for easy reading by users and makes it easy to study, it is a beautiful app that lallows for easy reading by users and makes it easy to study',
            name:'trip'
        },
        {
            image:'https://cdn.pixabay.com/photo/2017/11/02/14/36/model-2911363__340.jpg',
            text:'it is a beautiful app that lallows for easy reading by users and makes it easy to study,it is a beautiful app that lallows for easy reading by users and makes it easy to study',
            name:'stone'
        },
        {
            image:'https://cdn.pixabay.com/photo/2017/11/02/14/36/model-2911363__340.jpg',
            text:'it is a beautiful app that lallows for easy reading by users and makes it easy to study,it is a beautiful app that lallows for easy reading by users and makes it easy to study',
            name:'kelvin'
        },
        {
            image:'https://cdn.pixabay.com/photo/2017/11/02/14/36/model-2911363__340.jpg',
            text:'it is a beautiful app that lallows for easy reading by users and makes it easy to study, it is a beautiful app that lallows for easy reading by users and makes it easy to study',
            name:'dollar'
        },
    ]

    const Footer = [
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
    <Container className='mt-5'>
        <div className='float-right'>
        <Button onClick={prevSlides} className='text-white bg-dark border-white'><BsFillArrowLeftCircleFill /></Button>
                <Button onClick={nextSlides} className='text-white bg-dark border-white'><BsFillArrowRightCircleFill /></Button>
        </div>
        
        <div className='mt-5'>
        <div>
          <h5 className='text-center fw-bold'>Book Reviews</h5>
            <div className='slider text-center'>
                {Book.map((book, index) => (
                    <>
                    {index === current && (
                    <div className='align-item-center d-flex changecolor'> 
                    <div className='align-item-center justify-content-center d-flex'>
                    <img src={book.image} className='bookimge'/> 
                    </div>
                    <div>
                    <p className='text-center fw-light'>{book.text}</p>
                    <h5 className='fst-italic fw-light'> --{book.name}</h5>
                    </div>
                    </div>
                    )}
                    </>
                ))}
            </div>
            </div>
        </div>
       

       <div className='d-flex  moveup'>
           <h3 className='fw-light'>Subscribe for <br /> New Books Update </h3>
           <div className='mx-3'>
           <input type='text' placeholder='Subscribe...' className='textinfo'/>
            <button className='subbtn fw-light'>Subscribe</button>
           </div>
       </div>

       <div className='darkt'>     
       <div className='d-flex justify-content-around container-fluid  disp'>      
                {Footer.map((footer) => (
                    <div className='text-white  textxx'>
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
                    </div>
                ))}
                </div> 
       </div>
    </Container>
  )
}

export default Mainhead6