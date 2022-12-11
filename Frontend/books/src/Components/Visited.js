import React, {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import {IoMdMenu } from "react-icons/io";
import { MdHome, MdExitToApp, MdBook, MdDriveFileRenameOutline, MdBookmarkAdd } from "react-icons/md";
import './visited.css'
const Visited = () => {
const sidebarData = [
  {
    title: 'Home',
    icon: <MdHome/>,
    link: '/dashboard' 
  },
  {
    title: 'Books',
    icon: <MdBook/>,
    link: '/dashboard' 
  },
  {
    title: 'Genres',
    icon: <MdBookmarkAdd/>,
    link: '/dashboard' 
  },
  {
    title: 'Creator',
    icon: <MdDriveFileRenameOutline/>,
    link: '/creator' 
  },
  {
    title: 'Logout',
    icon: <MdExitToApp/>,
    link: '/login' 
  }

  
]

const [isopen, setIsopen] = useState(false)
const toggle = () => {
  setIsopen(!isopen)
}
  
// the function below the return state if retuen is false return hello
  return (
    <div className='sidebarContainer shadow-sm' style={{ width: isopen ? '200px' : '80px'}}>
      <div className='d-flex gap-5 left'>
      <h5 style={{display: isopen ? 'block' : 'none'}}>BookR</h5>
      <div className='bars'>
        <IoMdMenu onClick={toggle} />
      </div>
      </div>
     
         <div className='sidebarlistcont'>
    {sidebarData.map((data, key) => (
         <li className='sidebarlist ' id={window.location.pathname === data.link ? 'active' : ''} key={data.title} onClick={() => window.location.pathname =data.link}>
          <div className='dataIcon'> {data.icon} </div>
           <div style={{display: isopen ? 'block' : 'none'}} >{data.title}</div>
           </li>
     ))}
     </div>
    </div>
    
  )
  
}

export default Visited