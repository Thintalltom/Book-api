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
import Visited from './Components/Visited'
import {BookProvider} from './Components/Context/BookContext'
import Bookreview from './Components/Bookreview';
import Navbar from './Components/Body/Navbar';
import Review from './Components/Review';
import './App.css';

function App() {
const slides= () => {
  console.log('hello')
}
const [visited, setVisited] = useState([])
const [copyInfo, setCopyinfo] = useState([])

  return (
    <div>

     <BrowserRouter>
     <BookProvider>
     <Routes> 
       <Route path="/" element={<Books slides={slides} />} /> 
       <Route path="/genre" element={<Genres />} />
       <Route path ='/signup' element={<Signup />}  />
       <Route path ='/login' element={<Login />}  />
       <Route path ='/dashboard' element={<Dashboard copy={copyInfo} setCopy={setCopyinfo} visited={visited} setVisited={setVisited} />}  />
       <Route path ='/probook' element={<Probooks />}  />
       <Route path ='/creator' element={<Creator />}  />
       <Route path ='/update/:id' element={<Update />}  />
       <Route path ='/inform/:id' element={<Genreinform />}  />
       <Route path ='/kid/:id' element={<Kidsinfo />}  />
       <Route path ='/Document/:id' element={<Documentinfo />}  />
       <Route path ='/program/:id' element={<Programinfo  copy={copyInfo} setCopy={setCopyinfo}  visited={visited} setVisited={setVisited} />}  />
       <Route path ='/Docs/:id' element={<Docs visited={visited} setVisited={setVisited} />}  />
       <Route path ='/Visited' element={<Visited visited={visited} setVisited={setVisited} setCopy={setCopyinfo} copy={copyInfo} />}  />
       <Route path ='/bookreview' element={<Bookreview />}  />
       <Route path ='/navbar' element={<Navbar />}  />
       <Route path ='/review' element={<Review />}  />
     </Routes>
     </BookProvider>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
