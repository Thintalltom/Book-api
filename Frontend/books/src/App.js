import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Books from './Components/Books'
import Genres from './Components/Genres'
import Signup from './Components/Signup';
import Login from './Components/Login'
import Dashboard from './Components/Dashboard';
import Probooks from './Components/listofbooks/Probooks';
import Creator from './Components/Creator';
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

     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
