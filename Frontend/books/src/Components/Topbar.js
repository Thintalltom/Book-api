import React,{useState} from 'react'
import './Topbar.css'
import {IoMdClose,IoMdMenu } from "react-icons/io";
const Topbar = () => {

    const topmenu = [
        {
            title: 'Home',
            link: '/',
            cName: 'nav-links'
        },
    
        {
            title: 'Book',
            link: '/',
            cName: 'nav-links'
        },
    
        {
            title: 'Genres',
            link: '/',
            cName: 'nav-links'
        },
    
        {
            title: 'Creator',
            link: '/',
            cName: 'nav-links'
        },
    
        {
            title: 'Logout',
            link: '/',
            cName: 'nav-links'
        },
    ]

    
const [click, setClick] = useState(false)

const handleClick = () => {
    setClick(!click)
}

  return (
    <nav className='NavItems'>
    <div className='menu-icons' onClick={handleClick}>
    {click ? <IoMdClose className='fa-time' />  : <IoMdMenu className='fa-bar' /> }   
    </div>
    <ul className={click ? 'nav-menus active' : 'nav-menus'}>
        {topmenu.map((menu, index) => (
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

export default Topbar