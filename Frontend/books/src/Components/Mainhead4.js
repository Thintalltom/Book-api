import React from 'react'
import {Container,Row, Col} from 'react-bootstrap'
import people from '../Pictures/people.png';

const Mainhead4 = () => {
    const price = [
        {
            src:'https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673__340.jpg',
            number: '1,10,121++',
            info: 'Happy Customer'
        },
        {
            src:'https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMGNvbGxlY3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            number: '50,000+',
            info: 'Book Collections'
        },
        {
            src:'https://images.unsplash.com/photo-1527908290749-8c9518e0db09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9vayUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            number: '1,200+',
            info: 'Our Stores'
        },
        {
            src: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMHdyaXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 
            number: '350+',
            info: 'Famous Writer'
        }

    ]
  return (
    <Container> 
        <Row>
            {price.map((price) => (
                 <Col>
                 <div className='text-center' key={price.number}>
                     <img src= {price.src} alt='' height='250' width ='250' />
                    <h3> {price.number}</h3>
                    <p> {price.info}</p> 
                 </div>
                 </Col>
            ))}
           
        </Row>
    </Container>
  )
}

export default Mainhead4