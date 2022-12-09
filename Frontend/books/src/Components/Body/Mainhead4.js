import React, {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import { FcConferenceCall, FcNews, FcShop, FcOk } from "react-icons/fc";
import people from '../../Pictures/people.png';
import '../book.css'

const Mainhead4 = () => {
    
    
  return (
    <Container className='mt-4 color p-4' fluid> 
    <h5 className='text-center fw-bold'>Our Services</h5>
        <div className='d-flex justify-content-around serve'>
            <div>
              <FcConferenceCall className='iconsify'/>
            <h3 className='fw-bold'>110,121+ </h3>
            <h6 className='fw-light'>Happy Customer</h6>
            </div>

            <div>
              <FcNews  className='iconsify' />
            <h3 className='fw-bold'>50,100+ </h3>
            <h6 className='fw-light'>Book Collection</h6>
            </div>


            <div>
             <FcShop className='iconsify' />
            <h3 className='fw-bold'>1,200+</h3>
            <h6 className='fw-light'>Our Stores</h6>
            </div>
        </div>
    </Container>
  )
}

export default Mainhead4