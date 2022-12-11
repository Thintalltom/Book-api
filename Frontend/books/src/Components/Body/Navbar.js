import React, {useState} from'react'
import './Navbar.css'
import {IoMdClose,IoMdMenu } from "react-icons/io";
import  book from '../../Pictures/book.png'
const Navbar = () => {
const menuitems = [
    {
        title: 'Home',
        link: '/',
        cName: 'nav-links'
    },

    {
        title: 'About Us',
        link: '/',
        cName: 'nav-links'
    },

    {
        title: 'Shop',
        link: '/',
        cName: 'nav-links'
    },

    {
        title: 'Blog',
        link: '/',
        cName: 'nav-links'
    },

    {
        title: 'Contact us',
        link: '/',
        cName: 'nav-links'
    },
]

const [click, setClick] = useState(false)

const handleClick = () => {
    setClick(!click)
}
  return (
    <nav className='NavbarItems'>
        <h4 className='navbar-logo'>BookR </h4>
        <div className='menu-icon' onClick={handleClick}>
        {click ? <IoMdClose className='fa-times' />  : <IoMdMenu className='fa-bars' /> }   
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {menuitems.map((menu, index) => (
                <li key={index}>
                    <a className={menu.cName} href={menu.link}>
                        {menu.title}
                    </a>
                </li>
            ))}
        </ul>
     
    </nav>
  )
}

export default Navbar