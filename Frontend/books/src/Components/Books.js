import React, {useEffect, useState} from 'react'
import {Container, Box, AppBar, Toolbar, Typography, Tooltip, IconButton, Avatar} from '@mui/material'
import {red} from '@mui/material/colors'
import axios from 'axios'
const Books = () => {
const [bookData, setBookdata] = useState([{}])

    useEffect(() => {
    axios.get('http://localhost:4000/books').then((response) => setBookdata(response.data))
     
  }, [])
  

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <Container maxWidth="sm"  sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
    {bookData.map((books, id) =>  (
      <div  key={books.id}>
      <h1>{books.title}</h1>
      <h1>{books.Author}</h1>
      </div>
    ))}

 
    </Container>
        <Box sx={{bgcolor: red[50], height: '100vh'}}>
        <h1>hekko</h1>
            </Box>
     </>
  )
}

export default Books