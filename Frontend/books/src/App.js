import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import Books from './Components/Books'
import Genres from './Components/Genres'
import Signup from './Components/Signup';
import Login from './Components/Login'
import Dashboard from './Components/Dashboard';
import Probooks from './Components/listofbooks/Probooks';
import Creator from './Components/Creator';
import Update from './Components/Update';
import Genreinform from './Components/Bookinfo/Genreinform';
import Kidsinfo from './Components/Bookinfo/Kidsinfo';
import Documentinfo from './Components/Bookinfo/Documentinfo';
import Programinfo from './Components/Bookinfo/Programinfo';
import Docs from './Components/Bookinfo/Docs';
import './App.css';

function App() {
const slides= () => {
  console.log('hello')
}

  return (
    <div>

     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Books slides={slides} />} /> 
       <Route path="/genre" element={<Genres />} />
       <Route path ='/signup' element={<Signup />}  />
       <Route path ='/login' element={<Login />}  />
       <Route path ='/dashboard' element={<Dashboard />}  />
       <Route path ='/probook' element={<Probooks />}  />
       <Route path ='/creator' element={<Creator />}  />
       <Route path ='/update/:id' element={<Update />}  />
       <Route path ='/inform/:id' element={<Genreinform />}  />
       <Route path ='/kid/:id' element={<Kidsinfo />}  />
       <Route path ='/Document/:id' element={<Documentinfo />}  />
       <Route path ='/program/:id' element={<Programinfo />}  />
       <Route path ='/Docs/:id' element={<Docs />}  />
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
